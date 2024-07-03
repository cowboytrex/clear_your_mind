async function getNotes() {
  try {
    const response = await fetch('http://192.168.43.12:8080/api/notes');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const notes = await response.json();
    const notesList = document.getElementById('notes');
    notesList.innerHTML = '';
    notes.forEach(note => {
      const listItem = document.createElement('li');
      listItem.textContent = note.title;
      notesList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Failed to fetch notes:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  getNotes();
});
