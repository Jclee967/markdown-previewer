import styled from "styled-components";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const OutputContainer = styled.div`
  width: 50%;
  height: calc(100vh - 58.5px);
  border-left: 1px solid #dddddd;
  padding: 20px;
  background: #f9f9f9;
`;

interface MarkdownOutputProps {
  markdown: string;
}

function MarkdownOutput({ markdown }: MarkdownOutputProps) {
  return (
    <OutputContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutputContainer>
  );
}

export default MarkdownOutput;
