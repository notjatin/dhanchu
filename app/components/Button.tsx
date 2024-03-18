"use client";

export default function Button({ children }: { children: React.ReactNode }) {
  function handleChange() {}
  return (
    <button
      onClick={() => handleChange()}
      className="bg-indigo-600 rounded-[0.375rem] px-[0.625rem] py-[0.375rem] text-sm font-semibold text-white shadow-sm"
    >
      {children}
    </button>
  );
}
