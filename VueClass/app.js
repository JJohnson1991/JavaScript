

//create the app and mount it
const app = Vue.createApp({
    //data, functions
    //template: '<h2>I am as some Template</h2>'
    data(){
        return {
            title:'The final empire',
            author: 'Jordan Johnson',
            age: 29
        }
    }
});
app.mount('#app')