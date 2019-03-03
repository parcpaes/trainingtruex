import React from 'react';
import {Link} from 'react-router-dom';

const Pagination = (props)=>{        
    return(
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
            <Link to={`/${props.dataname}?${(props.numpage)?props.numpage-1:1}`} className="pagination-previous" onClick={()=>{props.backpage()}}>Back page</Link>
            <Link to={`/${props.dataname}?${props.numpage+1}`} className="pagination-next" onClick={()=>{props.nextpage()}}>Next page</Link>                
            <ul className="pagination-list">
                <li><a href='#1' className="pagination-link" aria-label="Goto page 1">{props.numpage}</a></li>
            </ul>
        </nav>
    )
}

export default Pagination;