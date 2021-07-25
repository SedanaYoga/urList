import styled from 'styled-components'

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 15%;
  font-size: 40px;
  font-weight: 700;
  padding: 1.4em 0 0 1.1em;
  /* background: blue; */
  .search-dailylist {
    position: absolute;
    right: 617px;
    top: 50px;
    /* background: red; */
    cursor: pointer;
  }
`
export const RoundGroupStyled = styled.div`
  position: absolute;
  top: 45px;
  right: 430px;
  width: 158px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background: red; */
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.color2};
    border-radius: 50%;
    cursor: pointer;
    transition: all 200ms ease-out;
    overflow: hidden;
    :hover {
      filter: brightness(0.9);
      :active {
        filter: brightness(1);
      }
    }
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
export const SearchDailyListStyled = styled.div`
  .search {
    position: relative;
    width: 60px;
    height: 60px;
    background: ${(props) => props.theme.color2};
    border-radius: 60px;
    transition: 0.5s;
    overflow: hidden;
  }
  .search.active {
    width: 600px;
  }
  .search .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    background: ${(props) => props.theme.color2};
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .search .icon::before {
    content: '';
    position: absolute;
    width: 23px;
    height: 23px;
    border: 3px solid #9d9d9d;
    border-radius: 50%;
    transform: translate(-3px, -3px);
  }
  .search .icon::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 10px;
    background: #9d9d9d;
    transform: translate(9px, 9px) rotate(315deg);
  }
  .search .input {
    position: relative;
    width: 540px;
    height: 60px;
    left: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: red; */
  }
  .search .input input {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: ${(props) => props.theme.color2};
    color: ${(props) => props.theme.color4};
    font-size: 18px;
    font-weight: 600;
    font-family: 'Nunito';
    padding: 0.5em;
  }
  .clear {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    right: 20px;
    /* background: red; */
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .clear::before {
    position: absolute;
    content: '';
    width: 3px;
    height: 20px;
    background: ${(props) => props.theme.color4};

    transform: rotate(45deg);
  }
  .clear::after {
    position: absolute;
    content: '';
    width: 3px;
    height: 20px;
    background: ${(props) => props.theme.color4};

    transform: rotate(315deg);
  }
`

export const NotifDailyListStyled = styled.div`
  width: 60px;
  height: 60px;
`
