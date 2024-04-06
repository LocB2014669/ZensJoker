import { HomePage } from "./Page/HomePage";
import { MainLayout } from "./components/MainLayout";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="font-serif">
      <HomePage />
      <Toaster />
    </div>
  );
}
