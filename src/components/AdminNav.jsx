import QLSPPage from "../page/QLSP";
import QLKHPage from "../page/QLKH";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
export default function AdminNav() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/qlsp" element={QLSPPage()}></Route>
          <Route exact path="/qlkh" element={QLKHPage()}></Route>
        </Routes>
      </div>
    </>
  );
}
