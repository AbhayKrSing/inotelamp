
import React ,{useContext,useEffect} from 'react'
import NoteContext from '../context/notes/noteContext'
export default function About() {
  const a=useContext(NoteContext)
  useEffect(() => {
    a.update()
    //eslint-disable-next-line
  }, [])
  
  return (
   <>
   <div>
    <h1 className='text-center'>I m {a.state.name} and I m in {a.state.class} class</h1>
   </div>
   </>
  )
}