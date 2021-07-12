/*
const{Sql, DataTypes, Model} = require('mysql2');
const {sql} = require("./config/database");
//const {Sequelize, DataTypes, Model} = require('sequelize');
//const {sequelize} = require('./config/database');
// ORM



class Portfolio extends Model {

}

Portfolio.init({
    // Model attributes are defined here
    symbol: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    price: {
        type: DataTypes.STRING
        // float
        // allowNull defaults to true
    },
}, {
    
    sequelize, // We need to pass the connection instance
    modelName: 'Portfolio', // We need to choose the model name
});

class Wallet extends Model {

}

Wallet.init({
    // Model attributes are defined here
    value: {
        type: DataTypes.STRING,
        // allowNull: false
    }
}, {
   
    sequelize, // We need to pass the connection instance
    modelName: 'Wallet', // We need to choose the model name
});

const seedTheWallet = async () => {
    let myWallet = await Wallet.findOne({});
    if(!myWallet){
        await Wallet.create({value: 100000});
    }
};

seedTheWallet()



sequelize.sync({alter: true});


module.exports = {
    Portfolio, Wallet
};
*/