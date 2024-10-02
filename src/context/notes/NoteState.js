import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const s1 = {
        "name": "Jai",
        "class": "9a"
    }
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Vishal",
                "class": "7b"
            })
        }, 3000);
    }

    return (
        <NoteContext.Provider value={{ state: state, update: update }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;