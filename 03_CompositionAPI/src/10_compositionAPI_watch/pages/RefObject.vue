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
        const age = ref({ name: "bbbb", age: 11 });

        // const changeAge = () => {
        //     const { age: _age } = age.value;
        //     Object.assign(age.value, { age: _age + 1 });
        // };

        // watch(
        //     age,
        //     (nval, oval) => {
        //         console.log("watch callback", nval, oval);
        //     },
        //     {
        //         deep: true,
        //     }
        // );

        const changeAge = () => {
            const { age: _age } = age.value;
            age.value = Object.assign({}, age.value, { age: _age + 1 }); // assign a new object will trigger callback
        };
        watch(age, (nval, oval) => {
            console.log("watch callback", nval, oval);
        });

        return { age, changeAge };
    },
};
</script>

<style lang="scss" scoped></style>
