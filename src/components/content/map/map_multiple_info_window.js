const google = window.google;

class MultipleInfoWindow extends google.maps.OverlayView {
    
    constructor(markers, callback) {
        super();
        
        this.markers = markers;
        this.latLng = markers[0].position;
        this.infoLocation = markers[0].info;
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
        let info = this.infoLocation;
        let first = info.charAt(0);
        if(info && (first === first.toUpperCase() && first !== first.toLowerCase())){
            info = info.split(',')[0];    
        } else {
            info = '';
        }
        let title = `<div class="multiple-title">${info}</div>`;
        let corners = this.markers.map(marker => {
            return `
                <div class="multiple-corner" data-id=${marker.id}>
                    ${marker.name}
                </div>
            `;
        }).join(' ');
        let divInner = title + corners;
        let div = document.createElement('div');
        div.classList.add('info-window','info-window-multiple');
        div.innerHTML = divInner;
        let panes = this.getPanes();
        panes.floatPane.appendChild(div);
        this.div = div;
        
        google.maps.event.addDomListener(this.div, 'click', (e) => {
            e.stopPropagation();
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
