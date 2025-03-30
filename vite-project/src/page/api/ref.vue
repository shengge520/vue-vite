<template>
    <div>
        <div>ref:{{res.label}}</div>
        <button @click='handleUpdate'>点击修改</button>
    </div>
</template>

<script>
import {ref,toRef} from 'vue'
export default{
    setup(){
        const res = ref({label:'小明'})
        console.log('res---', res);
        
        const handleUpdate =() =>{
            console.log('update', res.value.label = '小王');
            
        }
        return {
            res,
            handleUpdate
        }
    }
}
</script>