var names = ["Katherine", "Alicia", "Anvi"];

var quotes = {
    "Alicia" : ["Live love laugh objectify", 
                "I think I've found a green flag that cancels out his racism"],
    "Katherine" : ["I support women's wrongs", 
                   "Even if I was cheating why is it any of your business",
                   "#induce addiction onto your exes"],
    "Anvi" : ["You don't have to ask &#x1FAF3;",
              "Once I learn how to punch myself in the face it's over for men"]
}; 

document.getElementById("generate-button").addEventListener("click", myFunction);

function myFunction() {
    var name = names[Math.floor(Math.random() * names.length)];
    var quote = quotes[name][Math.floor(Math.random() * quotes[name].length)];

    document.getElementById('display-label').innerHTML = quote;
}

