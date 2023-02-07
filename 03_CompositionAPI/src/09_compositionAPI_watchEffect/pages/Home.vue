<template>
    <div>
        <h4>{{ name }}</h4>
        <h4>{{ age }}</h4>
        <h1 ref="dom">This is ref DOM</h1>
        <button @click="changeName">change name</button>
        <button @click="changeAge">change age</button>
    </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
    setup() {
        const name = ref("why");
        const age = ref(19);
        const dom = ref(null);

        const changeName = () => (name.value = "bbbbbbbb");
        const changeAge = () => {
            age.value++;

            if (age.value >= 25) {
                stop();
            }
        };

        const stop = watchEffect(
            (onInvalidate) => {
                console.log("watchEffect age", age.value);
                // console.log("watchEffect dom", dom.value);
                onInvalidate(() => {
                    // clear watchEffect side effect
                    // i.e. previousRequest.cancel()
                    console.log("onInvalidate");
                    clearTimeout(timer);
                });

                const timer = setTimeout(() => {
                    // console.log("watchEffect age", age.value); //這裡並沒有辦法搜集依賴
                    console.log("2s 後執行操作", age.value);
                }, 2000);
            }
            // {
            //     flush: "post", // 避免dom 的掛載觸發兩次 watchEffect
            // }
        );

        return {
            name,
            age,
            dom,
            changeName,
            changeAge,
        };
    },
};
</script>

<style lang="scss" scoped></style>
