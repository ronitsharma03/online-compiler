import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "../components/ui/resizable";

const Compiler = () => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className="h-[calc(100dvh-70px)] min-w-[400px]" defaultSize={40}>
        Code
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={60}>
        Output
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Compiler;
