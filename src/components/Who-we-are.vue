<template>
    <div id="box1" class="box blurred-bg tinted">
    <div class="content">
      <h1>The Donkeys</h1>
        <h2 rel="follow" target="_blank">We are the savers of the universe, the only chance to prevent the world from being annihilated by the lama army and the Armenians. Our justice is divine and led by our holy 7 judges elected for life following the words of our lord of corruption Nicolas Sarkozy</h2>        
    </div>
</div>        
</template>


<script>
  export default {
    name: 'who we are',
    data () {
      return {

      }
    },


    

  
      

    
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
HTML  CSS  Result
 body,
html {
  margin: 0;
}

.img-container {
  background-image: url(http://www.placekitten.com/1500/1500);
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-filter: blur(70px);
  -o-filter: blur(70px);
  filter: blur(70px);
  filter: progid: DXImageTransform.Microsoft.Blur(PixelRadius='70');
  background-size: cover;
}

.content-container {
  width: 100%;
  height: 1000px;
  position: relative;
  overflow: hidden;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
}

.blur {
  /* All the background image supports */
  background-image: -webkit-linear-gradient(bottom left, rgba(43, 40, 50, 0.8) 0%, rgba(83, 86, 99, 0.8) 45%, rgba(69, 77, 91, 0.6) 60%);
  background-image: -moz-linear-gradient(bottom left, rgba(43, 40, 50, 0.8) 0%, rgba(83, 86, 99, 0.8) 45%, rgba(69, 77, 91, 0.6) 60%);
  background-image: -o-linear-gradient(bottom left, rgba(43, 40, 50, 0.8) 0%, rgba(83, 86, 99, 0.8) 45%, rgba(69, 77, 91, 0.6) 60%);
  background-image: linear-gradient(to top right, rgba(43, 40, 50, 0.8) 0%, rgba(83, 86, 99, 0.8) 45%, rgba(69, 77, 91, 0.6) 60%);
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-filter: blur(50px);
  -o-filter: blur(50px);
  filter: blur(50px);
  filter: progid: DXImageTransform.Microsoft.Blur(PixelRadius='70');
  top: -70px;
  right: -70px;
  left: -70px;
  padding: 70px;
}

.blur:after {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1001;
  background-image: -webkit-linear-gradient(339deg, rgba(43, 40, 50, 0.8) 0%, rgba(43, 40, 50, 0.4) 46%, rgba(0, 0, 0, 0.05) 50%);
  background-image: -moz-linear-gradient(339deg, rgba(43, 40, 50, 0.8) 0%, rgba(43, 40, 50, 0.4) 46%, rgba(0, 0, 0, 0.05) 50%);
  background-image: -o-linear-gradient(339deg, rgba(43, 40, 50, 0.8) 0%, rgba(43, 40, 50, 0.4) 46%, rgba(0, 0, 0, 0.05) 50%);
  background-image: linear-gradient(339deg, rgba(43, 40, 50, 0.8) 0%, rgba(43, 40, 50, 0.4) 46%, rgba(0, 0, 0, 0.05) 50%);
  -webkit-filter: blur(70px);
  -o-filter: blur(70px);
  filter: progid: DXImageTransform.Microsoft.Blur(PixelRadius='70');
  filter: blur(70px);
}
</style>
