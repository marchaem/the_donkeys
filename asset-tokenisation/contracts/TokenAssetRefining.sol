pragma solidity ^0.4.23;

import "./TokenAsset.sol";

contract TokenAssetRefining is TokenAsset {
    mapping(uint => uint) _previousToken;
    function refineToken(uint _tokenId) public onlyOwnerOf(_tokenId) {
        
        require(canBeRefined[_tokenId]);

        uint8 _origin;
        uint _price;
        uint8 _type;
        uint _id;
        (, _origin, _type, _price,) = getBarrelById(_tokenId);
        if(_type == 3) {
            _id = newBarrel(1, 4, _price/5, false);
            _mint(msg.sender, _id);
            _previousToken[_id] = _tokenId;
        }
        else if(_type != 4 ){
            _id = newBarrel(1, 1, _price/2, false);
            _mint(msg.sender, _id);
            _previousToken[_id] = _tokenId;
            _id = newBarrel(1, 2, _price/2, false);
            _mint(msg.sender, _id);
            _previousToken[_id] = _tokenId;
            _id = newBarrel(1, 3, _price/3, true);        
            _mint(msg.sender, _id);
            _previousToken[_id] = _tokenId;

        }
        canBeRefined[_tokenId] = false;

    }

    

}