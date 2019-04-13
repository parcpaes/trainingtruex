import {useState, useEffect} from 'react';
import github from '../../apis/github';

const useResource = (pathurl)=>{    
    const [sourceData, setResource] = useState([]);    
    useEffect(()=>{
        github.get(pathurl).then((res)=>{
            setResource(res.data);            
        }).catch((err)=>{            
            setResource([{error: err}]);
        });
    },[pathurl]);
   return sourceData
}

export default useResource;