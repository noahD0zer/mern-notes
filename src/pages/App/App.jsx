import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNote from '../NewNote/NewNote';
import MyNotes from '../MyNotes/MyNotes';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState()
  // const [showNotes, setShowNotes] = useState(true);

  function addNote(note) {
    // Replace state, don't mutate it
    setNotes([...note]);
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/notes/new" element={<NewNote />} />
              <Route path="/notes" element={<MyNotes addNote={addNote} 
              // {new Date(note.timestamps).toLocaleDateString()}
               />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
