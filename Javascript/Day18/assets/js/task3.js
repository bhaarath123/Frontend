const btnSuccess = document.getElementById('btn-success');
const btnFail = document.getElementById('btn-fail');
const logTask3 = document.getElementById('log-task3');

const getPromise = (isGood) => {
    return new Promise((resolve, reject) => {
        if (isGood) {
            resolve("Data fetched!");
        } else {
            reject("Connection lost!");
        }
    });
};

function runChain(flag) {
    logTask3.innerHTML = "Starting process...";

    getPromise(flag)
        .then((data) => {
            logTask3.innerHTML = `[.then() block]: ${data}`;
        })
        .catch((err) => {
            logTask3.innerHTML = `[.catch() block]: Error: ${err}`;
        })
        .finally(() => {
            logTask3.innerHTML += `<br><strong>[.finally() block]:</strong> Pipeline execution finished.`;
        });
}

btnSuccess.addEventListener('click', () => runChain(true));
btnFail.addEventListener('click', () => runChain(false));
