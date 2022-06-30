require('dotenv').config();
const mongoose = require('mongoose');
const secret = process.env['MONGO_URL'];
console.log('Connecting to MongoDB...');
mongoose.connect(secret, { useNewUrlParser: true, useUnifiedTopology: true });
console.log('Connected to MongoDB');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title : {
        type: String,
    },
    description : {
        type: String,
    },
    timestamp : {
        type: Date,
    }
});
const Tasks = mongoose.model('TasksModel', TaskSchema);

exports.Tasks = Tasks;