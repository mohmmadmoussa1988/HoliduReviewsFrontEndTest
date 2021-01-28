import React,{useState,useEffect} from 'react';
import {useSelector } from 'react-redux';
import {ErrorDivLabel,ErrorDiv} from './error.styles';
const Error = () =>{
    const appError = useSelector(state=>state.app.ERROR);
    const [showError,setshowError] =useState(false);

    useEffect(() => {
        setshowError(appError);
    },[appError]);

    return(
      <>  
        {showError &&
       <ErrorDiv>
           <ErrorDivLabel>
              {appError}
           </ErrorDivLabel>
       </ErrorDiv>
        }
      </> 
    )
}

export default Error;