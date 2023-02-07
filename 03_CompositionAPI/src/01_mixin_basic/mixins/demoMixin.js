export const demoMixin = {
    data() {
        return {
            message: "Hello world",
        };
    },

    methods: {
        foo() {
            console.log("demo mixin foo");
        },
    },

    created() {
        console.log("demo created");
    },
};
