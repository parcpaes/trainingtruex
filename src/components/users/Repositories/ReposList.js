import React from 'react';
import useResource from '../../hooks/useResource';
import usePagination from '../../hooks/usePagination';
import queryString from 'query-string'; 
import ReposDetail from './ReposDetail';
import Pagination from '../Pagination';
import {Link} from 'react-router-dom';

const ReposList = (props)=>{    
    const {userId} = props.match.params;
    if(!userId) return <div>Usuario not found</div>    
    const {location} = props;        
    const querystring = queryString.parse(location.search);
    const currentPage = (querystring.page)?(parseInt(querystring.page)-1):0;

    const repositoryData = useResource(`users/${userId}/repos`);
    const pagination = usePagination(repositoryData,currentPage);

    const reposListPage = ()=>{
        if(!pagination.slicedata) return <div>No existe ningun repositorio</div>        
        if(!pagination.slicedata.length) return (<progress className="progress is-large is-info" max="100">60%</progress>); 
        return pagination.slicedata.map((repo)=>{ 
            return (<div className="column is-narrow" key={repo.id}><ReposDetail repo={repo}/></div>)
        });
    }

    return (
        <React.Fragment>
            <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        <Link to={`/users`}>{userId}</Link> 
                    </h1>
                    <h2 className="subtitle">
                        Pository List
                    </h2>
                </div>
            </div>
            </section>
            <div className="section">            
                <div className="columns is-multiline is-mobile">
                    {reposListPage()}
                </div>
                <Pagination 
                    dataname={`users/${userId}/repos`}
                    numpage={pagination.numerOfPage} 
                    totalPages={repositoryData.length} 
                    nextpage={pagination.handleNextPageClick} 
                    backpage={pagination.handleBackPageClick}/>
            </div>
        </React.Fragment>
    );
}

export default ReposList;