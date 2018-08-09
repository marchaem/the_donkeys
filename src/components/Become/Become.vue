<template>
	<div>
        <form v-on:submit="DataSaved()" name="formId" id="formId" class="mailform" accept-charset="UTF-8" enctype="text/plain" method="get" action="https://script.google.com/macros/s/AKfycbx-MUpq_L_gHJgy8BxRxz-cN8y9J92V2I2p5nS5t1BOf8-zNJE/exec">
                <div>             
                    <label for="message" class="a">You want to become a donkey ? Write to us and demonstrate why we should adopt you as a fellow donkey, the donkey court shall decide in presence of his holyness Sarkozy</label>
                    <textarea id="text" name="email" rows="4" cols="130"  placeholder="message" required></textarea>
                </div> 
                <div>   
                    <input type="submit"  name="btn1" class="btn btn-defaukt"  value="Send">
                </div>    
        </form>	
	</div>
</template>

<script>
	export default {
        name: 'become_a_donkey',    
        methods: {
            DataSaved(){
            }                           
        }    
    }
    

</script>

<style lang="css" scoped>
div.form-group{
    top: 100px;
    right: 30px
}
label.a{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
}
table {
    text-align: center;
}

</style>