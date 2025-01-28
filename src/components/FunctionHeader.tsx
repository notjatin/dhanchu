import { ChangeEvent, useEffect, useState } from "react";
import functionHeaderData from "../data/functionHeaderData.json";
import { FunctionHeaderDataType, Type } from "../types/FunctionHeaderDataType";

const FunctionHeader = () => {
  const [structures, setStructures] = useState<FunctionHeaderDataType[]>([]);
  const [selectedStructure, setSelectedStructure] = useState<string>("array");
  const [selectedStructureType, setSelectedStructureType] =
    useState<string>("");
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [types, setTypes] = useState<Type[]>([]);
  const [methods, setMethods] = useState<string[]>([]);

  useEffect(() => {
    setStructures(functionHeaderData);
    const defaultStructure = functionHeaderData.find((s) => s.name === "array");
    if (defaultStructure) {
      setTypes(defaultStructure.types || []);
      setMethods(defaultStructure.methods);
      if (defaultStructure.types && defaultStructure.types.length > 0) {
        setSelectedStructureType(defaultStructure.types[0].name);
      }
      if (defaultStructure.methods && defaultStructure.methods.length > 0) {
        setSelectedMethod(defaultStructure.methods[0]);
      }
    }
  }, []);

  function handleStructureChange(event: ChangeEvent<HTMLSelectElement>): void {
    const selected = event.target.value;
    setSelectedStructure(selected);

    const structure = structures.find((s) => s.name === selected);
    setTypes(structure?.types || []);
    setMethods(structure?.methods || []);
    setSelectedStructureType(structure?.types?.[0]?.name || "");
    setSelectedMethod(structure?.methods?.[0] || "");
  }

  function handleStructureTypeChange(
    event: ChangeEvent<HTMLSelectElement>
  ): void {
    setSelectedStructureType(event.target.value);
  }

  function handleMethodChange(event: ChangeEvent<HTMLSelectElement>): void {
    setSelectedMethod(event.target.value);
  }

  return (
    <div className="h-lvh w-full flex items-center justify-center">
      <header className="bg-gray-700 text-white p-4 w-full h-16 flex items-center justify-evenly">
        <select
          name="structure"
          id="structure"
          className="w-32 h-10 bg-gray-900 text-white p-2 rounded-md"
          value={selectedStructure}
          onChange={handleStructureChange}
        >
          {structures.map((structure) => (
            <option key={structure.name} value={structure.name}>
              {structure.label}
            </option>
          ))}
        </select>

        {types.length > 0 && (
          <select
            name="structure-type"
            id="structure-type"
            className="w-32 h-10 bg-gray-900 text-white p-2 rounded-md"
            value={selectedStructureType}
            onChange={handleStructureTypeChange}
          >
            {types.map((type) => (
              <option key={type.name} value={type.name}>
                {type.label}
              </option>
            ))}
          </select>
        )}

        <select
          name="method"
          id="method"
          className="w-32 h-10 bg-gray-900 text-white p-2 rounded-md"
          value={selectedMethod}
          onChange={handleMethodChange}
        >
          {methods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>

        <button
          className="w-32 h-10 bg-gray-500 text-white p-2 rounded-md"
          onClick={() => {
            console.log("Selected Structure:", selectedStructure);
            console.log("Selected Structure Type:", selectedStructureType);
            console.log("Selected Method:", selectedMethod);
          }}
        >
          Print Selection
        </button>
      </header>
    </div>
  );
};

export default FunctionHeader;
