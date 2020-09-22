const requestURL = 'js/notes.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const notes = jsonObject['mynotes'];
        console.log(notes);
        

        for (let i = 0; i < notes.length; i++) {
            let list = document.createElement('ol');
            let nameofbook = document.createElement('h2');
            let note1 = document.createElement('li');
            nameofbook.textContent = notes[i].bookname;
            note1.textContent = notes[i].note1;
            list.appendChild(nameofbook);
            list.appendChild(note1);

            
            document.querySelector('section#listone').appendChild(list);
        


        }
    })
