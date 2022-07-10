import { DatabaseParam } from "../Interfaces/db_params";


export default abstract class DatabaseService {
    abstract create(data: DatabaseParam): Promise<void>;
    abstract update(data: DatabaseParam): Promise<void>;
    abstract delete(data: DatabaseParam): Promise<void>;
}