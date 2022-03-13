console.log("hello! world");
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
