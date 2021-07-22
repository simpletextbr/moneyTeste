import styled, { css } from 'styled-components'

interface IStatus{
  status: number
}

interface IUnknow {
  unknow: boolean
}

export const Title = styled.div`
display: flex;
flex-direction: row;
margin: 20px;
animation: slideup 1s forwards;


p{
  font-size: 26px;
  font-weight: 800;
  margin-left: 10px;
}
`

export const Search = styled.div`
display: flex;
flex-direction: row;
align-items:center;
justify-content: center;
margin-left: 20px;
animation: slideup 2s forwards;

input{
  width:360px;
  height:40px;
  border-radius: 8px;
  padding-left: 20px;
  border: 1px solid #E1E0E7;
  ${({ unknow }:IUnknow) => unknow === true && css`
    border: 1px solid #FF0000;
  `}

  :first-line{
    color: #ACACAC;
  }
}

.error{
  color: #FF0000;
  font-weight: 600;
  animation: slideRight 1s forwards;

  @keyframes slideRight {
    from{
      opacity: 0;
      transform: translateX(-20px)
    }
    to{
      opacity: 1;
      transform: translateX(10px)
    }
  }
}

svg{
  width:40px;
  height:40px;
  padding: 10px;
  margin-left: -40px;
  border-radius: 8px;
  background-color: #0047bb;
  cursor: pointer;
}
`

export const Graphic = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
animation: slideup 3s forwards;

.data{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: auto 20px;

  .enterprise{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .fav{
      margin-right: 10px;
      color: #0047bb;
      cursor:pointer;
    }

    .name{
      .symbol{
        font-weight: 600;
      }
      .name{
        color: #657786
      }
    }
  }

  .latest{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .price{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 20px;
      p{
        margin-left: 10px;
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
    }
  }
}

width: 94%;
height: 380px;
background-color: #FFFFFF;
border-radius: 8px;
margin-left: 20px;
margin-top: 10px;
`

export const Tooltip = styled.div`
display:flex;
align-items: center;
justify-content: center;
background-color: #0047bb;
color: #FFFFFF;
padding: 6px 10px;
margin-bottom: 100px;
`
