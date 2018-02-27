const google = window.google;

class MultipleInfoWindow extends google.maps.OverlayView {
    
    constructor(markers, callback) {
        super();
        
        this.markers = markers;
        this.latLng = markers[0].position;
        this.div = null;
        this.isOpen = false;
        this.callback = callback;
    }
    
    onRemove() {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
        this.isOpen = false;
    }
    
    onAdd() {
        this.isOpen = true;
        let infoWindow = this.markers.map(marker => {
            return `
                <div class="multiple-corner" data-id=${marker.id}>
                    ${marker.name}
                </div>
            `;
        }).join(' ');
        let div = document.createElement('div');
        div.classList.add('info-window','info-window-multiple');
        div.innerHTML = infoWindow;
        let panes = this.getPanes();
        panes.floatPane.appendChild(div);
        this.div = div;
        
        google.maps.event.addDomListener(this.div, 'click', (e) => {
            if(e.target.closest('.multiple-corner')){
                this.callback(parseInt(e.target.dataset.id, 10));
            }
        });
    }
    
    draw() {
        let overlayProjection = this.getProjection();
        let position = overlayProjection.fromLatLngToDivPixel(this.latLng);
        this.div.style.top = position.y + 'px';
        this.div.style.left = position.x + 'px';
    }
          
}

export default MultipleInfoWindow;
