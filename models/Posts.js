const {Model, DataTypes} = require ('sequelize');
const sequelize = require ('../config/connection');

class Posts extends Model {};

Posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
    },

    post_date: {
      type: DataTypes.STRING,
    },
    post_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  { 
     hooks: {
      beforeCreate: async (timeData) => {

        for(let i = 0; i < event_dates.length; i++) {
        
        timeData.event_date = await format(new Date(event_dates[i]), "MMMM-Qo");
        };
        console.log(timeData.event_date);
        return timeData;
      },

      beforeUpdate: async (updatedTimeData) => {

        updatedTimeData.event_date = await format(new Date(), "MMMM-Qo");
        return updatedTimeData;
      },
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'posts',
  }
);

module.exports = Posts;