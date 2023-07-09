import { getIds } from "./utils"
import { getEntity } from "./utils"
import { getDynamicPathParam } from "./utils"

export function getAllCrewStaticPaths(){
    const crewIds = getIds('crew')
    return crewIds.map(el=>{
        return getDynamicPathParam(el)
    })
}

export function getCrewMember(id){
    return getEntity('crew',id)
}
