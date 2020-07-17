import { writable } from 'svelte/store'

export const stages = ['test', 'prod', 'custom']

export const options = writable({
    stage: stages[0],
    signer: '',
    spender: ''
})