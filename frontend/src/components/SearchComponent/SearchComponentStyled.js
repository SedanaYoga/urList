import styled from 'styled-components'

const type = ['Daily List', 'Daily Notes']

export const SearchStyled = styled.div`
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
    width: ${(props) => (props.type === type[0] ? '600px' : '365px')};
    height: ${(props) => props.type === type[1] && '36px'};
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
    z-index: 2;
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

  .icon-sm {
    position: absolute;
    top: 6px;
    left: 3px;
    width: 25px;
    height: 25px;
    background: ${(props) => props.theme.color2};
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  .icon-sm::before {
    content: '';
    position: absolute;
    width: 13px;
    height: 13px;
    border: 2px solid #9d9d9d;
    border-radius: 50%;
    transform: translate(6px, -2px);
  }
  .icon-sm::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 6px;
    background: #9d9d9d;
    transform: translate(14px, 5px) rotate(315deg);
  }

  .search .input {
    position: relative;
    width: 490px;
    height: 60px;
    left: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
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
  .input-sm {
    position: relative;
    width: 260px;
    height: 36px;
    left: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .input-sm input {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: ${(props) => props.theme.color2};
    color: ${(props) => props.theme.color4};
    font-size: ${(props) => (props.type === type[0] ? '18px' : '16px')};
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
  .clear-sm {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 33px;
    height: 33px;
    right: 6px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.color2};
    border-radius: 15px;
  }
  .clear-sm::before {
    position: absolute;
    content: '';
    width: 2px;
    height: 15px;
    background: ${(props) => props.theme.color4};

    transform: rotate(45deg);
  }
  .clear-sm::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 15px;
    background: ${(props) => props.theme.color4};

    transform: rotate(315deg);
  }
`
