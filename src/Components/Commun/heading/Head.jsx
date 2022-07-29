import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
const Head = () => {
    return (
        <div>
            <section className='head' >
                <div className="container flexSB">
                    <div className="logo">
                        <h1>ALIMNI</h1>
                        <span>ONLINE EDUCATION & LEARNING</span>
                    </div>
                    <div className="social">
                        <i className="icon"><FaFacebookF/></i>
                        <i className="icon"><BsInstagram/></i>
                        <i className="icon"><BsYoutube/></i>
                    </div>
                </div>        
            </section>
        </div>
    )
}

export default Head
