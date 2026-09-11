document.querySelector(".auth-card form").addEventListener("submit", function (event) {

    event.preventDefault();

    let toastElement = document.getElementById("registerToast");

    let toast = new bootstrap.Toast(toastElement);

    toast.show();

});