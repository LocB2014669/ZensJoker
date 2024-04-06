import { HomePage } from "./Page/HomePage";
import { MainLayout } from "./components/MainLayout";
import toast, { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="font-serif">
      <Routes>
        <Route index path="/" element={<HomePage />} />
      </Routes>
      <Toaster />
    </div>
  );
}
