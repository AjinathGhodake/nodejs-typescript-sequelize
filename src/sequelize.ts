import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
  database: '',
  dialect: 'mysql',
  username: '',
  password: '',
  storage: ':memory:',
  modelPaths: [__dirname + '/models'],
  define: {
  timestamps: false,

    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
    paranoid: true,

    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: true,

    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

}
});
