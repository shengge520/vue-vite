<template>
    <div>
        <h1>a:{{res.age}}</h1>
        <button @click='res.age++'>点击</button>
    </div>
</template>

<script>
// watchEffect 相当于watch+immediate,获取最新的值
import {reactive,watchEffect} from 'vue'
export default {
    setup(){
        const obj = {
            name: '小王',
            age: 10
        }
        const res = reactive(obj)

        const func = watchEffect(()=>{
            console.log('watchEffect------>', res.age);
        })

        return {
            res
        }
    }
}
</script>
