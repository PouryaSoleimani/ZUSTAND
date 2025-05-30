import Counter from "@/components/Counter";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-[80%] mx-auto justify-center mt-20 font-[family-name:var(--font-geist-sans)] border p-4 border-zinc-800 rounded-xl bg-black">
      <h1 className="bg-green-700 text-3xl font-bold p-4 rounded">ZUSTAND TRAINING</h1>
      <Counter />
      <TodoList />
      <TodoForm />
    </div>
  );
}
