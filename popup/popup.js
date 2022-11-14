var names = ["Katherine", "Alicia", "Anvi"];

var quotes = {
    "Alicia" : ["Live Love Laugh Objectify", 
                "I think I've found a green flag that cancels out his racism"],

    "Katherine" : ["I support women's wrongs", 
                   "It's like, even if I was cheating why is it any of your business??",
                   "induce addiction onto your exes >:)"],
                   
    "Anvi" : ["You don't have to ask &#x1FAF3;",
              "Once I learn how to punch myself in the face, it's over for men.", 
              "Kanye energy. As he should."]
}; 

document.getElementById("generate-button").addEventListener("click", myFunction);

function getImageCharacter(name) {
    switch(name) {
        case "Anvi":
            image = "/images/anvi.png";
            break;
        case "Alicia":
            image = "/images/alicia.png";
            break;
        case "Katherine":
            image = "/images/katherine.png";
            break;
    }
    return image;
}

function getWidth(name) {
    switch(name) {
        case "Anvi":
            width = "48px";
            break;
        case "Alicia":
            width = "35px";
            break;
        case "Katherine":
            width = "43px";
            break;
    }
    return width;
}

function myFunction() {
    var name = names[Math.floor(Math.random() * names.length)];
    var quote = quotes[name][Math.floor(Math.random() * quotes[name].length)];
    var src_image = getImageCharacter(name);

    document.getElementById('display-label').innerHTML = quote.toUpperCase();

    let image = document.getElementById("character-img");
    image.src = src_image;
    image.style.width = getWidth(name);
    
}

