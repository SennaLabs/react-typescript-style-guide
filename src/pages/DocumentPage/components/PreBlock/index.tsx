import { CodeBlock } from "../CodeBlock";

export function PreBlock({ children, ...rest }: any) {
  if ("type" in children && children["type"] === "code") {
    return CodeBlock(children["props"]);
  }
  return <pre {...rest}>{children}</pre>;
}
