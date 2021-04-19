import Sequelize,{ model } from 'sequelize';

class Task extends Model {
  static init(sequelize){
  super.init(
    {
      task: Sequelize.STRING,
      check: Sequelize.BOOLEAN,
    },
    {
      Sequelize,
    }
  );
  return this;
}

static associate(models){
  this.belongsTo(models.USer, { foreignKey: 'user_id', as: 'user'});
}

}

export default Task;
