<template>
    <div>
        <div>toRefs：{{label}}</div>
    </div>
</template>

<script>
import { reactive,toRefs } from 'vue'
export default {
    setup() {
        const obj = { label: '小明qaq' }
        const newObj = reactive(obj)
        
        return {
            ...toRefs(newObj)//简写对象，直接写key
        }
    }
}
</script>

