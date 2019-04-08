import {useState, useEffect} from 'react';
import github from '../../apis/github';

const userResource = (pathurl,ng)=>{
    //states page and users    
    const [sourceData, setResource] = useState([]);
    const [increment,setIncrement] = useState(ng);
    const [slicedata, setSliceData] = useState([]);
    
    const max_range=8, min_range=0, rang=8;
    
    useEffect(()=>{
        github.get(pathurl).then((res)=>{
            setResource(res.data);            
            setSliceData(res.data.slice(increment,max_range+increment));            
        }).catch((err)=>{            
            setResource([{error: err}]);
        });
    },[pathurl]);

   return {
        //pagination
        handleNextPageClick:function(){
            if(slicedata.length<max_range) return;            
            setSliceData(sourceData.slice(increment+rang,max_range+increment+rang));
            setIncrement(increment+rang);
        },
        handleBackPageClick:function(){
            if(increment<min_range) return;
            setSliceData(sourceData.slice(increment-rang,max_range+increment-rang));
            setIncrement(increment-rang);
        },
        slicedata: slicedata,
        numpage: (increment+rang)/(rang),//show number page
        sourceData
   }
}

export default userResource;