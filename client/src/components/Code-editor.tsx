import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { tags as t } from "@lezer/highlight";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import HelperHeader from "./HelperHeader";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const CodeEditor = () => {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val: any) => {
    // console.log("val:", val);
    setValue(val);
  }, []);

  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

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
        value={value}
        height="100vh"
        extensions={[loadLanguage(currentLanguage)!]}
        onChange={onChange}
      />
      ;
    </>
  );
};

export default CodeEditor;
