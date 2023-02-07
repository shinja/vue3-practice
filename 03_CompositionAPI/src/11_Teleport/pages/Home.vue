<template>
    <div>
        <div id="m1" style="background-color: red">11</div>
        <div id="m2" style="background-color: blue">22</div>

        <Teleport v-if="isMounted" :to="`#${target}`">
            <h2>Hello world</h2>
        </Teleport>
        <button @click="changeTarget">Change Target</button>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
    setup() {
        const target = ref("m1");

        const isMounted = ref(false);
        const changeTarget = () => {
            target.value = target.value === "m1" ? "m2" : "m1";
        };

        onMounted(() => (isMounted.value = true));

        return {
            target,
            isMounted,
            changeTarget,
        };
    },
};
</script>
