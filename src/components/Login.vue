<template>
  <div>
    <form>
      <p>Email</p>
      <input type="text" v-model='user' value="email" />
      <p>Password</p>
      <input type="text" v-model='pass' value="password" />
      <br />
      <button @click.prevent='btn'>Dang nhap</button>
      
    </form>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      user:'',
      pass:''
    };
  },
 methods: {
   btn(){
     var email=this.user;
     var password=this.pass;
     axios.post('http://localhost:3000/login',{email,password}).then((res)=>{
       this.$cookies.set('token',res.data.token,60*60);
     })
   }
 },
 
};
</script>
