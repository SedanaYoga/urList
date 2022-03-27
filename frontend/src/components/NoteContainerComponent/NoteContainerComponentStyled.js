import styled from 'styled-components'

export const NoteContainerStyled = styled.div`
  /* background: black; */
  position: relative;
  height: 770px;
  .header-note {
    /* background: cyan; */
    min-width: 365px;
    min-height: 60px;
    margin-bottom: 5px;
  }
  .date-today {
    align-items: flex-end;
    font-size: 13px;
    font-weight: 700;
    padding: 6px 5px 0 0;
    color: ${(props) => props.theme.color4};
  }
  .note-content {
    height: ${(props) =>
      640 - ((props.textH < 150 ? props.textH : 150) - 50)}px;
    margin-bottom: 10px;
  }
  textarea {
    position: absolute;
    bottom: 0;
    width: 100%;
    max-height: 150px;
    height: ${(props) => props.textH}px;
    /* transform: translateY(10px); */
    padding: 1em 1.5em;
    border-radius: 18px;
    border: none;
    outline: none;
    overflow-wrap: break-word;
    font-weight: 600;
    font-size: 15px;
    color: ${(props) => props.theme.color4};
    font-family: 'Nunito';
    background: #f2f3f5;
    resize: none;
  }
  textarea::-webkit-scrollbar {
    width: 0px;
  }
`
