const fs = require('fs')

let genesis = {
	"app_hash": "",
	"chain_id": "test-chain-gMqn9n",
	"genesis_time": "0001-01-01T00:00:00.000Z",
	"validators": [
    
	]
}

const dataDir = process.argv[2]
const numMachines = parseInt(process.argv[3])
for (let i = 1; i <= numMachines; i++) {
  console.log(`Collecting mach${i}`)
  let privValidatorPubKey = JSON.parse(fs.readFileSync(`${dataDir}/mach${i}/priv_validator.json`)).pub_key
  let privValidator = {
    "amount": 10,
    "name": `mach${i}`,
    "pub_key": privValidatorPubKey
  }
  genesis.validators.push(privValidator)
}
for (let i = 1; i <= numMachines; i++) {
  console.log(`Writing genesis for mach${i}`)
  fs.writeFileSync(`${dataDir}/mach${i}/genesis.json`, JSON.stringify(genesis))
}
