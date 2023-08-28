document.getElementById("form-submit").addEventListener("click", function () {
    let name = document.getElementById("exampleInputName1").value;
    let email = document.getElementById("exampleInputEmail1").value;
    let message = document.getElementById("Message").value;

    document.getElementById("name-error").innerText = "";
    document.getElementById("email-error").innerText = "";

    if (name == "") {
        document.getElementById("name-error").innerText = "Name is required";
    } else if (email == "") {
        document.getElementById("email-error").innerText = "Email is required";
    } else {
        $("#exampleModal").modal();
    }
});
