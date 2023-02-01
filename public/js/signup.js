const signupFormHandler = async (event) => {
    event.preventDefault();
    //Collect values from the signup form
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    //Send a POST request to the API endpoint
    if (username && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            //if successful, redirect the browser to the profile page
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};


document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);