<template>
    <div>
        <h4>{{ counter }}</h4>
        <h4>{{ readonlyCounter }}</h4>
        <h4>{{ state }}</h4>
        <button @click="updateCounter">+1</button>
        <button @click="updateReadonlyCounter">update readonly counter</button>
    </div>
</template>

<script>
import { reactive, readonly, ref } from "vue";
import Child from "./Child.vue";
export default {
    components: {
        Child,
    },
    setup() {
        console.log("=============================");
        const counter = ref(0);
        const readonlyCounter = readonly(counter);

        const state = reactive({
            counter,
            readonlyCounter,
        });
        console.log(counter, readonlyCounter, state);

        const updateCounter = () => counter.value++;
        // const updateCounter = () => state.counter++;
        const updateReadonlyCounter = () => readonlyCounter.value++;

        return {
            state,
            counter,
            readonlyCounter,
            updateCounter,
            updateReadonlyCounter,
        };
    },
};
</script>
