import { useState } from "react";
import "./App.css";
import InfoSection from "./components/InfoSection";
import ShowCase from "./components/ShowCase";
import UtilitySection from "./components/UtilitySection";
import { InputProvider } from "./contexts/InputContext";
import InputCover from "./components/mobile/InputCover";
import { operationType } from "./Types";

function App() {
  const [structure, setStructure] = useState("array");

  // method to handle key according to the operation
  const handleOperation = (operation: operationType, value: string): void => {
    console.log(`using operation ${operation} with key ${value}.`);
    switch (operation) {
      case "insert":
        console.log(`validated ${value}`);
        break;
      case "search":
        console.log(`searching for ${value}`);
        break;
      case "delete":
        console.log(`deleting ${value}`);
        break;
      case "modify":
        console.log(`modifying ${value}`);
        break;
      default:
        throw new Error("Specify valid operation.");
        break;
    }
  };

  return (
    <>
      {/* just use the default three window style. */}
      <main className="w-lvw h-lvh md:grid grid-rows-[1fr] grid-cols-[5fr_2fr]">
        <section className="row-span-2 w-full h-5/6 bg-green-50 bg-gradient-to-r from-gray-300 from-[1px] to-transparent to-[1px] bg-[length:2rem_2rem] bg-centershadow shadow-sm shadow-green-900 ">
          <ShowCase structure={structure} setStructure={setStructure} />
        </section>
        <section className="shadow-sm shadow-green-300 h-1/6 w-full flex flex-col rounded-sm">
          <div className="hidden bg-green-100">
            <InfoSection />
          </div>
          <div className="h-full w-full bg-green-200 flex items-center overflow-auto">
            <InputProvider>
              <UtilitySection handleOperation={handleOperation} />
            </InputProvider>
          </div>
        </section>
        <InputCover></InputCover>
      </main>
    </>
  );
}

export default App;
