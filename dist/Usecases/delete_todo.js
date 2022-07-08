"use strict";
class DeleteTodo extends BaseUsecase {
    constructor(todoRepository) {
        super();
        this.todoRepository = todoRepository;
    }
    async execute(param) {
        try {
            const results = await this.todoRepository.deleteTodo();
            return results;
        }
        catch (error) {
            // will do proper error handling
            throw new ApiError(error.toString());
        }
    }
}
