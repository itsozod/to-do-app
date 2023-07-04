let myNotes = [];

function Notes(description, noteName) {
    this.description = description;
    this.noteName = noteName;
}

function renderNotes() {
    const notesContainer = document.querySelector('.notes-container');
    notesContainer.innerHTML = '';
  
    myNotes.forEach(function (note) {
      let noteEl = document.createElement('div');
      noteEl.classList.add('notes');
      noteEl.innerHTML = `
        <div class="note-content">
          <div class="desc-container">
            <img src="./images/delete-button.png" alt="delete" class="delete-note">
            <img src="./images/edit-button.png" alt="delete" class="edit-note">
          </div>
          <h2 class="description">${note.description}</h2>
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

      // const description = noteEl.querySelector('.description');
      // const noteName = noteEl.querySelector('.note-name');
      // const editBtn = noteEl.querySelector('.edit-note');

      // editBtn.addEventListener('click', () => {
      //   editNotesText(note, description, noteName, editBtn, `#add-back-btn-${index}`);
      // });
    });
  }

  // function editNotesText(note, description, noteName, editBtn, addBackBtnId) {
  //   const deskContainer = document.querySelector('.desc-container');
  //   const addBackBtn = document.createElement('img');
  //   addBackBtn.src = './images/add-btn.png';
  //   addBackBtn.id = addBackBtnId;
  //   addBackBtn.classList.add('add-back-btn');

  //   editBtn.style.display = 'none';
  //   deskContainer.appendChild(addBackBtn);

  //   const textArea1 = document.createElement('textarea');
  //   textArea1.value = note.description;

  //   description.replaceWith(textArea1);

  //   const textarea2 = document.createElement('textarea');
  //   textarea2.value = note.noteName;
  //   noteName.replaceWith(textarea2);
  // }
  

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