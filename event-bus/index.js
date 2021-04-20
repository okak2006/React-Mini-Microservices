const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/events', (req, res) => {
  const event = req.body;
  console.log(req.body)
  axios.post('http://posts-clustrip-srv:4000/events', event).catch(()=>{});
  axios.post('http://comments-clusterip-srv:4001/events', event).catch(()=>{});
  axios.post('http://query-clusterip-srv:4002/events', event).catch(()=>{});
  axios.post('http://moderation-clusterip-srv:4003/events', event).catch(()=>{});
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
