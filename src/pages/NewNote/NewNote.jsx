import { useState } from 'react'

export default function NewNote({ addNote }) {
    const [note, setNote] = useState('')

    function handleAddNote(evt) {
      evt.preventDefault();
      addNote(note);
      setNote('')
    }
    
    return(
        <div>
        <h1>Add New Note</h1>

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

        </div>
    )
}