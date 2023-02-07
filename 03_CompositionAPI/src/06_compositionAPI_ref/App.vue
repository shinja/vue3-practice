<template>
    <div>
        <home :message="msg" id="home" class="c1 c2" />
    </div>
</template>

<script>
import Home from "./pages/Home.vue";
export default {
    components: {
        Home,
    },

    data() {
        return {
            msg: "Hello App",
        };
    },
};
</script>

<style lang="scss" scoped></style>
