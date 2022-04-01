require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/T7ztqh5YfrT0WbqB_bY2Py55ukdgycuv',
      accounts: ['f01635ab723c226ad5d2fdf9a468fdb59a681d1b4441fc1ac02c0a77cc02ec04'],
    },
  },
};
