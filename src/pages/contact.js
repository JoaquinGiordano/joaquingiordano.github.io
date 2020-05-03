import React from 'react'
import './styles/contact.css'
import { MdEmail } from 'react-icons/md'
import { FaGithub, FaSkype } from 'react-icons/fa'
class Contact extends React.Component{
    render(){
        return (
                <div id="contact">
                    <div className="contact_card">
                        <div id="form_container">
                            <h2>Contact Me</h2>
                            <ul id="contact_via_form">
                                <li className="contact_via github"><a href="https://github.com/JoaquinGiordano"><FaGithub className="via_icon"/>Github</a></li>
                                <li className="contact_via skype"><a href="skype:joaquin.giordano1?chat"><FaSkype className="via_icon"/>Skype</a></li>
                                <li className="contact_via email"><a href="mailto:joaquin_giordano@outlook.com" ><MdEmail className="via_icon"/>Email</a></li>
                            </ul>
                        </div>
                       
                    </div>
                </div>   
             
        )
    }
}

export default Contact