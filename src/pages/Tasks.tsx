import AddTaskModal from "@/components/modules/Task/AddTaskModal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";



const Tasks = () => {
    return (
        <div className="mx-auto max-w-7xl px-5 mt-10">
            <div className="flex justify-end items-center gap-3">
                <h1 className="mr-auto font-bold">Tasks</h1>
                <Tabs defaultValue="All">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="All">All</TabsTrigger>
                        <TabsTrigger value="High">High</TabsTrigger>
                        <TabsTrigger value="Medium">Medium</TabsTrigger>
                        <TabsTrigger value="Low">Low</TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTaskModal></AddTaskModal>
            </div>
            <div className="space-y-5 mt-5">
                {/* {
                    allTasks?.map(task => <TaskCard task={task} key={task.id}></TaskCard>)
                } */}
            </div>

        </div>
    );
};

export default Tasks;