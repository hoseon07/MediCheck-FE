import { Route, Routes, BrowserRouter } from "react-router-dom";
import Chat from "./Pages/Chat";
import { Home } from "./Pages/Home";
import { Medications } from "./Pages/Medications";
import { FirstAid } from "./Pages/FirstAid";
import { MyPage } from "./Pages/MyPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/firstAid" element={<FirstAid />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;