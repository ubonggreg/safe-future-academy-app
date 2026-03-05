let children = [];

document.getElementById("childForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let childName = document.getElementById("childName").value;
    let dob = document.getElementById("dob").value;
    let parentName = document.getElementById("parentName").value;

    let child = {
        name: childName,
        dateOfBirth: dob,
        parent: parentName
    };

    children.push(child);

    displayChildren();

    document.getElementById("childForm").reset();
});

function displayChildren() {
    let list = document.getElementById("childrenList");
    list.innerHTML = "";

    children.forEach(function(child) {
        let li = document.createElement("li");
        li.innerText = child.name + " - Parent: " + child.parent;
        list.appendChild(li);
    });

    document.getElementById("totalCount").innerText = children.length;
}