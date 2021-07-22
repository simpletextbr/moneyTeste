import styled, { css } from 'styled-components'

interface IStatus{
  status: number
  list?: number
  left?: number
}

export const Main = styled.div`
  width: 40vw;
  background-color: #FFFFFF;
`
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  .box{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    padding: 2px;
    border: 1px solid rgba(0,71,187, 0.3);
    border-radius: 40px;

  }

  p{
    font-size: 16px;
    font-weight: 700;
    color: #0047BB;
    margin: auto 10px auto 20px;
  }

  svg{
    color: #F06400;
    cursor: pointer;
  }
`

export const FavList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 60px;
  margin-left: 20px;
  height: 76vh;
  overflow: hidden;

  .title{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    p{
      margin-left: 10px;
      font-size: 18px;
      font-weight: 700;
    }

    svg{
    color: #0047BB;
  }
  }

  .box {
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-around;
    width: 80%;

    .deletar{
    width: 24px;
    height: 24px;
    cursor:pointer;
    animation: slideup 800ms forwards;
    }
  }
`

export const Fav = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;
  transition:all ease 1s;

  .card{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-width: 300px;
    width: 300px;
    height: 74px;
    padding: auto 10px;
    background-color: #FFF;
    border-radius: 8px;
    animation: slideup 400ms forwards;
    transition: all ease 400ms;
    box-shadow: 1px 2px 10px 1px rgba(0,0,0,0.2);


    .left{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 6px;

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
      margin-right: 6px;
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
  }
`
