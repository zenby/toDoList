export const FILTER_UPDATE = 'FILTER_UPDATE';
export const HASH_CHANGED = 'FILTER_CHANGED';

export const filterUpdate_act_cr = payload => ({
    type: FILTER_UPDATE,
    payload
})

export const hashChanged_act_cr = payload => ({
    type: HASH_CHANGED,
    payload
})



