<template>
    <div>
        我是子组件:{{value}}
        <br>
        <!-- 方式一
        子接受{{res}} -->
    </div>
</template>

<script>

import {ref,inject} from 'vue'
export default {
    name:'Son',
    setup(){
        
        // 方式一
        // const res = inject('name')
        // console.log('子接受-->', res);
        
        // 方式二        
        const value = ref(0)
        // 我被父调用的方法
        const handleUpdateSon=(val)=>{
            console.log('我被父调用的方法-->', val);
            
        }
        return {
            // 方式一
            // res,
            value,
            handleUpdateSon
        }
    }
}
</script>

