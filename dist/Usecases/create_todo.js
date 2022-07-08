"use strict";
class CreateTodo extends BaseUsecase {
    constructor(todoRepository) {
        super();
        this.todoRepository = todoRepository;
    }
    async execute({ id, isChecked, title, subTitle }) {
        try {
            const result = await this.todoRepository.createTodo(id, title, isChecked, subTitle);
            return result;
        }
        catch (error) {
            throw new ApiError("");
        }
    }
}
