import React from 'react'
import { Context } from './Navbar.context'
import { NavLink } from 'react-router-dom'
import logoImg from '../assets/logo_click.png'
import { FaBars } from 'react-icons/fa'
import './styles/Navbar.css'



class Navbar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            menuMobile: 'mobile invisible',
            scrolled: false
        }
    }

    componentDidMount(){
        document.querySelector('.App').addEventListener('scroll',(e)=>{
            this.setState({
                scrolled: document.querySelector('.App').scrollTop > 0
            })
        })
    }

    chageMobileMenu = () =>{
        if(this.state.menuMobile === 'mobile invisible'){
            this.setState({
                menuMobile: 'mobile'
            })
            this.context.setNavbarState(true)
        }else{
            this.setState({
                menuMobile: 'mobile invisible'
            })
            this.context.setNavbarState(false)
        }
        
       
    }

    static contextType = Context
    
    render(){
        let {state:{scrolled}} = this;
        return(
            <React.Fragment>
                <div className={`${scrolled && "navbar-filled" }`} id="navbar">
                    <div id="bar_left">
                        <img id="logo" src={logoImg} alt="logo" />
                    </div>
                    <ul id="bar_right">
                        <li id="menu_button_mobile"><FaBars onClick={this.chageMobileMenu} className={`${scrolled && "menu-logo-black"}`} id="menu_logo"/></li>
                        <div className="pc">
                            <li className="menu_items"><NavLink className="link" to="/contact">Contact Me</NavLink></li>
                            <li className="menu_items"><NavLink className="link" to="/projects">Projects</NavLink></li>
                            <li className="menu_items"><NavLink className="link" to="/">Home</NavLink></li>
                        </div>
                    </ul>
                
                </div>
                <div id="mobile_menu" className={this.state.menuMobile} >
                            <h2>Menu</h2>
                            <li onClick={this.chageMobileMenu} className="menu_items_mobile"><NavLink className="link" to="/">Home</NavLink></li>
                            <li onClick={this.chageMobileMenu} className="menu_items_mobile"><NavLink className="link" to="/projects">Projects</NavLink></li>  
                            <li onClick={this.chageMobileMenu} className="menu_items_mobile"><NavLink className="link" to="/contact">Contact Me</NavLink></li>
                </div>
                <div className="relative_bar">
                
                </div>
            </React.Fragment>
        
        );
    }
}

export default Navbar;