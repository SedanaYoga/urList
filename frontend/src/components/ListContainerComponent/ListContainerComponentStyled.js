import styled from 'styled-components'

export const ListContainerStyled = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  /* background: red; */
  .list-type {
    width: 100%;
    text-align: center;
  }
  .division {
    /* border: 1px solid black; */
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .title-box {
    width: 90%;
    height: 7%;
    background: ${(props) => props.theme.color2};
    border-radius: 21px;
    padding: 0em 1.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p.list-type-name {
      font-size: 24px;
      font-weight: 700;
    }
    .list-amount {
      min-width: 29px;
      height: 29px;
      border-radius: 5px;
      background: black;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-size: 18px;
        font-weight: 700;
        color: white;
        margin: 0 0.5rem;
      }
    }
  }
  .list-container {
    height: 93%;
    padding-top: 22px;
    /* background: red; */
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
  }
`
