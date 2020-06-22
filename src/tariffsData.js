const tariffsData = [
  {
    insuranceName: 'Allianz Travel Versicherung',
    name: 'allianzTravelVersicherung',
    logoUrl:
      'https://cdn.comparon.de/logos/allianz_Travel_rei_170x26_20181123.png',
    tariffDetailsText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
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
    priceIcon: 'icons/preisInformation-icon.png',
    deleteIcon: 'icons/delete-icon.png',
    priceDetails:
      'Preisinformationen: Der Beitrag im 1 Jahr liegt bei 95,00€ und im 2 Jahr bei 149,00€.',
  },
  {
    insuranceName: 'BarmeniaDirekt Versicherung',
    name: 'barmeniaDirektVersicherung',
    logoUrl:
      'https://cdn.comparon.de/logos/barmenia_direkt_rei_170x40_20161124.png',
    tariffDetailsText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    uspList: [
      { riskCover: 'Rücktritt', icon: 'icons/green-icon.png' },
      { riskCover: 'Abbruch', icon: 'icons/yellow-icon.png' },
      { riskCover: 'Gepäck', icon: 'icons/green-icon.png' },
    ],
    priceTag: 99,
    priceIcon: 'icons/preisInformation-icon.png',
    deleteIcon: 'icons/delete-icon.png',
    priceDetails:
      'Preisinformationen: Der Beitrag im 1 Jahr liegt bei 90,50€ und im 2 Jahr bei 121,00€.',
  },
  {
    insuranceName: 'Ergo Versicherung',
    name: 'ergoVersicherung',
    logoUrl: 'https://cdn.comparon.de/logos/ergo_RV_rei_200x126_20190325.png',
    tariffDetailsText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    uspList: [
      { riskCover: 'Rücktritt', icon: 'icons/green-icon.png' },
      { riskCover: 'Abbruch', icon: 'icons/yellow-icon.png' },
      { riskCover: 'Reisekranken', icon: 'icons/red-icon.png' },
      { riskCover: 'Gepäck', icon: 'icons/green-icon.png' },
    ],
    priceTag: 108,
    priceIcon: 'icons/preisInformation-icon.png',
    deleteIcon: 'icons/delete-icon.png',
    priceDetails:
      'Preisinformationen: Der Beitrag im 1 Jahr liegt bei 80,50€ und im 2 Jahr bei 110,00€.',
  },
  {
    insuranceName: 'mdt travel Versicherung',
    name: 'madTravelVersicherung',
    logoUrl: 'https://cdn.comparon.de/logos/mdt_rei_170x45_20161124.png',
    tariffDetailsText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    uspList: [
      { riskCover: 'Rücktritt', icon: 'icons/green-icon.png' },
      { riskCover: 'Abbruch', icon: 'icons/red-icon.png' },
      { riskCover: 'Gepäck', icon: 'icons/green-icon.png' },
    ],
    priceTag: 118,
    priceIcon: 'icons/preisInformation-icon.png',
    deleteIcon: 'icons/delete-icon.png',
    priceDetails:
      'Preisinformationen: Der Beitrag im 1 Jahr liegt bei 80,50€ und im 2 Jahr bei 133,00€.',
  },
  {
    insuranceName: 'Reiseversicherungen-direkt Versicherung',
    name: 'reiseversicherungenDirektVersicherung',
    tariffDetailsText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    logoUrl:
      'https://cdn.comparon.de/logos/reiseversicherungen_direkt_rei_169x13_20161124.png',
    uspList: ['Rücktritt', 'Abbruch', 'Reisekranken'],
    uspList: [
      { riskCover: 'Rücktritt', icon: 'icons/green-icon.png' },
      { riskCover: 'Abbruch', icon: 'icons/green-icon.png' },
      { riskCover: 'Reisekranken', icon: 'icons/green-icon.png' },
    ],
    priceTag: 113,
    priceIcon: 'icons/preisInformation-icon.png',
    deleteIcon: 'icons/delete-icon.png',
    priceDetails:
      'Preisinformationen: Der Beitrag im 1 Jahr liegt bei 80,50€ und im 2 Jahr bei 126,00€.',
  },
  {
    insuranceName: 'TravelSecure Versicherung',
    name: 'travelSecureVersicherung',
    tariffDetailsText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    logoUrl:
      'https://cdn.comparon.de/logos/travel_secure_rei_144x38_20161124.png',
    uspList: [
      { riskCover: 'Rücktritt', icon: 'icons/green-icon.png' },
      { riskCover: 'Abbruch', icon: 'icons/green-icon.png' },
      { riskCover: 'Reisekranken', icon: 'icons/green-icon.png' },
      { riskCover: 'Gepäck', icon: 'icons/green-icon.png' },
    ],
    priceTag: 117,
    priceIcon: 'icons/preisInformation-icon.png',
    deleteIcon: 'icons/delete-icon.png',
    priceDetails:
      'Preisinformationen: Der Beitrag im 1 Jahr liegt bei 80,50€ und im 2 Jahr bei 130,00€.',
  },
  {
    insuranceName: 'Berlin Direkt Versicherung',
    name: 'berlinDirektVersicherung',
    logoUrl: 'https://cdn.comparon.de/logos/bd24_rei_170x70_20190221.png',
    tariffDetailsText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    uspList: [
      { riskCover: 'Rücktritt', icon: 'icons/yellow-icon.png' },
      { riskCover: 'Reisekranken', icon: 'icons/green-icon.png' },
      { riskCover: 'Gepäck', icon: 'icons/green-icon.png' },
    ],
    priceTag: 119,
    priceIcon: 'icons/preisInformation-icon.png',
    deleteIcon: 'icons/delete-icon.png',
    priceDetails:
      'Preisinformationen: Der Beitrag im 1 Jahr liegt bei 80,50€ und im 2 Jahr bei 141,00€.',
  },
  {
    insuranceName: 'coverwise Versicherung',
    name: 'coverwiseVersicherung',
    logoUrl: 'https://cdn.comparon.de/logos/coverwise_rei_170x94_20180103.png',
    tariffDetailsText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    uspList: [{ riskCover: 'Gepäck', icon: 'icons/yellow-icon.png' }],
    priceTag: 106,
    priceIcon: 'icons/preisInformation-icon.png',
    deleteIcon: 'icons/delete-icon.png',
    priceDetails:
      'Preisinformationen: Der Beitrag im 1 Jahr liegt bei 101,50€ und im 2 Jahr bei 121,00€.',
  },
  {
    insuranceName: 'LTA Versicherung',
    name: 'ltaVersicherung',
    logoUrl: 'https://cdn.comparon.de/logos/lta_rei_174x91_20161124.png',
    tariffDetailsText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    uspList: [
      { riskCover: 'Rücktritt', icon: 'icons/green-icon.png' },
      { riskCover: 'Abbruch', icon: 'icons/yellow-icon.png' },
      { riskCover: 'Reisekranken', icon: 'icons/yellow-icon.png' },
      { riskCover: 'Gepäck', icon: 'icons/red-icon.png' },
    ],
    priceTag: 135,
    priceIcon: 'icons/preisInformation-icon.png',
    deleteIcon: 'icons/delete-icon.png',
    priceDetails:
      'Preisinformationen: Der Beitrag im 1 Jahr liegt bei 100,50€ und im 2 Jahr bei 151,00€.',
  },
  {
    insuranceName: 'HanseMerkur Versicherung',
    name: 'hanseMerkurVersicherung',
    logoUrl:
      'https://cdn.comparon.de/logos/hanse_merkur_rei_170x40_20161124.png',
    tariffDetailsText:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    uspList: [
      { riskCover: 'Rücktritt', icon: 'icons/green-icon.png' },
      { riskCover: 'Abbruch', icon: 'icons/green-icon.png' },
      { riskCover: 'Reisekranken', icon: 'icons/green-icon.png' },
    ],
    priceTag: 125,
    priceIcon: 'icons/preisInformation-icon.png',
    deleteIcon: 'icons/delete-icon.png',
    priceDetails:
      'Preisinformationen: Der Beitrag im 1 Jahr liegt bei 80,50€ und im 2 Jahr bei 130,00€.',
  },
]

export default tariffsData
