const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );

addEventListener('click', (event) => {
    if (event.shiftKey) {
        console.log('A Shifty Click!');
    }
});

addEventListener('touchend', () => console.log('Touch stopped'));

document.nodeName;
