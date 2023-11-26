import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  line-height: 40px; 
  span {
    color: ${({ theme }) => theme.palette.black};
    padding: 0 18px;
    height: 40px;
    cursor: pointer;
    text-decoration: none;
    display: grid;
    place-items: center;
    font-size: 1rem;
    font-weight: 400;
    transition: color 0.3s ease, transform 0.2s ease;
    white-space: nowrap;
    background: linear-gradient(180deg,#f7dfa5,#f0c14b) repeat scroll 0 0 transparent;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 hsla(0,0%,100%,.4);
  }
  & {
    border: none;
  }
  span:hover {
    transform: scale(1.1);
  }
  
`