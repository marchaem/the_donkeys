var TokenAsset = artifacts.require("TokenAssetSale");

module.exports = function(deployer) {
    deployer.deploy(TokenAsset);
};