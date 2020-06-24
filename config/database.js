module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client:"postgres",

        // host: "localhost",
        // port:  5432,
        // database: 'bryanatencia',
        // username: 'bryanatencia'

        host:"ec2-18-210-214-86.compute-1.amazonaws.com",
        port:5432,
        database:"d3uqo4trcp0fe6",
        username:'zlcnnzcmujkifl',
        password: '40d502914957071340f82330f435890113cdc0c0c91fc81abe81679195f3a2d7',
        url: "postgres://zlcnnzcmujkifl:40d502914957071340f82330f435890113cdc0c0c91fc81abe81679195f3a2d7@ec2-18-210-214-86.compute-1.amazonaws.com:5432/d3uqo4trcp0fe6"

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
