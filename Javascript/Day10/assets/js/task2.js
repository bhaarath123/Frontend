function createcounter () {
    let count = 0;

    return function(){
        count = count + 1;
        return count;
    };
}

const counter = createcounter();

console.log(counter());
console.log(counter());
console.log(counter());