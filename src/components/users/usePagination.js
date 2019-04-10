import {useState} from 'react';

function usePagination(sourceData=[],currentPage=0,perPage=8){
    const [page,setPage] = useState(currentPage);
    let slicedata =  sourceData.slice(page,page+perPage);
    const MINNUMBERPAGE= 0;
    return {
        handleNextPageClick:function(){
            if(slicedata.length<perPage) return;
            const endIndex = page+perPage*2;
            slicedata = sourceData.slice(page+perPage ,endIndex);
            setPage(page+perPage);
        },
        handleBackPageClick:function(){
            if(page<MINNUMBERPAGE) return;
            slicedata = sourceData.slice(page-perPage,page);
            setPage(page-perPage);
        },
        numerOfPage: (page+perPage)/(perPage),//show number page
        slicedata: slicedata,
    }
}

export default usePagination;