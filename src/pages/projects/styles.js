import React from 'react'
import styled from 'styled-components'

export default styled.div`
position:relative; 
display: flex;
width: 100%;
animation: fadein 1s;
text-align: center;
flex-wrap: wrap;


.hidden{
    opacity: 0;
}

.app_title{
   color: #212121; 
}

.project_card_container{
    padding: 10px;
    width: calc(25% - 20px);
    perspective: 1000px;
}

.project_card{
    height: 200px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.project_card_container:hover .project_card {
    transform: rotateY(180deg);
}

.inner_cards_project_front, .inner_cards_project_back {
    position: absolute;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    background-color: white;
}
  

.inner_cards_project_front{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.inner_cards_project_back{
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: rotateY(180deg);
}


.project_card .img_border{
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 4px;
    border-radius: 50%;
    background-color: #e4e4e4;
    width: 100px;
}

.project_card img{
    width: 100px;
    background-color: #f1f1f1;
    border-radius: 50%;
}

.project_button {
    color: white;
    border: none;
    margin-top: 5px;
    border-radius: 5px;
    font-size: 18px;
    padding: 10px 12px;
    width: 150px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    outline: none;
}

.project_description{
    font-size: 18px;
    color: #515151;
    padding: 0px 20px;
    margin: 0px 0px 10px 0px;
}

.project_button p{
    margin: 0;
    padding: 0px 10px;
}

.project_button.github{
    background-color: #212121;
}

.project_button.github:hover {
    background-color: #313131;
}

.project_button.github:active {
    background-color: #3f3f3f;
}



.project_button.page{
    background-color: #0063d4;
}

.project_button.page:hover {
    background-color: #0f71e0;
}

.project_button.page:active {
    background-color: #257ce0;
}



@media screen and (min-width: 960px) and (max-width: 1020px){
    .project_card_container{
        width: calc(33.3% - 20px) !important;
    }
}

@media screen and (min-width: 768px) and (max-width: 960px){
    .project_card_container{
        width: calc(50% - 20px) !important;
    }
}


@media screen and (max-width: 768px) {
    .project_card_container{
        width: calc(100% - 20px);
    }
    
    .project_card{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: calc(100% - 75px);
        margin: 0px 15px;
        padding: 20px 20px;
        background-color: white;
        transition: 0.3s ease-in-out;
        animation: fadeinMenu .5s;
        border-radius: 10px;
    }
}

@media screen and (min-width: 768px) {
    .project_card{
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: white;
        transition: 0.3s ease-in-out;
        animation: fadeinMenu .5s;
        padding: 20px;
        border-radius: 10px;
        height: 200px;
    }
}



`