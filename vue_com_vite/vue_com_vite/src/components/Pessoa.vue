<template>
    <div>
        <h2>Esta é descrição da pessoa: {{ name }}</h2>
        <Info />
    </div>
</template>
<script>
import Info from './info.vue'

export default {
    name: 'Pessoa',
    components: {
        Info
    },
    data() {
        return {
            name: 'Yago'
        };
    },
}
</script>