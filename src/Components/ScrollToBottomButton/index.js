import styled, { keyframes } from "styled-components";

const animateWidth = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`

const animateWidthReverse = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`

const Button = styled.button`
margin-bottom: 20px;
position: relative;
padding: 12px 24px;
font-family: 'Poppins', sans-serif;
font-size: 16px;
color: black;
font-weight: 600;
background-color: white;
border: none;
border-radius: 50px;
cursor: pointer;
overflow: hidden;

&:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: black;
  opacity: 0.2;
}

&:hover:before {
  animation: ${animateWidth} 2s forwards;
}

&:not(:hover):before{
  animation: ${animateWidthReverse} 2s forwards;
}

&:active {
  background-color: green;
  transform: translateY(1px);
  box-shadow: none;
}
`

function scrollToBottomSmoothly() {
  const screenWidth = window.innerWidth;
  const duration = screenWidth < 768 ? 1000 : 500;
  const startPosition = window.scrollY;
  const maxScrollPosition = 620;
  const distance = maxScrollPosition - startPosition;
  const startTime = performance.now();

  function step(timestamp) {
    const currentTime = timestamp - startTime;
    const scrollY = easeInOutQuad(currentTime, startPosition, distance, duration);
    window.scrollTo(0, scrollY);

    if (currentTime < duration && window.scrollY < maxScrollPosition) {
      requestAnimationFrame(step);
    }
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(step);
}




function ScrollToBottomButton() {

  const handleScroll = () => {
    scrollToBottomSmoothly(1500)
  }

  return (
    <Button onClick={handleScroll}>ABOUT ME</Button>
  )
}

export default ScrollToBottomButton;