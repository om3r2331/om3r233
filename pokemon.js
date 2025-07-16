
 
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

 if(age<100) {

     document.body.innerText = 'you are not old enough'
 }
 while (age < 22) {
     age= age+1
 }  
//  if(21<age) {
//  document.body.innerHTML = body
//  } 
})
  