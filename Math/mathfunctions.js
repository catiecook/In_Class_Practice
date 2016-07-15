//math funciton practice

//Generate two random integers and print their mean, variance, and standard deviation.

var rand = [(Math.floor(Math.random()*100)), (Math.floor(Math.random()*100))];
console.log("This is the array with random numbers: " + "[" + rand + "]");

	var i = 0;
	var mean = ((rand[i]+rand[i+1])/2);


console.log("The mean of the random numbers is " + mean);

var variance = (((rand[i]-mean)*(rand[i]-mean)) + ((rand[i+1]-mean)*(rand[i+1]-mean)))/2;

console.log("The variance is " + variance)

var deviation = Math.sqrt(variance);

console.log("The standard deviation is: " + deviation);


//Generate a single random number, from 0 to 100, then output all the even integers from 0 to the random number.
var rand = (Math.floor(Math.random()*100))

for(var i =0; i<rand; i+=2) {
	console.log(i)
}
console.log("The original random number is: " + rand)


//Generate a single random number, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the random number. If the number is less than 40, output all the odd integers from 0 to 40.

var rand = (Math.floor(Math.random()*100))

if(rand>40) {
	for(var i = 1; i<rand;i+=2) {
		console.log(i)
	}
}
else if(rand < 40) {
	for(var j=1; j<=40; j+=2) {
		console.log(j)
	}
}

console.log("The original random number is: " + rand)



//Generate twenty random integers from 0 to 100 and print the largest and smallest integers.*/

var rand = [];

for(var i=0; i<=20; i++) {
	rand.push((Math.floor(Math.random()*100)))
}

console.log("Here is the new array: "+rand)

var large = rand[0]
var small = rand[0]

for (var j=0; j<rand.length; j++) {
	if(rand[j] > large){
		large = rand[j]
	}
	else if(rand[j] < small) {
		small = rand[j]
	}
}

console.log("The smallest is: " + small)
console.log("The largest is: " + large)
