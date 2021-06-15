const nombre = document.getElementById('nombre');
const ciudad = document.getElementById('ciudad');
const correo = document.getElementById('correo');

const titleComp = document.getElementById('titleComp');
const consComp = document.getElementById('consComp');

const eliminarBtn = document.getElementById('eliminarBtn');
const favoritosContainer = document.getElementById('favoritosContainer');

const db = firebase.database();
const auth = firebase.auth();

auth.onAuthStateChanged(
    (user) =>{
        db.ref('users/registrados/'+user.uid).once(
            'value',
            (data)=>{
                let userDB = data.val();
                nombre.innerHTML = userDB.nombre;
                correo.innerHTML = userDB.correo;
                ciudad.innerHTML = userDB.ciudad;
            }
        );
        db.ref('Favoritos').on('value',function(data) {
            favoritosContainer.innerHTML = '';
            data.forEach(
                consejos => {
                    let userDB = consejos.val();
                    let fila = new perfilComp(userDB);
                    favoritosContainer.appendChild(fila.render());
                }
            );  
        } 
        );
    }
);

