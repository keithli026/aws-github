import physiotherapist from "./assets/images/unknown.png"

var physiotherapists = [
  {
    pid: 1,
    symbol: "oli",
    name: "meet-the-team:oli.name",
    gender: "M",
    title: "meet-the-team:oli.title",
    photo: physiotherapist,
    summary: [
      "meet-the-team:oli.summary.line1",
      "meet-the-team:oli.summary.line2",
      "meet-the-team:oli.summary.line3",
      "meet-the-team:oli.summary.line4",
      "meet-the-team:oli.summary.line5",
      "meet-the-team:oli.summary.line6"
    ]
  },
  // {
  //   pid: 2,
  //   symbol: "olib",
  //   name: "Oliver B",
  //   gender: "F",
  //   title: "Physiotherapist",
  //   photo: physiotherapist
  // },
  // {
  //   pid: 3,
  //   symbol: "olic",
  //   name: "Oliver C",
  //   gender: "M",
  //   title: "Physiotherapist",
  //   photo: physiotherapist
  // }
];

export function getPhysiotherapists() {
  return physiotherapists;
}

export function getPhysiotherapist(id) {
  return physiotherapists.find(
    Physiotherapist => Physiotherapist.pid === id
  );
}

export function getPhysiotherapistByName(name) {
  return physiotherapists.find(
    Physiotherapist => Physiotherapist.name.replace(/\s+/g, '-').toLowerCase() === name
  );
}

export function getPhysiotherapistBySymbol(symbol) {
  return physiotherapists.find(
    Physiotherapist => Physiotherapist.symbol === symbol
  );
}

export function deletePhysiotherapist(pid) {
  physiotherapists = physiotherapists.filter(
    (Physiotherapist) => Physiotherapist.pid !== pid
  );
}


