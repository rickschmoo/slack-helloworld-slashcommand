# slack-helloworld-slashcommand

As per https://api.slack.com/tutorials/tunneling-with-ngrok
1. Install ngrok (expose localhost:80 on internet)
2. `ngrok http $YOUR_PORT`
3. Create slack app and slash command, e.g. `\rick`. Note ngrok URI changes each runtime.
4. Locally, create `config/dev.js` referencing Slack app's Client ID and Client Secret. Note: .gitignore stops it being committed to github.

```
// dev.js = dev keys
module.exports = {
	clientId: 'XYZ',
	clientSecret: 'XYZ'
}
```
5. Run local server `node index.js`
6. Authenticate app via https://api.slack.com/docs/slack-button (make sure correct ngrok URI used in oauth URL AND in slash command config).
7. In Slack ... `\rick`


