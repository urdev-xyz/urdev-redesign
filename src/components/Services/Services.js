import React from 'react';
import './Services.css';
import appdev from '../../appdev.svg';




class Services extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className={'Services'}>
                <div className={'Services-card'}>
                    <div className='Services-card-image'>
                        <img src={ appdev }/>
                    </div>
                </div>
                <div className={'Services-card'}>
                <div className='Services-card-image'>
                        <img src={ appdev }/>
                    </div>
                </div>
                <div className={'Services-card'}>
                <div className='Services-card-image'>
                        <img src={ appdev }/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;