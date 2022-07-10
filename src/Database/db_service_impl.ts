import { DatabaseParam } from "../Interfaces/db_params";
import DatabaseService from "./db_service";
import { Todo } from "./db_schema";

export default class DatabaseServiceImpl extends DatabaseService {
    async create(data: DatabaseParam): Promise<void> {
        try {
            const { _title, _subTitle, _isChecked, _id } = data;
            const newTodo = new Todo({ title: _title, subTitle: _subTitle, isChecked: _isChecked, id: _id });
            await newTodo.save();
        } catch (error) {
            // will do proper error handling
            console.log(error);
        }
    }
    async update(data: DatabaseParam): Promise<void> {
        try {
            const { _isChecked, _subTitle, _title, _id } = data;
            const toBeUpdatedTodo = Todo.findById({ id: _id });
            toBeUpdatedTodo.update({ title: _title, subTitle: _subTitle, isChecked: _isChecked, id: _id });
        } catch (error) {
            // will do proper error handling
            console.log(error);
        }
    }
    async delete(data: DatabaseParam): Promise<void> {
        try {
            const { _id } = data;
            Todo.remove({ _id });
        } catch (error) {
            console.log(error);
        }
    }

}