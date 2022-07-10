import { DatabaseParam } from "../Interfaces/db_params";
import DatabaseService from "./db_service";
import { Todo } from "./db_schema";

export default class DatabaseServiceImpl extends DatabaseService {
    async create(data: DatabaseParam): Promise<void> {
        try {
            const { _title, _subTitle, _isChecked, _hash } = data;
            // check if todo already exists
            const retrieveTodo = Todo.findOne({ hash: _hash });
            // todo already exists
            if (retrieveTodo !== null || retrieveTodo !== undefined) {
                return;
            }
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
            await Todo.updateOne({ hash: _hash, }, { title: _title, subTitle: _subTitle, isChecked: _isChecked, hash: _hash });
        } catch (error) {
            // will do proper error handling
            console.log(error);
        }
    }


    async delete(data: DatabaseParam): Promise<void> {
        try {
            const { _hash } = data;
            await Todo.deleteOne({ hash: _hash });
        } catch (error) {
            console.log(error);
        }
    }

}