import { useState } from "react";
import "./App.css";
import DataDisplay from "./sections/DataDisplay";
import DataInput from "./components/DataInput";
import InterectionSection from "./sections/InterectionSection";
import InfoSection from "./sections/InfoSection";
import { FixedArray } from "./wrappers/fixedArray";


function App() {
    const [array, setArray] = useState(new FixedArray<number>(0, 4));

    const [selectedStructure, setSelectedStructure] = useState("Array");

    const handleStructureChange = (structure: string) => {
        setSelectedStructure(structure);
    };

    // filter the array by removing the item being clicked
    const handleItemClick = (item: number) => {
        // setDataItems(
        //     dataItems.filter((dataItem: number) => {
        //         return dataItem !== item;
        //     })
        // );
    };

    return (
        <div className="w-full h-lvh grid grid-cols-[5fr_2fr] grid-rows-[3fr_1fr]">
            <main className="bg-Almond m-4 mb-2 mr-2 rounded-lg flex flex-col">
                <header className="m-4">
                    <div className="bg-Black-olive text-white h-12 rounded-md">
                        <DataInput
                            handleStructureChange={handleStructureChange}
                        />
                    </div>
                </header>
                <section className="flex-1 bg-Ecru m-4 mt-0 rounded-lg">
                        <DataDisplay
                            dataItems={array}
                            handleItemClick={handleItemClick}
                        />
                </section>
            </main>
            <aside className="bg-Almond m-4 ml-2 mb-2 rounded-lg">
                Side Content will be here ...
            </aside>
            <section className="col-span-2 bg-Almond m-4 mt-2 rounded-lg flex flex-row">
                <div className="flex-1 m-2 bg-Ecru rounded-lg">
                    <InterectionSection current={selectedStructure} />
                </div>
                <div className="w-[25.5rem] bg-Ecru m-2 rounded-lg">
                    <InfoSection current={selectedStructure} />
                </div>
            </section>
        </div>
    );
}

export default App;
