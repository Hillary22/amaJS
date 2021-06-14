class filaConsejos{
    constructor(consejo){
        this.consejo = consejo;
    }

    render = () => {

        //Creador de componente, el padre
        let component = document.createElement('div');
        component.className = 'filaconsejo';

        //Aca se ponen los atributos o las cosas que van a aparecer en el HTML como comnponentes
        //Titulo
        let tituloComp = document.createElement('div');
        tituloComp.className = 'titulocomp';
            //Para que se escriba la información
            tituloComp.innerHTML = (
                '<p>'+this.consejo.titulo+'<p>'
            );
        //Consejo
        let consejoComp = document.createElement('div');
        consejoComp.className = 'consejocomp';
            consejoComp.innerHTML = (
                '<p>'+this.consejo.consejos+'<p>'
            );
        //Nombre
        let nombreComp = document.createElement('div');
        nombreComp.className = 'nombrecomp';
            nombreComp.innerHTML = (
                '<p>'+this.consejo.nombre+'<p>'
            );

        //Botón
        let guardarBtn = document.createElement('button');
        guardarBtn.className = 'guardarbtn';
        guardarBtn.innerHTML = 'Guardar';

        //Para que se impriman o se dibujen en el html
        component.appendChild(tituloComp);
        component.appendChild(consejoComp);
        component.appendChild(nombreComp);
        component.appendChild(guardarBtn);

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

        guardarBtn.addEventListener('click',()=>{
            const db = firebase.database();
            let favConsejos = {
                consejos : this.consejo.consejos,
                id : this.consejo.id,
                nombre : this.consejo.nombre,
                titulo : this.consejo.titulo
            }
            db.ref('Favoritos/'+idUser+'/'+this.consejo.id).set(favConsejos);
        });

        //Para que se imprima
        return component;
    }
}