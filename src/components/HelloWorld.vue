<template>
    <div class="container">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>Page HelloWorld.Vue</h1>
        <p>{{ msg }}</p>
        <router-link to="/main">Go to main Page</router-link><br>
        <router-link to="/tugas">Tugas</router-link><br>
        <router-link to="/test">Test Page</router-link><br>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>