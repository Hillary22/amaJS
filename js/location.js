const database = firebase.database();
const addBtn = document.getElementById('addBtn');
const locationsContainer = document.getElementById('locationsContainer');

database.ref('locaciones/ecoPuntos').on('value', function(data){
    locationsContainer.innerHTML = '';
    data.forEach(
        location => {
            let valor = location.val();
            let fila = new Location(valor);
            locationsContainer.appendChild(fila.render());
        
    });
});