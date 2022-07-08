class DeleteTodo extends BaseUsecase<IDeleteTodoParams> {
    private todoRepository: TodoRepository;

    constructor(todoRepository: TodoRepository) {
        super();
        this.todoRepository = todoRepository;
    }

    async execute(param: IDeleteTodoParams): Promise<Todo | null> {
        try {
            const results = await this.todoRepository.deleteTodo();
            return results;
        } catch (error) {
            // will do proper error handling
            throw new Error("");
        }
    }
}
