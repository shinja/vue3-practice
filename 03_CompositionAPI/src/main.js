import { createApp } from "vue";
import "./style.css";
// import App from "./06_compositionAPI_ref/App.vue";
// import App from "./07_compositionAPI_readonly/App.vue";
// import App from "./08_compositionAPI_ref_2/App.vue";
// import App from "./09_compositionAPI_watchEffect/App.vue";
// import App from "./10_compositionAPI_watch/App.vue";
import App from "./11_Teleport/App.vue";

const app = createApp(App);

// app.mixin({
//     created() {
//         console.log("global created");
//     },
// });

app.mount("#app");
