import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 60vw;
  height: 100vh;
  border-top-left-radius: 40px;
  background-color:#f5f8fa;

  @keyframes slideup {
    from{
      transform: translateY(30px);
      opacity: 0;
    }
    to{
      transform: translateY(0px);
      opacity: 1;
    }
  }
`

export const Load = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100vh;
  border-top-left-radius: 40px;
  background-color:#f5f8fa;

`
