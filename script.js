let string = "";
let buttons = document.querySelectorAll('button');
let inputbox = document.querySelector('input');

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
    if(e.target.innerHTML == '='){
       string = eval(string);
       inputbox.value = string;
    }
    else if(e.target.innerHTML == 'AC'){
     string = "";
     inputbox.value = string;
    }
    else if(e.target.innerHTML == 'DEL'){
        string = string.substring(0 , string.length-1);
        inputbox.value = string;
       }
    else if(e.target.innerHTML == '%'){
         string = eval(string) / 100; 
         inputbox.value = string;
       }
    else{
    string = string + e.target.innerHTML; 
    inputbox.value = string;
}
    })
});

