<template>
  <div>
    <h1>Heloo vue !!!!!!!!!!</h1>
    <p v-if="isAdmin">Hi <router-link :to='{name:"Register"}'>{{user}}</router-link> </p>
  </div>
</template>
<script>
import axios from "axios";
import AuthToken from '../mixins/auth-token'
export default {
    mixins:[AuthToken],
    data() {
        return {
           isAdmin:false,
           user:''
        }
    },

  created() {
    // console.log(this.token, "string");
    // console.log(this.config);
    this.checkToken().then((res)=>{
        console.log(res.data);
        this.user=res.data.email;
       if(res.data.role==='user'){
          this.isAdmin=true;
       }
       console.log(this.user);
    });
      
  }
};
</script>
