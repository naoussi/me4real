import React from 'react'
import { Link } from 'react-router-dom';

function err404(props) {
    return(
        <div  >

            <img src="/404-error.png"  width="100%"/>

            <p style={{ textAlign: "center" }}>
                <Link to="/">Go to Home </Link>
            </p>    
        </div>
    )
}
export default err404