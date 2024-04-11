import mongoose from "mongoose"
import dotenv from "dotenv"
import colors from "colors"
import users from "./data/users.js"
import products from "./data/products.js"
import User from "./models/userModel.js"
import Product from "./models/productModel.js"
import Order from "./models/orderModel.js"
import connectDB from "./config/db.js"

//Connects to the DB and imports data

dotenv.config()

connectDB()

//Seeds data into the database

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        
        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;

        const sampleProduct = products.map(product => {
            return { ...product, user: adminUser}
        })

        await Product.insertMany(sampleProduct);

        console.log("Data Imported!".green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

//Deletes data from the database
const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log("Data Destroyed!".red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

//Command line to delete/add when in dev mode
if(process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
}