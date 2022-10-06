// module.exports = (sequelize, DataTypes) => {
//     let City = sequelize.define("Cities", {
//         id: {
//           type: DataTypes.BIGINT(20),
//           primaryKey: true,
//           autoIncrement: true
//         },
//         id_city: {
//             type: DataTypes.INTEGER
//         },
//         name: {
//           type: DataTypes.STRING
//         },
//         weatherId: {
//           type: DataTypes.INTEGER,
//           required: true
//       },
//       temperature: {
//           type: DataTypes.INTEGER,
//           required: true
//       },
//       temperature_min: {
//           type: DataTypes.INTEGER,
//           required: true
//       },
//       temperature_max: {
//           type: DataTypes.INTEGER,
//           required: true
//       },
//       pressure: {
//           type: DataTypes.INTEGER,
//           required: true
//       },
//       humidity: {
//           type: Number,
//           required: true
//       },
//       windSpeed: {
//           type: DataTypes.INTEGER,
//           required: true
//       },
//       pop: {
//           type: Number,
//           required: true
//       },
//       feels_like: {
//           type: DataTypes.INTEGER,
//           required: true
//       },
//         createdAt: {
//           field: 'created_at',
//           type: 'TIMESTAMP',
//           default: Date.now()
//         },
//         updatedAt: {
//           field: 'updated_at',
//           type: 'TIMESTAMP',
//           default: Date.now()
//         }
//       })
//       return City;
//     }