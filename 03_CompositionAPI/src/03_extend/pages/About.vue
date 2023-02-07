<template>
    <div>
        <h1>About Page</h1>
        <div>{{ title }}</div>
    </div>
</template>

<script>
import BasePage from "./BasePage.vue";
export default {
    extends: BasePage,

    data() {
        return {
            title: "Hello About Page",
        };
    },
};
</script>

<style lang="scss" scoped></style>
