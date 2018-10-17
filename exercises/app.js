var shopper = {
    name: "james",
    age: 42,
    hasMoney:false,
    speak: function(word) {
        console.log(" hi my name is " +this.name+ "and I am " + word)
    },
    gorceryCart: ["noodles","beef","rice"],

}

shopper.speak("sleepy")