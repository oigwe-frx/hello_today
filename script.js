// Get the current day of the week as a number (0 for Sunday, 1 for Monday, etc.)
var currentDayNumber = new Date().getDay();

// Convert the day number to the name of the day
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDayName = daysOfWeek[currentDayNumber];

// Display the day in the span with id "d"
document.getElementById("d").innerHTML = currentDayName;

// Get the current hour and minutes
var currentHour = new Date().getHours();
var currentMinutes = new Date().getMinutes();

// Convert to 12-hour format and determine AM/PM
var period = currentHour >= 12 ? "PM" : "AM";
currentHour = currentHour % 12 || 12; // Convert 0 to 12 for 12 AM/PM

// Add a leading zero to minutes if less than 10
currentMinutes = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;

// Combine hour, minutes, and period
var currentTime = currentHour + ":" + currentMinutes + " " + period;

// Display the time in the span with id "t"
document.getElementById("t").innerHTML = currentTime;
