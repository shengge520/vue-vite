<template>
    <div>
        a：<input type="number" v-model='a'><br/>
        b：<input type="number" v-model='b'><br/>
        sum：<input type="number" v-model='sum'>
    </div>
</template>

<script>
import { reactive ,computed, toRefs } from 'vue'
export default {
    setup() {
        const a = ''
        const b = ''
        const res = reactive({a,b})
        const sum = computed(()=>{
            return res.a+res.b
        })
        return {
            ...toRefs(res),
            sum
        }
    }
}
</script>

