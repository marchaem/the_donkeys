<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">

	  <a class="navbar-brand" href="/">The donkeys</a>
	  <button class="navbar-toggler" type="button"  data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarNavDropdown">
			<img class="nav-item" @click="donkeystan" src="/../static/donkey.png" width="65" height="65" href>
	    <ul class="navbar-nav  mr-auto">
				<li class="nav-item">
	      	<router-link :to="{name: 'donkey'}" class="nav-link"><span></span></router-link>
	      </li>
	      <li class="nav-item">
	      	<router-link :to="{name: 'who we are'}" class="nav-link"><span>Who we are</span></router-link>
	      </li>
	      <li class="nav-item">
	      	<router-link :to="{name: 'constitution'}" class="nav-link"><span>Constitution</span></router-link>
	      </li>
				<li class="nav-item">
	      	<router-link :to="{name: 'become_a_donkey'}" class="nav-link"><span>Become a donkey</span></router-link>
	      </li>
				<li class="nav-item">
	      	<router-link :to="{name: 'donkey_court'}" class="nav-link"><span>Donkey court</span></router-link>
	      </li>
				<li class="nav-item">
	      	<router-link :to="{name: 'buycepajou'}" class="nav-link"><span>Buy Cepajou</span></router-link>
	      </li>
	    </ul>
	  </div>
	</nav>
</template>

<script>
export default {

  name: 'Navbar',

  data () {
    return {

    }
	},

	methods: {
		disconnect() {
			location.reload();
		},
		donkeystan(){
			return this.$router.push('donkey');
		},
		entrance(){
			return this.$router.push('who we are');
		}
	},
	
	props: ['islogged']
}
</script>

<style lang="css" scoped>
</style>