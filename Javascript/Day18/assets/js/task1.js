const btnTask1 = document.getElementById('btn-task1');
const logTask1 = document.getElementById('log-task1');

const calculateNumbers = (numberA, numberB, callbackOperation) => {
    return callbackOperation(numberA, numberB);
};

btnTask1.addEventListener('click', () => {
    const resultValue = calculateNumbers(12, 8, (x, y) => {
        return x * y;
    });

    logTask1.textContent = `[Callback Executed]: Multiplying 12 * 8 = ${resultValue}`;
});
