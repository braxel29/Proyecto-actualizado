const gallery = document.getElementById('gallery');
    const gallery2 = document.getElementById('gallery2');
    
    function nextSlide() {
        gallery.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    }

    function prevSlide() {
        gallery.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    }

    function nextSlide2() {
        gallery2.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    }

    function prevSlide2() {
        gallery2.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    }

    //aqui
    window.onload = function() {
        // Seleccionar los elementos del DOM
        const datatableContainer = document.getElementById('datatable-container');
        const gamesContainer = document.getElementById('gallery'); // Asegúrate de que este ID esté correcto
        const showDatatableButton = document.getElementById('show-datatable');
        const showGamesButton = document.getElementById('show-games');
    
        // Mostrar la vista de DataTable
        showDatatableButton.addEventListener('click', () => {
            // Ocultar la galería de juegos y mostrar la tabla
            gamesContainer.style.display = 'none';
            datatableContainer.style.display = 'block';
    
            // Inicializar DataTable si aún no se ha hecho
            if (!$.fn.DataTable.isDataTable('#myTable')) {
                fetchDataAndInitializeTable();
            }
        });
    
        // Mostrar la vista de juegos
        showGamesButton.addEventListener('click', () => {
            // Ocultar la tabla y mostrar la galería de juegos
            datatableContainer.style.display = 'none';
            gamesContainer.style.display = 'block';
        });
    
        // Función para inicializar el DataTable con datos
        function fetchDataAndInitializeTable() {
            let url = 'https://jsonplaceholder.typicode.com/users/';
            fetch(url)
                .then(response => response.json())
                .then(data => mostrarData(data))
                .catch(error => console.log(error));
        }
    
        // Función para mostrar los datos en la tabla
        const mostrarData = (data) => {
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
        }
    }
    