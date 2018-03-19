import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';

import settings from 'utils/map_settings';
import AddButtons from '../add_corner_buttons';
import { updateStep } from 'actions/addActions';
import { getStepData } from 'selectors/add/addSelector';

const google = window.google;

class SecondStep extends Component {
    
    constructor(props) {
        super(props);
        
        this.onInputChange = this.onInputChange.bind(this);
    }
       
    componentDidMount() {
        
        const coords = this.props.stepData.coords.value;
        
        this.map = new google.maps.Map(this.mapDiv, settings.mapOpt);
        this.map.setCenter({lat: coords[0], lng: coords[1]});
    
        this.marker = new google.maps.Marker({
            position: new google.maps.LatLng(coords[0], coords[1]), 
            map: this.map, 
            icon: settings.cornerIcon,
            draggable: true
        });
        
        google.maps.event.addDomListener(this.marker, 'dragend', () => {
            let coords = [this.marker.position.lat(), this.marker.position.lng()];
            this.props.updateStep({value: coords, name: 'coords'});
        });
    }
    
    onInputChange(e) {
        this.props.updateStep({ value: e.target.value, name: e.target.name });
    }
    
    render() {
        
        const data = this.props.stepData;
    
        return(
            <Fragment>
                <div className="modal_step_map">
                    <div className="modal_step_map_inputs">
                        <div className="modal_step_map_description">
                            Aby określić dokładne położenie restauracji ustaw czerwony pin zgodnie z rzeczywistym polożeniem lokalu. 
                        </div>
                        {_.map(data, (value, key) => (
                        key !== 'coords' &&
                        <div className="modal_step_map_item" 
                            key={key} 
                        >
                            <label className="modal_label">
                                {value.label}
                            </label>
                            <input className="modal_input"
                                placeholder={value.placeholder}
                                type='text' 
                                value={value.value}
                                name={key}
                                onChange={e => this.onInputChange(e)} 
                            />
                        </div> 
                        ))}
                    </div>
                    <div ref={ref => this.mapDiv = ref} className='map-add-corner'></div>
                </div>
                <AddButtons back forward/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    stepData: getStepData(state)
})

export default connect(mapStateToProps, { updateStep })(SecondStep);