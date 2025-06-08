import physiotherapist from "./assets/images/unknown.png"

var physiotherapists = [
  {
    pid: 1,
    symbol: "oli",
    name: "physiotherapist.oliver_li",
    gender: "M",
    title: "physiotherapist.title",
    photo: physiotherapist,
    summary: [
      "physiotherapist.oliver_li_summary.line1",
      "physiotherapist.oliver_li_summary.line2",
      "physiotherapist.oliver_li_summary.line3",
      "physiotherapist.oliver_li_summary.line4",
      "physiotherapist.oliver_li_summary.line5",
      "physiotherapist.oliver_li_summary.line6"
    ]
  },
  {
    pid: 2,
    symbol: "olib",
    name: "Oliver B",
    gender: "F",
    title: "Physiotherapist",
    photo: physiotherapist
  },
  {
    pid: 3,
    symbol: "olic",
    name: "Oliver C",
    gender: "M",
    title: "Physiotherapist",
    photo: physiotherapist
  }
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


