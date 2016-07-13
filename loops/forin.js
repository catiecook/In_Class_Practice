var busStopTimes = ["8:30", "9:15", "9:30", "11:00", "11:05", "11:15", "11:30", "14:00", "15:15"]

// Write a for of loop that console.log's each time

for(var stop of busStopTimes) {
	console.log(stop)
}


// Bonus: Write a for of loop that creates a new Array of times ending with ":15"
var fifteen = []

for(var stop of busStopTimes){

	if(stop.indexOf(":15") !== -1) {
		fifteen.push(stop)
	}
}
console.log(fifteen)


// Bonus: Write a for of loop that creates a new Array of times after noon
var afterNoon = []
for(var stop of busStopTimes){

	var hour = stop.split(":")[0] //"9:15" => ["9", "15"] => "9"
	var hourInt = parseInt(hour)
	if(hourInt > 12) {
		afterNoon.push(stop)
	}
}
	console.log(afterNoon);


// Bonus: Write a for of loop that creates a new Array with each hour a bus comes.
// No duplicate hours allowed.
// => [8, 9, 11, 14, 15]

var timers = []
for(var stop of busStopTimes) {

	var hour = stop.split(":")[0] //"9:15" => ["9", "15"] => "9"
	var hourInt = parseInt(hour)
	if (timers.indexOf(hourInt) === -1);{
		timers.push(hourInt)
	}
}
console.log(timers)
