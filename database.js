const {MongoClient} = require('mongodb');
async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb://RAMAN:12345@cluster0-shard-00-00.rpmkp.mongodb.net:27017,cluster0-shard-00-01.rpmkp.mongodb.net:27017,cluster0-shard-00-02.rpmkp.mongodb.net:27017/wnsti?ssl=true&replicaSet=atlas-1473a0-shard-0&authSource=admin&retryWrites=true&w=majority"

    const client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
main().catch(console.error);
async function listDatabases(client){
   databasesList = await client.db().admin().listDatabases();

   console.log("Databases:");
   databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

