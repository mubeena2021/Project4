
const{Sql, DataTypes, Model} = require('mysql2');
const {sql} = require("./config/database");


class Portfolio extends Model{
}

Portfolio.init({
symbol:{
    type:DataTypes.STRING,
},

quantity: {
    type:DataTypes.INTEGER,   
},

value:{
    type: DataTpes.STRING
}, 

sql,
modelName: "Portfolio",

});