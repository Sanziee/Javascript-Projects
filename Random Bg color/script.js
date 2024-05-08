// generate a random color

const randomColor = function(){
    const hex = '0123456789ADCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let intervalId
const startChagingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000)
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
}
const stopChagingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector('#start').addEventListener
('click',startChagingColor)

document.querySelector('#stop').addEventListener
('click',stopChagingColor)
