export type TTask = {
    _id: string,
    title: string,
    description: string,
    dueDate: string,
    isCompleted: boolean,
    priority: "high" | "medium" | "low";
    assignedTo: string | null
}