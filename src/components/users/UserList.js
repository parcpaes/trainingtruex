import React from 'react';
import userResource from './userResource';
import UserDetail from './UserDetail';
import Pagination from './Pagination';

const ListUsers = ()=>{
    //query user
    const userData = userResource(`users?since=%1&per_page=8`); 

    const UserListPages = ()=>{       
        if(!userData.sourceData) return <div>No existe ningun usuario</div>       
        if(!userData.sourceData.length) return <div>Loading...</div>
        return userData.sourceData.map((user)=>{
            return (
                <div className="column is-narrow" key={user.id}><UserDetail user={user}/></div>
            );
        })
    }
    return(
        <div className="section">
            <div className="columns is-multiline is-mobile">            
                {UserListPages()}
            </div>            
            <Pagination nextpage={userData.handleNextClick} backpage={userData.handleBackClick}/>
        </div>
    )
}

export default ListUsers;