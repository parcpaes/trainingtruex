import React from 'react';

const Pagination = (props)=>{    
    return(
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
            <a className="pagination-previous" onClick={()=>{props.backpage()}}>Previous</a>
            <a className="pagination-next" onClick={()=>{props.nextpage()}}>Next page</a>                
        </nav>
    )
}

export default Pagination;