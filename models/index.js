const User = require('./User');
const Posts = require('./Posts');


User.hasMany(Posts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Event.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Posts };