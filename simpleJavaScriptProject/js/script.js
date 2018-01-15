const button = document.getElementById('btnID');
let number = 5;
console.log(number);
//we will create an event that triggers when we click the button to do the stuff below 
  button.addEventListener('click', function(){
    //holding text from the input box
    let inputText = document.getElementById('boxID').value;
    //grabbing the element
    let myOutput = document.getElementById('output');
    
    myOutput.innerHTML = inputText;
      //we will clear the input text box

  });  