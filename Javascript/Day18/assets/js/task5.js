const btnFetch = document.getElementById('btn-fetch');
const logTask5 = document.getElementById('log-task5');

btnFetch.addEventListener('click', () => {
    logTask5.textContent = "Connecting to remote database server...";

    fetch('https://typicode.com')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            logTask5.textContent = `[Network Data Received]: title -> "${data.title}"`;
        })
        .catch((error) => {
            logTask5.textContent = `[Network Request Error]: ${error}`;
        });
});
