import styled from 'styled-components'

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 15%;
  font-size: 40px;
  font-weight: 700;
  padding: 1.4em 0 0 1.1em;
  .search-dailylist {
    position: absolute;
    right: 216px;
    top: 50px;
    cursor: pointer;
  }
`
export const RoundGroupStyled = styled.div`
  position: absolute;
  top: 45px;
  right: 30px;
  width: 158px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.color2};
    border-radius: 50%;
    cursor: pointer;
    transition: all 200ms ease-out;
    overflow: hidden;
  }
  .wh-60 {
    width: 60px;
    height: 60px;
  }
  .wh-70 {
    width: 70px;
    height: 70px;
  }
`

export const NotifDailyListStyled = styled.div`
  width: 60px;
  height: 60px;
`
