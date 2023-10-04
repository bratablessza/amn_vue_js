<template>
  <div class="container">
    <router-link to="/">Go Back</router-link>
    <h2>Try It</h2>
    <div class="sc_code">
      <pre>axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
        console.log(response.data);
        })
        .catch(error => {
        console.error("Error message :", error.message);
        });</pre>
    </div>
    <br>
    <b-container>
      <b-button v-on:click="runnerScript">Run Script</b-button>
    </b-container>
    <br>
    <b-container class="sc_code" id="result">
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MainPage',
  props: {
    msg: String
  },
  methods: {
    runnerScript: function () {
      axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {

          //console.log(res_div)
          var res = document.createElement('pre');
          var string_response = JSON.stringify(response.data, undefined, 2);
          //var text = document.createTextNode(string_response);
          res.innerHTML = string_response;
          document.getElementById('result').appendChild(res);
        })
        .catch(error => {
          console.error("Error message :", error.message);
        });
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sc_code {
  border-radius: 8px;
  min-height: 100px;
  background-color: rgb(65, 63, 63);
  padding: 15px;
  color: whitesmoke;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
