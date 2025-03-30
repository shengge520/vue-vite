<template>
    <div>
        <div>toRef:{{value}}</div>
        <button @click='handleBtn'>点击</button>
    </div>
</template>

<script>
import {ref,toRef} from 'vue'
export default {
    setup(){
        let obj = {label:'小明b'}
        const value = toRef(obj, 'label')
        console.log('value---', value);
        const handleBtn =()=>{
            
            value.value= '小王';
            console.log('update', value);//这里已更新，toRef是引用，数据会改变，但试图不会更新
            
        }
        return {
            value,
            handleBtn
        }
    }
}
</script>