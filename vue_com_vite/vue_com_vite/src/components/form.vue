<template>
    <form @submit="enviarFormulario($event)">
        <input type="text" :placeholder="placeholder1">
        <input type="text" :placeholder="placeholder2">
        <input type="submit" value="Enviar">
    </form>
</template>
<script>
export default {
    name:"form",
    props:{
    placeholder1:String,
    placeholder2:String,
    },
    methods:{
            enviarFormulario(e){
                e.preventDefault();
                alert("Formulário enviado");
                
            },
       
    }
}
</script>
<style scoped>
form{
    display: flex;
    flex-direction: column;
}
input{
    margin:10px
}
</style>