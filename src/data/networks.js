import { networks as net } from '@shareandcharge/ocn-registry/dist/networks'

export const networks = [
    {
        name: 'test',
        stage: 'volta', // network name used by ocn-registry library'
        rpc: `https://${net.volta.provider.host}`,
        explorer: `https://volta-explorer.energyweb.org`,
        registry: net.volta.contracts.Registry.address,
        permissions: net.volta.contracts.Permissions.address
    },
    {
        name: 'prod',
        stage: 'prod',
        rpc: `https://${net.prod.provider.host}`,
        explorer: 'https://explorer.energyweb.org',
        registry: net.prod.contracts.Registry.address
    }
]