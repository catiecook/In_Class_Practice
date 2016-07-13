/*var kitchen = {
  "refridgerator": {
    fridge: ["milk", "eggs", "beer", "milk", "veggies"],
    freezer: ["perogies", "ice cream"],
  },

  "microwave": {
    buttons: ["start", 1, 2, 3],
    inside: "bacon greese",
    presets: ["popcorn", "defrost", "timed defrost", "weight defrost"],
    color: "black",
    finish: "gloss",
  },

  "pantry" : {
  	canned_food: ["beans", "corn"],
  	shelves: ["chips", "jam", "oats", "tail mix", "bread"],
  	cleaning: ["mop", "broom", "windex"],
  	supplies: ["toaster", "cookie sheets", "pans"],
  },

  "drawrers" : {
  	tupperware : "pyrex",
  	silverware : ["forks", "spoons", "knives", "steak knife"],
  	cookware: ["pans", "pots", "metal stuff", "grilltop", "skillet"]
  }
}

//Stretch: Organize everything you have learned in class up until now into an Object

console.log(kitchen.refridgerator.fridge)
*/


var car = {
	"outside": {
		color: "blue",
		doors: "4",
	},

		"type": {
			name: "motel taco",
			model: "tacoma",

			"specifics": {
				vin: "345HSSHDj2342313",
				year: "2006",
				size: "extended cab",
				other: "trd",
			}
		},

		"under_hood" : {
			engine: "V6",
			mechanical_terms: ["pistons", "timing-belt", ["synthetic oil", "non synthetic oil"]],
		},
}

console.log(car.under_hood.mechanical_terms)
