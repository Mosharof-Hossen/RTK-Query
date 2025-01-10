import AddTaskModal from "@/components/modules/Task/AddTaskModal";
import TaskCard from "@/components/modules/Task/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import { TTask } from "@/Types/tasks";



const Tasks = () => {
    const { data, isLoading, isError } = useGetTasksQuery(undefined, {
        // pollingInterval:1000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true
    });
    if (isLoading) {
        return <p>Loading....</p>
    }
    console.log(data);
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
                {
                    !isLoading && data?.tasks.map((task: TTask) => <TaskCard task={task} key={task._id}></TaskCard>)
                }
            </div>

        </div>
    );
};

export default Tasks;