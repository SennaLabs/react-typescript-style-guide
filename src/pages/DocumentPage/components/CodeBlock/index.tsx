import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CodeBlockProps } from "./interface";
import { ClipboardPasteIcon, CopyIcon } from "lucide-react";

SyntaxHighlighter.registerLanguage("tsx", tsx);

export function CodeBlock({ children }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);

  const setCopied = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="relative group">
      <CopyToClipboard text={children}>
        <button
          className="absolute top-[8px] right-[8px] text-secondary hidden group-hover:block"
          onClick={() => setCopied()}>
          {isCopied ? (
            <span title="Copied!">
              <ClipboardPasteIcon width="20" height="20" />
            </span>
          ) : (
            <span title="Copy to Clipboard">
              <CopyIcon width="20" height="20" />
            </span>
          )}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter
        id="1"
        language="typescript"
        style={oneDark}
        PreTag="div">
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
