function inputclick() {
const text = document.getElementById("input1").value;
document.getElementById('empty').innerHTML =  "\"" +  text + "\"";

}

function numsum() {
    const end = document.getElementById("numbox1").value;
    for (let i = 0; i <= end; i++) {
    

    
    document.getElementById('sumbox').innerHTML = i;

        
    }
    
 
}