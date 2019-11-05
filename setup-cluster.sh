#!/bin/sh

echo "Warming up! Give it a 60 seconds to be sure that services are UP"
sleep 30
echo "Almost there! Don't give UP!"
sleep 30
echo "Let's GO!\n"

echo "Setting up replica for configuration server"
docker exec -it db-cfg bash -c "echo 'rs.initiate({_id: \"cfgrs1\", configsvr: true, members: [{ _id : 0, host : \"db-cfg\" }]})' | mongo"
docker exec -it db-cfg bash -c "echo 'rs.status()' | mongo"
sleep 10

echo "Setting up replica for shard servers"
docker exec -it db-eu-region bash -c "echo 'rs.initiate({_id: \"eurs\", members: [{ _id : 0, host : \"db-eu-region\" }]})' | mongo"
docker exec -it db-eu-region bash -c "echo 'rs.status()' | mongo"
docker exec -it db-us-region bash -c "echo 'rs.initiate({_id: \"usrs\", members: [{ _id : 0, host : \"db-us-region\" }]})' | mongo"
docker exec -it db-us-region bash -c "echo 'rs.status()' | mongo"
sleep 20

echo "Link shard to the router"
docker exec -it db-router bash -c "echo 'sh.addShard(\"eurs/db-eu-region\")' | mongo "
docker exec -it db-router bash -c "echo 'sh.addShard(\"usrs/db-us-region\")' | mongo "
docker exec -it db-router bash -c "echo 'sh.status()' | mongo"
sleep 10

# In production will not need that
docker exec -it db-eu-region bash -c "echo 'rs.slaveOk()' | mongo"
docker exec -it db-us-region bash -c "echo 'rs.slaveOk()' | mongo"

echo "Creating a new database"
docker exec -it db-router bash -c "echo 'db.booking.users.ensureIndex({ country : 1, _id: 1 }, true)' | mongo "
sleep 10

echo "Enable sharding for a new database"
docker exec -it db-router bash -c "echo 'sh.enableSharding(\"booking\")' | mongo "
docker exec -it db-router bash -c "echo 'sh.shardCollection(\"booking.users\", { country: 1, _id: 1 })' | mongo "
docker exec -it db-router bash -c "echo 'sh.disableBalancing(\"booking.users\")' | mongo "
docker exec -it db-router bash -c "echo 'sh.addShardTag(\"eurs\", \"EU\")' | mongo "
docker exec -it db-router bash -c "echo 'sh.addShardTag(\"usrs\", \"US\")' | mongo "
docker exec -it db-router bash -c "echo 'sh.addTagRange(\"booking.users\", { \"country\" : \"US\", _id: MinKey },  { \"country\" : \"US\", _id: MaxKey }, \"US\")' | mongo ";
docker exec -it db-router bash -c "echo 'sh.addTagRange(\"booking.users\", { \"country\" : \"EE\", _id: MinKey },  { \"country\" : \"EE\", _id: MaxKey }, \"EU\")' | mongo ";
docker exec -it db-router bash -c "echo 'sh.addTagRange(\"booking.users\", { \"country\" : \"LV\", _id: MinKey },  { \"country\" : \"LV\", _id: MaxKey }, \"EU\")'| mongo  ";
docker exec -it db-router bash -c "echo 'sh.enableBalancing(\"booking.users\")' | mongo"
docker exec -it db-router bash -c "echo 'sh.status()' | mongo"
