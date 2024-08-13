import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompilerSliceStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
  currentLanguage: "html" | "css" | "javascript";
}

const initialState: CompilerSliceStateType = {
  fullCode: {
    html: "This is html",
    css: "This is css",
    javascript: "This is js",
  },
  currentLanguage: "html",
};

const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<CompilerSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCodeValue: (state, action: PayloadAction<string>) => {
        // the values of currentLanguage are already set by redux so we'll take them from there
        state.fullCode[state.currentLanguage] = action.payload;
    }
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue } =
  compilerSlice.actions;
