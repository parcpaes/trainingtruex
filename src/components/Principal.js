import React from 'react';
import {Link} from 'react-router-dom';

const Principal = ()=>{
    return (
        <div className="section">
            <Link to='/users' style={{fontSize:'36px'}}>Users</Link>
        </div>
    )
}

export default Principal;