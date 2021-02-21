let outputTag = document.getElementById ('output')
let name = document.getElementById('name').nodeValue
let message = "WELCOME"
function getName(event) {
    event.preventDefault()
    outputTag.innerHTML = message
    name=document.getElementById('name').nodeValue
    console.log(name);
}