
const saludo = document.getElementById('saludo');
const nombre = document.getElementById('nombre');
const ciudad = document.getElementById('ciudad');
const correo = document.getElementById('correo');
const database = firebase.database();
const auth = firebase.auth();



 
auth.onAuthStateChanged(
    (user) =>{

        console.log(user.uid);
        database.ref('users/registrados/'+user.uid).once(
            'value',
            (data)=>{
                let userDB = data.val();
                saludo.innerHTM = 'Hola,'+userDB.nombre;
                nombre.innerHTM = userDB.nombre;
                correo.innerHTM = userDB.correo;
                ciudad.innerHTM = userDB.ciudad;
                
            }
        );
        
    }
);