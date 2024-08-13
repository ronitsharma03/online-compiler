import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { tags as t } from "@lezer/highlight";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import HelperHeader from "./HelperHeader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { updateCodeValue } from "../redux/slices/compilerSlice";

const CodeEditor = () => {
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const dispatch = useDispatch();

  const onChange = React.useCallback((value: string) => {
    dispatch(updateCodeValue(value));
  }, []);

  return (
    <>
      <HelperHeader />
      <CodeMirror
        theme={draculaInit({
          settings: {
            caret: "#c6c6c6",
            fontFamily: "monospace",
          },
          styles: [{ tag: t.comment, color: "#62724" }],
        })}
        value={fullCode[currentLanguage]}
        height="calc(100vh - 70px - 60px)"
        extensions={[loadLanguage(currentLanguage)!]}
        onChange={onChange}
        className=""
      />
      ;
    </>
  );
};

export default CodeEditor;
