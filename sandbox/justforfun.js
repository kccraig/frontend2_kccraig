
const goingon = document.getElementById('happs').innerHTML;

goingon.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('btn').click();
        console.log('hi');
    }



});
