import _ from 'underscore';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import settings from '../../utils/map_settings';
import AddButtons from './add_corner_buttons';
import { updateStep } from './actions';
import { getStepData } from './selectors';

const google = window.google;

class SecondStep extends Component {
    
    constructor(props) {
        super(props);
        
        this.onInputChange = this.onInputChange.bind(this);
    }
       
    componentDidMount() {
        
        const coords = this.props.stepData.coords.value;
        
        this.map = new google.maps.Map(this.refs.map, settings.mapOpt);
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
            <div className='modal_step'>
                <div className="modal_step_map">
                    <div className="modal_step_map_inputs">
                        {_.map(data, (value, key) => (
                        key !== 'coords' &&
                        <div className="modal_input" key={key} >
                            <label className="modal_input_label">{value.label}</label>
                            <input className="modal_input_input"
                                placeholder={value.placeholder}
                                type='text' 
                                value={value.value}
                                name={key}
                                onChange={e => this.onInputChange(e)} />
                        </div> 
                        ))}
                    </div>
                    <div ref='map' className='map-add-corner'></div>
                </div>
                <AddButtons back forward/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    stepData: getStepData(state)
})

export default connect(mapStateToProps, { updateStep })(SecondStep);