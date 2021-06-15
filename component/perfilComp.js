class perfilComp{
    constructor(favorito){
        this.favorito = favorito;
    }
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
    component.appendChild(nombre);
    component.appendChild(consejoComp);
    component.appendChild(nombreComp);
    component.appendChild(eliminarBtn);


//Para que funcione los botones y textos
eliminarBtn.addEventListener('click', ()=>{
    const db = firebase.database();
    database.ref('Favoritos').set(null);
});
}