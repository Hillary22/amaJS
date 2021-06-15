const tituloReport = document.getElementById('tituloReport');
const textoReport = document.getElementById('textoReport');
const reportBtn = document.getElementById('reportBtn');
const ubiReport = document.getElementById('ubiReport');
const reportContainer = document.getElementById('reportContainer');

const db = firebase.database();
const auth = firebase.auth();
let nombreReport;


//  saber usuario
auth.onAuthStateChanged(
    (user) =>{
        db.ref('users/registrados/'+user.uid).once(
            'value',
            (data)=>{
                let userDB = data.val();
                nombreReport = userDB.nombre;
               
            }
        ).then(
            (data)=>{
                window.location.href ="index.html";
            }
        );
        
    }
);


reportBtn.addEventListener('click', ()=>{
    const db = firebase.database();
    let referencia = db.ref('reportes').push();
    let r = {
        
        id: referencia.key,
        nombre: nombreReport,
        titulo: tituloReport.value,
        reporte: textoReport.value,
        location: ubiReport.value,
    };
    
    db. referencia.set(r);
   
});

