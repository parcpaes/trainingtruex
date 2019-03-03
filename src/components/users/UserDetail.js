import React from 'react';
import {Link} from 'react-router-dom';

const UserDetail =(props)=>{
    const {user} = props;    
    return(
        <div className="card">
            <div className="card-image">
                <figure className="image is-5by4">
                <img src={`${user.avatar_url}`} alt="avatar"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">                    
                    <div className="media-content">
                        <p className="title is-4">{user.login}</p>                        
                    </div>
                </div>                
                <footer className="card-footer">
                    <p className="card-footer-item">
                        <span><a href={`${user.html_url}`} target="_blank" rel="noopener noreferrer">Github</a></span>
                    </p>
                    <p className="card-footer-item">
                        <span><Link to={`/users/${user.login}/repos`}>Repositorios</Link></span>
                    </p>
                </footer>
            </div>
        </div>
    )
}

export default UserDetail;