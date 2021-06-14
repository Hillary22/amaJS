const tituloCons = document.getElementById('tituloCons');
const textoCons = document.getElementById('textoCons');
const publiBtn = document.getElementById('publiBtn');
const consejosContainer = document.getElementById('consejosContainer');

const db = firebase.database();
const auth = firebase.auth();
let nombreEscritor;


//Para saber quien es...
auth.onAuthStateChanged(
    (user) =>{
        db.ref('users/registrados/'+user.uid).once(
            'value',
            (data)=>{
                let userDB = data.val();
                nombreEscritor = userDB.nombre;
            }
        );
        db.ref('consejos').on('value',function(data) {
            consejosContainer.innerHTML = '';
            data.forEach(
                consejos => {
                    let userDB = consejos.val();
                    let fila = new filaConsejos(userDB);
                    consejosContainer.appendChild(fila.render());
                }
            );  
        } 
        );
    }
);

//Para que funcione los botones y textos
publiBtn.addEventListener('click', ()=>{
    let referencia = db.ref('consejos').push();
    let cons = {
        consejos: textoCons.value,
        id: referencia.key,
        nombre: nombreEscritor,
        titulo: tituloCons.value,
    };
    referencia.set(cons);
});

