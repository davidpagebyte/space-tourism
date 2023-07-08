import { getIds } from "./utils"
import { getEntity } from "./utils"

export function getAllTech(){
    const techIds = getIds('technology')
    return techIds.map(el=>{
        return {
            params:{
                id:el
            }
        }
    })
}

export function getTechnology(id){
    return getEntity('technology',id)
}

export function getMainTechnology(){
    const techIds = getIds('destination')
    return `/destination/${techIds[0]}`
}