import logo from '../assets/logo.png';
import {styled} from "styled-components";

// npm install styled-components
const StyledP = styled.p`color: #8630d5;`
const StyledDiv = styled.div`color: #8630d5;`

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;

    & img {
        object-fit: contain;
        margin-bottom: 2rem;
        width: 11rem;
        height: 11rem;
    }

    & h1 {
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 0.4em;
        text-align: center;
        text-transform: uppercase;
        color: #9a3412;
        font-family: 'Pacifico', cursive;
        margin: 0;
    }

    & p {
        text-align: center;
        color: #a39191;
        margin: 0;
    }

    @media (min-width: 768px) {
        margin-bottom: 4rem;
        
        & h1 {
            font-size: 2.25rem;
        }
    }
`

export default function Header() {
    const tmp = true
    return (<StyledHeader>
        <img src={logo} alt="A canvas"/>
        <h1>ReactArt</h1>
        {/*<StyledP>Lorem ipsum</StyledP>*/}
        {/*<StyledDiv>Abc</StyledDiv>*/}
        <p style={{
            textAlign: tmp ? 'center' : 'left'
        }}
           className={`label ${tmp ? 'ok' : ''}`}
        >A community of artists and art-lovers.</p>
    </StyledHeader>);
}
