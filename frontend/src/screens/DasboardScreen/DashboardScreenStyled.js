import styled from 'styled-components'

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerStyled = styled(FlexCenter)`
  justify-content: start;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.color2};
  a {
    text-decoration: none;
  }
`
export const LeftSideBarStyled = styled(FlexCenter)`
  flex-direction: column;
  min-width: 300px;
  height: 100vh;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3.1em 0 2em 1.7em;
  background: ${(props) => props.theme.color2};
  filter: drop-shadow(2px 0px 5px ${(props) => props.theme.color2});
  /* background: blue; */
`
export const MiddleSideBarStyled = styled(FlexCenter)`
  position: relative;
  flex-direction: column;
  justify-content: start;
  min-width: 1225px;
  height: 100vh;
  background: ${(props) => props.theme.color1};
  /* background: red; */
`
export const RightSideBarStyled = styled(FlexCenter)`
  flex-direction: column;
  justify-content: start;
  min-width: 395px;
  height: 100vh;
  border-left: 1px solid ${(props) => props.theme.lineColor1};
  background: ${(props) => props.theme.color1};
  /* background: yellow; */
`
export const LogoStyled = styled(FlexCenter)`
  justify-content: flex-start;
  width: 247px;
  height: 68px;
  border-radius: 17px;
  padding-left: 1.4em;
  background: ${(props) => props.theme.color1};
  margin-bottom: 4px;
  img.logo-icon {
    margin-right: 0.7em;
  }
  div.logo-label {
    font-size: 1.35em;
    font-weight: 600;
  }
`
export const MenuSideStyled = styled(FlexCenter)`
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 247px;
  padding: 18px 0 0 27px;
  min-height: 68px;
  margin-bottom: 3px;
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1.38rem;
    color: black;
    :active {
      color: #cdcdcd;
    }
  }
  p {
    font-size: 22px;
    font-weight: 600;
    margin-left: 0.8em;
  }
`
export const FilterDropdownStyled = styled(FlexCenter)``
