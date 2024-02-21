import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ChatGPTDesktop = React.lazy(() => import("pages/ChatGPTDesktop"));
const ChatGPTDesktopThree = React.lazy(
  () => import("pages/ChatGPTDesktopThree"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/chatgptdesktopthree"
            element={<ChatGPTDesktopThree />}
          />
          <Route path="/chatgptdesktop" element={<ChatGPTDesktop />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
