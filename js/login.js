const database = firebase.database();
const auth = firebase.auth();
const correo = document.getElementById('correo');
const contraseña = document.getElementById('contraseña');
const ingreBtn = document.getElementById('ingreBtn');


auth.onAuthStateChanged(
 //si ya esta logeado pasa de una a index.html
    (user) =>{
        if (user !== null){
            window.Location.href= "index.html";
        }
    }

);


ingreBtn.addEventListener('click', () =>{

    
    auth.signInWithEmailAndPassword(correo.value, contraseña.value).then(

        (data)=>{
            window.location.href ="index.html";
        }
    ).catch(
        (error)=>{
            alert(error.message);
            console.log(error);
        }
    );
});
