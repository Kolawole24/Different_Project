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
// for(var i = 1; i<= 12; i++){
//     alert("9 * "+ i + " =" + 9*i)
// }

var arr = ["banana", "rice", "yam", "Beans", "dodo"];
alert(arr);
var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green',
  'Blue', 'Indigo', 'Violet'];

for (var i = 0; i <= rainbowColors.length; i++) {
  console.log("9 *" + i+ "="+ " "+ 9*i);
}

  var users = [
    {name: 'Jolene', age: 21},
    {name: 'Alexa',  age: 18}
  ];
  
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    console.log(user.name + ' is ' + user.age + ' years old.');
  }
  var jolene = {
    age: 21,
    hairColor: 'Auburn',
    talk: function() {
      console.log('Hello!');
    },
    eat: function(food) {
      console.log('Yum, I love ' + food);
    }
  };
  jolene.talk();
  jolene.eat("piza");

  var Recipe = {
    recipeTitle: 'Spagghetti Bolonais',
    servings: 3,
    ingredients: ['Pepper', 'water', 'salt'],
    direction: 'kindly refer to wikipedia',
    letscook: function(ikpe){
        alert('I am hungry! let us cook ' + ikpe)
    }
    }
    for(i = 0; i<Recipe.ingredients.length; i++) {
    var ingredients = Recipe.ingredients
    alert( 'These are the ingredients ' + ingredients[i])
    } 

    const results = [];
    const fizzbuzz = (n) => {
      for(var i = 1; i <= 16; i++ ) {
        results.push(i);
        if(i % 3 == 0) {
          results.splice(i -1, 1, "fizz");
         
        }
         if(i % 5 == 0) {
          results.splice(i - 1, 1, "buzz");
          


        }
         if(i % 3 == 0 && i % 5 == 0) {
          results.splice(i - 1, 1, "fizzbuzz");
        } 
      }
    }
    fizzbuzz(16);
    console.log(results);