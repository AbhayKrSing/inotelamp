import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext'

export default function AddNote() {
    const {addnote} = useContext(NoteContext)
    // const [title, settitle] = useState('')
    // const [description, setdescription] = useState('')
    // const [tag, settag] = useState('')
    const [note, setnote] = useState({ title: '', description: '', tag: 'Default' })

    let handlechange = (e) => {
        //Important syntax in formis [e.target.name]: e.target.value
        setnote({...note, [e.target.name]: e.target.value })  //It means jo change nhi ho rha use chod do baaki jo change horha use change kardo  (is process mey e.target.value bhi change hojati hai)
    }
    let Addingnote = (e) => {
        e.preventDefault()
        addnote(note.title,note.description,note.tag)
    }
    return (<>
        <h1 className="text-center mt-4" >Add Notes</h1>
        <form method='post'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                <input type="text" className="form-control" id="exampleInputEmail1" name='title' aria-describedby="emailHelp" onChange={handlechange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                <input type="text" className="form-control" id="exampleInputPassword1" name='description' onChange={handlechange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
                <input type="text" className="form-control" id="exampleInputPassword1" name='tag' onChange={handlechange} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={Addingnote}>Submit</button>
        </form>
    </>
    )
}
