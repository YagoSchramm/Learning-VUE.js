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
}
</script>
