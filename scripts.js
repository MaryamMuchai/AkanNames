let outputTag = document.getElementById('output')
let name = document.getElementById(;name).value

let myBirthday = new Date(date).toDateString()
let day = myBirthday.split()
let name = document.getElementById('name').value
let gender = document.getElementById('gender').value
let message = "Here goes your details, date ${date} and this is you ${gender}"

let malename = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
let femalename = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
if (gender==='male' && day === 'Sun'){
   akaname = malename[0]
}elseif (gender ==='male' && day ==='Sun'){
   akaname = malename[0]
}elseif(gender ==='male' && day ==='Mon'){
   alert(malename[1])
}elseif(gender ==='male'&& day ==='Tue'){
   alert(malename[2])
}elseif (gender ==='male' && day ==='Wed'){
   alert(malename[3])
}elseif (gender ===='male' && day ==='Thur'){
   alert(malename[4])
}elseif (gender ==='male' && day ==='Fri'){
   alert(malename[5])
}elseif (gender ==='male' && day ==='Sat'){
   alert(malename[6])
}elseif (gender ==='female' && day ==='Sun'){
   alert(femalename[0])
} elseif (gender ==='female' && day ==='Mon'){
      alert(femalename[1])
}elseif (gender ==='female' && day ==='Tue'){
   alert(femalename[2])
   }elseif (gender ==='female' && day ==='Wed'){
      alert(femalename[3])
   }elseif (gender ==='female' && day ==='Thur'){
      alert(femalename[4])
   }elseif (gender ==='female' &&day ==='Fri'){
      alert(femalename[5])
   }elseif (gender ==='female' && day ==='Sat'){
      alert(femalename[6])
   }