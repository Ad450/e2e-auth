
class CreateTodo extends BaseUsecase<ICreateTodoParams> {

    private todoRepository: TodoRepository;

    constructor(todoRepository: TodoRepository) {
        super();
        this.todoRepository = todoRepository;
    }

    async execute({ id, isChecked, title, subTitle }: ICreateTodoParams): Promise<Todo | null> {
        try {
            const result = await this.todoRepository.createTodo(id, title, isChecked, subTitle);
            return result;
        } catch (error) {
            throw new Error("")
        }
    }

}