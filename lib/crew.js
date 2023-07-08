import { getIds } from "./utils"
import { getEntity } from "./utils"

export function getAllCrew(){
    const crewIds = getIds('crew')
    return crewIds.map(el=>{
        return {
            params:{
                id:el
            }
        }
    })
}

export function getCrewMember(id){
    return getEntity('crew',id)
}

export function getMain(){
    const crewIds = getIds('crew')
    return `/crew/${crewIds[0]}`
}