const displayResult = document.getElementById("convert")
const userInputs = document.getElementById("userInput")
let showMeterToFeet = document.getElementById("meterToFeet")
let showlitersToGallons = document.getElementById("litersToGallons")
let kiloToPounds = document.getElementById("kiloToPounds")


  const regex = new RegExp("^[0-9]*$");

userInputs.addEventListener("beforeinput", (event) => {
 
  if (event.data != null && !regex.test(event.data)) {
    event.preventDefault(); 
  }
});

displayResult.addEventListener("click", function(event) {
  event.preventDefault();

 

  

  // Get input value as a string
  let valueString = userInputs.value;
  
  // Test if the input value matches the regex
  if (regex.test(valueString)) {
    // If it's a valid number string, convert it and proceed
    let value = Number(valueString);
    
    
    let meterToFeet = value * 3.28084;
    let feetToMeter = value * 0.3048;
    let litersToGallons = value * 0.264172;
    let gallonsToLiters = value * 3.78541;
    let kiloToPound = value * 2.20462;
    let poundToKilo = value * 0.453592;

    showMeterToFeet.textContent = `
        ${value} meters = ${meterToFeet.toFixed(3)} feet |
        ${value} feet = ${feetToMeter.toFixed(3)} meters 
    `;
    showlitersToGallons.textContent = `
      ${value} liters = ${litersToGallons.toFixed(3)} gallons |
      ${value} gallons = ${gallonsToLiters.toFixed(3)} liters 
    `;
    kiloToPounds.textContent = `
       ${value} kilos = ${kiloToPound.toFixed(3)} pounds |
       ${value} pounds = ${poundToKilo.toFixed(3)} kilos
    `;
  } else {
    
    alert("Please enter a valid number.");
   
  }
});
   
     

