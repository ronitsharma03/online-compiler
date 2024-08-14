import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Compiler from "./pages/Compiler";
import Notfound from "./pages/Notfound";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "sonner";

export const App = () => {
  return (
    <>
      <Toaster position="bottom-right" theme="dark" />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compiler" element={<Compiler />} />
          <Route path="/compiler/:codeId" element={<Compiler />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
