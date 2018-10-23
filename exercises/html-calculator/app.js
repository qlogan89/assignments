var addition= document.addition
var subcation= document.subcation


document.addition.addEventListener('submit',function(event){
    event.preventDefault()
    var number1 = document.addition.number1.value
    var number2 = document.addition.number2.value 
    var sum =Number(number1)+ Number(number2)
    alert(sum)
})

document.subcation.addEventListener('submit',function(event){
    event.preventDefault()
    var number1 = document.subcation.number1.value
    var number2 = document.number2.value 
    var sum =Number(number1)+ Number(number2)
    alert(sum)
})