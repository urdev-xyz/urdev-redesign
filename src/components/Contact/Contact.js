import React from 'react';
import './Contact.css';
import Button from '../Button/Button'

class Contact extends React.Component {
    constructor(props) {
        super();
    }

    render(){
        return (
            <section>
                <div className="Contact">
                    <div className="Contact-inner">
                        <h1>Contact Us</h1>
                        <p>At urdev we use a combination of the latest technologies and development practices to deliver fast, easy-to-use, and scalable applications.</p>
                        <div className='form-top'>
                            <input type="text" required='true' name="Full Name" placeholder="Full Name" />
                            <input type="text" required='true' name="Email" placeholder="Email" />
                        </div>
                        <div className='form-top'>
                            <input type="text" name="Company" placeholder="*Company" />
                            <input type="text" name="phone" placeholder="*Phone" />
                        </div>
                        <div className='form-top'>
                            <textarea required='true' type="text-area" placeholder="Message"></textarea>
                        </div>
                        <div className='form-options'>
                            
                        </div>
                        <Button>Submit</Button>
                    </div>
                </div>
            </section>
        )
    }

}

export default Contact;