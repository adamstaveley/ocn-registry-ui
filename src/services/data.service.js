import { Registry, Permissions } from '@shareandcharge/ocn-registry'

async function fetchData(key, fetchFn) {
    const existing = sessionStorage.getItem(key)
    if (!existing) {
        const data = await fetchFn()
        sessionStorage.setItem(key, JSON.stringify(data))
        return data
    }
    return JSON.parse(existing)
}

export async function fetchNodes(stage) {
    return fetchData(`${stage}_nodes`, () => {
        const registry = new Registry(stage)
        return registry.getAllNodes()
    })
}

export async function fetchParties(stage) {
    return fetchData(`${stage}_parties`, () => {
        const registry = new Registry(stage)
        return registry.getAllParties()
    })
}

export async function fetchServices(stage) {
    return fetchData(`${stage}_services`, () => {
        const registry = new Permissions(stage)
        return registry.getAllServices()
    })
}
