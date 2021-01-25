import styled from 'styled-components'

const IntroBox = styled.div`
    height: 90vh;
    width: 100vw;

    ::after{
        content: "";
        background-color: rgba(0,0,0,0.45);
        background-image: url(${props => props.image});
        background-size: cover;
        background-position: 20% center;
        background-blend-mode: multiply;
        top: 10vh;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -2;

        clip-path: polygon(0 0, 0 75vh, 50% 100%, 100% 75vh, 100% 0);

        @media screen and (max-width: 425px) {
            background-image: url(${props => props.imagePhone});
        }
    }
`

export default IntroBox