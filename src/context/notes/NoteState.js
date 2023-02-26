import NoteContext from "./noteContext";
import { useState } from "react"
const NoteState = (props) => {
  const [Alert, setAlert] = useState(false)
  const [message, setmessage] = useState('')
  let alertEvent = (message) => {
    setmessage(message)
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 2000);
    return message
  }
  //http://localhost:5000/api/notes/fetchallnotes
  //GET all notes
  const host = 'http://localhost:5000/api/notes/'
  let getallnotes = async () => {
    const url = `${host}fetchallnotes`;
    const headers = {
      'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjBkNjE2MzI2MmI1NzQxMTJiNGRhMiIsImlhdCI6MTY3Njg4MjgyNX0.Ln0PeN_0kR9Q24Rx0tAWn5EBB_-Tlfb0hvGdJw4RviI'
    };
    try {
      const response = await fetch(url, { headers })
      const savednote = await response.json()
      return savednote
    } catch (error) {
      console.log(error.message)
    }
  }
  const initial_notes = []
  const [notes, setnotes] = useState(initial_notes)


  //ADD note
  let addnote = async (title, description, tag) => {
    // const note = {
    //   "_id": "63f60952b56c49fb35c05f70",
    //   "user": "63f0d6163262b574112b4da2",
    //   "title": title,                    //isko comment out isliye kar diya kyuki meyne direct saved notes(addnote) ke response ko  setnotes(notes.concate([savednote]))  kar diya hai (codes dekho)
    //   "description": description,
    //   "tag": tag,
    //   "date": "Wed Feb 22 2023 16:38:21 GMT+0530 (India Standard Time)",
    //   "__v": 0
    // }
    //TODO Api calls
    try {
      const response = await fetch(`${host}creatingnotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjBkNjE2MzI2MmI1NzQxMTJiNGRhMiIsImlhdCI6MTY3Njg4MjgyNX0.Ln0PeN_0kR9Q24Rx0tAWn5EBB_-Tlfb0hvGdJw4RviI'
        },
        body: JSON.stringify({
          title,
          description,
          tag,
        })
      })
      const savednote = await response.json()
      setnotes(notes.concat([savednote]))
    } catch (error) {
      console.log(error.message)
    }
  }
  //UPDATE note
  let updatenote = async (title, description, tag, id) => {
    //localhost:5000/api/notes/updatingnotes/63f33b07900a0a74b0462a28(reference ke liye likha hai bas)
    try {
      const response = await fetch(`${host}updatingnotes/${id}`, {
        method: "PUT",
        headers: {
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjBkNjE2MzI2MmI1NzQxMTJiNGRhMiIsImlhdCI6MTY3Njg4MjgyNX0.Ln0PeN_0kR9Q24Rx0tAWn5EBB_-Tlfb0hvGdJw4RviI',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          description,
          tag
        })

      })
      const updatenote = await response.json()
      console.log(updatenote)       //we will use it
      //Logic to update(Edit) note on a Client side
      for (let i in notes) {
        if (notes[i]._id === id) {
          i.title = title
          i.description = description
          i.tag = tag
        }
      }
    }
    catch (error) {
      console.log(error.message)
    }
  }
  //DELETE note
  let deletenote = async (id) => {
    //Todo API call
    // localhost:5000/api/notes/deletingnotes/63f3342d3408be3321aec848(reference ke liya hai bas)
    const url = `${host}/deletingnotes/${id}`;
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjBkNjE2MzI2MmI1NzQxMTJiNGRhMiIsImlhdCI6MTY3Njg4MjgyNX0.Ln0PeN_0kR9Q24Rx0tAWn5EBB_-Tlfb0hvGdJw4RviI',
        'Content-Type': 'application/json'
      },
    };
    await fetch(url, requestOptions)
    // let deletednote= await fetch(url, requestOptions)
    //     deletednote= await deletednote.json()
    //     console.log(deletednote.deletednote)     //we don't need to get which note is deleted ,that's why it is commented out.
    setnotes(notes.filter((note) => note._id !== id))
    console.log('Notes deleted having ' + id)

  }





  //This is a boiler plate code
  return (
    //wrap this on any component so that any component in hierarchy level can use it.
    //<NoteContext.Provider value={{state:state,update:update}}> is same as code just below it.
    // <NoteContext.Provider value={{state,update}}>
    //update,state (function ,variable) was removed.
    <NoteContext.Provider value={{ notes, setnotes, Alert, setAlert, alertEvent, addnote, updatenote, deletenote, message, getallnotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;