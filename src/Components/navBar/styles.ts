import styled, { css } from 'styled-components'

interface IBorder{
  border:string;
}

export const Main = styled.aside`
  width: 80px;
  height: 100vh;
  background-color: #FFFFFF;
`

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

    img {
      width: 46px;
      height: 46px;
      margin: 20px auto;
    }
`

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`

export const Home = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  cursor: pointer;


  ${({ border }:IBorder) => border === 'home'
    && css`
    .border{
          background-color: #F06400;
          margin-right:auto;
          width: 4px;
          height: 40px;
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
          transition: all ease 600ms;
        }
    `}

  img {
      width: 32px;
      height: 32px;
      margin: 20px auto;
      transform: translateX(-10px) scale(0.9);
      transition: all ease 400ms;
    }

    :hover{
      img{
        transform: translateX(-10px) scale(1);
      }

      .border{
          background-color: #F06400;
          margin-right:auto;
          width: 4px;
          height: 40px;
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        }
    }
`
