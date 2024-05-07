//Scope i JavaScript

//I det här exemplet lever bara variabeln a inuti funktionen bb

//b kommer man komma åt eftersom variabelen skapades utanför funktionen
//Det här är "Root-Scope"
var b = "Kan jag komma åt det här";

function bb() {
	var a = "hello";
	//Fungerar inte att console.log:a utanför den här funktionen
	console.log(a);
}

//Om man console.loggar innan man kört funktionen kommer b:et längst
//uppe bli valt annars är de den innanför funktionen
bb()

var fun = 5;

function funFunction(argument) {
	//Det här är även känt för att heta "Child-Scope"
	var fun = "Hello";
	console.log(1, fun);
}

function funerFunction(argument) {
	//Det här är en namning conflict och ska undvikas
	//Man vill inte ge olika saker samma namn
	var fun = "Bye";
	console.log(2, fun);
}

function funestFunction(argument) {
	//Vet du vem fun är child schope? 
	//Nä vet inte men ska kolla med root scope
	//Jajamän vi har en fun som är = 5 honom känner vi (om det inte finns är det undefined)
	fun = "Ahhhhh";
	console.log(3, fun);
}

console.log("window", fun);
funFunction()
funerFunction()
funestFunction()
console.log(fun);