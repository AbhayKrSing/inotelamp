import React from 'react'
import {useContext} from 'react'
import NoteContext from '../context/notes/noteContext'
export default function Home() {
  const a=useContext(NoteContext)
  return (
   <>
   <div>
    <h1 className='text-center'>I m {a.state.name}</h1>
   </div>
   </>
  )
}
