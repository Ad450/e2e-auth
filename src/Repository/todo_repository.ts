abstract class TodoRepository {
    abstract createTodo(id: number, title: string, isChecked: boolean, subTitle?: string): Promise<Todo | null>;
    abstract updateTodo(id: number, title: string, isChecked: boolean, subTitle?: string): Promise<Todo | null>;
    abstract deleteTodo(): Promise<Todo | null>;
}