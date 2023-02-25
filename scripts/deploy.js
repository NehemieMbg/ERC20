const hre = require("hardhat");

async function main() {
  // Fetch the contract to deploy
  const ERC20 = await hre.ethers.getContractFactory("ERC20");

  /**
   * Deploy the contract
   * Token created from the ERC20 contracts standard:
   * Name: "Saturn"
   * Symbol: "STRN"
   * Total Supply: 116460 (this is the width in km of the planet saturn).
   */
  const saturn = await ERC20.deploy("Saturn", "STRN", 116460);
  await saturn.deployed();

  console.log(`Saturn deployed to: ${saturn.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
