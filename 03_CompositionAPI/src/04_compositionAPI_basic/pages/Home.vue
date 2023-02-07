<template>
    <div>
        <h1>Home Page</h1>
        <h3>{{ message }}</h3>
        <div>id: {{ id }}</div>
        <div>class: {{ cls }}</div>

        <h4>{{ counter }}</h4>
        <button @click="inc">+1</button>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            default: null,
        },
    },

    setup({ message }, context) {
        const {
            attrs: { id, class: cls },
        } = context;

        console.log(message);

        let counter = 100;

        const inc = () => counter++;

        return {
            id,
            cls,
            counter,
            inc,
        };
    },
};
</script>

<style lang="scss" scoped></style>
