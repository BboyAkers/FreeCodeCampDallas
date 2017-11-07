const myHelloWorld = document.getElementById('helloWorld');
const myOuterDiv = document.getElementById('outerDiv');

myOuterDiv.addEventListener('click', function(){
    if(window.innerWidth < 1000){
        console.log('we in dis homie');
    }
});


// console.log(window());




