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
            let item = document.createElement('li');
            item.textContent = notes[i].bookname;
            list.appendChild(item);

            
            document.querySelector('section#listone').appendChild(list);
        


        }
    })
