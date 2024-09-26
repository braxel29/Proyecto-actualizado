function loadUsers() {
    let url = 'https://jsonplaceholder.typicode.com/users/';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let body = "";
            for (let i = 0; i < data.length; i++) {
                body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`;
            }
            document.getElementById('data').innerHTML = body;

            // Inicializar DataTable
            $('#myTable').DataTable({
                paging: true,
                searching: true,
                ordering: true,
                language: {
                    url: "//cdn.datatables.net/plug-ins/1.11.5/i18n/Spanish.json" // Traducción al español
                }
            });
        })
        .catch(error => console.log(error));
}

// Cargar los usuarios cuando la página se carga
window.onload = loadUsers;