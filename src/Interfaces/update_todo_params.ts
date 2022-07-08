interface IUpdateTodoParams extends IBaseUsecaseParams {
    title: string;
    subTitle?: string;
    id: number;
    isChecked: boolean;
}