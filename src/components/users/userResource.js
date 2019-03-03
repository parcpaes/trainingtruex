import {useState, useEffect} from 'react';
import github from '../../apis/github';

const userResource = (pathurl,ng)=>{
    //states page and users    
    const [sourceData, setResource] = useState([]);
    const [increment,setIncrement] = useState(ng);
    const [slicedata, setSliceData] = useState([]);
    const max_range=8, min_range=1;
    useEffect(()=>{        
        github.get(pathurl).then((res)=>{
            setResource(res.data);
            setSliceData(res.data.slice(increment,max_range+increment));         
        }).catch((err)=>{            
            setResource({error: err});
        });
    },[pathurl]);

   return {
        //pagination
        handleNextClick:function(){            
            if(slicedata.length<max_range) return;            
            setIncrement(increment+1);            
            setSliceData(sourceData.slice(increment,max_range+increment));            
        },
        handleBackClick:function(){
            if(increment<min_range) return;
            setIncrement(increment-1);            
            setSliceData(sourceData.slice(increment,max_range+increment));
        },
        slicedata: slicedata,            
        numpage: increment,
        sourceData
   }
}

export default userResource;