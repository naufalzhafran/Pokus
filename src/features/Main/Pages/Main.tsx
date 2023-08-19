import PomodoroTimer from "@/features/Main/components/PomodoroTimer";
import TodoList from "@/features/Main/components/TodoList";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col align-center-justify-center">
        <PomodoroTimer />
        <TodoList/>
      </div>
    </main>
  );
};

export default Page;


