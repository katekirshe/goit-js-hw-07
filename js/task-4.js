const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
	const emailValue = event.target.elements.email.value.trim();
    const passValue = event.target.elements.password.value.trim();
    if (!emailValue.length || !passValue.length) {
        alert("All form fields must be filled in")
    }
    console.log({
        email: emailValue,
        password: passValue
    });
    event.target.reset();
});
