import { Routes, Route } from "react-router-dom";
// Auth pages
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import PasswordReset from "./Pages/Auth/ResetPassword";

// Layout
import Sidebar from "./Layouts/SideBare";

// Pages
import Explore from "./Pages/Explore";
import Create from "./Pages/Create";
import Media from "./Pages/Media";
import Favorites from "./Pages/Favorites";
import Uploads from "./Pages/Uploads";
import Trash from "./Pages/Trash";
import Settings from "./Pages/Settings";
import ThumbnailDetails from"./Pages/ThumbDetails";

// Erreurs
import NotFound from "./Pages/NotFound";
import Forbidden from "./Pages/Forbidden";
import { Pricing } from "./Pages/pricing";


function App() {
  return (
    <Routes>
      
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="password-reset" element={<PasswordReset />} />

      {/* <Route element={<ProtectedRoute />}> */}
      <Route path="/" element={<Sidebar />}>
        <Route path="explore" element={<Explore />} />
        <Route path="create" element={<Create />} />
        <Route path="media" element={<Media />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="uploads" element={<Uploads />} />
        <Route path="trash" element={<Trash />} />
        <Route path="setting" element={<Settings />} />
        <Route path="thumb-details/:id" element={<ThumbnailDetails />} />
        <Route path="pricing" element={<Pricing />} />
      </Route>

      <Route path="403" element={<Forbidden />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
