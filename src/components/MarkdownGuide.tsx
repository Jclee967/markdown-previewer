import styled from "styled-components";

const GuideContainer = styled.div`
  margin: 10px;
  //   padding: 20px;
  border: 1px solid #dddddd;
  background: #f9f9f9;
`;

const guidelines = [
  {
    id: 1,
    content: "# H1",
  },
  {
    id: 2,
    content: "## H2",
  },
  {
    id: 3,
    content: "### H3",
  },
  {
    id: 4,
    content: "**bold**",
  },
  {
    id: 5,
    content: "*italic*",
  },
  {
    id: 6,
    content: "[Link](http://a.com)",
  },
  {
    id: 7,
    content: "![Image](http://url/a.png)",
  },
  {
    id: 8,
    content: "`inline code`",
  },
  {
    id: 9,
    content: "```block code```",
  },
  {
    id: 10,
    content: "- list item",
  },
];

function MarkdownGuide() {
  return (
    <GuideContainer>
      <ul>
        <h2>Markdown Cheat Sheet</h2>
        {guidelines.map(({ id, content }) => (
          <li key={id}>{content}</li>
        ))}
      </ul>
    </GuideContainer>
  );
}

export default MarkdownGuide;
