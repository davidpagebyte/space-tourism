import { getIds } from "./utils"
import { getEntity } from "./utils"
import { getDynamicPathParam } from "./utils"

export function getAllDestinationsStaticPaths(){
    const destIds = getIds('destination')
    return destIds.map(el=>{
        return getDynamicPathParam(el)
    })
}

export function getDestination(id){
    return getEntity('destination',id)
}
