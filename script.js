// // Male Akan names
 const maleNames = [
     "Kwasi",    // Sunday
     "Kwadwo",   // Monday
     "Kwabena",  // Tuesday
     "Kwaku",    // Wednesday
     "Yaw",      // Thursday
     "Kofi",     // Friday
     "Kwame"     // Saturday
 ];

 // Female Akan names
 const femaleNames = [
     "Akosua",   // Sunday
     "Adwoa",    // Monday
     "Abenaa",   // Tuesday
     "Akua",     // Wednesday
     "Yaa",      // Thursday
     "Afua",     // Friday
     "Ama"       // Saturday
 ];


const form = document.getElementById("akan");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);


    const gender = document.querySelector('input[name="gender"]:checked').value;


    if  ((day < 1 || day > 31) || (month < 1 || month > 12) || isNaN(year)){
        output .innerHTML = "please fill in your correct birthday";
        return;
    }

    if (day < 1 || day > 31){
        output .innerHTML = "Please enter a valid day (1-31)";
        return;
    }

    if (month < 1 || month > 12){
        output .innerHTML = "Please enter a valid month (1-12)";
        return;
    }

    if (!gender){
        output .innerHTML = "please select your gender";
        return;
    }


    let CC = Math.floor(year/100);
    let YY = year%100;

    //formula
    let weekday = Math.floor(
        ((CC/4) - 2*CC - 1) 
        + (5*YY/4) 
        + (26*(month+1)/10)
        + day
    )%7

    if (weekday < 0){
        weekday += 7;
    }


    //weekdays
    const weekdays = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
    ];


    let akanName;
    
    if (gender==="male"){
        akanName = maleNames[weekday];
    } else {
        akanName = femaleNames[weekday];
    }
    

  output.innerHTML = 
  `Your Akan name is: <strong>${akanName}</strong>'
  'You were born on a <strong>${weekdays[weekday]}</strong>.`;   


});







 
