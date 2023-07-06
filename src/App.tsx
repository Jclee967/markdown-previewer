import Header from "./components/Header";
import { useState } from "react";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownOutput from "./components/MarkdownOutput";
import MarkdownGuide from "./components/MarkdownGuide";

function App() {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);

  return (
    <>
      <Header
        onToggleGuide={() => {
          setShowGuide(!showGuide);
        }}
      />
      {showGuide && <MarkdownGuide />}
      <div className="container">
        <MarkdownInput />
        <MarkdownOutput markdown={markdown} />
      </div>
    </>
  );
}

export default App;
