const tariffsData = [
  {
    insuranceName: 'Allianz Travel Versicherung',
    name: 'allianzTravelVersicherung',
    logoUrl:
      'https://cdn.comparon.de/logos/allianz_Travel_rei_170x26_20181123.png',
    uspList: [
      {
        riskCover: 'Abbruch',
        icon: 'icons/green-icon.png',
      },
      {
        riskCover: 'Reisekranken',
        icon: 'icons/green-icon.png',
      },
      {
        riskCover: 'Gepäck',
        icon: 'icons/red-icon.png',
      },
    ],
    priceTag: 122,
    priceDetails:
      'Preisinformationen: Der Beitrag im 1 Jahr liegt bei 95,00€ und im 2 Jahr bei 149,00€.',
    starRating: 3.5,
    averageRating: '(3,5)',
    ratingCount: 112,
    tariffDetailsText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    insuranceName: 'BarmeniaDirekt Versicherung',
    name: 'barmeniaDirektVersicherung',
    logoUrl:
      'https://cdn.comparon.de/logos/barmenia_direkt_rei_170x40_20161124.png',
    uspList: [
      { riskCover: 'Rücktritt', icon: 'icons/green-icon.png' },
      { riskCover: 'Abbruch', icon: 'icons/yellow-icon.png' },
      { riskCover: 'Gepäck', icon: 'icons/green-icon.png' },
    ],
    priceTag: 99,
    priceDetails:
      'Preisinformationen: Der Beitrag im 1 Jahr liegt bei 90,50€ und im 2 Jahr bei 121,00€.',
    starRating: 2.5,
    averageRating: '(2,5)',
    ratingCount: 413,
    tariffDetailsText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    insuranceName: 'Ergo Versicherung',
    name: 'ergoVersicherung',
    logoUrl: 'https://cdn.comparon.de/logos/ergo_RV_rei_200x126_20190325.png',
    uspList: [
      { riskCover: 'Rücktritt', icon: 'icons/green-icon.png' },
      { riskCover: 'Abbruch', icon: 'icons/yellow-icon.png' },
      { riskCover: 'Reisekranken', icon: 'icons/red-icon.png' },
      { riskCover: 'Gepäck', icon: 'icons/green-icon.png' },
    ],
    priceTag: 108,
    priceDetails:
      'Preisinformationen: Der Beitrag im 1 Jahr liegt bei 80,50€ und im 2 Jahr bei 110,00€.',
    starRating: 4,
    averageRating: '(4)',
    ratingCount: 1.112,
    tariffDetailsText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    insuranceName: 'mdt travel Versicherung',
    name: 'madTravelVersicherung',
    logoUrl: 'https://cdn.comparon.de/logos/mdt_rei_170x45_20161124.png',
    uspList: [
      { riskCover: 'Rücktritt', icon: 'icons/green-icon.png' },
      { riskCover: 'Abbruch', icon: 'icons/red-icon.png' },
      { riskCover: 'Gepäck', icon: 'icons/green-icon.png' },
    ],
    priceTag: 118,
    priceDetails:
      'Preisinformationen: Der Beitrag im 1 Jahr liegt bei 80,50€ und im 2 Jahr bei 133,00€.',
    starRating: 2,
    averageRating: '(2)',
    ratingCount: 98,
    tariffDetailsText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    insuranceName: 'Reiseversicherungen-direkt Versicherung',
    name: 'reiseversicherungenDirektVersicherung',
    logoUrl:
      'https://cdn.comparon.de/logos/reiseversicherungen_direkt_rei_169x13_20161124.png',
    uspList: [
      { riskCover: 'Rücktritt', icon: 'icons/green-icon.png' },
      { riskCover: 'Abbruch', icon: 'icons/green-icon.png' },
      { riskCover: 'Reisekranken', icon: 'icons/green-icon.png' },
    ],
    priceTag: 113,
    priceDetails:
      'Preisinformationen: Der Beitrag im 1 Jahr liegt bei 80,50€ und im 2 Jahr bei 126,00€.',
    starRating: 1.4,
    averageRating: '(1,4)',
    ratingCount: 223,
    tariffDetailsText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    insuranceName: 'TravelSecure Versicherung',
    name: 'travelSecureVersicherung',
    logoUrl:
      'https://cdn.comparon.de/logos/travel_secure_rei_144x38_20161124.png',
    uspList: [
      { riskCover: 'Rücktritt', icon: 'icons/green-icon.png' },
      { riskCover: 'Abbruch', icon: 'icons/green-icon.png' },
      { riskCover: 'Reisekranken', icon: 'icons/green-icon.png' },
      { riskCover: 'Gepäck', icon: 'icons/green-icon.png' },
    ],
    priceTag: 117,
    priceDetails:
      'Preisinformationen: Der Beitrag im 1 Jahr liegt bei 80,50€ und im 2 Jahr bei 130,00€.',
    starRating: 5,
    averageRating: '(5)',
    ratingCount: 144,
    tariffDetailsText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    insuranceName: 'Berlin Direkt Versicherung',
    name: 'berlinDirektVersicherung',
    logoUrl: 'https://cdn.comparon.de/logos/bd24_rei_170x70_20190221.png',
    uspList: [
      { riskCover: 'Rücktritt', icon: 'icons/yellow-icon.png' },
      { riskCover: 'Reisekranken', icon: 'icons/green-icon.png' },
      { riskCover: 'Gepäck', icon: 'icons/green-icon.png' },
    ],
    priceTag: 119,
    priceDetails:
      'Preisinformationen: Der Beitrag im 1 Jahr liegt bei 80,50€ und im 2 Jahr bei 141,00€.',
    starRating: 4.3,
    averageRating: '(4,3)',
    ratingCount: 43,
    tariffDetailsText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    insuranceName: 'coverwise Versicherung',
    name: 'coverwiseVersicherung',
    logoUrl: 'https://cdn.comparon.de/logos/coverwise_rei_170x94_20180103.png',
    uspList: [{ riskCover: 'Gepäck', icon: 'icons/yellow-icon.png' }],
    priceTag: 106,
    priceDetails:
      'Preisinformationen: Der Beitrag im 1 Jahr liegt bei 101,50€ und im 2 Jahr bei 121,00€.',
    starRating: 2.5,
    averageRating: '(2,5)',
    ratingCount: 774,
    tariffDetailsText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    insuranceName: 'LTA Versicherung',
    name: 'ltaVersicherung',
    logoUrl: 'https://cdn.comparon.de/logos/lta_rei_174x91_20161124.png',
    uspList: [
      { riskCover: 'Rücktritt', icon: 'icons/green-icon.png' },
      { riskCover: 'Abbruch', icon: 'icons/yellow-icon.png' },
      { riskCover: 'Reisekranken', icon: 'icons/yellow-icon.png' },
      { riskCover: 'Gepäck', icon: 'icons/red-icon.png' },
    ],
    priceTag: 135,
    priceDetails:
      'Preisinformationen: Der Beitrag im 1 Jahr liegt bei 100,50€ und im 2 Jahr bei 151,00€.',
    starRating: 2.3,
    averageRating: '(2,3)',
    ratingCount: 666,
    tariffDetailsText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    insuranceName: 'HanseMerkur Versicherung',
    name: 'hanseMerkurVersicherung',
    logoUrl:
      'https://cdn.comparon.de/logos/hanse_merkur_rei_170x40_20161124.png',
    uspList: [
      { riskCover: 'Rücktritt', icon: 'icons/green-icon.png' },
      { riskCover: 'Abbruch', icon: 'icons/green-icon.png' },
      { riskCover: 'Reisekranken', icon: 'icons/green-icon.png' },
    ],
    priceTag: 125,
    priceDetails:
      'Preisinformationen: Der Beitrag im 1 Jahr liegt bei 80,50€ und im 2 Jahr bei 130,00€.',
    starRating: 5,
    averageRating: '(5)',
    ratingCount: 887,
    tariffDetailsText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
]

export default tariffsData
