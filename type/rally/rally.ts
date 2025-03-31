import { Category } from "../enum/category"

export interface RallyPost{
    id : number,
    title : string,
    category : Category,
    startTime : string,
    endTime : string,
    owner : string,
    img : string
}