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
//        console.log(position.x, position.y);
//        //get new bounds and move map to see whole info window
//        let sw, ne, pointSW, pointNE, coordsSW, coordsNE, bounds;
//        ne = { x: position.x + 50, y: position.y - 50 }
//        sw = { x: position.x - 77, y: position.y + 20 }
//        
//        console.log(position.x, position.y);
//        pointNE = new google.maps.Point(ne.x, ne.y);
//        pointSW = new google.maps.Point(sw.x, sw.y);
//        coordsNE= overlayProjection.fromDivPixelToLatLng(pointNE);
//        coordsSW= overlayProjection.fromDivPixelToLatLng(pointSW);
//
//        bounds = new google.maps.LatLngBounds(coordsSW, coordsNE);
//        map.setZoom(17);
    }
      
}

export default InfoWindow;
