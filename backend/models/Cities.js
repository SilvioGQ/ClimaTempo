module.exports = (sequelize, DataTypes) => {
    let City = sequelize.define("Cities", {
        id: {
          type: DataTypes.BIGINT(20),
          primaryKey: true,
          autoIncrement: true
        },
        id_city: {
            type: DataTypes.INTEGER
        },
        name: {
          type: DataTypes.STRING
        },
        list: {
          type: DataTypes.JSON
        },
        createdAt: {
          field: 'created_at',
          type: 'TIMESTAMP',
          default: Date.now()
        },
        updatedAt: {
          field: 'updated_at',
          type: 'TIMESTAMP',
          default: Date.now()
        }
      })
       // Create table for first time 
      // City.sync( { force: true } )
    
      return City;
    }