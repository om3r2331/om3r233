
//  if(21<age) {
//  document.body.innerHTML = body
//  } 
 
// for(let i = 0; i < age; i= i + 1){
//     console.log(i);
// }
// console.log(age)
// let i = 0;
// while(i< age){
//     console.log(i);
//     i = i + 1
// }


document.querySelector('.age-verify').addEventListener('click', function () {
    let age = parseInt(document.querySelector('.age').value);

 let body = document.body.innerHTML
 console.log(age)

 if(age<33) {

     document.body.innerText = 'you are not old enough'
 }
 while (age < 22) {
     age= age+1
 }
 if (age >= 18) {
    document.querySelector('.verify').style.display = 'block';
 }  else {
    document.querySelector('too-old').style.display = 'block';
 }
})

  