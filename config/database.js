module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client:"postgres",
        host: "localhost",
        port:  5432,
        database: 'bryanatencia',
        username: 'bryanatencia'
      },
      options:{
        pool: {
          min: 0,
          max: 15,
          idleTimeoutMillis: 30000,
          createTimeoutMillis: 30000,
          acquireTimeoutMillis: 30000
        }
      }
    }
  }
});
