import styled from 'styled-components'

export const Container = styled.div`
    grid-area: header;

    width: 100%;
    height: 11.6rem;

    padding: 2.4rem 12.3rem;

    display: flex;
    align-items: center;
    gap:6.4rem;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > h1 {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 3.2rem;

        color: ${({ theme }) => theme.COLORS.PINK}
    }

    >div {
        display:flex;
        align-items: center;
        gap: 0.9rem;

        img {
            width: 6.4rem;
            height: 6.4rem;

            border-radius: 50%;
        }

        div {
            display:flex;
            flex-direction: column;

            font-family: 'Roboto Slab';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.8rem;

           button {
            color: ${({ theme }) => theme.COLORS.GREY};
            justify-self: flex-end;

            border:none;
            background: transparent;

            font-size: 1.2rem;
           }
        }
    }
`