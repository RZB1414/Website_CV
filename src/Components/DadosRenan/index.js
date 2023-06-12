import styled from "styled-components"
import imgBrasil from "../../Img/imgBrasil.png"
import imgEUA from "../../Img/imgEUA.png"
import imgItalia from "../../Img/imgItalia.png"

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 10, 19, 255);
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 33.3%;
  }
`;

const Box = styled.div`
  color: white;
  width: 400;
  margin: 10px;
`;

const Titulo = styled.h2`
  font-size: 30px;
  margin-top: 30px;
  margin-left: 20px;
  font-weight: 400;
`;

const SubTitulo = styled.h3`
  margin-top: 32px;
  font-size: 20px;
  margin-bottom: 0px;
  font-weight: 400;
`;

const List = styled.li`
  list-style-type: none;
  font-size: 20px;
  margin-bottom: 20px;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

const Data = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 18px;
`;

const Descricao = styled.p`
  margin-bottom: 25px;
  font-size: 20px;
  line-height: 1;
  text-align: justify;
`;

const List2 = styled.li`
    list-style-type: none;
    font-size: 20px;
    margin-bottom: 13px;
    margin-left: 30px;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 20px;
    margin-bottom: 10px;
`

function DadosRenan() {
    return (
      <Container>
        <Column>
          <Box>
            <Titulo>Academic Qualifications</Titulo>
            <ul>
              <List>
                <SubTitulo>SYSTEMS ANALYSIS & DEVELOPMENT</SubTitulo>
                <Data>2021 - 2023</Data>
                <Link
                  href="https://estacio.br/cursos/graduacao/analise-e-desenvolvimento-de-sistemas"
                  target="_blank"
                >
                  Estácio De Sá University
                </Link>
              </List>
              <List>
                <Link href="https://cursos.alura.com.br" target="_blank">
                  Alura Online Courses
                </Link>
              </List>
              <List>
                <Link>Languages</Link>
              </List>
              <Div>
                <Img src={imgBrasil} alt="Brazil flag" />
                C2
              </Div>
              <Div>
                <Img src={imgEUA} alt="EUA flag" />
                C1
              </Div>
              <Div>
                <Img src={imgItalia} alt="Italia flag" />
                B1
              </Div>
            </ul>
          </Box>
        </Column>
  
        <Column>
          <Box>
            <Titulo>Professional Experience</Titulo>
            <Descricao>
              I spent my last 17 years working as a professional volleyball player
              in Brazil, Italy, Turkey, and France, in which 10 years I defended
              the Brazilian National Team.
            </Descricao>
            <Descricao>
              The time of a new big change in my life is coming, since I am
              preparing myself to hang up my boots and make the transition to a
              new profession for which I am passionate, front end development.
            </Descricao>
            <Descricao>
              It will be a pleasure to discuss how my professional athlete soft
              skills linked to my learning at the University create an interesting
              profile for your business.
            </Descricao>
          </Box>
        </Column>
  
        <Column>
          <Box>
            <Titulo>My Skill Set</Titulo>

            <List2>JavaScript</List2>
            <List2>HTML</List2>
            <List2>CSS</List2>
            <List2>React</List2>
            <List2>Styled Components</List2>
            <List2>Node</List2>
            <List2>GitHub</List2>
            <List2>Java</List2>
            <List2>SQL</List2>
          </Box>
        </Column>
      </Container>
    );
  }
  
  export default DadosRenan;
  