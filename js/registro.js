const database = firebase.database();
const auth = firebase.auth();
const nombre = document.getElementById('nombre');
const ciudad = document.getElementById('ciudad');
const correo = document.getElementById('correo');
const contraseña = document.getElementById('contraseña');
const confirmacion = document.getElementById('confirmacion');
const registrarBtn = document.getElementById('registrarBtn');

//validaciones
if( contraseña.value!== confirmacion.value){
    alert('Las contraseñas no coinciden!');
    return;
}
if(nombre.value === '' || ciudad.value === '' || correo.value === '' || contraseña.value === '' ||confirmacion.value === ''){
    alert('Completa todos los campos para registrarte correctamente');
    return;
}


registrarBtn.addEventListener('click', ()=>{
    auth.createUserWithEmailAndPassword(correo.value, contraseña.value).then(
        (data) =>{
            let objetoU ={
                id: data.usuario.uid,
                nombre: nombre.value,
                ciudad: ciudad.value,
                correo: correo.value,
                contraseña: contraseña.value,
            }
            let referencia =database.ref('users/registrados/'+objetoU.id).set(objetoU);
            window.location.href= 'login.html';
        }

    );
});