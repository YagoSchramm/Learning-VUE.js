<template>
    <div class="container">
        <h1>{{ name }}</h1>
       <button @click="showEmail">Mostrar Email</button>
    </div>
</template>
<script>
export default {
    name: 'Container',
    data() {
        return {
            name: "Container com botão"
        };
    },
    methods: {
        showEmail() {
            alert("Meu email é: exemplo@email.com");
        }
    }
}
</script>
