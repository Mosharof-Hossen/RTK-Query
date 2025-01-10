import { TTask } from "@/Types/tasks";
import { cn } from "../../../lib/utils";
import { FaRegTrashAlt } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";

type IProps = {
    task: TTask
}

const TaskCard = ({ task }: IProps) => {
    
    return (
        <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className={cn("size-3 rounded-full", {
                        "bg-green-500": task.priority === "low",
                        "bg-yellow-500": task.priority === "medium",
                        "bg-red-500": task.priority === "high",
                    })}></div>
                    <h1 className={cn({ "line-through": task.isCompleted })}>{task.title}</h1>
                </div>
                <div className="flex gap-3 items-center">
                    {/* <EditTaskModal key={task.id} task={task}></EditTaskModal> */}
                    <FaRegTrashAlt className="cursor-pointer"  />
                    <Checkbox checked={task.isCompleted} ></Checkbox>
                </div>
            </div>
            <div className="mt-3 space-y-2">
                {/* <p>Assign To - {assignedUser ? assignedUser.name : "No One"}</p> */}
                <p >{task.description}</p>
            </div>
        </div>
    );
};

export default TaskCard;