require('babel-register')
module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gas: 6700000,
      gasPrice: 65000000000,
      from: "0xcac52341388db34f84e45f24f24d6c9fb5e68201"
    }
  }
}
