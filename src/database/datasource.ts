import { ConnectionOptions, DataSource, DataSourceOptions, createConnection } from 'typeorm';
import { User } from '../users/user.entity';
import { Report } from '../reports/report.entity';
const config: ConnectionOptions = {
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [User, Report],
    migrations: ['migrations/*.js'],
    migrationsTableName: "typeorm_migrations",
    cli: {
        migrationsDir: 'migrations'
    },
    logging: false, // new DatabaseLogger()
    synchronize: true, // don't use TRUE in production!
    migrationsRun: true,
    extra: {
        charset: 'utf8',
    },
} as DataSourceOptions;


const datasource = new DataSource(config);
datasource.initialize();

createConnection(config)
    .then(connection => {
        console.log('Database connection established');
    })
    .catch(error => {
        console.error('Error connecting to the database:', error);
    });

export default datasource;