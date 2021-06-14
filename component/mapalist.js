class mapalist{
    constructor(location){
        this.location = location;
    }

    render = () => {

        let component = document.createElement('div');

        let locationCont = document.createElement('div');
        locationCont.className = 'locationCont';
        locationCont.innerHTML = (

            '<h3>'+this.location.nombre+'</h3>'+'<h4>'+this.location.descripcion+'</h4>'

            );

        component.appendChild(locationCont);

        return component;

    }
}