import styled from "styled-components";

export const Header = styled.header`
background-color: #d2d2d4;
height: 80px ;
justify-content: space-around;
display: flex ;
align-items: center; 


  span, div, option, select{
    font-size: 20px;
}
`

export const Container = styled.form`
display: flex;
border: 1px solid;
flex-wrap: wrap;
`

export const BoxCard = styled.div`
justify-content: center ;
border: 6px solid rgba(80,88,255,0.47);border:1px solid;
width:200px;
border-radius: 5px;
box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
padding: 30px;
margin: 20px;
transition: all 0.3s ease-out;

      img{
    width:200px;
    height:200px;
    border: 1px solid;
  }
      p{
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    padding:5px;
    margin: 5px ;

  }
      button{
      width: 100%; 
      padding: 5px;

  }
`