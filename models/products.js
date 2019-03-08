module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define("Products", {
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 50]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 50]
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 100]
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    imgUrl: {
        type: DataTypes.STRING
      }
  });
  return Products
};
