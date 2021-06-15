class perfilComp{
    constructor(favorito){
        this.favorito = favorito;
    }

    render = () => {
        let component = document.createElement('div');
        component.className = 'perfilcomp';

        //Titulo
        let titleComp = document.createElement('div');
        titleComp.className = 'titlecomp';
        titleComp.innerHTML = (
                '<p>'+this.favorito.titulo+'<p>'
            );
        //Consejo
        let consComp = document.createElement('div');
        consComp.className = 'conscomp';
        consComp.innerHTML = (
                '<p>'+this.favorito.consejos+'<p>'
            );
        //Nombre
        let nombreComp = document.createElement('div');
        nombreComp.className = 'nombrecomp';
            nombreComp.innerHTML = (
                '<p>'+this.favorito.nombre+'<p>'
            );

        //Botón
        let eliminarBtn = document.createElement('button');
        eliminarBtn.className = 'eliminarbtn';
        eliminarBtn.innerHTML = 'x';

        //Para que se impriman o se dibujen en el html
        component.appendChild(titleComp);
        component.appendChild(consComp);
        component.appendChild(nombreComp);
        component.appendChild(eliminarBtn);

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

        //Para que funcione los botones y textos
        eliminarBtn.addEventListener('click', ()=>{
            const db = firebase.database();
            db.ref('Favoritos/'+idUser+'/'+this.favorito.id).set(null);
            }
        );

        return component;

    }
}
