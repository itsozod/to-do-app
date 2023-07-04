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
        <textarea class="description">${note.description}</textarea>
        <textarea class="note-name">${note.noteName}</textarea>
        `;
        notesContainer.appendChild(noteEl);
    });
}

function addNotes() {
    let description = document.querySelector('#note').value;
    let noteName = document.querySelector('#noteName').value;

    if (description, noteName) {
        let newNote = new Notes(description, noteName);
        myNotes.push(newNote);
        renderNotes();
    }
};

export { addNotes };