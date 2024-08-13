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
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Web App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Simple Web Editor</h1>
    </header>

    <main>
        <p>This is a basic template to get you started with HTML, CSS, and JavaScript.</p>
    </main>

    <footer>
        <p>&copy; 2024 My Simple Web Editor</p>
      <a class="github" href="https://github.com/ronitsharma03" target="_blank">Github</a>
    </footer>

    <script src="script.js"></script>
</body>
</html>
`,
    css: `/* Basic reset for margins and paddings */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body styles */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* Header styles */
header {
    background-color: #333;
    color: white;
    padding: 10px 0;
    text-align: center;
}

/* Main content styles */
main {
    flex: 1;
    padding: 20px;
    text-align: center;
}

.github{
  text-decoration: underline;
  color: red;
  
}

/* Footer styles */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
}
`,
    javascript: `// Simple JavaScript example
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is fully loaded and parsed');
});
`,
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
