import Typewriter from "typewriter-effect"
import ScrollToBottomButton from "../ScrollToBottomButton"
import styled from "styled-components"
import imgBackground from "../../Img/eu_background.jpeg"

const Div = styled.div`
    margin: 0;
    height: 100vh;
    width: 100vw;
    background-image: url(${imgBackground});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`

const IntroContainer = styled.h1`
    padding-left: 10px;
    padding-right: 10px;
    margin: 0;
    background-color: black;
    opacity: 0.7;
    border-radius: 30px;
    font-size: 40px;
    color: white;
    font-family: 'Roboto', sans-serif;
`

const TypewriterContainer = styled.h2`
    margin-top: 5px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: black;
    opacity: 0.7;
    border-radius: 30px;
    color: white;
    font-size: 40px;
    font-family: 'Roboto', sans-serif;

`

function Intro() {
    return (
        <Div>
        <IntroContainer>
            HELLO, i`M RENAN BUIATTI...
        </IntroContainer>
        <TypewriterContainer>
        <Typewriter
            options={{
                strings:['PROFESSIONAL VOLLEYBALL ATHLETE','AND A FUTURE', 'FRONT END DEVELOPER.'],
                pauseFor: 1000,
                autoStart: true,
                loop: true,
            }}
        />
        </TypewriterContainer>
             <ScrollToBottomButton />
        </Div>
    )
}

export default Intro