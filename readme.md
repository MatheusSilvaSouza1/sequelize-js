yarn sequelize migration:generate --name=criar-tabela
yarn sequelize db:migrate -> roda as migrations no banco 
yarn sequelize db:migrate:undo -> volta a ultima migration executada
yarn sequelize seed:generate --name=
yarn sequelize db:seed:all
** relacionamentos **

belongsTo -> pertence á
belongsToMany -> pertence á muitos
hasMany -> tem muitos