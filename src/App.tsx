import Header from "./components/Header";
import { useState } from "react";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownOutput from "./components/MarkdownOutput";
import MarkdownGuide from "./components/MarkdownGuide";

function App() {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.currentTarget.value);
  };

  return (
    <>
      <Header
        onToggleGuide={() => {
          setShowGuide(!showGuide);
        }}
      />
      {showGuide && <MarkdownGuide />}
      <div className="container">
        <MarkdownInput value={markdown} onChange={handleChange} />
        <MarkdownOutput markdown={markdown} />
      </div>
    </>
  );
}

export default App;
