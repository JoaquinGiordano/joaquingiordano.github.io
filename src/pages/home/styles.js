import React from 'react'
import styled from 'styled-components'

export default styled.div`

display: flex;
justify-content: center;
align-items: center;
position:relative; 
width: 100vw;
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
    .card{
        display: flex;
        justify-content: center;
        align-items: center;
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
    #img_container{
        width: 160px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
}

@media only screen and (min-width: 768px) {
    .card{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 350px;
        height: 450px;
        background-color: white;
        transition: 0.3s ease-in-out;
        animation: fadeinMenu .5s;
        padding: 20px;
        border-radius: 10px;
    }

    #img_container{
        width: 200px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
}

#profile_img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    text-align: center;
}

#img_border{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 0px;
    padding: 4px;
    background: linear-gradient(326deg, #0059be 0%, #44dada 100%);
}

#name_data_card{
    font-size: 25px;
}

.info_data_card{
    font-size: 15px;
}

#techs{
    margin: 0px 40px;
}

h1{
    margin: 0;
    color: #252525;
    margin: 10px 0px 10px 0px;
}


`