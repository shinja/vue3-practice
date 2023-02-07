<template>
    <div>
        <!-- <h4>{{ counter }}</h4> -->
        <!-- 以下方式經過測試也都可以做響應 -->
        <h4>{{ state }}</h4>
        <!-- <h4>{{ state.counter }}</h4> -->
        <!-- <h4>{{ reactiveState }}</h4> -->
        <!-- <h4>{{ reactiveState.counter }}</h4> -->
        <button @click="inc1">ref +1</button>
        <button @click="inc2">state +1</button>
    </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
    setup() {
        console.log("=======================");
        const counter = ref(0);
        const inc1 = () => counter.value++;

        const state = {
            counter,
        };

        /**
         * template 上面就要用
         * <h4>{{ reactiveState }}</h4>
         */
        const reactiveState = reactive(counter);
        const inc2 = () => reactiveState.value++;

        /**
         * 比較正確的用法
         * template 上面就要用
         * <h4>{{ reactiveState.counter }}</h4>
         */
        // const reactiveState = reactive({
        //     counter,
        // });
        // const inc2 = () => reactiveState.counter++;

        console.log(counter, state, reactiveState);

        return {
            counter,
            state,
            reactiveState,
            inc1,
            inc2,
        };
    },
};
</script>
