import { Check, Eye, EyeOff, X } from "lucide-react";
import { useState } from "react";

function PasswordValidator() {
  interface Rule {
    label: string;
    test: (pw: string) => boolean;
  }
  const rules: Rule[] = [
    { label: "At least 8 characters", test: (pw) => pw.length >= 8 },
    { label: "One uppercase letter", test: (pw) => /[A-Z]/.test(pw) },
    { label: "One lowercase letter", test: (pw) => /[a-z]/.test(pw) },
    { label: "One number", test: (pw) => /[0-9]/.test(pw) },
    { label: "One special character", test: (pw) => /[!@#$%^&*()-+]/.test(pw) },
  ];

  const strengthLevel = [
    { label: "Very Weak", color: "bg-red-400", text: "text-red-500" },
    { label: "Weak", color: "bg-orange-400", text: "text-orange-500" },
    { label: "Fair", color: "bg-amber-400", text: "text-amber-500" },
    { label: "Good", color: "bg-lime-500", text: "text-lime-500" },
    { label: "Strong", color: "bg-emerald-500", text: "text-emerald-500" },
  ];

  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const passedCount = rules.filter((r) => r.test(password)).length;
  const score = password.length === 0 ? -1 : passedCount - 1;
  const level = strengthLevel[Math.max(0, Math.min(score, 4))];

  return (
    <div className="min-h-screen bg-[#faf9f6] p-8">
      <div className="w-full max-w-lg pt-10 mx-auto bg-[#fffffd] rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
        {/* header */}
        <div className="px-6 pt-6 pb-5 border-b border-gray-300">
          <h1 className="text-2xl font-bold">Password Strength</h1>
          <p className="font-medium">Check how strong your password is.</p>
        </div>

        {/* body */}
        <div className="px-5 py-5">
          <div>
            <label className="font-bold">Password</label>
            <div className="relative py-2">
              <input
                id="password"
                type={visible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full rounded-lg border border-gray-300 py-2 px-2 focus:border-blue-500 focus:ring-blue-500"
              />
              <button
                onClick={() => setVisible((v) => !v)}
                className="absolute right-3 top-1/3 "
              >
                {visible ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {/* Strength Meter */}
          <div>
            <div className="flex gap-1 py-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-colors duration-200 
                  ${password.length > 0 && i <= score ? level.color : "bg-gray-300"}`}
                />
              ))}
            </div>
            <span
              className={`text-sm font-medium ${password.length > 0 ? level.text : "text-gray-500"}`}
            >
              {password.length > 0
                ? level.label
                : "Enter a password to check its strength"}
            </span>
          </div>
          {/* Rules */}
          <ul className="py-2">
            {rules.map((rule, i) => {
              const passed = rule.test(password);
              return (
                <li key={i} className="flex items-center gap-2 py-1">
                  <span>
                    {passed ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <X className="h-4 w-4 text-gray-500" />
                    )}
                  </span>
                  <span className={passed ? "text-green-500" : "text-gray-500"}>
                    {rule.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PasswordValidator;
