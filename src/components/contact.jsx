import React from 'react';
import './index.css'

const Contact = () => {
    return (

        <section>

            <div id="contact" className="contact pt-5">
                <div class="container ">
                    <div className='text-center '>
                        <h2 className="display-6">Contact Me</h2>
                    </div>
                    <div className='mt-5 align-items-center fs-5' >
                        <p ><i class="ms-5 me-2 bi bi-whatsapp"> </i> 0838049795544</p>
                        <p ><i class="ms-5 me-2 bi bi-envelope"> </i> mdpamungkas15@gmail.com</p>
                        <p ><i class="ms-5 me-2 bi bi-linkedin" > </i><a href="https://linkedin.com/in/mochamaddwipamungkas" target='blank'>linkedin.com/in/mochamaddwipamungkas</a></p>
                    </div>
                </div>

            </div>

        </section>

    );
};

export default Contact;

