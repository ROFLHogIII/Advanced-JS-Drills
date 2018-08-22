let fruits = ["apples", "pears", "oranges"];
//let faveFruit;


function printFruit() {
    console.log(fruits[0]);
    let faveFruit = fruits[2];
    printFaveFruit();
//    console.log(leastFave)
};

printFruit();

function printFaveFruit() {
    faveFruit = fruits[2]
    console.log(faveFruit)
};
let leastFave = fruits[1];

dankMémés();
function dankMémés() {
    console.log("Hello, Richard")
};

memes();
let memes = function dankerMémés() {
    console.log("Them some dank memes thar, boy.")
}

// becuase a global variable was called into a local area and changed then returned to the global area
// memes(); can be run of let memes is moved above the instance that calls it.