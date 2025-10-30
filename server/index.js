// const express = require('express')
// const cors = require('cors')
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// const uri = process.env.MONGODB_URI;

// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true
//     }
// })
// // midleware
// app.use(cors())
// app.use(express.json())

// async function run() {
//     try {
//         await client.connect();
//         const dailyTaskUserDB = client.db('dailyTaskUserDB');
//         const dailyTaskUserCollection = dailyTaskUserDB.collection('users');

//         await client.db('admin').command({ ping: 1 });
//         console.log("✅pinged your Deployment. You Successfully conected to the mongobd.")

//         app.get('/tasks', async (req, res) => {
//             const cursor = dailyTaskUserCollection.find();
//             const result = await cursor.toArray();
//             res.send(result);
//         })
//         app.get(`/tasks/:id`, async (req, res) => {
//             const id = req.params.id;
//             const query = { _id: new ObjectId(id) }
//             const result = await dailyTaskUserCollection.findOne(query);
//             res.send(result)

//         })

//         app.post('/tasks', async (req, res) => {
//             const newTask = req.body;
//             console.log('✅hit the Monogodb server!')
//             const result = await dailyTaskUserCollection.insertOne(newTask);
//             res.send(result);
//         })

//         app.delete('/tasks/:id', async (req, res) => {
//             const id = req.params.id;
//             const query = { _id: new ObjectId(id) }
//             const result = await dailyTaskUserCollection.deleteOne(query);
//             res.send(result);
//         })
//         //     app.patch('/tasks/:id',async(req,res)=>{
//         //         const id =req.params.id;
//         //         const updateTask = req.body;
//         //         const query = {_id : new ObjectId(id)};
//         //         const update = {$set:updateTask       
//         //         }
//         // const result = await dailyTaskUserCollection.updateOne(query, update);
//         // res.send(result)

//         //     })
//         app.patch('/tasks/:id', async (req, res) => {
//             const id = req.params.id;
//             const updateTask = req.body;
//             const query = { _id: new ObjectId(id) }
//             const update = {
//                 $set: {
//                     status: updateTask.status,
//                     startTime: updateTask.startTime,
//                     pauseTime: updateTask.pauseTime,
//                     elapsedTime: updateTask.elapsedTime,
//                     lastActive: updateTask.lastActive,
//                     completedAt: updateTask.completedAt,
//                     history: updateTask.history
//                 }
//             }
//             const options = {};
//             const result = await dailyTaskUserCollection.updateOne(query, update, options)
//             res.send(result)
//         })
//     }
//     finally {
//         // await client.close()
//     }
// }

// run().catch(console.dir)


// app.get('/', (req, res) => {
//     res.send('Hello Bangladesh !')
// })


// app.listen(port, () => {
//     console.log('server running in the port', port)
// })

const express = require('express');
const app = express();
app.use('/',(req,res)=>{
    res.send('server is running')
})

app.listen(5000, console.log('sfklsjflkj'))