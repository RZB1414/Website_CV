import Intro from './Components/TypeWriterText';
import DadosRenan from './Components/DadosRenan';
import styled from 'styled-components';

const AppStyle = styled.body`
  background-color: black;
  min-height: 100vh;
  min-width: 100vw
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

function App() {
  return (
    <AppStyle>
    <Intro />
    <DadosRenan />
    </AppStyle>
  );
}

export default App;
