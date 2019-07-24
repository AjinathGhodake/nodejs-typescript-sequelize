import index from './src';
import { sequelize } from './src/sequelize';
import { actors } from './src/routes/actors';
import { movies } from './src/routes/movies';

const app = index.app;

(async () => {
  try{
    await sequelize.sync({force: false});
    /*await sequelize.sync();*/
    app.listen(process.env.PORT, () => {
      console.log('Express server listening on port ' + process.env.PORT);
    });

    app.use('/movies', movies);
    app.use('/actors', actors);
  }catch(e){
    console.log(e);
  }

})();
