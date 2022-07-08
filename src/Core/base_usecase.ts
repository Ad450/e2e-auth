abstract class BaseUsecase<IBaseUsecaseParams> {
    abstract execute(param: IBaseUsecaseParams): Promise<Todo | null>;
}

