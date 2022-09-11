import styled from 'styled-components'

export const Container = styled.div`

    display:grid;
    grid-template-rows: 105 auto;
    grid-template-areas: 
    "header"
    "content";
`
export const FlexContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    margin-top: 4rem;

    gap: 4rem;

    >button .exclude {
        width: 100%;

        height: 5.6rem;
        text-align: center;

        padding: 1.7rem 0;

        background-color: ${({ theme }) => theme.COLORS.BLACK_002};
        color: ${({ theme }) => theme.COLORS.PINK};

        border: none;
        border-radius: 10px;

        margin: 1.6rem 0 3.2rem;


        &:disabled {
            opacity: 0.5;
            cursor: disabled;
        }
    }
`

export const ExcludeButton = styled.button`
    width: 100%;

    height: 5.6rem;
    text-align: center;

    padding: 1.7rem 0;

    background-color: ${({ theme }) => theme.COLORS.BLACK_002};
    color: ${({ theme }) => theme.COLORS.PINK};

    border: none;
    border-radius: 10px;

    margin: 1.6rem 0 3.2rem;


    &:disabled {
        opacity: 0.5;
        cursor: disabled;
    }
`
export const Form = styled.form`
    grid-area: content;
    display: flex;
    flex-direction: column;
    justify-content: left;

    padding: 4rem 12.3rem;

    >h1 {
        font-weight: 400;
        font-size: 3.6rem;
        line-height: 4.7rem;
        line-height: 100%;
        text-align: left;

        margin-top: 2.4rem;
    }

    > a {
        color: ${({ theme }) => theme.COLORS.PINK};

        display: flex;
        align-items: center;
        gap: 8px;

        
        font-size: 1.6rem;

        svg {
            font-size: 1.6rem;
        }
    }

    > textarea {
        width: 100%;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};

        display: flex;
        align-items: center;
        gap: 1.2rem;

        border-radius: 10px;
        border: none;

        margin-top: .8rem;

        padding: 2rem;

        resize: none;

        margin: 4rem 0;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GREY_TEXT}
        }
    }

    .tags {
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.BLACK}; 

        padding: 1.6rem;

        display: flex;
        align-items: center;
        justify-content: left;

        gap: 2.4rem;

        border-radius: 10px;

        margin-top: 2.4rem;
    }
`