import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className = "min-h-screen pt-10 bg-[#faf9f6] p-8">
      <Card>
        <CardHeader>
          <CardTitle>Counter</CardTitle>
          <CardDescription>
            Increment, decrement, and reset the counter using the buttons below.
          </CardDescription>
        </CardHeader>

        <CardContent>

          <div className="flex">
            <Button onClick={toggleDarkMode}>
              {isDarkMode ? <Sun /> : <Moon />}
            </Button>
          </div>

          <div
            className={`text-3xl flex justify-center py-5 font-bold tabular-nums 
            ${
              count < 0
                ? "text-red-500"
                : count > 0
                  ? "text-green-500"
                  : "text-muted-foreground"
            }`}
          >
            {count}
          </div>


          <div className="flex justify-center gap-3 w-full ">
            <Button variant={"outline"} onClick={() => setCount(count - 1)}>
              -
            </Button>
            <Button variant={"secondary"} onClick={() => setCount(0)}>
              Reset
            </Button>
            <Button variant={"outline"} onClick={() => setCount(count + 1)}>
              +
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Counter;
