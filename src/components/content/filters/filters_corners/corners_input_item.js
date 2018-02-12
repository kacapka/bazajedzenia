import React, { Component } from 'react';

class OptionItem extends Component {
    
    constructor(props) {
        super(props);
        
        this.onClickHandle = this.onClickHandle.bind(this);
    }
    
    onClickHandle(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.onSelect(this.props.option, e);
    }
    
    render() {
        const { option } = this.props;
        
        return (
            <div className={option.className}
                onClick={this.onClickHandle}>
                <div>
                    {option.label}
                </div>
                <div className='select__type--corners-district'>
                    {option.value}
                </div>
            </div>
        );
    }
}

export default OptionItem;