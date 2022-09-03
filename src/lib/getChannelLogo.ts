const getChannelLogo = (chanel: string): string => {
  const c = chanel.toLowerCase();
  if (c === 'bt sport 1') {
    return 'bt-sport-1.svg';
  }
  if (c === 'bt sport 2') {
    return 'bt-sport-2.svg';
  }
  if (c === 'bt sport 3') {
    return 'bt-sport-3.svg';
  }
  if (c.includes('espn')) {
    return 'bt-sport-espn.svg';
  }
  if (c.includes('hd')) {
    return 'Global.svg';
  }
  if (c.includes('2')) {
    return 'BS2.svg';
  }
  if (c.includes('3')) {
    return 'BS3.svg';
  }
  if (c.includes('4')) {
    return 'BS4.svg';
  }
  if (c.includes('5')) {
    return 'BS5.svg';
  }
  if (c.includes('6')) {
    return 'BS6.svg';
  }
  if (c.includes('7')) {
    return 'BS7.svg';
  }
  if (c.includes('8')) {
    return 'BS8.svg';
  }
  if (c.includes('9')) {
    return 'BS9.svg';
  }
  if (c.includes('10')) {
    return 'BS10.svg';
  }
  return 'Spanish.svg';
};

export default getChannelLogo;
