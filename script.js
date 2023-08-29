let addNote = document.getElementById('add-btn');
let list = document.getElementById('list');

addNote.addEventListener('click', add);

// Add new notes
function add(e) {
  e.preventDefault();

  let newNote = document.getElementById('add-input');

  if (newNote.value.trim() == '') {
    console.log('No note');
  } else {
    let li = document.createElement('li'),
      note = document.createElement('p'),
      options = document.createElement('p'),
      input = document.createElement('input'),
      editNote = document.createElement('i'),
      deleteNote = document.createElement('i');

    editNote.className = 'fa fa-pencil-square-o';
    deleteNote.className = 'fa fa-times';
    input.className = 'edit-note';

    input.setAttribute('type', 'text');
    options.append(editNote, deleteNote);
    li.append(note, options, input);

    note.textContent = newNote.value;

    list.appendChild(li);
    newNote.value = '';
  }
}

// Edit and delete notes
function editNote() {}

list.addEventListener('click', function (e) {
  if (e.target.classList[1] === 'fa-pencil-square-o') {
    let parEl = e.target.parentElement;

    parEl.style.display = 'none';

    let input = parEl.nextElementSibling;
    let note = parEl.previousElementSibling;
    input.style.display = 'block';
    input.value = note.textContent;

    input.addEventListener('keypress', function (e) {
      if (e.keyCode === 13) {
        if (input.value.trim() === '') {
          let li = input.parentElement;
          li.parentElement.removeChild(li);
        } else {
          note.textContent = input.value;
          input.style.display = 'none';
          parEl.style.display = 'block';
        }
      } else {
        note.textContent = input.value;
      }
    });
  }

  if (e.target.classList[1] === 'fa-times') {
    let parEl = e.target.parentElement.parentElement;
    parEl.parentElement.removeChild(parEl);
  }
});

// Hide notes
let hideNotes = document.getElementById('hide');

hideNotes.addEventListener('click', function () {
  let label = document.querySelector('label');

  if (hideNotes.checked) {
    label.textContent = 'Unhide notes';
    list.style.display = 'none';
  } else {
    label.textContent = 'Hide notes';
    list.style.display = 'block';
  }
});

// Search filter
let searchInput = document.querySelector('#search-note input')

searchInput.addEventListener('keydown', function (e) {
  let searchChar = e.target.value.toUpperCase()

  let notes = list.getElementsByTagName('li')

  Array.from(notes).forEach(function (note) {
    let parText = note.firstElementChild.textContent
    if (parText.toUpperCase().indexOf(searchChar) !== -1 || searchChar.trim() === '') {
      note.style.display = 'block';
    } else {
      note.style.display = 'none';
    }
    
    })
  
  })
