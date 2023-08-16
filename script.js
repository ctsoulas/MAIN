const keygenForm = document.getElementById('keygen-form');
const activationKey = document.getElementById('activation-key');

keygenForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const key = generateKey(username);
    activationKey.textContent = `Activation Key: ${key}`;
});

function generateKey(username) {
    const randomPart = Math.random().toString(36).substr(2, 10).toUpperCase();
    return `${username}-${randomPart}`;
}
