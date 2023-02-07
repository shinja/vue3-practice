<template>
    <div>
        <h1>Home Page</h1>
        <h4>{{ state.counter }}</h4>
        <h4>{{ counter }}</h4>
        <button @click="inc">+1</button>
    </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
    props: {
        message: {
            type: String,
            default: null,
        },
    },

    setup() {
        const state = reactive({
            counter: 0,
        });

        const inc = () => state.counter++;

        return {
            state,
            ...toRefs(state),
            inc,
        };
    },
};
</script>
