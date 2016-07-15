var people = {
  "joe" : {
    first_name: "Joe",
    last_name: "Jenkins",
    preferences: {
      meal: "meat",
      favorite_genres: ["jazz", "soul"],
    },
    sitting_next_to: "sue",
    correspondence: [
      {date: "11/4/2014", description: "sent invitation"},
      {date: "12/2/2014", description: "replied yes"},
    ],
  },
  "sue" : {
    first_name : "Sue",
    last_name : "Summers",
    preferences : {
      meal : "fish",
      favorite_genres : ["funk", "blues"],
    },
    sitting_next_to: "joe",
    correspondence: [
      {date: "11/7/2014", description: "sent invitation"},
      {date: "12/8/2014", description: "replied yes + 1"},
    ],
  },
}

// EXAMPLE:
// What is Joe's last name?
console.log(people.joe.last_name);

// Now you do it!

// What are the last names of all the people?
// HINT: Iterate through the object
for(var i in people)
{
  console.log(people[i].last_name)
}

// What is the first genre that each person listed?

for(var i in people)
{
  console.log(people[i][2].genre[0])
}

// HINT: Iterate through the object and console.log each person's first genre choice

for(var i in people)
{
  console.log(people[i].preferences.favorite_genres[0])
}

// What is the last name of the person sitting next to joe?


  var friend = people.joe.sitting_next_to
  console.log(friend) //error check

  if (people.hasOwnProperty(friend)) {
  	 console.log(people[friend].last_name)
    }

// What meal is sue going to eat?
 console.log(people.sue.preferences.meal)

// What was the date of the first correspondence with joe?
console.log(people.joe.correspondence[0].date)

// What was the description of the last correspondence with sue?
console.log(people.sue.correspondence[1].description)
