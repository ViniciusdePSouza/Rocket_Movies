import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;

    height: 5.6rem;
    text-align: center;

    padding: 1.7rem 0;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    border: none;
    border-radius: 10px;

    margin: 1.6rem 0 3.2rem;
    
    
    &:disabled {
        opacity: 0.5;
        cursor: disabled;
    }
`