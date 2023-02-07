<template>
    <div>
        {{ age }}
        <button @click="changeAge">change age</button>
    </div>
</template>

<script>
import { computed, reactive, ref, shallowRef, watch, watchEffect } from "vue";

export default {
    setup() {
        const age = ref(11);

        const changeAge = () => {
            age.value++;
        };

        watch(age, (nval, oval) => {
            console.log("watch callback", nval, oval);
        });

        return { age, changeAge };
    },
};
</script>

<style lang="scss" scoped></style>
