const counterValue = document.getElementById('counter');

const increment = () => {
    //get the value from UI
     let value = parseInt(counterValue.innerText);
     //update the value 
     value = value +1;
     //set the value onto ui
     counterValue.innerText = value;
};


const decrement = () => {
    //get the value from UI
    let value = parseInt(counterValue.innerText);
    //update the value 
    value = value -1;
    //set the value onto ui
    counterValue.innerText = value;
};