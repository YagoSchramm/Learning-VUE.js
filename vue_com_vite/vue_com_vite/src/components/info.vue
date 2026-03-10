<template>
    <div>
        <p v-if="estaTrabalhando">Estou trabalhando</p>
        <p v-else>Estou disponível para projetos</p>
        <p>Esta é uma breve descrição minha </p>
        <p>Essas são as linguagens que eu utilizo para back-end
        </p>
        <ul >
            <li v-for="(tecnologia,index) in tecnologias" v-bind:key="index">{{tecnologia}}</li>
        </ul>
        <p>Essas são as linguagens que eu utilizo para front-end</p>
        <ul>
            <li v-for="tecnologia in frontEnd" :key="tecnologia.id">
                {{ tecnologia.language }}
            </li>
        </ul>
    </div>
</template>
<script >
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Info',
    data() {
        return {
            estaTrabalhando:false,
            tecnologias:["JavaScript","Python","Java"],
            frontEnd:[
                {id:1,language:"Flutter"},
                {id:2,language:"HTML"},
                {id:3,language:"Vue"},
            ]
        }
    },
})
</script>
