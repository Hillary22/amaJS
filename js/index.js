const nombre = document.getElementById('nombre');
const ciudad = document.getElementById('ciudad');
const correo = document.getElementById('correo');
const contraseña = document.getElementById('contraseña');
const confirmacion = document.getElementById('confirmacion');
const registrarBtn = document.getElementById('registrarBtn');

const database = firebase.database();

/*function registrar(){
    alert('Click!');
}*/

console.log(database);
registrar = () =>{
    let n = nombre.value;
    let ci= ciudad.value;
    let c = correo.value;
    let p = contraseña.value;
    let rp = confirmacion.value;

    //validaciones
    if(p !== rp){
        alert('Las contraseñas no coinciden!');
        return;
    }
    if(p === ''){
        alert('Escribe una contraseña');
        return;
    }
    if(rp === ''){
        alert('Por favor, confirma tu contraseña');
        return;
    }
    let referencia =database.ref('users/registrados').push();
    // crear objeto
    let objetoU = {
        id: referencia.key,
        nombre: n,
        ciudad: ci,
        correo: c,
        password: p

    };
    referencia.set(objetoU);

    alert('Click!'+ n + " "+ ci + " " + c + " " + p + " " + rp);
    console.log(objetoU);
    console.log(JSON);

    //database.ref('users/registrados').push().set(objetoU);
}

registrarBtn.addEventListener('click', registrar);

database.ref('users/registrados').on('value',function(data){
    console.log(data.val())
});  