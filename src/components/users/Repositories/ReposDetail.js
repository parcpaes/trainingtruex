import React from 'react';

const ReposDetail = (props)=>{    
    const {repo} = props;    
    return (
        <div className="box" style={{width:'250px'}}>
        <article className="media">
            <div className="media-content">
                <div className="content">                    
                        <p className='subtitle'> <a href={`${repo.html_url}`}>{repo.name}</a></p>                                                               
                            {(repo.description)? <span>repo.description</span> :<span>No description</span>}                        
                             
                </div>
                <nav className="level is-mobile">
                    <div className="content">                  
                        <ul>
                            <li>
                                <span className="tag">Issues</span>
                                <span className="tag is-rounded is-warning">12</span>                                        
                            </li>
                            <li>
                                <span className="tag">Open Issues</span>
                                <span className="tag is-rounded is-info">{repo.open_issues_count}</span>                                      
                            </li>
                            <li>
                                <span className="tag">Forks</span>
                                <span className="tag is-rounded is-primary">{repo.forks_count}</span>
                            </li>
                        </ul>
                    </div>                                                        
                </nav>
            </div>
        </article>
        </div>
    );
}

export default ReposDetail;