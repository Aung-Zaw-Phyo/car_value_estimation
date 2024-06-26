let dbConfig = {
    synchronize: false,
    migrations: ['migrations/*.js'],
    migrationsTableName: "typeorm_migrations",
    cli: {
        migrationsDir: 'migrations'
    }
}

switch (process.env.NODE_ENV) {
    case 'development':
        Object.assign(dbConfig, {
            type: 'sqlite',
            database: 'db.sqlite',
            entities: ['**/*.entity.js']
        })
        break;
    case 'test':
        Object.assign(dbConfig, {
            type: 'sqlite',
            database: 'test.sqlite',
            entities: ['**/*.entity.ts'],
            migrationsRun: true
        })
        break;
    case 'production':
        Object.assign(dbConfig, {
            type: 'postgress',
            database: process.env.DATABASE_URL,
            entities: ['**/*.entity.js'],
            migrationsRun: true,
            ssl: {
                rejectUnauthorized: false
            }
        })
        break;
    default:
        throw new Error('unknown environment')
}

module.exports = dbConfig