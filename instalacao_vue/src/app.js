const MyNameApp={
    data(){
        return{
            message: "Hello Vue!",
            input_name:"",
        }
    },
    methods: {
        submitForm(e){
            e.preventDefault();
            alert("voce clicou")
        }
    }
};
Vue.createApp(MyNameApp).mount("#app");
