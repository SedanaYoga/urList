import styled from 'styled-components'

export const ListBoxStyled = styled.div`
  .list-box {
    width: 377px;
    height: 192px;
    background: red;
    border-radius: 26px;
    background: ${(props) => props.theme.color1};
    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.07));
    padding: 1em 1.3em;
  }
  .list-header {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .list-url {
    position: absolute;
    right: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-width: 63px;
    border: 1px solid ${(props) => props.theme.color4};
    border-radius: 6px;
    padding: 1px 6px;
    cursor: pointer;
    background: white;
    p {
      color: #4d7e26;
      font-weight: 700;
      font-size: 11px;
    }
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
  .date-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 71px;
    padding: 6px;
    height: 20px;
    border-radius: 6px;
    background: #fc3637;
    p {
      font-size: 10px;
      color: white;
      margin-left: 2px;
      font-weight: 600;
    }
  }

  .list-body {
    margin-top: 9px;
    position: relative;
    min-height: 100px;
    /* background: red; */
    align-items: flex-start;
  }
  .list-title {
    text-align: left;
    padding-right: 1em;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 33px;
  }
  .list-detail {
    width: 211px;
    height: 34px;
    border-radius: 8px;
    border: none;
    outline: none;
    padding: 1em;
    background: ${(props) => props.theme.color3};
    overflow: scroll;
    color: ${(props) => props.theme.color1};
    font-size: 16px;
    font-weight: 600;
    font-family: 'Nunito';
  }
  .list-username {
    position: absolute;
    top: 50px;
    font-weight: 600;
    color: ${(props) => props.theme.color4};
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
  }
  .rounded-btn:hover {
    filter: brightness(0.9);
    :active {
      filter: brightness(1);
    }
  }
  .edit-list {
    background: #ffdb65;
  }
  .delete-list {
    background: #ff4b6d;
  }
`
