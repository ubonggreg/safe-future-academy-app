console.log("JS Loaded");

let children = [];

let form = document.getElementById("childForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let childName = document.getElementById("childName").value;
    let parentName = document.getElementById("parentName").value;

    let child = {
        name: childName,
        parent: parentName
    };

    children.push(child);

    updateList();

    form.reset();
});

function updateList() {
    let list = document.getElementById("childrenList");
    list.innerHTML = "";

    children.forEach(function(child) {
        let li = document.createElement("li");
        li.innerText = child.name + " - Parent: " + child.parent;
        list.appendChild(li);
    });

    document.getElementById("totalCount").innerText = children.length;
}