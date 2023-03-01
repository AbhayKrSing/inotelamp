import React,{useContext} from 'react'
import NoteContext from '../context/notes/noteContext'

export default function Alert() {
    const {Alert,message}=useContext(NoteContext)

    return (
        <> <div style={{height:'30px'}}>
           {Alert && <div className={`alert alert-${message.Class}`} role="alert">
              <strong>{message.action} :</strong> {message.message}
            </div>}
            </div>
        </>
    )
}
