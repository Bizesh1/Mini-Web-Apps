import { useState } from "react";

function LightToggle() {
  const [state, setState] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf9f6] p-8">
      <div className="w-full max-w-md mx-auto flex justify-center gap-5 bg-[#fffffd] rounded-2xl shadow-md p-4 border border-gray-200 overflow-hidden">
        <button onClick={() => setState(!state)}>
          {state ? "Turn off" : "Turn on"}
        </button>
        <div
          className={`h-5 w-5 rounded-full border border-black transition-colors duration-300 ease-in-out
          ${state ? "bg-green-500" : "bg-gray-700"}
          `}
        />
      </div>
    </div>
  );
}

export default LightToggle