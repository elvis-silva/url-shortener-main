import { MongoClient } from 'mongodb'
import mongoose from 'mongoose'
import { config } from '../config/Constants'

export class MongoConnection {
  public async connect(): Promise<void> {

    try {
			await mongoose.connect(config.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
			console.log('Database connected')
		} catch (err:any) {
			console.error(err.message)
			process.exit(1)
		}

    // const client = new MongoClient(config.MONGO_CONNECTION)
    
    // await client.connect(err => {
    //   const collection = client.db('test').collection('device')
    //   client.close()
    // })
  }
}