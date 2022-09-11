import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GREY}` : "none"};
    margin-bottom: 8px;
    border-radius: 10px;
    padding: 0 16px;
    > button { 
        border: none;
        background: none;
    }
    .button-delete {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
    .button-add {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
    > input { 
        width: 100%;
        height: 56px;
        padding: 12px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        
        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GREY_TEXT};
        }
    }
`