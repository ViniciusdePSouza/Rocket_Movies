import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: none;
    border-radius:10px;
    padding: 3.2rem;
    margin-bottom: 2.4rem;    

    display: flex;
    flex-direction: column;
    > h1 {
        flex: 1;
        
        text-align: left;
        font-weight: 700;
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
        color:  ${({ theme }) => theme.COLORS.GREY_TEXT};

        margin-top: 1.5rem;
        text-align: left;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 1.5rem;
    }
    
`

export const RatingBox = styled.div`
        display: flex;
        align-items: center;
        justify-content: left;
        text-align: left;

        margin-top: .8rem;
`