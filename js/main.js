const requestURL = 'js/notes.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
    const notes = jsonObject['mynotes'];
    console.log(notes);
    })
    for (let i = 0; i < 6; i++) {
        for (let i = 0; i < notes.length; i++) {
const dw = notes
           console.log(notes[0]);
        }}

        /*
     var name = document.createTextNode(rentals[i].name);
     */
