interface ICreateTodoParams extends IBaseUsecaseParams {
    title: string;
    subTitle?: string;
    id: number;
    isChecked: boolean;
}