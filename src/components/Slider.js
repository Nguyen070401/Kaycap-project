import { ArrowLeftOutlined, ArrowRightAltOutlined } from '@material-ui/icons'
import React from 'react'
import { useState } from "react";
import { sliderItems } from "../data";
import styles from "./Slider.module.css"
import styled from "styled-components";
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };


  return (
    <div className={styles.Container}>
      <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined/>          
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item)=>(
            <Slide  bg={item.bg} key={item.id}>
            <div className={styles.ImgContainer}>
            <img className={styles.Image} alt="" src={item.img}/>
            </div>

            <div className={styles.InfoContainer}>
            <h1 className={styles.Title}>{item.title}</h1>
            <p className={styles.Desc}>{item.desc}</p>
            <button className={styles.Button}>SHOW NOW</button>

            </div>
            </Slide>
          ))}
      </Wrapper>  
      <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightAltOutlined/>          
      </Arrow>
    </div>
  )
}

export default Slider
