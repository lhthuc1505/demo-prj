<template>
    <li>
    <p>{{post._id}}</p>
    <router-link :to='{name:"ViewPost",params:{id:post._id}}' tag="h2" ><a>{{post.title}}</a></router-link>
    <p>{{post.content}}</p>
    <p>{{post.createdAt}}</p>
    </li>
</template>
<script>

export default {
    props:{
        post:Object
    }
}
</script>