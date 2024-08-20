
const minus_btn = document.querySelector('.minus-btn')
const plus_btn = document.querySelector('.plus-btn')
const counterbtn = document.querySelector('.counter')
const inputchange = document.querySelector('.inputchange')
const resetbtn = document.querySelector('.resetbtn')



// plus_btn incrage value 
plus_btn.addEventListener('click', ()=>{
    const countvalue = parseInt(counterbtn.innerText)
    const inputchangevalue = parseInt(inputchange.value)
    counterbtn.innerText = countvalue + inputchangevalue
    

})
// minusbtn incrage value 

minus_btn.addEventListener('click', ()=>{
    const countvalue = parseInt(counterbtn.innerText)
    const inputchangevalue = parseInt(inputchange.value)
    counterbtn.innerText = countvalue - inputchangevalue


})
resetbtn.addEventListener('click', ()=>{

    counterbtn.innerText =0

})