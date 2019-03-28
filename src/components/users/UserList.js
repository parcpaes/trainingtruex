import React from 'react';
import userResource from './userResource';
import UserDetail from './UserDetail';
import Pagination from './Pagination';
import queryString from 'query-string';

const ListUsers = (props)=>{    
    const {location} = props;
    const querystring = queryString.parse(location.search);    
    const numg = (querystring.page) ? (parseInt(querystring.page)-1)*8:0;
    const userData = userResource('users',numg);
    
    const userListPages = ()=>{
        if(!userData.slicedata) return <div>No existe ningun usuario</div>       
        if(!userData.slicedata.length) return <progress className="progress is-link" value="80" max="100">80%</progress>;
        return userData.slicedata.map((user)=>{
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
                numpage={userData.numpage}
                totalPages={userData.sourceData.length} 
                nextpage={userData.handleNextClick} 
                backpage={userData.handleBackClick}/>
        </div>
    )
}

export default ListUsers;