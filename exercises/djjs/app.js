document.addEventListener('mouseover',function(){
    document.getElementById('box').style.backgroundColor = 'blue'
})

document.addEventListener('mousedown',function(){
    document.getElementById('box').style.backgroundColor = 'red'
})

document.addEventListener('mouseup',function(){
    document.getElementById('box').style.backgroundColor = 'yellow'
})

document.addEventListener('dblclick',function(){
    document.getElementById('box').style.backgroundColor = 'green'
})

window.addEventListener('scroll',function(){
    document.getElementById('box').style.backgroundColor = 'orange'
})

