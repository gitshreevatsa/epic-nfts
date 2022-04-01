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