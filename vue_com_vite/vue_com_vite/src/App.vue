<template>
  <div>
    <h1>Hello, Vue!</h1>
    <Container />
    <lifeCycle />
    <Pessoa />
  </div>
</template>
<script>
  import Container from './components/container.vue'
  import lifeCycle from './components/LifeCycle.vue'
  import Pessoa from './components/Pessoa.vue'
export default {
  name: 'App',
    components: {
    Container,
    lifeCycle,
    Pessoa
  },
}
</script>