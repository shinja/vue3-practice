<template>
    <div>
        <h4>{{ info }}</h4>
        <button @click="changeName">change name</button>
        <button @click="changeAge">change age</button>
    </div>
</template>

<script>
import { ref, shallowRef, triggerRef } from "vue";
export default {
    setup() {
        // const info = ref({ friend: { name: "fff" }, age: 11 });
        const info = shallowRef({ friend: { name: "fff" }, age: 11 });

        const changeName = () => {
            info.value.friend.name = "bbb";
            triggerRef(info);
        };
        const changeAge = () => {
            info.value.age = 22;
        };

        return {
            info,
            changeName,
            changeAge,
        };
    },
};
</script>
