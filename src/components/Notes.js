import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/noteContext'
import AddNote from './AddNote'
import Noteitems from './Noteitems'
export default function Notes() {
    const [note, setnote] = useState({ title: '', description: '', tag: '' })
    const ref = useRef(null)
    const Againref = useRef(null)
    const Modal = (note) => {
        // console.log(ref.current)     //Just like DOM targetting we will able to target Element.
        ref.current.click()             //Here we give an event to targetted or referred element
        setnote(note)
    }
    // let {notes,setnotes}=useContext(NoteContext)  //de-structuring of object
    let { notes, setnotes, getallnotes, updatenote,alertEvent } = useContext(NoteContext)  //de-structuring of object
    try {
        useEffect(() => {
            async function fetchData() {
                const newnotes = await getallnotes()
                setnotes(newnotes)
            }
            fetchData();
            // eslint-disable-next-line
        }, []);
    } catch (error) {
        console.log(error.message)
    }
    // const [note, setnote] = useState({ title: '', description: '', tag: 'Default' })
    // let Addingnote = (e) => {
    //     e.preventDefault()
    //     addnote(note.title,note.description,note.tag)
    // }
    let handlechange = (e) => {
        // console.log(note)
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    let updatenotes = (e) => {
        e.preventDefault()
        updatenote(note._id, note.title, note.description, note.tag)
        Againref.current.click()
        alertEvent('Notes changed','success','Success:')
    }
    return (
        <>
            <AddNote />
            <button type="button" style={{display:"none"}} ref={ref} className="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={updatenotes}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                    <input type="text" className="form-control" value={note.title} id="exampleInputEmail1" name='title' aria-describedby="emailHelp" onChange={handlechange} required minLength={3} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                                    <input type="text" className="form-control" value={note.description} id="exampleInputPassword1" name='description' onChange={handlechange} required minLength={8} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
                                    <input type="text" className="form-control" value={note.tag} id="exampleInputPassword1" name='tag' onChange={handlechange} required minLength={3}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Edit Note</button>
                            </form>
                        </div>
                        <div className="modal-footer" style={{display:"none"}}>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={Againref}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-center m-5'>Your Notes</h1>
            <div className='fs-5 text-center'>
                {notes.length===0 ?"No Notes to Display":''}
            </div>
            <div className="row">
                {notes.map((element) => {
                    return <Noteitems note={element} Modal={Modal} key={element._id} />
                })}
            </div>
        </>
    )
}
