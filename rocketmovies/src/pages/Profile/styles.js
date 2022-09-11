import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    
    header {
        width: 100%;
        height:14.4rem;

        background-color: rgba(255, 133, 155, 0.05);

        display:flex;
        align-items: center;
        justify-content: left;

        padding: 6.4rem 14.4rem;

        a {
            display: flex;
            align-items: center;
            gap: 8px;
            
            color: ${({ theme }) => theme.COLORS.PINK};

            font-size: 1.6rem;
        }

        svg {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 2.4rem;
        }
    }
`

export const Form = styled.form`
    width: 34rem;

    margin-top: 3.6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8rem;

    > div:nth-child(5){
        margin-bottom: 1.6rem;
    }
`

export const Avatar = styled.div`
    position: relative;
    margin: -13rem auto 1.5rem;

    
    width: 18.6rem;
    height: 18.6rem;

    > img {
        width: 18.6rem;
        height: 18.6rem;

        border-radius: 50%;
    }

    >label {
        width: 4.8rem;
        height:4.8rem;

        border:none;

        background-color: ${({ theme }) => theme.COLORS.PINK};

        position: absolute;
        bottom: 7px;
        right: 7px;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;

        input {
            display:none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800}
        }
    }
    

`