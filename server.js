const express = require('express'); //Line 1
const Agora = require("agora-access-token");
const app = express(); //Line 2

app.use(express.json());
app.use(express.urlencoded());

const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOURBACKEND IS CONNECTED TO REACT' }); //Line 10
}); //

app.post("/rtctoken", (req, res) => {
  const appID = "fbbd1ecbe74e4f47ab991f6a83653d0c";
  const appCertificate = "d8b7a07df47c428e804e35194c9aff9b";
  const uid = req.body.uid;
  const expirationTimeInSeconds = 3600;
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const expirationTimestamp = currentTimestamp + expirationTimeInSeconds;
  const role = req.body.isPublisher ? Agora.RtcRole.PUBLISHER : Agora.RtcRole.SUBSCRIBER;
  const channel = req.body.channel;

  const token = Agora.RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channel, uid, role, expirationTimestamp);
  res.send({ token });
});