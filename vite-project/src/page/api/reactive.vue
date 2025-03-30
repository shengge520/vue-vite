<template>
    <div>reactive:{{value.label}}</div>
</template>

<script>
import {reactive} from 'vue'
export default{
    setup(){
        const value = reactive({label:'小明'})
        console.log('value---', value);
        
        return {
            value
        }
    }
}
</script>