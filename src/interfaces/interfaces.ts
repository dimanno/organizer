
export interface ITodo {
    title: string,
    id: number,
    completed: boolean,
    // onToggle(id:number): void,
    onRemove(id:number): void,  
}

export interface ITodosState {
    todos: ITodo[];
}