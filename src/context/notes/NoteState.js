import NoteContext from "./noteContext";
import {useState} from "react"
const NoteState = (props) => {
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
        }
      ]
      const [notes, setnotes] = useState(initial_notes)

    //This is a boiler plate code
    return (
        //wrap this on any component so that any component in hierarchy level can use it.
        //<NoteContext.Provider value={{state:state,update:update}}> is same as code just below it.
        // <NoteContext.Provider value={{state,update}}>
        //update,state (function ,variable) was removed.

        <NoteContext.Provider value={{notes,setnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;