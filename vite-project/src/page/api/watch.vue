<template>
    <div>
        <h1>a:{{a}}</h1>
        <br>
        <button @click='a++'>监听一个ref</button>
        <h1>b:{{b}}</h1>
        <br>
        <button @click='b+=2'>监听多个ref</button>
        <h1>cVal:{{cVal.age}}</h1>
        <br>
        <button @click='cVal.age++'>整个reactive</button>
        <h1>dVal:{{dVal.age}}</h1>
        <br>
        <button @click='dVal.age++'>监听reactive中某一个</button>
    </div>
</template>


<script>
//  监听一个ref
//  监听多个ref
//  监听整个reactive[只能监听最新的结果，上一次的监听不到]
//  监听reactive中某一个 最新的，上一次都能监听得到

// immediate属性 初始 就监听

import { ref, watch, reactive } from 'vue';
export default {
    setup() {
        const a = ref(0)
        const b = ref(1)
        const cVal = reactive({
            name: '小组',
            age: 10
        })
        const dVal = reactive({
            name: '小组',
            age: 10
        })
        // watch(a,(newVal,oldVal)=>{
        //     console.log(newVal,oldVal);
        // })
        // watch([a,b],(newVal,oldVal)=>{
        //     console.log(newVal,oldVal);
        // })
        // watch(cVal,(newVal,oldVal)=>{
        //     console.log(newVal,oldVal)
        // })
        watch(()=>dVal.age,(newVal,oldVal)=>{
            console.log(newVal,oldVal)
        })
        console.log('cVal', cVal.age);

        return {
            a,
            b,
            cVal,
            dVal
        }
    }
}
</script>


