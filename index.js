const visible = document.querySelector('.visible')
const circle = document.querySelector('.bi-info-circle-fill')



// отметки достижений
let check = document.querySelectorAll('.bi-check-circle-fill');
check.forEach(item => item.addEventListener('click', function(){
     item.style.color = '#47C293'
  })
);







// всплывающий туллтип
circle.addEventListener("mouseover", () => {
     visible.style.display ='flex'
    // console.log ('Наведено')
})
circle.addEventListener("mouseout", () => {
    visible.style.display ='none'
//    console.log ('Убрано')
})


