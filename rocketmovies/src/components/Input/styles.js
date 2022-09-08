import styled from 'styled-components'

export const Container = styled.div`
    
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    display: flex;
    align-items: center;
    gap: 1.2rem;
    
    >input {
        width: 100%;
        height: 5.6rem;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.GREY};

        font-size: 1.4rem;
        font-weight: 400;

        line-height: 1.8rem;
    
        border:none;

        padding: 1.9rem 2.4rem;

        border-radius: 1rem;
    }
    

`