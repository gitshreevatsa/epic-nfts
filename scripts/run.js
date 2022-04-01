const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Monkicious", "BetaDragon", "Yanzi"],       // Names
      ["https://i.imgur.com/pKd5Sdk.png", // Images
      "https://i.imgur.com/xVu4vFL.png", 
      "https://i.imgur.com/WMB6g9u.png"],
      [150, 500, 800],                    // HP values
      [600, 200, 100],                       // Attack damage values
      "Jeff Bezos", // Boss name
      "https://i.imgur.com/AksR0tt.png", // Boss image
      10000, // Boss hp
      50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
    let txn;

txn = await gameContract.mintCharacterNFT(2);
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();
// We only have three characters.
// an NFT w/ the character at index 2 of our array.
txn = await gameContract.mintCharacterNFT(2);
await txn.wait();

// Get the value of the NFT's URI.
let returnedTokenUri = await gameContract.tokenURI(1);
console.log("Token URI:", returnedTokenUri);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();