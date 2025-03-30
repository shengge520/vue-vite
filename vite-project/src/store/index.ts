import {defineStore} from 'pinia'
import {TestNames} from './store-name'

export const Test = defineStore(TestNames,{
    state:()=> {
        return {
            current: 1,
            name: '小王'
        }
    }
})