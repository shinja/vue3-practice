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
            title: "Hello World",
        };
    },
};
</script>

<style lang="scss" scoped></style>
