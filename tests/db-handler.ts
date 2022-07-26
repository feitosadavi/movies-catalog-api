
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const mongod = new MongoMemoryServer();

/**
 * Connect to the in-memory database.
 */


const DbHandler = {
  connect: async () => {
    await MongoMemoryServer.create();
  },
  /**
   * Drop database, close the connection and stop mongod.
   */
  closeDatabase: async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
  },

  /**
   * Remove all the data for all db collections.
   */
  clearDatabase: async () => {
    const collections = mongoose.connection.collections;

    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  }
}

export default DbHandler