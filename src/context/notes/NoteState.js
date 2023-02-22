import NoteContext from "./noteContext";
import { useState } from 'react'
const NoteState = (props) => {
    const s1 = {
        "name": "Abhay",
        "class": 'I m b.tech 2nd year student'
    }
    const [state, setstate] = useState(s1)
    let update = () => {
        setTimeout(() => {
            setstate({
                'name': "Abhishek",
                "class": "I m in Btech pass out"
            })
        }, 2000)
    }
    //This is a boiler plate code
    return (
        //wrap this on any component so that any component in hierarchy level can use it.
        //<NoteContext.Provider value={{state:state,update:update}}> is same as code just below it.
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;