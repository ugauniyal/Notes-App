import React, { useState } from 'react';

export const NoteAdd = (props) => {
    let myStyle = {
        marginLeft: "6%",
    }

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        // else if ({props.myNote.title}.includes(title))
        // {
        //     alert("Title Cannot Be Repeated");
        // }
        else
        {
            props.addNote(title,desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div style={myStyle}>
            <form onSubmit={submit}>
                <label className="form-label" htmlFor='title'>Title</label>
                <input className="form-control" type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter the Title for Notes" autoComplete="off"/>
                <br />
                <label className="form-label" htmlFor='Note'>Note</label>
                <input type='text' className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Enter the Note"/>
                <br />
                <br />
                <input className="btn btn-outline-primary" value="Submit" type='submit'/>
            </form>
        </div>
    )
}
