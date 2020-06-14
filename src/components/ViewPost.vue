<template>
    <div>
     <p>{{post._id}}</p>
   <h2>{{post.title}}</h2>
    <p>{{post.content}}</p>
    <p>{{post.createdAt}}</p>
    <button >Edit</button>
    <button >Delete</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
      return {
         post:null
      }
  },
  created() {
        let postID=this.$route.params.id;
        console.log(postID);
        axios.get('http://localhost:3000/posts').then((res)=>{
           res.data.forEach((post)=>{
               if(postID===post._id){
                   this.post=post;
               }
           })
            
        })
  },

}
</script>