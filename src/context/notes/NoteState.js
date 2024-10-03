import React, { useState } from "react";
import NoteContext from "./NoteContext"


const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "66f9ab4f47ef113b9f244cba2",
            "user": "66f985191441680f9ad24df1",
            "title": "My Title 1  ",
            "description": "Please wake me up ",
            "tag": "Urgent",
            "date": "2024-09-29T19:32:31.306Z",
            "__v": 0
        },
        {
            "_id": "66feb43cd0bd35a6cc47642f1",
            "user": "66f985191441680f9ad24df1",
            "title": "My Note  ",
            "description": "Make more projects have fun ",
            "tag": "Super Urgent",
            "date": "2024-10-03T15:11:56.260Z",
            "__v": 0
        },
        {
            "_id": "66feb44bd0bd5a6cc473642f3",
            "user": "66f985191441680f9ad24df1",
            "title": "My Note 2  ",
            "description": "Make more projects have fun 2 ",
            "tag": "Super Urgent",
            "date": "2024-10-03T15:12:11.539Z",
            "__v": 0
        },
        {
            "_id": "66f91ab4f47ef113b9f44cba2",
            "user": "66f985191441680f9ad24df1",
            "title": "My Title 1  ",
            "description": "Please wake me up ",
            "tag": "Urgent",
            "date": "2024-09-29T19:32:31.306Z",
            "__v": 0
        },
        {
            "_id": "66feb43cd0bd5a6cc476424f1",
            "user": "66f985191441680f9ad24df1",
            "title": "My Note  ",
            "description": "Make more projects have fun ",
            "tag": "Super Urgent",
            "date": "2024-10-03T15:11:56.260Z",
            "__v": 0
        },
        {
            "_id": "66feb44b1d0bd5a6cc47642f3",
            "user": "66f985191441680f9ad24df1",
            "title": "My Note 2  ",
            "description": "Make more projects have fun 2 ",
            "tag": "Super Urgent",
            "date": "2024-10-03T15:12:11.539Z",
            "__v": 0
        },
        {
            "_id": "66f9ab4f47ef113b49f44cba2",
            "user": "66f985191441680f9ad24df1",
            "title": "My Title 1  ",
            "description": "Please wake me up ",
            "tag": "Urgent",
            "date": "2024-09-29T19:32:31.306Z",
            "__v": 0
        },
        {
            "_id": "66feb43cd0b3d5a6cc47642f1",
            "user": "66f985191441680f9ad24df1",
            "title": "My Note  ",
            "description": "Make more projects have fun ",
            "tag": "Super Urgent",
            "date": "2024-10-03T15:11:56.260Z",
            "__v": 0
        },
        {
            "_id": "66feb44bd0bd5a6cc457642f3",
            "user": "66f985191441680f9ad24df1",
            "title": "My Note 2  ",
            "description": "Make more projects have fun 2 ",
            "tag": "Super Urgent",
            "date": "2024-10-03T15:12:11.539Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)


    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;