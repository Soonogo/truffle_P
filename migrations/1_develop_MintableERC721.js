const Storage = artifacts.require("Mintable721")

module.exports = function(developer){
    developer.deploy(Storage,"Mintable NFT", "mNFT")
}