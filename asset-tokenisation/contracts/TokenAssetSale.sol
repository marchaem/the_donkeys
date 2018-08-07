pragma solidity ^0.4.23;

import "./TokenAssetRefining.sol";
import "./SaleBase.sol";

contract TokenAssetSale is TokenAssetRefining, SaleBase {

    function createSale(uint _tokenId, uint256 _price, uint256 _duration) external {
        require(_price == uint256(uint128(_price)));
        require(_duration == uint256(uint64(_duration)));
        
        _escrow(msg.sender, _tokenId);

        Auction memory auction = Auction(msg.sender,uint128(_price),uint64(_duration),uint64(now));
        _addAuction(_tokenId, auction);
    }

    function bid(uint256 _tokenId) external payable {
        // _bid verifies token ID size
        _bid(_tokenId, msg.value);
        _transfer(msg.sender, _tokenId);
    }

    function getAuction(uint _tokenId) public view returns (uint256, address, uint128, uint64, uint64) {
        Auction storage auction = tokenIdToAuction[_tokenId];
        return (_tokenId, auction.seller, auction.price, auction.duration, auction.startedAt);
    }

    function getTokensOnSale() public view returns (uint[]){
        return ownedTokens[this];
    }

    function getMyTokenOnSale() public view returns (uint[]){
        uint[] memory tokenOnSale = getTokensOnSale();
        uint[] storage myTokenOnSale;
        for(uint i = 0; i < tokenOnSale.length; i++) {
            if(tokenIdToAuction[tokenOnSale[i]].seller == msg.sender){
                myTokenOnSale.push(tokenOnSale[i]);
            }
        }
        return myTokenOnSale;
    }

    /// @dev Escrows the NFT, assigning ownership to this contract.
    /// Throws if the escrow fails.
    /// @param _owner - Current owner address of token to escrow.
    /// @param _tokenId - ID of token whose approval to verify.
    function _escrow(address _owner, uint256 _tokenId) internal {
        // it will throw if transfer fails
        transferFrom(_owner, this, _tokenId);
    }

    /// @dev Transfers an NFT owned by this contract to another address.
    /// @param _receiver - Address to transfer NFT to.
    /// @param _tokenId - ID of token to transfer.
    function _transfer(address _receiver, uint256 _tokenId) internal {
        // it will throw if transfer fails
        clearApproval(this, _tokenId);
        removeTokenFrom(this, _tokenId);
        addTokenTo(_receiver, _tokenId);
    }

    /// @dev Cancels an auction unconditionally.
    function cancelAuction(uint256 _tokenId) public {
        address _seller;
        (,_seller,,,) = getAuction(_tokenId);
        require(msg.sender == _seller);

        clearApproval(this, _tokenId);
        removeTokenFrom(this, _tokenId);
        addTokenTo(msg.sender, _tokenId);
        
        _removeAuction(_tokenId);
        emit AuctionCancelled(_tokenId);
    }

    function previousToken(uint _tokenId) public view returns(uint){
        return _previousToken[_tokenId];
    }
}