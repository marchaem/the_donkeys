<template>
  <div>
    <Navbar :islogged="logged" />
    <div id="app" class="container test rounded pb-3">
      <div>
         <router-view :myContract="cryptoBarrelsContract" :address="userAddress" :balance="balance" :web3="web3"/>
      </div>
      
    </div>
  </div>
</template>

<script language="javascript" type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>

import Navbar from './components/Navbar/Navbar';

export default {
  components: {
      Navbar
    },
  name: 'App',

  data() {
    return {
     web3: null,
     cryptoBarrelsContract : null,
     userAddress : null,
     balance : 0,
     logged: true,
     users_id: [0, 1, 2, 3],
     selected_user_id: 0
    }
  },

 

  methods: {

    startApp() {
      this.logged = true;
    },

    authenfication() {
      console.log(this.selected_user_id);
      this.startApp()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
   -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  z-index: 10;
}


</style>
