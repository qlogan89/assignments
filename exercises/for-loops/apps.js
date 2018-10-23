// for(var i = 0 i <= 10 i += 2){
//     console.log(i)
// }

// for( var i = 100; i >=0 ;i--){
//     if(i % 5 === 0){
//         console.log([i])
//     }
// }

var friends = [
    {
        name: "Rick",
        age: 70
    },
    {
        name: "Morty",
        age: 14
    },
    {
        name: "Jerry",
        age: 54
    },
    {
        name: "Summer",
        age: 18
    },
    {
        name: "Mr. Poopie Butthole",
        age: 31
    },
    {
        name: "Pickle Rick",
        age: 70
    }
]
for(var i = 0; i <friends.length; i++){
    console.log(friends[i].name + "is" + friends[i].age + "years old")
}