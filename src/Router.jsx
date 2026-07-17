import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Resume from "./pages/Resume/Resume";
import Detail from "./pages/Detail/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;