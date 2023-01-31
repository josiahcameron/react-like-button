import { useState } from "react";

function App() {
  const [presses, setPress] = useState(0);

  if (presses === 1) {
    return (
      <div>
        <button onClick={() => setPress(presses + 1)}>{presses} like</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => setPress(presses + 1)}>{presses} likes</button>
    </div>
  );
}

export default App;
