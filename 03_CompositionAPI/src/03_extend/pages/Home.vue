<template>
    <div>
        <h1>Home Page</h1>
        <h3>{{ title }}</h3>
    </div>
</template>

<script>
import BasePage from "./BasePage.vue";
export default {
    extends: BasePage,

    data() {
        return {
            // title: "Hello Home Page",
        };
    },
};
</script>

<style lang="scss" scoped></style>
