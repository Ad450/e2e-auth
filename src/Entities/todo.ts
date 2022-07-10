import ITodoParams from "../Interfaces/todo_interface";

class Todo {
    id: number;
    title: string;
    subTitle?: string;
    isChecked: boolean;

    constructor({ id, title, subTitle, isChecked }: ITodoParams) {
        this.id = id;
        this.title = title;
        this.subTitle = subTitle;
        this.isChecked = isChecked;
    }
}