function networkCode(channel) {
  return channel.toLowerCase().includes('bein') ? 'bein' : 'bt';
}
function sameChannel(channel1, channel2) {
  return networkCode(channel1) === networkCode(channel2);
}

export { sameChannel };
