import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Resume from "./pages/Resume/Resume";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;