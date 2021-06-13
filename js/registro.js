const database = firebase.database();
const auth = firebase.auth();
const nombre = document.getElementById('nombre');
const ciudad = document.getElementById('ciudad');
const correo = document.getElementById('correo');
const contraseña = document.getElementById('contraseña');
const confirmacion = document.getElementById('confirmacion');
const registrarBtn = document.getElementById('registrarBtn');

 
registrarBtn.addEventListener('click', ()=>{
 
    auth.createUserWithEmailAndPassword(correo.value, contraseña.value).then(
        (data) =>{
            let user ={
                id: data.user.uid,
                nombre: nombre.value,
                ciudad: ciudad.value,
                correo: correo.value,
                contraseña: contraseña.value
            }
            database.ref('users/registrados'+ user.id).set(user);
                  
        }

    ); 
});