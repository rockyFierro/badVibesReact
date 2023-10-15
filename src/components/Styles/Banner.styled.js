import styled from "styled-components";
import bgImg from '../../assets/images/monroe_sofa_001.webp'

export const Banner = styled.div `
width: 1000px;
max-width: 100%;
padding: 0 20px;
font-weight: 800;
margin: 0 auto;
color: black;
background-image: url(${bgImg});
position: relative;
background-size: contain;
overflow: hidden;
z-index: 100;
&:before{
    content: ""; 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(120deg, #DC143C, #FFC033);
    z-index: -1;
    opacity: .8;
  }

`