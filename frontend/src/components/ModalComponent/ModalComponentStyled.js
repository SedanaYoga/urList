import styled from 'styled-components'

export const ModalStyled = styled.div`
  .overlay {
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${(props) =>
      props.zIndexProps ? props.zIndexProps + 999 : '999'};
  }
  .modal-container {
    position: absolute;
    top: 200px;
    left: 600px;
    min-width: 573px;
    min-height: 50px;
    overflow: hidden;
    background: ${(props) => props.theme.color1};
    z-index: ${(props) =>
      props.zIndexProps ? props.zIndexProps + 1000 : '1000'};
    border-radius: 26px;
    filter: drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.25));
  }
  .modal-children {
    position: relative;
  }
`
