<template>
    <div>
        {{ age }}
        <button @click="changeAge">change age</button>
    </div>
</template>

<script>
import { computed, reactive, ref, shallowReactive, shallowRef, watch, watchEffect } from "vue";

export default {
    setup() {
        const age = reactive({ name: "bbbb", age: 11 });

        const changeAge = () => {
            age.age++;
        };

        let obj = {};

        watch(
            () => {
                Object.assign(obj, { ...age });
                console.log("watch getter", obj);

                return obj;
            },
            (nval, oval) => {
                console.log("watch callback", nval, oval);
            }
        );

        return { age, changeAge };
    },
};
</script>

<style lang="scss" scoped></style>
