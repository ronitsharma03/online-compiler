
import { useParams } from "react-router-dom";
import CodeEditor from "../components/Code-editor";
import CodeRenderer from "../components/CodeRenderer";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "../components/ui/resizable";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateFullCode } from "../redux/slices/compilerSlice";
import { toast } from "sonner";

const Compiler = () => {
  const { codeId } = useParams<string>();
  const dispatch = useDispatch();

  const loadCode = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/compiler/getcode`,{
        codeId: codeId
      });
      dispatch(updateFullCode(response.data.fullCode));
    } catch (error) {
      if(axios.isAxiosError(error)){
        if(error?.response?.status === 500){
          toast("Invalid URL", {
            description: "Default code loaded"
          });
        }
      }
      console.log(`Error fetching the code: ${error}`);
    }
  }

  useEffect(() => {
    if(codeId){
      loadCode();
    }
  }, [codeId]);

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
        <CodeRenderer />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Compiler;
