const password = "Mfr@281091";
let isEditing = false;

document.getElementById('editBtn').addEventListener('click', () => {
    if (!isEditing) {
        let userPass = prompt("Enter password to edit:");
        if(userPass === password){
            enableEditing();
            isEditing = true;
            document.getElementById('editBtn').textContent = "Save Changes";
        } else {
            alert("Incorrect password!");
        }
    } else {
        saveChanges();
        isEditing = false;
        document.getElementById('editBtn').textContent = "Edit Portfolio";
        disableEditing();
    }
});

function enableEditing(){
    document.querySelectorAll('.editable').forEach(el=>{
        el.contentEditable = true;
        el.style.border = "1px dashed #666";
    });
    document.querySelectorAll('.editable-img').forEach(img=>{
        img.addEventListener('click', changeImage);
    });
}

function disableEditing(){
    document.querySelectorAll('.editable').forEach(el=>{
        el.contentEditable = false;
        el.style.border = "none";
    });
    document.querySelectorAll('.editable-img').forEach(img=>{
        img.removeEventListener('click', changeImage);
    });
}

function changeImage(event){
    let url = prompt("Enter new image URL:");
    if(url) event.target.src = url;
}

function saveChanges(){
    document.querySelectorAll('.editable').forEach(el=>{
        localStorage.setItem(el.id, el.innerHTML);
    });
    document.querySelectorAll('.editable-img').forEach(img=>{
        localStorage.setItem(img.alt, img.src);
    });
    alert("Changes saved locally!");
}

// Load saved data
window.onload = () => {
    document.querySelectorAll('.editable').forEach(el=>{
        if(localStorage.getItem(el.id)) el.innerHTML = localStorage.getItem(el.id);
    });
    document.querySelectorAll('.editable-img').forEach(img=>{
        if(localStorage.getItem(img.alt)) img.src = localStorage.getItem(img.alt);
    });
};
