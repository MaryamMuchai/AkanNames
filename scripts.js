let outputTag = document.getElementById('output')
let name = document.getElementById(;name).value

let myBirthday = new Date(date).toDateString()
let day = myBirthday.split()
let name = document.getElementById('name').value
let gender = document.getElementById('gender').value
let message = "Here goes your details, date ${date} and this is you ${gender}"

let malenames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
let femalenames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
if (gender==='male && day ==='Sun'){
   akaname = malenames[0]
}else if (gender ==='male' $$ day ==='')