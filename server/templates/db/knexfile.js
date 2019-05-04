// Update with your config settings.

module.exports = {
  test: {
    client: 'sqlite3',
    connection: {
      filename: require('path').join(__dirname, './test.sqlite3')
    }
  },

  development: {
    client: 'sqlite3',
    connection: {
      filename: require('path').join(__dirname, './development.sqlite3')
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'staging',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'production',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
