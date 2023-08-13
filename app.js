document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const id = document.getElementById('id').value;
    // Aquí puedes realizar acciones con los datos, como enviarlos a un servidor o almacenarlos localmente.
});
