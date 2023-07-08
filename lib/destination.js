import { getIds } from "./utils"
import { getEntity } from "./utils"

export function getAllDestinations(){
    const destIds = getIds('destination')
    console.log(destIds)
    return destIds.map(el=>{
        return {
            params:{
                id:el
            }
        }
    })
}

export function getDestination(id){
    return getEntity('destination',id)
}