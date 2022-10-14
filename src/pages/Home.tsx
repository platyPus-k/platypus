import styled from "styled-components";
import { Blizard } from "../components/Blizard";
import { Title } from "../components/Title";



const WallColor = styled.div`
    width:100vw;
    background:black;
`

export const Home = () => {
    return(
        <WallColor>
            <Title/>
            <Blizard/>
        </WallColor>
    )
}