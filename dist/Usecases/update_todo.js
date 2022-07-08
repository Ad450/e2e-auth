"use strict";
class UpdateTodo extends BaseUsecase {
    constructor(todoRepository) {
        super();
        this.todoRepository = todoRepository;
    }
    async execute({ id, subTitle, title, isChecked }) {
        try {
            const results = await this.todoRepository.updateTodo(id, title, isChecked, subTitle);
            return results;
        }
        catch (error) {
            throw new ApiError("Method not implemented.");
        }
    }
}
