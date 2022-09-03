const getClubLogo = (team: string):string => {
  let t = team.toLowerCase();
  // Paris Saint-Germain
  if (t.includes('paris') || t.includes('psg')) {
    return 'paris-saint-germain.svg';
  }
  // AS Monaco
  if (t.includes('naco')) {
    return 'as-monaco.svg';
  }
  // Olympique de Marseille
  if (t.includes('mars')) {
    return 'olympique-de-marseille.svg';
  }
  // Olympique Lyonnais
  if (t.includes('lyon')) {
    return 'olympique-lyonnais.svg';
  }
  // Montpellier Hérault SC
  if (t.includes('montp')) {
    return 'montpellier-herault-sc.svg';
  }
  // FC Nantes
  if (t.includes('nant')) {
    return 'nanteslogo.png';
  }
  // OGC Nice
  if (t.includes('nice')) {
    return 'ogc-nice.svg';
  }
  // Girondins de Bordeaux
  if (t.includes('bord')) {
    return 'bordeaux-logo.png';
  }
  // EA Guingamp
  if (t.includes('guin')) {
    return 'ea-guingamp.svg';
  }
  // Stade Rennais FC
  if (t.includes('renn')) {
    return 'stade-rennais-fc.svg';
  }
  // SM Caen
  if (t.includes('caen')) {
    return 'sm-caen.svg';
  }
  // AS Saint-Etienne
  if (t.includes('saint')) {
    return 'as-saint-etienne.svg';
  }
  // Dijon FCO
  if (t.includes('dijon')) {
    return 'dijon-fco.svg';
  }
  // RC Strasbourg Alsace
  if (t.includes('strasb')) {
    return 'rc-strasbourg.svg';
  }
  // Toulouse FC
  if (t.includes('toulouse')) {
    return 'toulouse-fc.svg';
  }
  // Amiens SC
  if (t.includes('amien')) {
    return 'amiens-sc.svg';
  }
  // Angers SCO
  if (t.includes('anger')) {
    return 'angers-sco.png';
  }
  // LOSC
  if (t.includes('lille') || t.includes('losc')) {
    return 'losc-lille.svg';
  }
  // ESTAC Troyes
  if (t.includes('troyes')) {
    return 'estac-troyes.svg';
  }
  // FC Metz
  if (t.includes('metz')) {
    return 'fc-metz-2021.svg';
  }
  // Nimes Olympique
  if (t.includes('nimes')) {
    return 'nimes-olympique.svg';
  }
  // Stade Reims
  if (t.includes('reims')) {
    return 'reims-logo.png';
  }
  // Stade Brestois 29
  if (t.includes('brest')) {
    return 'stade_brestois_29_logo.png';
  }
  // RC Lens
  if (t.includes('lens')) {
    return 'lens_logo-768x768.png';
  }
  // FC Lorient
  if (t.includes('lorient')) {
    return 'lorient_logo.png';
  }
  // Clermont Foot 63
  if (t.toLowerCase().includes('clermont')) {
    return 'clermont-foot.svg';
  }
  // AJ Auxerre
  if (t.toLowerCase().includes('clermont')) {
    return 'clermont-foot.svg';
  }
  return 'ligue1_square.png';
};
export default getClubLogo;
