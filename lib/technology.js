import { getIds } from "./utils"
import { getEntity } from "./utils"

export function getAllTechStaticPaths(){
    const techIds = getIds('technology')
    return techIds.map(el=>{
        return getDynamicPathParam(el)
    })
}

export function getTechnology(id){
    return getEntity('technology',id)
}
