<template>
    <h1>Meu nome é: {{ name }}</h1>
</template>

<script>
export default {
    name: 'LifeCycle',
    data() {
        return {
            name: 'Yago'
        };
    },
    created() {

    },
    mounted() {
              const nome = prompt('Qual é o seu nome?');
        if (nome) {
            this.name = nome;
        }
    },
}
</script>
