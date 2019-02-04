import React from 'react';
import './Services.css';



class Services extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className={'Services'}>
                <div className={'Services-card'}>
                    <div style={{background: 'var(--purple)'}} className='Services-card-header'>
                        App Dev
                    </div>
                </div>
                <div className={'Services-card'}>
                    <div style={{background: 'var(--yellow)'}} className='Services-card-header'>
                        Web Dev
                    </div>
                </div>
                <div className={'Services-card'}>
                    <div style={{background: 'var(--pink)'}} className='Services-card-header'>
                        Email Dev
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;