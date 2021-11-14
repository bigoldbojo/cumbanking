function login() {
    const formElement = document.querySelector('form');
    const formData = new FormData(formElement);
    const userid = formData.get('userid');
    const password = formData.get('password');
    if (userid === "4623769947" && password === "letmein") {
        window.location.assign("personal");
    }
    else {
        alert("Login details incorrect. Please try again.");
        document.getElementById("form").reset();
        document.getElementById("userid").focus();
    }
    return false;
}