// js/index.js

document.addEventListener('DOMContentLoaded', (event) => {
  const addNoteBtn = document.querySelector('.add-note');
  const clearNotesBtn = document.querySelector('.clear-notes');
  const listGroup = document.getElementById('list-group');
  const noteTitle = document.querySelector('.note-title');
  const noteText = document.querySelector('.note-textarea');
  const clearFormBtn = document.querySelector('.clear-btn');

  addNoteBtn.addEventListener('click', () => {
    const title = noteTitle.value.trim();
    const text = noteText.value.trim();
    if (title && text) {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.innerHTML = `<h5>${title}</h5><p>${text}</p>`;
      listGroup.appendChild(listItem);
      noteTitle.value = '';
      noteText.value = '';
    } else {
      alert('Please enter both title and text for the note.');
    }
  });

  clearNotesBtn.addEventListener('click', () => {
    listGroup.innerHTML = '';
  });

  clearFormBtn.addEventListener('click', () => {
    noteTitle.value = '';
    noteText.value = '';
  });
});
