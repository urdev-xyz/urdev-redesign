import React from 'react';
import './Services.css';
import appdev from '../../appdev.svg';
import webdev from '../../webdev.svg';





class Services extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className={'Services'}>
                <div className={'Services-card'}>
                    <div style={{background: 'var(--pink)'}} className='Services-card-image'>
                        <img src={ webdev }/>
                    </div>
                    <div className='Service-card-content'>
                        <h1>Web Dev</h1>
                        <p>At urdev we use a combination of the latest technologies and development practices to deliver fast, easy-to-use, and scalable applications.</p>
                    </div>
                </div>
                <div className={'Services-card'}>
                    <div style={{background: 'var(--yellow)'}} className='Services-card-image'>
                        <img src={ appdev }/>
                    </div>
                    <div className='Service-card-content'>
                        <h1>App Dev</h1>
                        <p>At urdev we use a combination of the latest technologies and development practices to deliver fast, easy-to-use, and scalable applications.</p>

                    </div>
                </div>
                <div className={'Services-card'}>
                    <div style={{background: 'var(--light-blue)'}} className='Services-card-image'>
                        <img src={ appdev }/>
                    </div>
                    <div className='Service-card-content'>
                        <h1>SEO</h1>
                        <p>At urdev we use a combination of the latest technologies and development practices to deliver fast, easy-to-use, and scalable applications.</p>

                    </div>
                </div>
            </div>
        );
    }
}

export default Services;