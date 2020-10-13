module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // localhost
      port: 7545,            // Ganache
      network_id: "*",
     }
  },

  mocha: {

  },

  compilers: {
    solc: {
      version: "0.6.6"
    },
  },
};
