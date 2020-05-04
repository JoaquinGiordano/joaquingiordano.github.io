import React from 'react'
import { Context } from '../../components/Navbar.context'
import { FaGithub } from 'react-icons/fa'
import { IoMdPlanet } from 'react-icons/io'
import StylesDiv from './styles'
import jsonProjects from './projects.json'

class Projects extends React.Component{

    constructor(props){
        super(props)
    }

    static contextType = Context
    

    render(){
        return (
            <StylesDiv>
                {
                    jsonProjects.map((project, i) =>(
                            <div className={`project_card_container ${this.context.active && "hidden"}`}  key={i}>
                                <div className="project_card">
                                    <div className="inner_cards_project_front">
                                        <div className="img_border">
                                            <img alt="" src={project.image} />
                                        </div>
                                        <h2 className="app_title">{project.name}</h2>
                                    </div>
                                    <div className="inner_cards_project_back">
                                        {project.description && <i className="project_description">"{project.description}"</i>}
                                        {project.hyperlink_repository && <button className="project_button github"  onClick={() => window.open(project.hyperlink_repository,'__blank')}><FaGithub/><p>Github</p></button>}
                                        {project.hyperlink_page && <button className="project_button page"  onClick={() => window.open(project.hyperlink_page,'__blank')}><IoMdPlanet/><p>Page</p></button>}
                                    </div>
                                </div> 
                            </div>
                        )
                    )
                }
            
            </StylesDiv>
              
           
        )
    }
}

export default Projects