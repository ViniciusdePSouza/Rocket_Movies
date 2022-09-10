import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: transparent;
    margin-top: 4.2rem;

    > a {
        color: ${({ theme }) => theme.COLORS.PINK};
        border: 0;
    }

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-left: 16px;
    }

`
