

//Input range
let slider = document.querySelector('#forRange');
let output = document.querySelector('.form__percents');
output.innerHTML = `${slider.value}%`;

slider.oninput = function() {
    output.innerHTML = `${this.value}%`;
} 

