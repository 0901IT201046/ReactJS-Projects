import React, { useState } from 'react';
import CreateArea from './Components/CreateArea';
import Header from './Components/Header';
import Note from './Components/Note';
import Count from './Components/Count';
import Footer from './Components/Footer';

const App = () => {
  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(preValue =>{
      return [...preValue, newNote];
    });
  }

  function deleteNotes(id){
    setNotes(preValue =>{
      return [...preValue.filter((note,index) =>
        index !== id)]
    })
  }

  return (
    <div className='App'>
      <Header />
      <Count count={notes.length === 0? "Empty":`Showing ${notes.length} Notes in the Database`}/>
      <CreateArea onAdd={addNote}/>
      {notes.map((note,index)=>(
        <Note 
          key={index} 
          id={index} 
          title={note.title} 
          content={note.content} 
          onDelete={deleteNotes}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;