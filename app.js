const formLink = document.querySelector('.form-link');
const cancelBtn = document.querySelector('#iconify');
const modal = document.querySelector('.pop-content');


formLink.addEventListener('click', function(){
    modal.classList.add('show-content');
    
});

cancelBtn.addEventListener('click',function(){
    modal.classList.remove('show-content');
});


/* I WAS TRYING SOME DUMB STUFF LOL */

// formLinks.forEach(function(link){
//     link.addEventListener('click', function(e){
//         if(e){
//             modal.classList.add('show-content');
//         }else{
//             modal.classList.remove('show-content');
//         }
//     })
// })