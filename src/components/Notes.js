import React,{useContext} from 'react'
import NoteContext from '../context/notes/noteContext'
import AddNote from './AddNote'
import Noteitems from './Noteitems'
export default function Notes() {
    // let {notes,setnotes}=useContext(NoteContext)  //de-structuring of object
    let {notes}=useContext(NoteContext)  //de-structuring of object
    return (
       <>
       <AddNote/> 
        <h1 className='text-center m-5'>Your Notes</h1>
        <div className="row">
        {notes.map((element) => {
            return <Noteitems note={element} key={element._id}/>
        })}
        </div>
    </>
    )
}
