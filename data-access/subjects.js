const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'tekhne-course';

exports.createSubjectDataAccess = async (subject) => {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('subjects');
    collection.insertOne({ name: subject })
}

exports.getSubjectsDataAccess = async () => {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('subjects');
    return collection.find({}).toArray()
}

exports.getSubjectsByIdDataAccess = (id) => {
    return {}
}