const input = box.elements.searchInput;

input.addEventListener('focus', () => console.log('focused'), false);
input.addEventListener('blur', () => console.log('blurred'), false);
input.addEventListener('change', () => console.log('changed'), false);

const entered = document.forms['box'];
box.addEventListener ('submit', search, false);
function search() {
    alert(' Form Submitted');
}
function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}
input.value = 'Search Here';
u=input.addEventListener('focus', function() {
    if (input.value=== 'Search Here') {
        input.value = ''
    }
}, false);
input.addEventListener('blur', function() {
    if(input.value === '') {
        input.value = 'Search Here';
    
    }
}, false);