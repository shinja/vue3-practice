<template>
    <div>
        <div>{{ counter }}</div>
        <button @click="inc">Child ++</button>
    </div>
</template>

<script>
export default {
    props: {
        counter: {
            type: Object,
        },
    },

    setup({ counter }, context) {
        console.log(counter);

        const inc = () => counter.readonlyCounter++;

        return {
            inc,
        };
    },
};
</script>

<style lang="scss" scoped></style>
