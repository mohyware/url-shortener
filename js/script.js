document.addEventListener('DOMContentLoaded', function () {

    const urlInput = document.getElementById('urlInput');
    const aliasInput = document.getElementById('aliasInput');
    const urlForm = document.getElementById('urlForm');

    const submitButton = document.querySelector('input[type="submit"][value="Shorten URL"]');

    // Add a submit event listener to the form
    urlForm.addEventListener('submit', function (event) {
        event.preventDefault();

        console.log('Form submitted!');

    });
})