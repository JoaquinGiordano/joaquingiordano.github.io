import React from 'react'

const Context = React.createContext(false)

class NavbarContextProvider extends React.Component{

    state = {
        active: false
    }

    setNavbarState = (args)=>{
        this.setState({
            active: args
        })
    }

    render(){

        let { children } = this.props
        let { state:{active},setNavbarState } = this
        
        
        return(
            <Context.Provider value={{active, setNavbarState}}>{children}</Context.Provider>
        )
    }

}

export {
    Context,
    NavbarContextProvider
};