import React from 'react'
import styled from 'styled-components'

export default styled.div`

display: flex;
align-items: center;
justify-content: center;
position:relative; 
width: 100%;
animation: fadein 1s;
text-align: center;
height: calc(100% - 64px);

@keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

/*Mobile*/
@media only screen and (max-width: 768px) {
    .contact_card{
        position: absolute; 
        width: calc(100% - 75px);
        height: calc(100% - 80px);
        padding: 20px 20px;
        float: left;
        background-color: white;
        transition: 0.3s ease-in-out;
        animation: fadeinMenu .5s;
        border-radius: 10px;
    }
}

@media only screen and (min-width: 768px) {
    .contact_card{
        position: absolute;
        height: 310px;
        width: 400px;
        background-color: white;
        transition: 0.3s ease-in-out;
        animation: fadeinMenu .5s;
        padding: 20px;
        border-radius: 10px;
        
    }
}
#form_container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.contact_via{

    text-align: center;
    width: 100%;
    list-style: none;
    margin: 2px 0px;
    
}

.contact_via a{
    text-align: center;
    padding: 20px 0px;
    width: 100%;
    float: left;
    text-decoration: none;
    color: black;
    transition: 0.3s ease-in-out; 
    border-radius: 10px;
    font-size: 20px;
    
}

.contact_via a:hover{
 
    transition: 0.3s ease-in-out;
    font-weight: 700;
    cursor: pointer;
    color: white;
}

.github a:hover{
    background-color: #202020;
}

.skype a:hover{
    background-color: #1783ff;
}

.email a:hover{
    background-color: #1cdd83;
}

.via_icon{
    font-size: 20px;
    padding-right: 10px;
}


#contact_via_form{

    width: 100%;
    float: left;
    transition: 0.3s ease-in-out;
    animation: fadeinMenu .5s;
    border-radius: 10px;
    
    
}

h1{
    margin: 20px 0px;
}

`