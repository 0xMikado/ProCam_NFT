const Procam_NFT_1 = artifacts.require("./Procam_NFT_1.sol");


module.exports = function(deployer) {

    const Name = "Procam_NFT_1";
const Symbol = "PN1";
    deployer.deploy(Procam_NFT_1, Name, Symbol);
};