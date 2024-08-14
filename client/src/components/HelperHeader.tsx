import { Share2Icon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Save } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { CompilerSliceStateType, updateCurrentLanguage } from "../redux/slices/compilerSlice";
import { RootState } from "../redux/store";
import axios from "axios";

const HelperHeader = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  const fullCode = useSelector((state: RootState) => state.compilerSlice.fullCode);

  const handleSaveCode = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/compiler/save`, {
        fullCode
      });
      console.log(response.data);
    } catch (error) {
      console.log(`Error while saving the code`);
    }
  }

  return (
    <div className="__helper_header bg-slate-950 text-white px-4 flex justify-between items-center">
      <div className="w-full flex items-center justify-between gap-6 p-2">
        <Select
          defaultValue={currentLanguage}
          onValueChange={(value: CompilerSliceStateType["currentLanguage"]) => dispatch(updateCurrentLanguage(value))}
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
          >
            <Save size={16} /> <span>Save</span>
          </Button>
          <Button
            variant="share"
            className="flex items-center justify-center gap-1 select-none"
          >
            <Share2Icon />
            <span>Share</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HelperHeader;
