import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = "";
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) chars += "0123456789";
    if (charAllowed) chars += "!@#$%^&*()";

    pass = Array.from(
      { length },
      () => chars[Math.floor(Math.random() * chars.length)],
    ).join("");
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPwdToClipBoard = useCallback(() => {
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

useEffect(() => {
  generatePassword()
},[length, numberAllowed, charAllowed, generatePassword])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          className="w-full bg-white outline-none px-3 py-1"
          readOnly
          value={password}
          placeholder="Password"
          ref={passwordRef}
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPwdToClipBoard}>
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            className="w-20"
            value={length}
            min={6}
            max={100}
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="whitespace-nowrap">Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1 whitespace-nowrap">
          <input
            type="checkbox"
            value={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label>Number Allowed</label>
        </div>
        <div className="flex items-center gap-x-1 whitespace-nowrap">
          <input
            type="checkbox"
            value={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label>Character Allowed</label>
        </div>
      </div>
    </div>
  );
}

export default App;
