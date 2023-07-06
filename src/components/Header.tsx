import styled from "styled-components";

interface HeaderProps {
  onToggleGuide: () => void;
}

const Title = styled.h1`
  color: white;
  font-size: 32px;
  font-family: sans-serif;
  padding-left: 20px;
  margin: 0;
`;

// Styled component named StyledButton
const StyledButton = styled.button`
  background-color: #61dafb;
  font-size: 16px;
  color: black;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
  border: none;
  transition-duration: 0.2s;
  &:hover {
    background-color: #50b4dc;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 58.5px;
  background: #282c34;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header({ onToggleGuide }: HeaderProps) {
  return (
    <>
      <HeaderContainer>
        <Title>Markdown Previewer</Title>
        <StyledButton onClick={onToggleGuide}>
          Markdown Cheat Sheet
        </StyledButton>
      </HeaderContainer>
    </>
  );
}

export default Header;
