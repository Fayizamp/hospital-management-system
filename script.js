document.getElementById('sidebarToggle').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
});

document.addEventListener('click', function (event) {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('sidebarToggle');
    
    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
        sidebar.classList.remove('show');
    }
});

document.querySelectorAll('#sidebar .nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.getElementById('sidebar').classList.remove('show');
    });
});


var modal = document.getElementById("appointmentModal");
var btn = document.getElementById("openModal");
var span = document.getElementById("closeModal");

btn.onclick = function (event) {
    event.preventDefault(); 
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
