// script.js

function showMenu(page) {
    const content = document.getElementById('content');
    fetch(page) // Fetch the HTML content of the selected page
        .then(response => response.text())
        .then(data => {
            content.innerHTML = data; // Load the fetched content into the main area
        })
        .catch(error => {
            console.error('Error loading page:', error);
            content.innerHTML = '<p>Error loading page. Please try again later.</p>'; // Handle error
        });
}

