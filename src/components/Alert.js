import React,{useContext} from 'react'
import NoteContext from '../context/notes/noteContext'

export default function Alert() {
    const {Alert}=useContext(NoteContext)

    return (
        <> <div style={{height:'30px'}}>
           {Alert && <div className="alert alert-primary" role="alert">
                Just an Alert !!!
            </div>}
            </div>
        </>
    )
}
