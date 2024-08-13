
import CodeEditor from "../components/Code-editor";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "../components/ui/resizable";

const Compiler = () => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        className="h-[calc(100dvh-70px)] min-w-[350px]"
        defaultSize={50}
      >
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        className="h-[calc(100dvh-70px)] min-w-[350px]"
        defaultSize={50}
      >
        Output
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Compiler;
