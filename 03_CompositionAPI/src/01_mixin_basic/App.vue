<template>
    <div>
        <h2>{{ message }}</h2>
        <button @click="foo">Foo</button>
    </div>
</template>

<script>
import { demoMixin } from "./mixins/demoMixin";

export default {
    mixins: [demoMixin],

    data() {
        return {
            message: "Hello world",
        };
    },

    created() {
        console.log("App created");
    },

    methods: {
        foo() {
            console.log("App foo");
        },
    },
};
</script>

<style lang="scss" scoped></style>
