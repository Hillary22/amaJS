class mapalist{
    constructor(location){
        this.location = location;
    }

    render = () => {

        let component = document.createElement('div');
        component.className = 'mapaList';

        //nombre
        let locationCont = document.createElement('div');
        locationCont.className = 'locationCont';
        locationCont.innerHTML = (

            '<p>'+this.location.nombre+'</p>'

            );
        //Descripción
        let desCont = document.createElement('div');
        desCont.className = 'desCont';
        desCont.innerHTML = (

            '<p>'+this.location.descripcion+'</p>'

            );
        //Dirección
        let direCont = document.createElement('div');
        direCont.className = 'direCont';
        direCont.innerHTML = (

            '<p>'+this.location.direccion+'</p>'

            );
        //Teléfono
        let teleCont = document.createElement('div');
        teleCont.className = 'teleCont';
        teleCont.innerHTML = (

            '<p>'+this.location.telefono+'</p>'

            );
        //Horarios
        let horaCont = document.createElement('div');
        horaCont.className = 'horaCont';
        horaCont.innerHTML = (

            '<p>'+this.location.horario+'</p>'

            );
        //Botón
        let rutaBtn = document.createElement('button');
        rutaBtn.className = 'rutaBtn';
        rutaBtn.innerHTML = 'RUTA';


        component.appendChild(locationCont);
        component.appendChild(desCont);
        component.appendChild(direCont);
        component.appendChild(teleCont);
        component.appendChild(horaCont);
        component.appendChild(rutaBtn);

        const auth = firebase.auth();
        let idUser; 

        auth.onAuthStateChanged(
            (user) =>{
                db.ref('users/registrados/'+user.uid).once(
                    'value',
                    (data)=>{
                        let userDB = data.val();
                        idUser = userDB.id;
                    }
                );
            }
        );

        rutaBtn.addEventListener('click',()=>{

            const localstorage = window.localStorage;
            localstorage.setItem('locaciones', json);
            let json= JSON.stringify(this.location);
            window.location.href= 'mapa.html';
            
            console.log(json);
            const db = firebase.database();
            let map = {
                
                id : this.location.id,
                nombre : this.location.nombre,
                descripcion : this.location.descripcion,
                direccion : this.location.direccion,
                telefono : this.location.telefono,
                horario : this.location.horario,
               
            
            }
           
        });



        return component;

    }
}