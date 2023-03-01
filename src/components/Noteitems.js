import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'

export default function Noteitems(props) {
    const { alertEvent, deletenote} = useContext(NoteContext)
    const { title, description, tag, _id } = props.note
    return (
        <div className="col-4 my-1">
            <div className="card position-relative">
                {/* It is very important to know how to call multiple function on same event (given below) */}
                <i className="fa-sharp fa-solid fa-trash position-absolute position-absolute top-0 end-0 mx-2 mt-3" onClick={() => {
                    deletenote(_id)
                    
                }}></i>
                <i className="fa-solid fa-pen-to-square position-absolute position-absolute top-0 end-0 mx-5 mt-3" onClick={() => {
                    alertEvent('Editing','primary','Progress')
                    props.Modal(props.note)
                }}></i>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p>{tag}</p>
                </div>
            </div>
        </div>
    )
}
