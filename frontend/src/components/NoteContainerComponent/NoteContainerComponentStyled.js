import styled from 'styled-components'

export const NoteContainerStyled = styled.div`
  /* background: black; */
  height: 760px;
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
    height: 640px;
    margin-bottom: 10px;
  }
  .input-note {
    min-height: 45px;
  }
  .input-note textarea {
    position: relative;
    width: 100%;
    height: 50px;
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
