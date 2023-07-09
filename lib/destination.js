import { getIds } from "./utils"
import { getEntity } from "./utils"

export function getAllDestinationsStaticPaths(){
    const destIds = getIds('destination')
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
