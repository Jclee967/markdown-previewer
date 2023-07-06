import styled from "styled-components";

interface MarkdownInputProps {
  value: string;
  onChange: () => void;
}

const InputContainer = styled.div`
  width: 50%;
  height: calc(100vh - 58.5px);
  padding: 20px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  wrap: hard;
  padding: 10px;
  font-size: 16px;
  outline: none;
`;

function MarkdownInput() {
  return (
    <InputContainer>
      <StyledTextArea placeholder="# Hello" />
    </InputContainer>
  );
}

export default MarkdownInput;
