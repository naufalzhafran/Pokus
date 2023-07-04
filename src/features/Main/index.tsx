import PomodoroTimer from "@/features/Main/components/PomodoroTimer";
import TodoList from "@/features/Main/components/TodoList";

const Page = () => {
    return (<main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <PomodoroTimer/>
            <TodoList/>
        </div>
    </main>)
}

export default Page