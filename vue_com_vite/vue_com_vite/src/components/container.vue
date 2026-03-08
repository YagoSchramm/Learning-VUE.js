<template>
    <div class="container">
        <h1>{{ name }}</h1>
        <p>This is a reusable container component.</p>
    </div>
</template>
<script>
export default {
    name: 'Container',
    data() {
        return {
            name: 'aaaa'
        };
    },
}
</script>
