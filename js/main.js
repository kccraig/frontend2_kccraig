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
    