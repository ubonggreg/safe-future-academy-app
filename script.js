document.getElementById("childForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let childName = document.getElementById("childName").value;

    document.getElementById("successMessage").innerText =
        "Registration successful for " + childName + "!";

    document.getElementById("childForm").reset();
});