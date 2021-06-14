
const nombre = document.getElementById('nombre');
const ciudad = document.getElementById('ciudad');
const correo = document.getElementById('correo');
const database = firebase.database();
const auth = firebase.auth();


 
auth.onAuthStateChanged(
    (user) =>{
        database.ref('users/registrados/'+user.uid).once('value',
            (data)=>{
                let userDB = data.val();
                nombre = userDB.nombre;
                correo.innerHTM = userDB.correo;
                ciudad.innerHTM = userDB.ciudad;
                
            }
        );
        
    }
);