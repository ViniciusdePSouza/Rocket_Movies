import styled from 'styled-components'

export const Container = styled.div`

    display:grid;
    grid-template-rows: 105 auto;
    grid-template-areas: 
    "header"
    "content";
    
`
export const BoxContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    margin-top: 2.4rem;

    gap: .8rem;

    >h1 {
        margin-right: 1.2rem;
    }

    >span {
        margin-right: .5rem;
    }

    >img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
    }

    >svg {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`
export const Content = styled.div`
    grid-area: content;
    display: flex;
    flex-direction: column;
    justify-content: left;

    padding: 4rem 12.3rem;

    .tag-wrapper{
        margin: 4rem 0; 

        display: flex;
        align-items: center;
    }

    > a {
        color: ${({ theme }) => theme.COLORS.PINK};

        display: flex;
        align-items: center;
        gap: 8px;

        
        font-size: 2.4rem;

        svg {
            font-size: 2.4rem;
        }
    }

    > p{
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 21px;
    };
`

export const RatingBox = styled.div`
        display: flex;
        align-items: center;
        justify-content: left;
        text-align: left;
        gap: .8rem;

        margin-top: .8rem;
`