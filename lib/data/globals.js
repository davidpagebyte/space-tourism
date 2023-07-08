import data from './data.json'


export const app_constants = {
    sections: ['home',...Object.keys(data)],
    home: data.home
}

export let app_state = {
    current_section: app_constants[0]
}