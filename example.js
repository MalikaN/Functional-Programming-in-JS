var animals = [
	{name:'Fluffykins',species:'rabbit'},
	{name:'carlo',species:'dog'},
	{name:'Hamilton',species:'dog'},
	{name:'Harold',species:'fish'},
	{name:'ursula',species:'cat'},
	{name:'Jimmy',species:'fish'}
]

//var names=[]
// for(var i=0;i<animals.length;i++)
// {
// 	names.push(animals[i].name);
// }

// var names = animals.map(function (animal){

// 	return animal.name +'is a '+animal.species

// })

var names = animals.map((animal)=>animal.name)
console.log(names);