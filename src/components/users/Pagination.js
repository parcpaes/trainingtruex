import React from 'react';
import {Link} from 'react-router-dom';

const Pagination = (props)=>{
    let numberOfPages, buttonBackPage,buttonNextPage =  <React.Fragment></React.Fragment>;    
    if(props.numpage>1){
        numberOfPages = numberOfPages = <li><a href='#1' className="pagination-link" aria-label="Goto page 1">{props.numpage}</a></li>;
        buttonBackPage = <Link to={`/${props.dataname}?page=${(props.numpage)?props.numpage-1:0}`} className="pagination-previous" onClick={()=>{props.backpage()}}>Back page</Link>;
    }
    if(props.totalPages>(props.numpage*8))
        buttonNextPage = <Link to={`/${props.dataname}?page=${props.numpage+1}`} className="pagination-next" onClick={()=>{props.nextpage()}}>Next page</Link>;
    
    return(
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
            {buttonBackPage}
            {buttonNextPage}
            <ul className="pagination-list">
                 {numberOfPages}
            </ul>
        </nav>
    )
}

export default Pagination;