<template>
    <div>
        <h4>{{ info }}</h4>
        <h4>{{ readonlyInfo }}</h4>
        <button @click="updateInfo">update info</button>
        <button @click="updateReadonlyInfo">update readonly info</button>
    </div>
</template>

<script>
import { reactive, readonly, ref } from "vue";
import Child from "./Child.vue";
export default {
    components: {
        Child,
    },
    setup() {
        console.log("=============================");
        /** normal object */
        // const info = { name: "why" };
        // const readonlyInfo = readonly(info);
        // console.log(info, readonlyInfo);

        // const updateInfo = () => {
        //     info.name = "cody"; //非響應式的
        //     console.log("update INfo", info);
        // };
        // const updateReadonlyInfo = () => {
        //     readonlyInfo.name = "cody";
        //     console.log("update readonly info", readonlyInfo.name);
        // };

        /** ref */
        // const info = ref({ name: "why" });
        // const readonlyInfo = readonly(info);
        // console.log(info, readonlyInfo);

        // const updateInfo = () => {
        //     info.value.name = "coby";
        //     console.log("update INfo", info);
        // };
        // const updateReadonlyInfo = () => {
        //     // readonlyInfo.name = "Hello";
        //     readonlyInfo.value.name = "cody";
        //     console.log("update readonly info", readonlyInfo.value.name);
        // };

        /** reactive */
        const info = reactive({ name: "why" });
        const readonlyInfo = readonly(info);
        console.log(info, readonlyInfo);

        const updateInfo = () => {
            info.name = "coby";
            console.log("update INfo", info);
        };
        const updateReadonlyInfo = () => {
            readonlyInfo.name = "cody";
            console.log("update readonly info", readonlyInfo.name);
        };

        return {
            info,
            readonlyInfo,
            updateInfo,
            updateReadonlyInfo,
        };
    },
};
</script>
