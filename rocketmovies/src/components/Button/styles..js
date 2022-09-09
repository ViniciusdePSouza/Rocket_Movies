import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    
    &:disabled {
        opacity: 0.5;
        cursor: disabled;
    }
`