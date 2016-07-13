//for loop practice

var foods = ["cereal", "bagel", "oatmeal", "granola", "yogurt", "rotting meat", "pancakes"];

for( var i=0; i<foods.length; i++) {
  console.log(foods[i]);
}


// Write a for loop that console.log's the index of the breakfast item
// I want to eat... "granola"


for (var i=0; i<foods.length; i++){
	if(foods[i] === "granola") {
		console.log(i);
	}
}

// Bonus: Write a for loop that removes from the array items that are longer than 6 characters.

for(var i=0; i<foods.length; i++){
  if(foods[i].length > 6) {
  	foods.splice(i, 1);
  }
  else console.log(foods[i]);
}
// Bonus: Write a for loop that finds the food item that comes first alphabetically

for(var i=0; i<foods.length; i++){
	foods.sort();
}
console.log(foods[0]);


// Bonus: Write a for loop that creates a new Array containing each food's length ie [6, 5, 7, 7, 6, 12, 8]

var foodsLength = [];
for(var i=0; i<foods.length; i++) {
	foodsLength.push(foods[i].length);
}
	console.log(foodsLength);
