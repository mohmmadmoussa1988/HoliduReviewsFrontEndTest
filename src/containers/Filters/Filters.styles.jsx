import styled from 'styled-components';

export const FiltersWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
@media only screen and (max-width: 962px) {
    flex-direction:column;
    margin-bottom:50px;
  }
  @media only screen and (max-width: 768px) and (min-width: 640px) {
    flex-direction:row;
  }
`;


export const Wrapper = styled.div`
display:flex;
flex-direction:row;
margin:15px 10px 10px 0px;
justify-content:space-between;

&:nth-child(2){
    @media only screen and (max-width: 768px) and (min-width: 640px)  {
        width:40%;
    }
}
&:nth-child(3){
    @media only screen and (max-width: 768px)   {
        select{
            width:60%;
        }
    }
}
&:last-child{
    margin-right:0px;

   
}
label{
    font-family: 'SF-light';
    padding-top:5px;
    font-size:12px;
}
select{
    border:1px solid #eee;
    padding:5px;
    border-radius:5px;
    margin:0px 5px;
    @media only screen and (max-width: 962px) {
    flex-direction:column;
    width:34%;
  }
 
}


`;



export const ButtonsWrapper = styled.div`
display:flex;
flex-direction:row-reverse;
margin:15px 10px 10px 0px;
button{
    margin:0px 10px;
    background:none;
    border:1px solid #eee;
    border-radius:5px;
    
    cursor:pointer;
   
    &:first-child{
        margin-left:0px;
    }
    @media only screen and (max-width: 962px) {
        width:50%;
        padding:5% 5%;
    }
    @media only screen and (max-width: 768px) and (min-width: 640px)  {
        width:46%;
        padding:2% 2%;
    }
}
`;


export const IntegerPart = styled.select.attrs({ name: 'IntegerPart' })`

`;
export const FractionalPart = styled.select.attrs({ name: 'FractionalPart' })`

`;

export const Channels = styled.select.attrs({ name: 'Channels' })`

`;
export const SubmitButton = styled.button.attrs({ type: 'submit' })`
 &:hover{
        background:#5ac100;
        color:#fff;
    }
`;

export const ClearButton = styled.button.attrs({ type: 'reset' })`
 &:hover{
        background:#d30808;
        color:#fff;
    }
`;


export const Separator = styled.div`

`;
export const FilterLabel = styled.div`
margin:18px 10px 10px 0px;
font-size:14px;
font-family: 'SF-regular';

`;


