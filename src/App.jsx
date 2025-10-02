import { Button } from "@/components/ui/button";
import { GitHub } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Teal Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #14b8a6 100%)
      `,
          backgroundSize: "100% 100%",
        }}
      />
      <div className="relative flex justify-between gap-4 max-w-[786px] border-2 border-dashed border-gray-300 mx-auto bg-red-500 mt-8">
        <div className="flex items-center gap-2 p-4">
          <img src="./public/logo.png" alt="logo" className="w-6 h-6" />
          <span className="font-semibold text-2xl">ReactShots</span>
        </div>
        <div>
           <a href="https://github.com/yourusername/react-shots" className="text-blue-500 hover:underline"><GitHub /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
