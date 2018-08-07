pragma solidity ^0.4.23;

import "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";

contract TokenAsset is ERC721Token("Petrol Barrel", "PTR"), Ownable {

    struct Barrel{

        uint8 origin;
        
        //list of product available:
        // 0 -> brut
        // 1 -> diesel
        // 2 -> gasoline
        // 3 -> gpl
        uint8 productType;

        uint price;

    }

    Barrel[] barrels;

    mapping (uint => bool) canBeRefined; 

    function getInt() public pure  returns (uint) {
        return 9;
    }

    
    /// @dev Create a new barrel and returns is id which is the length of the array minus 1
    /// @param _origin location code
    /// @param _productType product code (see Barrel Struct)
    /// @param _price is the price of the token
    /// @param _refinable true if refinable token 
    function newBarrel(uint8 _origin, uint8 _productType, uint _price, bool _refinable) internal returns(uint){
        Barrel memory _barrel = Barrel(_origin, _productType, _price);
        uint _id = barrels.push(_barrel) - 1;
        canBeRefined[_id] = _refinable;
        return _id;
    }

    /// @dev Create a brut token token_id is the index in barrels Array
    /// @param _origin location code
    function mintBrut(uint8 _origin) public onlyOwner {
        _mint(msg.sender, newBarrel(_origin, 0, 100, true));
    }

    /// @dev Retrieve an array of id corresponding to all Owned Token
    function getOwnedBarrels() public view returns(uint[]) {
        return ownedTokens[msg.sender];
    }

    /// @dev Retrieve an array of id corresponding to all Owned Token
    function getBarrelById(uint _id) public view returns(uint, uint8, uint8, uint, bool){
        require(_id < barrels.length);
        Barrel memory _barrel = barrels[_id];
        return (_id, _barrel.origin, _barrel.productType, _barrel.price, canBeRefined[_id]);
    }

}
