// document.getElementById('convert').onclick = tempconvert
// document.getElementById('clear').onclick = clearform

// function tempconvert() {}

    let celcius = document.getElementById('celcius')
let fahrenheit = document.getElementById('fahrenheit')

celcius.oninput = () => {
    let output = (parseFloat(celcius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(output.toFixed(2))
};

fahrenheit.oninput = () => {
    let output = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celcius.value = parseFloat(output.toFixed(2))
};


// {
//     var fahrenheit = document.getElementById("fahrenheit").value;
//     var celcius = documnet.getElementById(celcius).value;

//     if (fahrenheit !='') {
//         celcius = (parseFloat(fahrenheit) - 32) / 1.8;
//     }
//     else {
//         fahrenheit = (parseFloat(celcius) * 1.8 ) + 32;
//     }

//     document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(2);
//     document.getElementById('celcius').value = parseFloat(celcius).toFixed(2);
// }

// function clearform() {
//     document.getElementById('fahrenheit').value = '';
//     document.getElementById('celcius').value = '';

// }







