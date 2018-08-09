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
import Web3 from 'web3';

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

  created: function () {
    if (typeof web3 !== 'undefined') {
      console.log("ici");
      web3 = new Web3(web3.currentProvider);

  } else {
    // set the provider you want from Web3.providers
    console.log("là");
    //web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/6b243c811893488ab3d1cf177ff93662'));
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:5000"));   
    if(!web3.isConnected())
        console.log("not connected");
    else
        console.log("connected");
}

  },

  methods: {

    startApp() {
      console.log("web3 vaut " + web3);
      //default ethereum account
      var bidABI =[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"bid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"exists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"previousToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getInt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_price","type":"uint256"},{"name":"_duration","type":"uint256"}],"name":"createSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"getBarrelById","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint8"},{"name":"","type":"uint8"},{"name":"","type":"uint256"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getMyTokenOnSale","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getAuction","outputs":[{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint128"},{"name":"","type":"uint64"},{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTokensOnSale","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_origin","type":"uint8"}],"name":"mintBrut","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"cancelAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwnedBarrels","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"refineToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenId","type":"uint256"},{"indexed":false,"name":"price","type":"uint256"},{"indexed":false,"name":"duration","type":"uint256"}],"name":"AuctionCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenId","type":"uint256"},{"indexed":false,"name":"totalPrice","type":"uint256"},{"indexed":false,"name":"winner","type":"address"}],"name":"AuctionSuccessful","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenId","type":"uint256"}],"name":"AuctionCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_operator","type":"address"},{"indexed":false,"name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"}];
      web3.eth.defaultAccount = web3.eth.accounts[this.selected_user_id];
      this.userAddress = web3.eth.defaultAccount;
      console.log("notre adresse vaut :" + this.userAddress);
      console.log(typeof(this.userAddress));
      var contractAddress = '0x410f38c56d77bafb58ac7727f589acc5e13110cc';
      this.cryptoBarrelsContract = web3.eth.contract(bidABI).at(contractAddress);
      /*this.balance = web3.eth.getBalance(this.userAddress,function(error,result){
        if(!error){
          console.log("balance vaut " + result);
        }
        else{
          console.error(error);
        }
      });*/
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
