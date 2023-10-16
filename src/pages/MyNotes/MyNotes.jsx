// import { checkToken } from '../../utilities/users-service';
import NewNote from "../NewNote/NewNote.jsx";
import { useState } from 'react'

export default function MyNotes({ notes, addNote }) {
  // async function handleCheckToken() {
  //   const expDate = await checkToken();
  //   console.log(expDate);
  // }



  const [note, setNote] = useState('')

  function handleAddNote(evt) {
    evt.preventDefault();
    addNote(note);
    setNote('')
  }
  
  return (
    <>
      <h1>All My Notes</h1>
      {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
      <form onSubmit={handleAddNote}>
        <input
          value={note}
          onChange={(evt) => setNote(evt.target.value)}
          placeholder="To-Do"
          required
          pattern=".{4,}"
        />
        <button type="submit">ADD NOTE</button>
        </form>
        <br />
        <br />
      <hr />
      <br />
      <p> 
         No Notes Yet!
      </p>
      <ul className={"NoteList"}>
        {addNote}
      </ul>
    {/* <button type="submit">Add New Note</button> */}
    </>
  );
}