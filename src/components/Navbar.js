import React from 'react'
import {Link} from "react-router-dom"

function Navbar(){

    return(
        <div>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/todo"><li>Todo</li></Link>
                <Link to="/status"><li>Status</li></Link>
            </ul>

        </div>
    )
}

export default Navbar