<template>
    <div>
        <h1>姓名：{{age.num}}</h1>
        <br>
        <button @click='handleUpdate'>修改</button>
        <br>
        <h1>a:{{Sum}}</h1>
        <br>
        <button @click='Sum++'>修改</button>
        <!-- <h1>a:{{Sum.age.num}}</h1>
        <br>
        <button @click='Sum.age.num++'>修改</button> -->
    </div>
</template>

<script>
// shallowReactive只修改第一层数据
// shallowRef只处理基本数据类型
import {shallowReactive,shallowRef,toRefs,reactive} from 'vue'
export default {
    setup() {
        const obj = {
            name: '小组',
            age: {
                num: 10
            }
        }
        const res = shallowReactive(obj)

        const handleUpdate=()=>{
            // console.log('shallowReactive', res.name='小王');//成功
            console.log('shallowReactive', res.age.num = 20);//打印20 视图不更新
            
        }

        // const Sum = shallowRef(0) //成功
        let newObj = {
            name: '小组',
            age:{
                num: 10
            }
        }
        const Sum = shallowRef(newObj) //失败

        return {
            ...toRefs(res),
            handleUpdate,
            Sum
        }
    }
}
</script>

