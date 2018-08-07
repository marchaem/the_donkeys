const TokenAsset = artifacts.require("TokenAssetSale");
const web3 = require("web3");

contract("Asset Token", accounts => {

    let instance;
    let owner;

    before(async () => {
        instance = await TokenAsset.deployed();
        owner = await instance.owner();
    });

    it("Should make first account an owner", async () => {
        assert.equal(owner, accounts[0]);

        let tokens = await instance.getOwnedBarrels();
        assert.equal(tokens.length, 0);
    });

    it("Owner can mint a new token", async () => {
        await instance.mintBrut(1);

        let tokens = await instance.getOwnedBarrels();
        let barrel = await instance.getBarrelById(tokens[0]);
        
        assert.equal(tokens.length, 1);
        assert.equal(barrel[0] , 1);
        assert.equal(barrel[1] , 0);
        assert.equal(barrel[2] , 0);
    });

    it("Everyone can see token info", async () => {
        let barrel = await instance.getBarrelById(0, {from: accounts[1]});

        assert.equal(barrel[0] , 1);
        assert.equal(barrel[1] , 0);
        assert.equal(barrel[2] , 0);
    });



    it("Token's Owner can refined it", async () => {
        let tokens = await instance.getOwnedBarrels();

        await instance.refineToken(tokens[0]);
        
        tokens = await instance.getOwnedBarrels();

        barrel = await instance.getBarrelById(tokens[1]);
        assert.equal(barrel[0] , 1);
        assert.equal(barrel[1] , 1);
        assert.equal(barrel[2] , 0);

        barrel = await instance.getBarrelById(tokens[2]);
        assert.equal(barrel[0] , 1);
        assert.equal(barrel[1] , 2);
        assert.equal(barrel[2] , 0);

        barrel = await instance.getBarrelById(tokens[3]);
        assert.equal(barrel[0] , 1);
        assert.equal(barrel[1] , 3);
        assert.equal(barrel[2] , 0);
    });

    it("Can't refined it token, you don't own", async () => {
        let tokens = await instance.getOwnedBarrels();
        try {
            await instance.refineToken(tokens[0], {from: accounts[1]});
        } catch(err) {
            error = err
        }
        assert.ok(error instanceof Error)
    });

    it("Token's Owner can't refined an already refined token", async () => {
        let tokens = await instance.getOwnedBarrels();
        try {
            await instance.refineToken(tokens[0]);
        } catch(err) {
            error = err
        }
        assert.ok(error instanceof Error)
    });

    it("Token's Owner can't refined token issued from refining ", async () => {
        let tokens = await instance.getOwnedBarrels();
        try {
            await instance.refineToken(tokens[1]);
        } catch(err) {
            error1 = err
        }
        try {
            await instance.refineToken(tokens[2]);
        } catch(err) {
            error2 = err
        }
        try {
            await instance.refineToken(tokens[3]);
        } catch(err) {
            error3 = err
        }
        assert.ok(error1 instanceof Error)
        assert.ok(error2 instanceof Error)
        assert.ok(error3 instanceof Error)
    });

    it("Token's Owner can safe transfer token", async () => {
        let tokens = await instance.getOwnedBarrels();


        assert.equal(await instance.ownerOf(tokens[0]),accounts[0]);

        await instance.safeTransferFrom(accounts[0],accounts[1],tokens[0]);

        assert.equal(await instance.ownerOf(tokens[0]),accounts[1]);

    });

    it("Can't safe transfer token you don't own", async () => {
        let tokens = await instance.getOwnedBarrels();
        try {
            await instance.safeTransferFrom(accounts[1],accounts[2],tokens[0]);
        } catch(err){
            error = err;
        }
        assert.ok(error instanceof Error)
    });

    it("Token's Owner can put his token on sale", async () => {
        let tokens = await instance.getOwnedBarrels();

        await instance.createSale(tokens[0], 1, 100000);

        let auction = await instance.getAuction(tokens[0]);

        assert.equal(auction[0], accounts[0]);
        assert.equal(auction[1], 1);
        assert.equal(auction[2], 100000);
        assert.notEqual(auction[3], 0);
    });

    it("Can buy token with exact price or above ", async () => {
        let tokens = await instance.getTokensOnSale();

        assert.equal(tokens.length, 1);

        await instance.bid(tokens[0], {from: accounts[1], value : 1});

        tokens = await instance.getOwnedBarrels({from: accounts[1]});

        assert.equal(await instance.ownerOf(tokens[0]),accounts[1]);
    });

    it("Can't buy token with under price ", async () => {
        let tokens = await instance.getOwnedBarrels();

        await instance.createSale(tokens[0], 2, 100000);

        tokens = await instance.getTokensOnSale();

        assert.equal(tokens.length, 1);
        try {
            await instance.bid(tokens[0], {from: accounts[1], value : 1});
        } catch(err){
            error = err
        }
        assert.ok(error instanceof Error)

    });

    
    it("Can cancel auction ", async () => {
        let tokens = await instance.getTokensOnSale();
        await instance.cancelAuction(tokens[0]);
        tokens = await instance.getTokensOnSale();
        assert.equal(tokens.length, 0);
        assert.equal(await instance.ownerOf(tokens[0]),accounts[0]);

    });

});

