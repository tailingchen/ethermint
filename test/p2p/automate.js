var Web3 = require('web3')
var truffleContract = require('truffle-contract')
var contract = truffleContract({
  contract_name: 'Math',
  abi: '[{"constant":false,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"div","outputs":[{"name":"result","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"sub","outputs":[{"name":"result","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"mul","outputs":[{"name":"result","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"sum","outputs":[{"name":"result","type":"uint256"}],"payable":false,"type":"function"}]',
  unlinked_binary: '6060604052341561000c57fe5b5b6101bd8061001c6000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063a391c15b1461005c578063b67d77c514610099578063c8a4ac9c146100d6578063cad0899b14610113575bfe5b341561006457fe5b6100836004808035906020019091908035906020019091905050610150565b6040518082815260200191505060405180910390f35b34156100a157fe5b6100c06004808035906020019091908035906020019091905050610167565b6040518082815260200191505060405180910390f35b34156100de57fe5b6100fd6004808035906020019091908035906020019091905050610175565b6040518082815260200191505060405180910390f35b341561011b57fe5b61013a6004808035906020019091908035906020019091905050610183565b6040518082815260200191505060405180910390f35b6000818381151561015d57fe5b0490505b92915050565b600081830390505b92915050565b600081830290505b92915050565b600081830190505b929150505600a165627a7a72305820a5e77caa2440db3c3cd166fb9fa7a3d344158028ed45a134c06bd0dda6aaaf320029'

})

var ip = process.argv[2]
contract.setProvider(new Web3.providers.HttpProvider('http://' + ip + ':8545'))
var i = 0
var runIteration = function() {
  i++
  console.log('running iteration ' + i + ' on ip ' + ip)

  runIteration.doStuff()
  .then(function() {
    setTimeout(runIteration, 1000)
  })
  .catch(function() {
    console.log('meh, iteration ' + i + 'failed')
    setTimeout(runIteration, 1000)
  })
}

contract.new().then(function(instance) {
  runIteration()
})
.catch(function() {
  console.log('meh, couldn\'t deploy')
})