
import styled, { css } from 'styled-components'

interface IStatus{
  status: number
}

export const Recently = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 800px;
  overflow: hidden;
  animation: slideup 3s forwards;


  .title{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 94%;
    margin: 20px 20px;

    .left{
      display: flex;
      flex-direction: row;
      align-items: center;

      img{
        width: 20px;
        height: 20px;
      }

      p{
        font-weight: 600;
        font-size: 20px;
        margin-left: 4px;
      }
    }

    .right{
      color: #0047BB;
      svg{
        cursor:pointer;
        margin: 0 10px;
      }
    }
  }
`

export const Cards = styled.div`
display: flex;
flex-direction: row;
height: 100px;
transition:all ease 1s;
overflow: hidden;
max-width: 3300;
`

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  min-width: 300px;
  width: 300px;
  height: 74px;
  margin: 0px 10px;
  background-color: #FFF;
  border-radius: 8px;
  animation: slideup 2s forwards;
  transition: all ease 400ms;


  .left{
    display: flex;
    flex-direction: row;
    align-items: center;

    .fav{
      color: #0047bb;
      cursor:pointer;
    }

    .logo{
      img{
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid #cecece ;
      margin: auto 8px;
        }
      }

    .name{
      cursor:pointer;
        .symbol{
          font-weight: 600;
          font-size: 12px;
        }
        .name{
          color: #657786;
          font-size: 12px;
          max-width:90%;
        }
      }
    }

  .changes{
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: center;
    ${({ status }:IStatus) => status > 0 ? css`
      color: #79C300;
      ` : css`
      color: #D64B45;
      `}
    img{
      margin-left: 6px;
      margin-right: 4px;
    }
  }

  :hover{
    box-shadow: 1px 2px 10px 1px rgba(0,0,0,0.2);
  }
`
