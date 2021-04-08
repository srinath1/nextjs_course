const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: 'nextdev',
				mongodb_password: 'password',
				mongodb_clustername: 'cluster0',
				mongodb_database: 'nosite'
			}
		};
	}
	return {
		env: {
			mongodb_username: 'nextprod',
			mongodb_password: 'password',
			mongodb_clustername: 'cluster0',
			mongodb_database: 'prosite'
		}
	};
};
