export const get = (path, body) => {
    return fetch(`https://raw.githubusercontent.com/pierre-elie-fortin/thetavern/master/data/${path}.json`, {
        method: 'GET',
        body: JSON.stringify(body),
    })
}

export default {
    get,
}