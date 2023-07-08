import data from './data.json'


export const app_constants = {
    sections: Object.keys(data).map(el=>{
        return {
            id:el,
            url: (el==='home')? '/' : `/${el}/${Object.keys(data[el])[0]}`
        }
    }),
    home: data.home
}

export let app_state = {
    current_section: app_constants[0]
}