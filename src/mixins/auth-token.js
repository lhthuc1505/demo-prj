import axios from "axios";
export default {
    data() {
        return {
            token:this.$cookies.get("token"),
            config:{}
        }
    },
    created() {
        this.config={
            headers: {
            'Authorization': 'Bearer ' + this.token,
          }
        }
    },
    methods: {
        checkToken(){
          return axios.post("http://localhost:3000/auth-token",{key:'value'}, this.config);
        }
    },
}