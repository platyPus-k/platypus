import { type } from "@testing-library/user-event/dist/type"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { keyframes } from 'styled-components'
import { setConstantValue } from "typescript"

const TitleWrapper = styled.div`
    position:absolute;
    // background:white;
    width:300px;
    height:100px;
    top:calc(50% - 100px);
    left:calc(50% - 150px);
    @media (min-width: 375px) {
        
    }
    @media (min-width: 768px) {
        width:700px;
        height:200px;
        top:calc(50% - 100px);
        left:calc(50% - 350px);
    }
`
const TitleArea = styled.div`
    position:relative;
    width:100%;
    height:100%;
    @media (min-width: 375px) {
            
    }
    @media (min-width: 768px) {
    }
`
const TitleChar = styled.h1`
    text-align:center;
    font-size:50px;
    margin:0;
    margin-top:auto;
    margin-bottom:auto;
    letter-spacing:2px;
    @media (min-width: 375px) {
        
    }
    @media (min-width: 768px) {
        
    }
`
const zoomOutLetter = keyframes`
    0% { 
        opacity:0;  
        transform:scale(100,100)
        
    }
    50%{
        opacity:0.1;
    }
    100% {
        opacity:1; 
        transform:scale(1,1);
    }
`
const Letter1 = styled.span`
    display:inline-block;
    color:#696969;
    animation-name: ${zoomOutLetter};
    animation-duration: 2s;
	animation-iteration-count: 1;
    animation-delay:1s;
    animation-fill-mode: both;
    opacity:0;
`
const Letter2 = styled.span`
    display:inline-block;
    color:#696969;
    animation-name: ${zoomOutLetter};
    animation-duration: 2s;
	animation-iteration-count: 1;
    animation-delay:1s;
    animation-fill-mode: both;
    opacity:0;
`
const Letter3 = styled.span`
    display:inline-block;
    color:#696969;
    animation-name: ${zoomOutLetter};
    animation-duration: 2s;
	animation-iteration-count: 1;
    animation-delay:3s;
    animation-fill-mode: both;
    opacity:0;
`
const Letter4 = styled.span`
    display:inline-block;
    color:#696969;
    animation-name: ${zoomOutLetter};
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-delay:0.5s;
    animation-fill-mode: both;
    opacity:0;
`
const Letter5 = styled.span`
    display:inline-block;
    color:#696969;
    animation-name: ${zoomOutLetter};
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-delay:2s;
    animation-fill-mode: both;
    opacity:0;
`
const Letter6 = styled.span`
    display:inline-block;
    color:#696969;
    animation-name: ${zoomOutLetter};
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-delay:2.5s;
    animation-fill-mode: both;
    opacity:0;
`
const Letter7 = styled.span`
    display:inline-block;
    color:#696969;
    animation-name: ${zoomOutLetter};
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-delay:0.8s;
    animation-fill-mode: both;
    opacity:0;
`
const Subtitle1 = styled.p`
    font-size:16px;
    margin:0;
    color:#696969;
`
const Subtitle2 = styled.p`
    font-size:16px;
    margin:0;
    color:#696969;
`

export const Title = () => {
    let frameCount = 0;
    let s1_count = 0;
    let s2_count = 0;
    const sentence1 = "When you gaze into the abyss";
    const master_strings = sentence1.split("");
    const sentence2 = "the abyss gazes into you";
    const sub_strings = sentence2.split("");
    const type_strings = ["#","%","+","~","A","≒","h","£","§","¡","•¶"];
    // const [sentence2,setSentence2] = useState<string>("");
    useEffect(() => {
        
        
        const under_line : HTMLElement | any = document.getElementById("subtitle-bottom");

        // 
        //     const char_num = Math.floor(Math.random()*type_strings.length);
        //     setTimeout(() => {
        //         over_line.innerHtml = type_strings[char_num];
        //         console.log("in");
        //     },1000);
        // }
        // over_line.innerHtml = master_strings[0];
        
        let startTime = performance.now();
        setTimeout(() => {
            let timeId1 : any = setInterval(() => {
                const fps : any = 1000/60;
                let nowTime = performance.now();
                let nowFrame = (nowTime-startTime)/fps;
                if(nowFrame >  frameCount){
                    let c = 0;
                    while(nowFrame > frameCount){
                        frameCount++;
                        // 更新処理
                        if(frameCount%2 === 0){
                            const token_area : any = document.getElementById("type-token1");         
                            if(s1_count > master_strings.length-1){
                                token_area.innerText = " ";
                            }else{
                                const rand_num = Math.floor((Math.random() * type_strings.length));
                                token_area.innerText = type_strings[rand_num];
                            }
                        }
                        if(frameCount%8 === 0){
                            if(s1_count > master_strings.length-1){
                                const over_line : any = document.getElementById("type-main-part1");         
                                clearInterval(timeId1);
                                over_line.style.transition = "1s 0s ease-in";
                                over_line.style.color = "white";
                            }else{
                                const over_line : any = document.getElementById("type-main-part1");         
                                over_line.innerText += master_strings[s1_count];
                            }
                            s1_count++;
                        }
                        if(++c>=4){
                            // nowTime === frameCount
                            break;
                        }
                    }
                }
            },100);
        },4000);
        setTimeout(() => {
            let timeId2 : any = setInterval(() => {
                const fps : any = 1000/60;
                let nowTime = performance.now();
                let nowFrame = (nowTime-startTime)/fps;
                if(nowFrame >  frameCount){
                    let c = 0;
                    while(nowFrame > frameCount){
                        frameCount++;
                        // 更新処理
                        if(frameCount%2 === 0){
                            const token_area : any = document.getElementById("type-token2");         
                            if(s2_count > sub_strings.length-1){
                                token_area.innerText = " ";
                            }else{
                                const rand_num = Math.floor((Math.random() * type_strings.length));
                                token_area.innerText = type_strings[rand_num];
                            }
                        }
                        if(frameCount%10 === 0){
                            if(s2_count > sub_strings.length-1){
                                const under_line : any = document.getElementById("type-main-part2");         
                                clearInterval(timeId2);
                                under_line.style.transition = "1s 0s ease-in-out";
                                under_line.style.color = "white";
                            }else{
                                const under_line : any = document.getElementById("type-main-part2");         
                                under_line.innerText += sub_strings[s2_count];
                            }
                            s2_count++;
                        }
                        if(++c>=4){
                            // nowTime === frameCount
                            break;
                        }
                    }
                }
            },100);
        },6000);
        // function mainLoop()
        // {
        //     const fps : any = 1000/60;
        //     let nowTime = performance.now();
        //     let nowFrame = (nowTime-startTime)/fps;
        //     if(nowFrame >  frameCount){
        //         let c = 0;
        //         while(nowFrame > frameCount){
        //             frameCount++;
        //             // 更新処理
        //             const rand_num = Math.floor((Math.random() * type_strings.length));
        //             const over_line : any = document.getElementById("subtitle-top");
                    
        //             over_line.innerText += "aaaa";
        //             if(++c>=4){
        //                 // nowTime === frameCount
        //                 break;
        //             }
        //         }
        //     }
        //     window.requestAnimationFrame(mainLoop);
        // }
        

    },[]);
    return(
        <TitleWrapper>
            <TitleArea>
                <TitleChar>
                    <Letter1>P</Letter1>
                    <Letter2>l</Letter2>
                    <Letter3>a</Letter3>
                    <Letter4>t</Letter4>
                    <Letter4>y</Letter4>
                    <Letter5>p</Letter5>
                    <Letter6>u</Letter6>
                    <Letter7>s</Letter7>
                    <Subtitle1><span id="type-main-part1"></span><span id="type-token1"></span></Subtitle1>
                    <Subtitle2><span id="type-main-part2"></span><span id="type-token2"></span></Subtitle2>
                </TitleChar>
            </TitleArea>
        </TitleWrapper>
    )
}