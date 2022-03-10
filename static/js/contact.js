console.log('Hello! World')

let submit=document.getElementById('submit')


let input=document.getElementsByClassName('input')
let email=input[0].querySelector('input')
let phone=input[1].querySelector('input')

submit.addEventListener('click',()=>
{console.log('submit clicked!')
    if(email.value=='')
      email.setCustomValidity('Entering an email-id is necessary!')
      else if (email.validity.patternMismatch) {
        email.setCustomValidity('Please enter an email address which is valid!');
    } 
    if(phone.value=='')
    phone.setCustomValidity('Entering an phone number is necessary!')
    else if(phone.validity.patternMismatch)
    phone.setCustomValidity('Please enter an phone number which is valid!');
      
})