const tituloLoc = document.getElementById('tituloLoc');
const desLoc = document.getElementById('desLoc');
const direccionLoc = document.getElementById('direccionLoc');
const telLoc = document.getElementById('telLoc');
const horarioLoc = document.getElementById('horarioLoc');
const addBtn = document.getElementById('addBtn');
const titulo2Contei = document.getElementById('titulo2Contei');

const db = firebase.database();
const auth = firebase.auth();
let nombreEscritor;

//user
auth.onAuthStateChange(
    (user)=>{
        db.ref('users/registrados/'+ user.uid).once(
            'value',
            (data)=>{
                let userDB= data.val();
                nombreEscritor= userDB.nombre;
            }
        );

        db.ref('locaciones').on('value',
        function(data){

            loc=>{
                let userDB =loc.val();
                console.log(userDB);
                let fila= new mapalist(userDB);
                locationsContainer.appendChild(fila.render());
            }
        }
        
        );
    }

);
addBtn.addEventListener('click', ()=>{
    let referencia = db.ref('locaciones/ecoPuntos').push();
    let location = {
       
        id: referencia.key,
        nombre: tituloLoc.value,
        direccion: direccionLoc.value,
        descripcion: desLoc.value,
        horario:horarioLoc.value,
        telefono:telLoc.value,
    }
    referencia.set(location);
})