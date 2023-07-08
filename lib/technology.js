import { getIds } from "./utils"
import { getEntity } from "./utils"

export function getAllTech(){
    const techIds = getIds('technology')
    console.log(techIds)
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