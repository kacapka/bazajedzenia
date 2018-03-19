const google = window.google;

class InfoWindow extends google.maps.OverlayView {
    
    constructor(name, street, coords) {
        super();
        
        this.name = name;
        this.street = street;
        this.latLng = coords;
        this.div = null;
        this.isOpen = false;
    }
    
    onRemove() {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
        this.isOpen = false;
    }
    
    onAdd() {
        this.isOpen = true;
        let infoWindow = `
            <div class="info-window__name">${this.name}</div>
            <div class="info-window__street">${this.street}</div>`;
        let div = document.createElement('div');
        div.classList.add('info-window');
        div.innerHTML = infoWindow;
        let panes = this.getPanes();
        panes.floatPane.appendChild(div);
        this.div = div;
    }
    
    draw() {
        let overlayProjection = this.getProjection();
        let position = overlayProjection.fromLatLngToDivPixel(this.latLng);
        this.div.style.top = position.y + 'px';
        this.div.style.left = position.x + 'px';
    }
      
}

export default InfoWindow;
