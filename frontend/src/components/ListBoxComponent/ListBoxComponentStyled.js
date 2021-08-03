import styled from 'styled-components'

const dayColor = {
  Monday: '#ef476f',
  Tuesday: '#ffd166',
  Wednesday: '#06d6a0',
  Thursday: '#118ab2',
  Friday: '#073b4c',
  Saturday: '#5a189a',
  Sunday: '#000000',
}

export const ListBoxStyled = styled.div`
  .list-box {
    width: 377px;
    min-height: 100px;
    border-radius: 26px;
    background: ${(props) => props.theme.color1};
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
    padding: 1em 1em 1.5em;
    margin-bottom: 0.5em;
  }
  .list-header {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .url-icon {
    margin-right: 2px;
  }
  .symbol-list {
    width: 30px;
    height: 30px;
    background: ${(props) => props.theme.color2};
    border-radius: 25px;
    padding: 3px;
    p {
      font-size: 18px;
    }
  }
  .header-right {
    flex-direction: row;
  }
  .date-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 71px;
    padding: 6px;
    height: 20px;
    border-radius: 6px;
    background: ${(props) => props.day && dayColor[props.day]};
    p {
      font-size: 10px;
      color: white;
      margin-left: 2px;
      font-weight: 500;
    }
  }
  .list-url {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-right: 10px;
    min-width: 63px;
    border: 1px solid ${(props) => props.theme.color4};
    border-radius: 6px;
    padding: 1px 6px;
    cursor: pointer;
    background: white;
    transition: all 300ms ease-out;
    p {
      color: #4d7e26;
      font-weight: 700;
      font-size: 11px;
    }
  }

  .list-body {
    margin-top: 9px;
    position: relative;
    min-height: 80px;
    align-items: flex-start;
    justify-content: space-between;
  }
  .list-title {
    position: relative;
    text-align: left;
    padding-right: 1em;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: ${(props) => (props.uName ? `40px` : `25px`)};
  }
  .line-title::before {
    position: absolute;
    content: '';
    margin-top: 0.5em;
    left: -15px;
    width: 374px;
    height: 0px;
    border: 1px solid ${(props) => props.theme.color2};
  }
  .list-detail {
    width: 211px;
    height: 34px;
    border-radius: 8px;
    border: none;
    outline: none;
    margin-top: ${(props) => (props.uName ? '15px' : '0px')};
    padding: 1em;
    background: ${(props) => props.theme.color3};
    overflow: scroll;
    color: ${(props) => props.theme.color1};
    font-size: 16px;
    font-weight: 600;
    font-family: 'Nunito';
    cursor: pointer;
  }
  .list-username {
    position: absolute;
    bottom: 45px;
    font-weight: 600;
    color: ${(props) => props.theme.color4};
    cursor: pointer;
  }
  .modif-list {
    position: absolute;
    bottom: 0;
    right: 0;
    flex-direction: row;
    width: 67px;
    justify-content: space-between;
  }
  .rounded-btn {
    width: 31px;
    height: 31px;
    border-radius: 31px;
    cursor: pointer;
    transition: all 300ms ease-out;
  }
  .edit-list {
    background: #ffffff;
    border: 3px solid #ffdb65;
    svg {
      fill: #ffdb65;
    }
    :hover {
      svg {
        fill: #fff;
      }
      background: #ffdb65;
      :active {
        transition: none;
        background: #fff;
      }
    }
  }
  .delete-list {
    background: #ffffff;
    border: 3px solid #ff4b6d;
    svg {
      fill: #ff4b6d;
    }
    :hover {
      svg {
        fill: #fff;
      }
      background: #ff4b6d;
      :active {
        transition: none;
        background: #fff;
      }
    }
  }
`
