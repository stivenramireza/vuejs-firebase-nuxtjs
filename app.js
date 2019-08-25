const app = new Vue({
    el: '#app',
    data:{
        mensaje: 'hola soy bluuweb',
        contador: 0
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return{
                'bg-sucess': this.contador < 10,
                'bg-warning': this.contador > 10 && this.contador < 20,
                'bg-danger': this.contador >= 20
            }            
        }
    }
})