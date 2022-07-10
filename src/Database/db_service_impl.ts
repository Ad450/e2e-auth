import { DatabaseParam } from "../Interfaces/db_params";
import DatabaseService from "./db_service";
import { Todo } from "./db_schema";

export default class DatabaseServiceImpl extends DatabaseService {
    async create(data: DatabaseParam): Promise<void> {
        try {
            const { _title, _subTitle, _isChecked, _hash } = data;
            const newTodo = new Todo({ title: _title, subTitle: _subTitle, isChecked: _isChecked, hash: _hash });
            await newTodo.save();
        } catch (error) {
            // will do proper error handling
            console.log(error);
        }
    }
    async update(data: DatabaseParam): Promise<void> {
        try {
            const { _isChecked, _subTitle, _title, _hash } = data;
            const toBeUpdatedTodo = Todo.findById({ hash: _hash })
            toBeUpdatedTodo.update({ title: _title, subTitle: _subTitle, isChecked: _isChecked, hash: _hash });
        } catch (error) {
            // will do proper error handling
            console.log(error);
        }
    }
    async delete(data: DatabaseParam): Promise<void> {
        try {
            const { _hash } = data;
            Todo.remove({ hash: _hash });
        } catch (error) {
            console.log(error);
        }
    }

}