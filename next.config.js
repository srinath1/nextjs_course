const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: 'nextjs',
				mongodb_password: 'nextjs',
				mongodb_clustername: 'cluster0',
				mongodb_database: 'myFirstDatabaseDev'
			}
		};
	}
	return {
		env: {
			mongodb_username: 'nextjs',
			mongodb_password: 'nextjs',
			mongodb_clustername: 'cluster0',
			mongodb_database: 'myFirstDatabaseProd'
		}
	};
};
