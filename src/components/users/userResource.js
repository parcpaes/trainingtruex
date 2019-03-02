import {useState, useEffect} from 'react';
import github from '../../apis/github';

//get user data
const userResource = (pathurl)=>{
    //states page and users
    const [increment,setIncrement] = useState(1);    
    const [sourceData, setResource] = useState([]);

    useEffect(()=>{        
        github.get(pathurl.replace('%1',increment)).then((res)=>{
            setResource(res.data);            
        }).catch((err)=>{
            setResource({error: err});
        });
    },[pathurl.replace('%1',increment)]);

   return {
        //pagination
        handleNextClick:function(){
            if(increment>sourceData.length-1) return;            
            setIncrement(increment+1);         
        },
        handleBackClick:function(){   
            if(increment<1) return;        
            setIncrement(increment-1);        
        },
        sourceData
   }
}

export default userResource;