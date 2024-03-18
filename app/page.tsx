import Button from "./components/Button";
import ComplexityComponent from "./components/ComplexityComponent";

export default function Page() {
  return (
    <>
      <main className="">
        <header className="h-8 bg-red-100"></header>
        <section className="flex flex-col h-dvh">
          <div className="relative w-full h-2/5 bg-zinc-200">
            <div className="absolute bottom-0 right-0">
              <ComplexityComponent />
            </div>
          </div>
          <div className="w-full h-2/5 bg-green-200"></div>
          <div className="w-full h-1/5 bg-orange-100">
						<Button>Add an Item</Button>
            <button>Add An Item</button>
          </div>
        </section>
        <footer className="w-full h-8 bg-red-100"></footer>
      </main>
    </>
  );
}
