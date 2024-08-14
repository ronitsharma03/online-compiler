import { Share2Icon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Code2, Copy, Loader2Icon, Save } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import {
  CompilerSliceStateType,
  updateCurrentLanguage,
} from "../redux/slices/compilerSlice";
import { RootState } from "../redux/store";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const HelperHeader = () => {
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const [sharebtn, setSharebtn] = useState<boolean>(false);

  const navigate = useNavigate();
  const { codeId } = useParams();

  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );

  const handleSaveCode = async () => {
    setSaveLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/compiler/save`,
        {
          fullCode,
        }
      );
      console.log(response.data);
      navigate(`/compiler/${response.data.urlId}`, { replace: true });
    } catch (error) {
      console.log(`Error while saving the code`);
    } finally {
      setSaveLoading(false);
    }
  };

  useEffect(() => {
    if (codeId) {
      setSharebtn(true);
    } else {
      setSharebtn(false);
    }
  }, [codeId]);

  return (
    <div className="__helper_header bg-slate-950 text-white px-4 flex justify-between items-center">
      <div className="w-full flex items-center justify-between gap-6 p-2">
        <Select
          defaultValue={currentLanguage}
          onValueChange={(value: CompilerSliceStateType["currentLanguage"]) =>
            dispatch(updateCurrentLanguage(value))
          }
        >
          <SelectTrigger className="w-[180px] outline-none focus:ring-0 select-none">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">JavaScript</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center justify-end gap-6 p-2">
          <Button
            variant="save"
            className="flex items-center justify-center gap-1 select-none"
            onClick={handleSaveCode}
            disabled={saveLoading}
          >
            {saveLoading ? (
              <>
                "Saving " <Loader2Icon className="animate-spin" />
              </>
            ) : (
              <>
                Save <Save size={16} />
              </>
            )}
          </Button>
          {sharebtn  && (
            <Dialog>
              <DialogTrigger className="text-primary border rounded-md py-[5px] px-3 bg-blue-600 shadow-sm hover:bg-blue-500 text-white flex items-center justify-center gap-1 select-none ">
                <Share2Icon />
                <span>Share</span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex gap-2 items-center justify-center">
                    <Code2 /> Share the URL
                  </DialogTitle>
                  <DialogDescription className="py-6">
                    <div className="flex gap-4 items-center justify-center">
                      <input
                        type="text"
                        disabled
                        className="w-full bg-slate-800 p-3 rounded-sm text-gray-100 font-monospace"
                        id="link"
                        value={window.location.href}
                      />
                      <Button
                        onClick={() => {
                          window.navigator.clipboard.writeText(
                            window.location.href
                          );
                          toast("URL copied!");
                        }}
                      >
                        <Copy size={15} />
                      </Button>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
};

export default HelperHeader;
