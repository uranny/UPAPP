import { CommunityCategory } from "../enum/communityCategory"

export interface CommunityPost{
    id : number,
    title : string,
    category : CommunityCategory,
    time : string,
    owner : string
    comment : string[]
}