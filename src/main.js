import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
const app = createApp(App)
app.use(router)
app.mount('#app')




// Hover Effect
const cursor = document.querySelector("#cursor"), anchor = document.querySelectorAll("a");

window.addEventListener("mousemove", (event) => {
    let x = event.pageX,
        y = event.pageY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
});

// Ancho del cursos
anchor.forEach((anc) => {
    anc.addEventListener("mouseover", () => {
        cursor.style.transform = "scale(2)";
        cursor.style.animationName = "borderAnim";
    });
    anc.addEventListener("mouseleave", () => {
        cursor.style.transform = "";
        cursor.style.animationName = "";
    });
});
