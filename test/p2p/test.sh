#! /bin/bash
set -eu

DOCKER_IMAGE=$1
NETWORK_NAME=local_testnet
NUM_MACHINES=$2

bash generate_data.sh data $NUM_MACHINES

cd $GOPATH/src/github.com/tendermint/ethermint


# start the testnet on a local network
bash test/p2p/local_testnet.sh $DOCKER_IMAGE $NETWORK_NAME $NUM_MACHINES
