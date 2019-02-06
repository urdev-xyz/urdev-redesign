import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super();
    }

    render(){
        return (
            <section>
                <h1>Contact Us</h1>
                <div className="Contact">
                    <div className="Contact-inner">
                        <div className='form-top'>
                            <input type="text" name="Full Name" placeholder="Full Name" />
                            <input type="text" name="Email" placeholder="Email" />
                        </div>
                        <div className='form-top'>
                            <input type="text" name="Company" placeholder="*Company" />
                            <input type="text" name="phone" placeholder="*Phone" />
                        </div>
                        <div className='form-message'>
                            
                        </div>
                        <div className='form-options'>
                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default Contact;