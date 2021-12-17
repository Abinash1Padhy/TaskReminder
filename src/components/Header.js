import React from 'react'
import propTypes from 'prop-types'
import Button from './Button'
//import { ImBold } from 'react-icons/im'
//props is a User defined name
const Header = (props) => {

    return (
        <header>
            <div className='header'>
                <h1>Task Tracker</h1>
                <Button color={props.showAdd ? 'red':'green'} 
                text={props.showAdd ? 'Close' : 'Add Task' } 
                onClick={props.onAdd}
                />
            </div>
            <p style={dynamicHeaderStyling}>Hello {props.title}</p>
        </header>
    )
}
 
//assign default value to props(attributes of XML tag)
Header.defaultProps = {
    title:"User"
}

Header.propTypes ={
    title: propTypes.string.isRequired
}


const dynamicHeaderStyling ={
    font:"bold 15px Arial, sans-serif",
    color:"#9400D3",
    backgroundColor:"yellow"
}

export default Header

