import styled from 'styled-components'
import backgroundImageDoors from '../../assets/cinema_popcorn.png'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display: grid;

    grid-template-columns: auto 45%;
`

export const Form = styled.form`
    padding: 0 11rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:0.8rem;

    >h1 { 
        color: ${({ theme }) => theme.COLORS.PINK};

        font-style: 700;
        font-size: 4.8rem;        
        line-height: 6.3rem;

        text-align: left;
    }

    >p {
        width: 100%;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.8rem;

        color: ${({ theme }) => theme.COLORS.GREY_TEXT};

        text-align: left;

        margin-bottom: 5.8rem;
    }

    >h2 {
        width: 100%;

        text-align: left;
        font-weight: 400;
        font-size: 2.4rem;
        line-height: 3.2rem;

        margin-bottom: 3.6rem;
    }

    > a {
        text-decoration: none;

        color: ${({ theme }) => theme.COLORS.PINK};

        margin-top: 3.8rem;

        font-weight: 300;
        line-height: 21px;
    }
`

export const BackgroudImage = styled.div`
    background-image: url(${backgroundImageDoors});
    background-size: cover;
    background-position: center 20%;
    filter: opacity(0.6)
`