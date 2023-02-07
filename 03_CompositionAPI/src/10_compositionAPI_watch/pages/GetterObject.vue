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
        /**
         * 一般的物件並沒有經過 vue 的響應追蹤處理，因此並不會觸發任何畫面或者watch 的callback
         */
        let age = { name: "bbbb", age: 11 };

        const changeAge = () => {
            const { age: _age } = age;
            age = Object.assign({}, age, { age: _age + 1 });

            console.log("changeAge ", age);
        };

        watch(
            () => age,
            (nval, oval) => {
                console.log("watch callback", nval, oval);
            }
        );

        return { age, changeAge };
    },
};
</script>

<style lang="scss" scoped></style>
