
class UpdateTodo extends BaseUsecase<IUpdateTodoParams> {
    private todoRepository: TodoRepository;

    constructor(todoRepository: TodoRepository) {
        super();
        this.todoRepository = todoRepository;
    }

    async execute({ id, subTitle, title, isChecked }: IUpdateTodoParams): Promise<Todo | null> {
        try {
            const results = await this.todoRepository.updateTodo(id, title, isChecked, subTitle);
            return results;
        } catch (error) {
            throw new Error("Method not implemented.");

        }
    }
}