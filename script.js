document.getElementById("childForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let childName = document.getElementById("childName").value;

    document.getElementById("welcome to Safe Future Academy,[Child Name]!").innerText =
        "Registration successful for " + childName + "!";

    document.getElementById("childForm").reset();
});