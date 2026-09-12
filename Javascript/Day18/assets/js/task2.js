const btnResolve = document.getElementById('btn-resolve');
const btnReject = document.getElementById('btn-reject');
const logTask2 = document.getElementById('log-task2');

const createPromiseInstance = (shouldSucceed) => {
    return new Promise((resolve, reject) => {
        if (shouldSucceed) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise was rejected safely.");
        }
    });
};

btnResolve.addEventListener('click', () => {
    createPromiseInstance(true)
        .then((successMsg) => {
            logTask2.textContent = `[Fulfilled State]: ${successMsg}`;
        });
});

btnReject.addEventListener('click', () => {
    createPromiseInstance(false)
        .catch((errorMsg) => {
            logTask2.textContent = `[Rejected State]: ${errorMsg}`;
        });
});
