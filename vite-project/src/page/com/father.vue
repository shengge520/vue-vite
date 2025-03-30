<template>
    <div>
        我是父
        <button @click='handleFather'>点击传值给子组件</button>
        <br>
        <Son ref='valRef'></Son>

    </div>
</template>

<script>
// 方式一：provide+inject  自动传
// 方式二：点击传 ref+函数传参

import {ref,provide,reactive} from 'vue'
import Son from './son.vue'
export default {
    components:{
        Son
    },
    setup(){
        // 方式一
        // const value = ref(10)
        // provide('name', value)
        

        const valRef = ref()
        const p1 = reactive({
            name:'小王1',
            age: 10
        })
        const handleFather=()=>{
            console.log('修改--->', valRef);
            valRef.value.handleUpdateSon(p1)
        }
        
        
        return{
            valRef,
            handleFather
        }
    }
}
</script>

