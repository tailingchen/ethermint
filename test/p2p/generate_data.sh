for i in `seq 1 $2`; do
  ethermint --datadir $1/mach$i init
done
node generate_genesis.js $1 $2
for i in `seq 1 $2`; do
  ethermint --datadir $1/mach$i init genesis.json
done
