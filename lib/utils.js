import data from './data/data.json'

export function getIds(type){
    return Object.keys(data[type]);
}

export function getEntity(type, id){
    return data[type][id]
}