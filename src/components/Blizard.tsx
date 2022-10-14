import { useEffect,useState } from "react";
import styled from "styled-components";
import { Box } from "./Box";

const Canvas = styled.canvas`
    width:100vw;
    height:100%;
`

export const Blizard = ()=>{
    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    } 
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      useEffect(() => {
        const onResize = () => {
          setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const v_canvas : any = document.createElement("canvas");
    const v_context : any = v_canvas.getContext("2d");
    const [window_w, window_h] = [windowDimensions.width,windowDimensions.height];
    v_canvas.width = window_w;
    v_canvas.height = window_h;

    const animFrame : any = window.requestAnimationFrame;
    const coodinate = {w: 50,h: 50};
    const fps : any = 1000/60;
    let startTime : number = 0;
    let frameCount : number = 0;
    const snows : Array<Snow> = [];
    const snowImg = new Image();
    snowImg.src = `${process.env.PUBLIC_URL}/assets/snowlist.png`;

    const getRandSx = () => {
        return Math.floor((Math.random() * 10))*50;
    }

    const getRandSy = () => {
        return Math.floor((Math.random() * 5))*50;
    }
    const getRandCoordinate = (val:number) => {
        return Math.floor(Math.random() * (val-1))+1; 
    }
    const getFallSpeed = () => {
        return Math.floor(Math.random() * 7)+1; 
    }
    const getWindLevel = (type:number) => {
        if(type === 1){
            
            return Math.floor((Math.random()+0.2) * 3)*2;
        }else{
            return Math.floor((Math.random()+0.2) * 3)*-2;
        }
    }
    class Snow {
        sx: number;
        sy: number;
        px: number;
        py: number;
        pw: number;
        ph: number;
        wind:number;
        blur:number;
        speed : number;
        window_w:number;
        constructor( sx : number, sy : number, px:number, py:number ,blur:number,window_w:number) {
            this.sx = sx;
            this.sy = sy;
            this.px = px;
            this.py = py;
            this.pw = coodinate.w-20;
            this.ph = coodinate.h-20;
            this.blur = blur;
            this.speed = getFallSpeed();
            this.wind = getWindLevel(Math.floor(Math.random() * 2)+1);
            this.window_w = window_w;
        }
        fall(){
            this.px += this.wind+Math.sin(this.px/20)*0.3;
            this.py += this.speed;
            // this.pw = coodinate.w+Math.floor(Math.random()*30)+1;
            // this.ph = coodinate.h+Math.floor(Math.random()*30)+1;
            if (this.py > v_context.canvas.height) {
                this.py = 0;
                this.px = getRandCoordinate(this.window_w); 
            }
        }

        draw()
        {   
            let py = this.py
            v_context.shadowColor = 'white';
            v_context.shadowBlur = this.blur;
            v_context.drawImage(snowImg,this.sx,this.sy,coodinate.w,coodinate.h,this.px,py,this.pw,this.ph);
        }
        
    }
    function snow_move() {
        for (var num = 0; num < snows.length; num++) {
            snows[num].fall();
        }
    }
    function snow_draw() {
        for (var num = 0; num < snows.length; num++) {
            snows[num].draw();
        }
    }
    function snow_volume(snow_count : number, window_w : number,window_h : number) {
        for(var num = 0; num < snow_count; num++){
            const sx : number = getRandSx();
            const sy : number = getRandSy();
            const px : number = getRandCoordinate(window_w); 
            const py : number = getRandCoordinate(window_h); 
            const blur = Math.floor((Math.random() * 10))+1;
            snows[num] = new Snow(sx,sy,px,py,blur,window_w);
        }
    }


    useEffect(() => {        
        
        const canvas : any = document.getElementById("blizard");
        const context : any = canvas?.getContext("2d");
        snowImg.onload = () => {    
            console.log(`window_w : ${window_w}`);
            // context.drawImage(snowImg,sx,sy,coodinate.w,coodinate.h,px,50,coodinate.w,coodinate.h);
            snow_volume(200,window_w,window_h);
            // eslint-disable-next-line
            startTime = performance.now();
            
            function mainLoop()
            {
                let nowTime = performance.now();
                let nowFrame = (nowTime-startTime)/fps;
                if(nowFrame >  frameCount){
                    let c = 0;
                    while(nowFrame > frameCount){
                        frameCount++;
                        // 更新処理
                        snow_move();
                        if(++c>=4){
                            // nowTime === frameCount
                            break;
                        }
                    }
                    // 描画処理
                    v_context.clearRect(0, 0, window_w, window_h);
                    context.clearRect(0, 0, window_w, window_h);
                    snow_draw();
                    context.drawImage(v_canvas,0,0,window_w,window_h,0,0,window_w,window_h);
                }
                animFrame(mainLoop);
            }
            // mainLoop();
        }
        window.onload = () => {
        }
        
    },[])

    return(
        <>
        <Canvas width={window_w} height={window_h} id="blizard">
        <Box></Box>
        </Canvas>
        
        </>
    )
}
