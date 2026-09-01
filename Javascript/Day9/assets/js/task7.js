// Create a promise that simulates a 2-second loading wait time
const networkRequest = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data Loaded Successfully!");
    }, 2000); // 2000 milliseconds = 2 seconds
});


// APPROACH 1: Using traditional .then() to handle the result
networkRequest.then((message) => {
    console.log("Handled with .then() ->", message);
});


// APPROACH 2: Using modern async/await to handle the result
async function handleDataWithAsync() {
    // 'await' pauses execution cleanly until the promise finishes its delay
    const message = await networkRequest;
    console.log("Handled with async/await ->", message);
}

handleDataWithAsync();
