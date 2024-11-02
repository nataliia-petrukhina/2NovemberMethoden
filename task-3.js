// Task 3

let firstName = "jimmy";
let lastName = "cORRigAn";
let city = "LONDON";
let job = "painter";

let formattedName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
let formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
let formattedCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
let formattedJob = job.charAt(0).toUpperCase() + job.slice(1).toLocaleLowerCase();

console.log("Vorname: " + formattedName);
console.log("Nachname: " +  formattedLastName); //console.log(`Vorname: ${formattedName}`);
console.log("Stadt: " + formattedCity);
console.log("Beruf: " + formattedJob);


