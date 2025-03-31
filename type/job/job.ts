import { Category } from "../enum/category"

export interface JobPost{
    id : number,
    title : string,
    category : Category,
    task : string,
    owner : string
}