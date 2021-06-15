const db = firebase.database();
const auth = firebase.auth();
const addBtn = document.getElementById('addBtn');
const locationsContainer = document.getElementById('locationsContainer');

console.log("'Funciono'");

db.ref('locaciones/ecoPuntos').on('value',function(data) {
    locationsContainer.innerHTML = '';
    data.forEach(
        location => {
            let valor = location.val();
            console.log(valor);
            let fila = new mapalist(valor);
            locationsContainer.appendChild(fila.render());
        }
    );  
} 
);
addBtn.addEventListener('click', ()=>{
    window.location.href = "addLocation.html";
})


 