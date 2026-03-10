<template>
  <div>
    <h1>Hello, Vue!</h1>
    <Container />
    <lifeCycle />
    <Pessoa />
    <Form placeholder1="insira seu nome" placeholder2="insira seu email"/>
  </div>
</template>
<script>
  import Container from './components/container.vue'
  import lifeCycle from './components/LifeCycle.vue'
  import Pessoa from './components/Pessoa.vue'
  import Form from './components/form.vue'
export default {
  name: 'App',
    components: {
    Container,
    lifeCycle,
    Pessoa,
    Form
  },
}
</script>