function getInput(event){

      let outputTag = document.getElementById('output')
      let name = document.getElementById('name').value
      let date=document.getElementById( 'date').value
      let myBirthday = new Date(date).toDateString()
      let day = myBirthday.split(' ')[0]
      let gender = document.getElementById('gender').value
      let message = `Here goes your details, date ${myBirthday} and this is you ${gender}`
       let akraname;
      let malename = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
      let femalename= ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
console.log(name , day, gender);
      if (gender === 'male' && day === 'Sun') {
         akraname = malename[0]
      } if (gender === 'male' && day === 'Mon') {
         alert(malename[1])
      } if (gender === 'male' && day === 'Tue') {
         alert(malename[2])
      } if (gender === 'male' && day === 'Wed') {
         alert(malename[3])
      } if (gender === 'male' && day === 'Thur') {
         alert(malename[4])
      } if (gender === 'male' && day === 'Fri') {
         alert(malename[5])
      } if (gender === 'male' && day === 'Sat') {
         alert(malename[6])
      } if (gender === 'female' && day === 'Sun') {
         alert(femalename[0])
      } if (gender === 'female' && day === 'Mon'){
         alert(femalename[1])
      }if (gender === 'female' && day === 'Tue'){
         alert(femalename[2])
      }if (gender === 'female' && day === 'Wed'){
         alert(femalename[3])
      }if(gender === 'female' && day === 'Thur'){
         alert(femalename[4])
      }if (gender === 'female' && day === 'Fri'){
         alert(femalename[5])
      }if (gender === 'female' && day === 'Sat'){
         alert(femalename[6])
      }
      let result = `Here is your Akra name ${akraname}`
      let solution = document.getElementById('solution')
      solution.innerHTML = `${akraname}`
   }