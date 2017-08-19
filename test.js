var Peer = require('.').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
