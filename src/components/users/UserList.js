import React from 'react';
import useResource from './useResource';
import UserDetail from './UserDetail';
import Pagination from './Pagination';
import queryString from 'query-string';
import usePagination from './usePagination';

const ListUsers = (props)=>{    
    const {location} = props;
    const querystring = queryString.parse(location.search);

    const currentPage = (querystring.page) ? (parseInt(querystring.page)-1)*8:0;

    const userData = useResource('users');
    const pagination = usePagination(userData,currentPage);
    
    const userListPages = ()=>{
        if(!pagination.slicedata) return <div>No existe ningun usuario</div>       
        if(!pagination.slicedata.length) return <progress className="progress is-link" value="80" max="100">80%</progress>;
        return pagination.slicedata.map((user)=>{
            return (
                <div className="column is-narrow" key={user.id}><UserDetail user={user}/></div>
            );
        })
    }
    return(
        <div className="section">
            <div className="columns is-multiline is-mobile">         
                {userListPages()}
            </div>
            <Pagination 
                dataname='users' 
                numpage={pagination.numerOfPage}
                totalPages={userData.length} 
                nextpage={pagination.handleNextPageClick} 
                backpage={pagination.handleBackPageClick}/>
        </div>
    )
}

export default ListUsers;