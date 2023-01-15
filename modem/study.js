

module.exports = (sequelize, DataTypes) => {
  const study = sequelize.define('Study', 
    {
      id : { type : DataTypes.INTEGER, primarykey: true, autoIncrement: true
      },
  
        name : { type : DataTypes.STRING },
        price : { type : DataTypes. INTEGER},
        description : { type : DataTypes.TEXT }  
   
   
    }
  
  
  
  );
  return Products;
     }