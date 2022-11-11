const https = require('https');
const functions = require('firebase-functions');
const {defineSecret} = require('firebase-functions/params');
const SEAUBOT_GITHUB_TOKEN = defineSecret('SEAUBOT_GITHUB_TOKEN');

const fetchQuery = `query {
  organization(login:"ecsact-dev") {
    projectsV2(orderBy: {field:TITLE, direction:ASC}, first:10, query:"is:open") {
      nodes {
        id
        title
        shortDescription
        readme
      }
    }
  }
}`;

exports.fetchProjects = functions
	.runWith({secrets: [SEAUBOT_GITHUB_TOKEN]})
	.https.onRequest((req, res) => {
		const ghReq = https.request({
			host: 'api.github.com',
			path: '/graphql',
			method: 'POST',
			headers: {
				'User-Agent': 'Ecsact Dev Cloud Function',
				'Content-Type': 'application/json',
				Authorization: `bearer ${SEAUBOT_GITHUB_TOKEN.value()}`,
			},
		});

		ghReq.on('response', ghRes => {
			let msg = '';
			ghRes.setEncoding('utf8');
			ghRes.on('error', () => {
				res.status(500).send(`Error GitHub Response: ${err.message}`);
			});

			ghRes.on('data', chunk => {
				msg += chunk;
			});
			ghRes.on('end', () => {
				console.log(ghRes.statusCode);
				res.status(ghRes.statusCode);
				res.send(msg);
			});
		});

		ghReq.on('error', err => {
			res.status(500).send(`Error GitHub Request: ${err.message}`);
		});

		ghReq.end(JSON.stringify({query: fetchQuery}));
	});
