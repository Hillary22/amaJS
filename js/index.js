const database = firebase.database();
const auth = firebase.auth(); 
const logOut = document.getElementById('logOut'); //es el botón



logOut.addEventListener('click',()=>{

    auth.signOut().then(
        ()=>{
            window.location.href= "login.html";
        }

    ).catch(
            (error)=>{
                alert(error.message);
            }
        );
}

);