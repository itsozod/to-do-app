let myNotes = [];

function Notes(description, noteName) {
    this.description = description;
    this.noteName = noteName;
}

function renderNotes() {
    const notesContainer = document.querySelector('.notes-container');
    notesContainer.innerHTML = '';
  
    myNotes.forEach(note => {
      let noteEl = document.createElement('div');
      noteEl.classList.add('notes');
      noteEl.innerHTML = `
        <div class="note-content">
          <div class="desc-container">
            <img src="./images/delete-button.png" alt="delete" class="delete-note">
            <img src="./images/edit-button.png" alt="delete" class="edit-note">
          </div>
          <textarea class="description">${note.description}</textarea>
          <textarea class="note-name">${note.noteName}</textarea>
        </div>
      `;
      notesContainer.appendChild(noteEl);

      const deleteNote = noteEl.querySelector('.delete-note');

      deleteNote.addEventListener('click', () => {
        const index = myNotes.indexOf(note);
        myNotes.splice(index, 1);
        renderNotes();
        setTimeout(() => {
            alert('Your note has been deleted');
        }, 500);
        console.log('Your note has been deleted');
      });
    });
  }
  

function addNotes() {
    let description = document.querySelector('#note').value;
    let noteName = document.querySelector('#noteName').value;

    if (description, noteName) {
        let newNote = new Notes(description, noteName);
        myNotes.push(newNote);
        renderNotes();
        setTimeout(() => {
            alert('Your note has been added');
        }, 500);
        console.log('Your note has been added');
    }
};

export { addNotes };