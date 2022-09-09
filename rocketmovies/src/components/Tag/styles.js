import styled from 'styled-components'

export const Container = styled.span`
    font-size: 1.2rem;
    padding: .5rem 1.6rem;
    border-radius: 5px;
    margin-right: 6px;
    background-color: #312E38;
    color: ${({ theme }) => theme.COLORS.WHITE}
`