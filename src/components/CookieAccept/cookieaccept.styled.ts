import styled from "styled-components"

export const ContainerCookie = styled.div`
.cookie {
  display: none;
}
`

export const Container = styled.div`
width: 100%;
position: fixed;
bottom: 0;
background: ${({ theme }) => theme.bodyColor};
height: 100px;

@media(max-width: ${({ theme }) => theme.breakpoint.xs}){
    height: auto;
    padding: 24px 0;
  }
`

export const Wrapper = styled.div`
  max-width:  ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  @media(max-width: ${({ theme }) => theme.breakpoint.xs}){
    height: auto;
    flex-direction: column;
  }
  p {
    color: ${({ theme }) => theme.textColor};
  }
  button {
    line-height: 42px;
    margin: 0 auto;
    span {
      background-color: ${({ theme }) => theme.palette.white};
      color: ${({ theme }) => theme.palette.black};
      padding: 0 24px;
      height: 42px;
      cursor: pointer;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      font-weight: 400;
      transition: color 0.3s ease, transform 0.2s ease;
      white-space: nowrap;
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
    }
  }

  `