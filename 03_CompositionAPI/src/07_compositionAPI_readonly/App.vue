<template>
    <div>
        <Number />
        <hr />
        <Object />
    </div>
</template>

<script>
import Number from "./pages/Number.vue";
import Object from "./pages/Object.vue";
export default {
    components: {
        Number,
        Object,
    },

    data() {
        return {
            msg: "Hello App",
        };
    },
};
</script>

<style lang="scss" scoped></style>
