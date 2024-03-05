import Image from "next/image";

export default function Home() {
  return (
    <main className="h-lvh w-lvw flex flex-col flex-wrap">
      <div className="w-4/5 h-4/5 bg-gray-200">Main Function</div>
      <div className="w-4/5 h-1/5 bg-orange-200">Function Function</div>
      <div className="w-1/5 h-1/5 bg-blue-200">Space-Time function</div>
      <div className="w-1/5 h-4/5 bg-red-200">Coding function</div>
    </main>
  );
}
