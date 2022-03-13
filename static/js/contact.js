console.log('Hello! World')

let submit=document.getElementById('submit')


let input=document.getElementsByClassName('input')
let email=input[0].querySelector('input')
let phone=input[1].querySelector('input')
let enquiry=input[2].querySelector('textarea')

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
   
    if(enquiry.validity.tooLong || enquiry.validity.tooShort)
       {
        console.log(enquiry.value)
        enquiry.setCustomValidity("Inquiry length should be 10 or more characters (currently you're using only "+enquiry.value.length+' charcters')
       }
      else
      enquiry.setCustomValidity("")

})



let Parent_devLabel=document.getElementsByClassName('dev');
let devImage=Parent_devLabel[0].querySelectorAll('a')[0].querySelector('img');
let devLabel=Parent_devLabel[0].querySelectorAll('a')[1];


devImage.addEventListener('mouseover',()=>
{
   devLabel.style.color='#facf0f';

})

devImage.addEventListener('mouseout',()=>
{
   devLabel.style.color='#232121';
   
})




