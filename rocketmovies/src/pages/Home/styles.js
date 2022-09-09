import styled from 'styled-components'

export const Container = styled.div`

    display:grid;
    grid-template-rows: 105 auto;
    grid-template-areas: 
    "header"
    "content";

    >div {
        grid-area: content;
        padding: 5rem 10.6rem;
        overflow-y: auto;

        &&::-webkit-scrollbar-track {
            background:  ${({ theme }) => theme.COLORS.PINK};       
        }

        &&::-webkit-scrollbar-thumb {
            background-color: transparent;
            border-radius: 10px; 
            border: none;
        }
    }
`
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export const Section= styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
`

export const ButtonAdd = styled.button`
    width: 20rem;
    height: 4.8rem;

    display: flex;
    align-items: center;

    padding: 3.2rem;
    gap: .8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    border-radius: 10px;
    border:none;
`