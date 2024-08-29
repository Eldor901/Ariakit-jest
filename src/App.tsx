import "./App.css";
import logo from "./logo.svg";
import * as Ariakit from "@ariakit/react";
import { useRef } from "react";

function App() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      console.log("Escape key pressed");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Ariakit.PopoverProvider>
          <Ariakit.PopoverDisclosure className="button">
            Accept invite
          </Ariakit.PopoverDisclosure>
          <Ariakit.Popover className="popover">
            <Ariakit.PopoverArrow className="arrow" />
            <Ariakit.PopoverHeading className="heading">
              Team meeting
            </Ariakit.PopoverHeading>
            <Ariakit.PopoverDescription>
              We are going to discuss what we have achieved on the project.
            </Ariakit.PopoverDescription>
            <div>
              <p>12 Jan 2022 18:00 to 19:00</p>
              <p>Alert 10 minutes before start</p>
            </div>
            <Ariakit.Button className="button">Accept</Ariakit.Button>
            <textarea
              ref={textareaRef}
              onKeyDown={handleKeyDown}
              placeholder="Type here..."
            />
          </Ariakit.Popover>
        </Ariakit.PopoverProvider>
      </header>
    </div>
  );
}

export default App;
