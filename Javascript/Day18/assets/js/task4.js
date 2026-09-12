const btnAsync = document.getElementById('btn-async');
const logTask4 = document.getElementById('log-task4');

const mockServerCall = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Server payload received successfully.");
        }, 1200);
    });
};

async function handleWorkflow() {
    logTask4.textContent = "Processing action... (Thread asleep for 1.2s)";
    
    try {
        const outcome = await mockServerCall();
        logTask4.textContent = `[Await Success]: Result value -> "${outcome}"`;
    } catch (err) {
        logTask4.textContent = `[Caught Exception]: ${err}`;
    }
}

btnAsync.addEventListener('click', () => {
    handleWorkflow();
});
