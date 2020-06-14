<template>
   <ul>
       <app-post v-for='post in listPost' :post='post' :key='post._id'></app-post>
   </ul>
</template>
<script>
import axios from 'axios'
import Post from './Post'
export default {
    data() {
        return {
            listPost:[]
        }
    },
    components:{
        AppPost:Post,
    },
    created() {
        axios.get('http://localhost:3000/posts').then((res)=>{
            this.listPost.push(...res.data);
            console.log(this.listPost[0]._id);
        })
    },
}
</script>