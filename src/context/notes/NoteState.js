import NoteContext from "./noteContext";
import { useState } from "react"
const NoteState = (props) => {
  const [Alert, setAlert] = useState(false)

  let alertEvent = () => {
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 2000);
  }
  const initial_notes = [
    {
      "_id": "63f334063408be3321aec845",
      "user": "63f0d6163262b574112b4da2",
      "title": "Introduction to eye",
      "description": "Hello i m like horse men",
      "tag": "Personal",
      "date": "Mon Feb 20 2023 14:12:50 GMT+0530 (India Standard Time)",
      "__v": 0
    },
    {
      "_id": "63f3342f3408be3321aec84a",
      "user": "63f0d6163262b574112b4da2",
      "title": "full stack webdevloper",
      "description": "Hello i m ready to learn anything",
      "tag": "Personal",
      "date": "Mon Feb 20 2023 14:12:50 GMT+0530 (India Standard Time)",
      "__v": 0
    },
    {
      "_id": "63f3342f3408be3321aec84c",
      "user": "63f0d6163262b574112b4da2",
      "title": "full stack webdevloper",
      "description": "Hello i m ready to learn anything",
      "tag": "Personal",
      "date": "Mon Feb 20 2023 14:12:50 GMT+0530 (India Standard Time)",
      "__v": 0
    },
    {
      "_id": "63f33b07900a0a74b0462a28",
      "user": "63f0d6163262b574112b4da2",
      "title": "Introduction to eye",
      "description": "Hello i m ready updated updated",
      "tag": "Personal",
      "date": "Mon Feb 20 2023 14:48:42 GMT+0530 (India Standard Time)",
      "__v": 0
    },
    {
      "_id": "63f5f4c4d5fffb41a3375e97",
      "user": "63f0d6163262b574112b4da2",
      "title": "full stack webdevloper",
      "description": "Hello I m ready to fight",
      "tag": "Personal",
      "date": "Wed Feb 22 2023 16:25:02 GMT+0530 (India Standard Time)",
      "__v": 0
    },
    {
      "_id": "63f60952b56c49fb35c05f70",
      "user": "63f0d6163262b574112b4da2",
      "title": "full stack webdevloper",
      "description": "Lets play shadow fight",
      "tag": "Personal",
      "date": "Wed Feb 22 2023 16:38:21 GMT+0530 (India Standard Time)",
      "__v": 0
    }
  ]
  const [notes, setnotes] = useState(initial_notes)
  //ADD note
   let addnote=(title,description,tag)=>{
    const note={
      "_id": "63f60952b56c49fb35c05f70",
      "user": "63f0d6163262b574112b4da2",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "Wed Feb 22 2023 16:38:21 GMT+0530 (India Standard Time)",
      "__v": 0
    }
    //TODO Api calls
    setnotes(notes.concat([note]))
   }
  //UPDATE note
  let updatenote=()=>{

  }
  //DELETE note
  let deletenote=()=>{

  }





  //This is a boiler plate code
  return (
    //wrap this on any component so that any component in hierarchy level can use it.
    //<NoteContext.Provider value={{state:state,update:update}}> is same as code just below it.
    // <NoteContext.Provider value={{state,update}}>
    //update,state (function ,variable) was removed.

    <NoteContext.Provider value={{ notes, setnotes, Alert, setAlert ,alertEvent,addnote,updatenote,deletenote}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;