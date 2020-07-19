import { writable } from 'svelte/store'

export const networks = ['test', 'prod', 'custom']

export const options = writable({
    network: networks[0],
    signer: '',
    spender: ''
})