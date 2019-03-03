function convert(degree) {
    //set initial variable for celcius and fahrenheit
    if(degree === "C"){
    var x;
    x = document.getElementById('c').value * 9/5 + 32;
    document.getElementById('f').value = Math.round(x);
    //test if there is a value for celsius
    
    }else {
        //set the value for celsius
       x = (document.getElementById("f").value - 32) * 5/9;
       document.getElementById("c").value = Math.round(x)
    }
}
function findCelsius() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius;
    if(fahrenheit != '') {
        celsius = (fahrenheit - 32) * 5/9;
        document.getElementById("output").innerHTML = celsius;

    }else{
        document.getElementById("output").innerHTML = "please enter a value!";

    }
}

function allowOnlyNumbers(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if(charCode > 31 && (charCode <48 || chrCode > 57)) {
        return false;
    }
    return true;
}