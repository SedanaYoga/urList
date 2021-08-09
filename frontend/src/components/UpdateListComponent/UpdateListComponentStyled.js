import styled from 'styled-components'

export const CreateListStyled = styled.div`
  .header {
    width: 100%;
    height: 144px;
    border-bottom: 2px solid ${(props) => props.theme.color2};
    padding: 25px 35px 10px 35px;
  }
  .title {
    font-weight: 600;
    font-size: 34px;
    margin-bottom: 15px;
  }
  .switch-type {
    width: 372px;
    height: 43px;
    background: #f9f9f9;
    border-radius: 7px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  .type {
    width: 120px;
    height: 39px;
    border-radius: 7px;
    background: #f3f3f3;
    color: #5f5f5f;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    transition: all 300ms ease-in;
    :hover {
      background: #e3e3e3;
    }
  }
  .type.selected {
    font-weight: 700;
    background: #e3e3e3;
    color: #333;
  }
  .body {
    width: 100%;
    min-height: 144px;
    padding: 20px 35px;
    border-bottom: 2px solid ${(props) => props.theme.color2};
  }
  .list-name {
    font-size: 24px;
    font-weight: 600;
    color: #5f5f5f;
    margin-bottom: 10px;
  }
  .input-name {
    width: 100%;
    height: 39px;
    border-radius: 8px;
    border: none;
    outline: none;
    background: #f6f6f6;
    padding: 1em;
    font-size: 14px;
    color: #5f5f5f;
    font-weight: 600;
    transition: all 300ms ease-out;
    ::placeholder {
      color: #bbb;
      opacity: 1;
    }
    margin-bottom: 15px;
  }
  .list-detail-title {
    font-size: 24px;
    font-weight: 600;
    color: #5f5f5f;
    display: flex;
    align-items: center;
    flex: row;
  }
  .sm-button {
    margin-left: 5px;
    font-size: 9px;
    padding: 0px 5px;
    height: 16px;
    border: 1px solid black;
    border-radius: 11px;
    text-align: center;
    cursor: pointer;
    :hover {
      background: ${(props) => props.theme.color3};
      :active {
        background: ${(props) => props.theme.color1};
      }
    }
  }
  .all-types-detail {
    font-size: 14px;
    p {
      margin-top: 5px;
      color: #5f5f5f;
    }
    input {
      min-width: 344px;
      min-height: 29px;
      margin-top: 5px;
      border: none;
      border-radius: 8px;
      outline: none;
      background: #f5f5f5;
      padding: 1em;
    }
    textarea {
      width: 100%;
      margin-top: 5px;
      border: none;
      border-radius: 8px;
      outline: none;
      background: #f5f5f5;
      padding: 1em;
    }
  }
  .create-now-btn {
    margin: 20px 0px;
    button {
      width: 200px;
      height: 40px;
      font-size: 18px;
    }
  }
  .pass-container {
    /* display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center; */
    width: 344px;
    position: relative;
    /* background: red; */
  }
  .pass-svg {
    position: absolute;
    width: 40px;
    height: 87%;
    border-left: 2px solid ${(props) => props.theme.color3};
    cursor: pointer;
    top: 55%;
    right: 0;
    transform: translateY(-50%);
  }
  input.account-input {
    padding-right: 3em;
  }
  .command-input {
    width: 100%;
    height: 40px;
    ::placeholder {
      color: #bbb;
      opacity: 1;
    }
  }
`

export const AddUrlStyled = styled.div`
  padding: 35px;
  width: 800px;
  p {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .adurl-input {
    width: 100%;
    height: 40px;
    margin-top: 5px;
    border: none;
    border-radius: 8px;
    outline: none;
    background: #f5f5f5;
    padding: 1em;
    ::placeholder {
      color: #bbb;
      opacity: 1;
    }
  }
`
