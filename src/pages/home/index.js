import React from 'react'
import StylesDiv from './styles'

class Home extends React.Component{
    render(){
        return (
            <StylesDiv>
                    <div className="card">
                        <div>
                            <div id="img_container">
                                <div id="img_border">
                                    <img id="profile_img" alt="profile" src ="https://avatars1.githubusercontent.com/u/30562925?s=460&v=4"/>
                                </div>
                            </div>
                            <h1 id="name_data_card">Joaquin Giordano</h1>
                            <p className="info_data_card"><span role="img" aria-label=".">🇦🇷</span> Argentina, Buenos Aires</p>
                            <p className="info_data_card"><span role="img" aria-label=".">👨🏻‍💻</span> Developer</p>
                            <p className="info_data_card" id="techs">NodeJS, Javascript, Python, Electron, ReactJS, HTML, CSS, SASS, Mysql, ExpressJS</p>
  
                        </div>
                        
                    </div>
                    
            </StylesDiv>
           
        )
    }
}

export default Home