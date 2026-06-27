// ============================================================
//  TRAILS IN THE SKY — STREAMELEMENTS CHAT OVERLAY
// ============================================================

// ── RANDOM PORTRAIT POOL ─────────────────────────────────────
const characterPortraits = [
  { name: "Estelle",            url: "https://i.postimg.cc/jDmvV7Y1/c-kao000.png", flip: true },
  { name: "Joshua",             url: "https://i.postimg.cc/FY8GtLXq/c-kao010.png", flip: true },
  { name: "Olivier",            url: "https://i.postimg.cc/JsvKwkCS/c-kao030.png", flip: true },
  { name: "Scherazade",         url: "https://i.postimg.cc/CRXJyqpW/c-kao020.png", flip: true },
  { name: "Kloe",               url: "https://i.postimg.cc/9DK137H6/c-kao040.png", flip: true },
  { name: "Agate",              url: "https://i.postimg.cc/182MxqZx/c-kao051.png", flip: true },
  { name: "Tita",               url: "https://i.postimg.cc/3kV9MvHH/c-kao060.png", flip: true },
  { name: "Zin",                url: "https://i.postimg.cc/XrmxMC0S/c-kao070.png", flip: true },
  { name: "Cassius",            url: "https://i.postimg.cc/68gzsvNx/c-kao080.png", flip: false },
  { name: "Alicia",             url: "https://i.postimg.cc/06Sn9y94/c-kao090.png", flip: true },
  { name: "Russle",             url: "https://i.postimg.cc/xkm59194/c-kao100.png", flip: true },
  { name: "Richard",            url: "https://i.postimg.cc/sBWm3g38/c-kao110.png", flip: true },
  { name: "Lawrance",           url: "https://i.postimg.cc/4KcPXxXr/c-kao120.png", flip: true },
  { name: "Nice Alba",          url: "https://i.postimg.cc/Z9NHJ5JG/c-kao130.png", flip: true },
  { name: "Magician",           url: "https://i.postimg.cc/DWG67w23/c-kao134.png", flip: false },
  { name: "Niel",               url: "https://i.postimg.cc/949bcQW3/c-kao141.png", flip: true },
  { name: "Dorothy",            url: "https://i.postimg.cc/WDZ8s12P/c-kao150.png", flip: false },
  { name: "Dorothy Smile",      url: "https://i.postimg.cc/rd4jqw8T/c-kao151.png", flip: false },
  { name: "Morgan",             url: "https://i.postimg.cc/JyXxRz1m/c-kao160.png", flip: true },
  { name: "Schwarz",            url: "https://i.postimg.cc/4KcPXxJJ/c-kao170.png", flip: false },
  { name: "Kallen",             url: "https://i.postimg.cc/Z9NHJ5TY/c-kao182.png", flip: true },
  { name: "Don",                url: "https://i.postimg.cc/jWfcRSsd/c-kao190.png", flip: false },
  { name: "Don Laugh",          url: "https://i.postimg.cc/CZ87wxFx/c-kao191",     flip: false },
  { name: "Kyle",               url: "https://i.postimg.cc/rd4jqw8s/c-kao200.png", flip: true },
  { name: "Josette",            url: "https://i.postimg.cc/wtN29j67/c-kao210.png", flip: false },
  { name: "Josette Laugh",      url: "https://i.postimg.cc/B8FpJnqj/c-kao211.png", flip: false },
  { name: "Dunan",              url: "https://i.postimg.cc/d7C6JVq7/c-kao220.png", flip: false },
  { name: "Mueller",            url: "https://i.postimg.cc/phtZrMT2/c-kao270.png", flip: false },
  { name: "LT Lawrance",        url: "https://i.postimg.cc/jwrX2Y5x/c-kao280.png", flip: true },
  { name: "Lt Lawrance no hat", url: "https://i.postimg.cc/jwrX2Y5q/c-kao283.png", flip: true },
  { name: "Young Estelle",      url: "https://i.postimg.cc/34HBNQRJ/c-kao290.png", flip: false },
  { name: "Young Joshua",       url: "https://i.postimg.cc/hzqrvRjG/c-kao300.png", flip: true },
  { name: "Sieg",               url: "https://i.postimg.cc/k6dcGP44/c-kao310.png", flip: true },
  { name: "Maid Estelle",       url: "https://i.postimg.cc/G81Qtn2t/c-kao320.png", flip: true },
  { name: "Maid Joshua",        url: "https://i.postimg.cc/zb1jvYB3/c-kao330.png", flip: true },
  { name: "Red Knight",         url: "https://i.postimg.cc/r0LJs2mK/c-kao341.png", flip: true },
  { name: "Azur Knight",        url: "https://i.postimg.cc/TLX91vwK/c-kao350.png", flip: true },
  { name: "Princess Joshua",    url: "https://i.postimg.cc/xJSR8VCk/c-kao360.png", flip: true },
  { name: "Princess Kloe",      url: "https://i.postimg.cc/Ppk4Jnxp/c-kao408.png", flip: true },
  { name: "School Josette",     url: "https://i.postimg.cc/N9w4FvM2/c-kao410.png", flip: true },
  { name: "Mayor Maybelle",     url: "https://i.postimg.cc/KkyNjhzg/c-kao610.png", flip: true },
  { name: "Lila",               url: "https://i.postimg.cc/47T5yRd9/c-kao620.png", flip: true },
  { name: "Lugran",             url: "https://i.postimg.cc/zb1jvYBC/c-kao630.png", flip: true },
  { name: "Jill",               url: "https://i.postimg.cc/47T5yRdQ/c-kao640.png", flip: true },
  { name: "Jean",               url: "https://i.postimg.cc/gXPDjbJq/c-kao650.png", flip: true },
  { name: "Dalmore",            url: "https://i.postimg.cc/2bfwyN6w/c-kao660.png", flip: true },
  { name: "Gilbert",            url: "https://i.postimg.cc/k6dcGP4y/c-kao670.png", flip: true },
  { name: "Mao",                url: "https://i.postimg.cc/8JVHcg54/c-kao680.png", flip: true },
  { name: "Gustav",             url: "https://i.postimg.cc/qhdLqHRQ/c-kao691.png", flip: true },
  { name: "Cid",                url: "https://i.postimg.cc/r0LJs2mQ/c-kao700.png", flip: true },
  { name: "Head maid",          url: "https://i.postimg.cc/phtZrMTG/c-kao710.png", flip: true },
  { name: "Phillip",            url: "https://i.postimg.cc/DJdcbpJ1/c-kao720.png", flip: true },
  { name: "Hans",               url: "https://i.postimg.cc/62LhGb2d/c-kao730.png", flip: true },
  { name: "Aina",               url: "https://i.postimg.cc/wycks4yX/c-kao740.png", flip: true },
  { name: "Matron Theresa",     url: "https://i.postimg.cc/gXqK6tXy/c-kao750.png", flip: true },
  { name: "Elnan",              url: "https://i.postimg.cc/7GMNTtGn/c-kao760.png", flip: true },
  { name: "Clem",               url: "https://i.postimg.cc/hzb07Zzb/c-kao770.png", flip: true },
  { name: "Collins",            url: "https://i.postimg.cc/G8Jjsg8j/c-kao780.png", flip: true },
  { name: "Kilika",             url: "https://i.postimg.cc/47b1h275/c-kao790.png", flip: true },
  { name: "Murdock",            url: "https://i.postimg.cc/xJyPbpJg/c-kao800.png", flip: true },
  { name: "Anelace",            url: "https://i.postimg.cc/S27Gz12d/c-kao810.png", flip: true },
  { name: "grant",              url: "https://i.postimg.cc/qhXGCDhj/c-kao820.png", flip: true },
  { name: "Canon",              url: "https://i.postimg.cc/34CZDf4t/c-kao830.png", flip: true },
  { name: "Kurt",               url: "https://i.postimg.cc/VrBFbZr7/c-kao841.png", flip: true },
];

const characterExpressions = {

  Estelle: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Estelle/C_KA1017.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Estelle/H_KA1001.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Estelle/H_KA1027.png", flip: true },
      angry: {
        frames: [
          { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Estelle/H_KA1023.png", flip: true },
          { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Estelle/H_KA1022.png", flip: true },
          { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Estelle/H_KA1023.png", flip: true },
        ],
        fps: 6
      },
      supportive: {
        frames: [
          { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Estelle/H_KA1028.png", flip: true },
          { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Estelle/H_KA1029.png", flip: true },
          { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Estelle/H_KA1028.png", flip: true },
        ],
        fps: 6
      },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Estelle/H_KA1001.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Estelle/H_KA1004.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Estelle/H_KA1008.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Estelle/H_KA1015.png", flip: true },
    },
    variants: {}
  },

  Joshua: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Joshua/C_KA1031.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Joshua/C_KA1049.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Joshua/C_KA1043.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Joshua/C_KA1046.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Joshua/C_KA1054.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Joshua/C_KA1055.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Joshua/C_KA1059.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Joshua/C_KA1056.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Joshua/C_KA1035.png", flip: true },
    },
    variants: {}
  },

  Agate: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Agate/C_KA1280.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Agate/C_KA1292.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Agate/C_KA1289.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Agate/C_KA1290.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Agate/C_KA1291.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Agate/C_KA1290.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Agate/C_KA1283.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Agate/C_KA1292.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Agate/C_KA1293.png", flip: true },
    },
    variants: {}
  },

  Scherazade: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Shera/C_KAO020.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Shera/C_KAO520.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Shera/C_KAO528.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Shera/C_KAO523.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Shera/C_KAO524.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Shera/C_KAO520.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Shera/C_KAO521.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Shera/C_KAO525.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Shera/C_KAO025.png", flip: true },
    },
    variants: {}
  },

  Tita: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Tita/C_KAO060.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Tita/C_KAO061.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Tita/C_KAO063.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Tita/C_KAO068.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Tita/C_KAO560.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Tita/C_KAO061.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Tita/C_KAO065.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Tita/C_KAO067.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Tita/C_KAO563.png", flip: true },
    },
    variants: {}
  },

  Olivier: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Olivier/C_KAO030.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Olivier/C_KAO031.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Olivier/C_KAO036.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Olivier/C_KAO039.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Olivier/C_KAO035.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Olivier/C_KAO031.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Olivier/C_KAO038.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Olivier/C_KAO037.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Olivier/C_KAO033.png", flip: true },
    },
    variants: {}
  },

  Dorothy: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Dorothy/C_KAO150.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Dorothy/C_KAO151.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Dorothy/C_KAO154.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Dorothy/C_KAO155.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Dorothy/C_KAO151.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Dorothy/C_KAO151.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Dorothy/C_KAO153.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Dorothy/C_KAO157.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Dorothy/C_KAO152.png", flip: true },
    },
    variants: {}
  },

  Kloe: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kloe/C_KA1160.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kloe/C_KA1161.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kloe/C_KA1163.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kloe/C_KA1166.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kloe/C_KA1161.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kloe/C_KA1165.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kloe/C_KA1169.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kloe/C_KA1380.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kloe/C_KA1167.png", flip: true },
    },
    variants: {}
  },

  Anelace: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Anelace/C_KA1310.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Anelace/C_KAO811.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Anelace/C_KA1317.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Anelace/C_KAO815.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Anelace/C_KAO810.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Anelace/C_KA1315.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Anelace/C_KAO814.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Anelace/C_KA1311.png", flip: true },
      thinking: {
        frames: [
          { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Anelace/C_KAO817.png", flip: true },
          { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Anelace/C_KAO814.png", flip: true },
        ],
        fps: 6,
        delay: 2000
      },
    },
    variants: {}
  },

  Niel: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Niel/C_KAO140.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Niel/C_KAO141.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Niel/C_KAO145.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Niel/C_KAO144.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Niel/C_KAO147.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Niel/C_KAO147.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Niel/C_KAO143.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Niel/C_KAO146.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Niel/C_KAO142.png", flip: true },
    },
    variants: {}
  },

  Alba: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Alba/C_KAO130.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Alba/C_KAO133.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Alba/C_KAO131.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Alba/C_KAO135.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Alba/C_KAO138.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Alba/C_KAO138.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Alba/C_KAO137.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Alba/C_KAO133.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Alba/C_KAO136.png", flip: true },
    },
    variants: {}
  },

  Walter: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Walter/C_KAO250.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Walter/C_KAO252.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Walter/C_KAO259.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Walter/C_KAO258.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Walter/C_KAO253.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Walter/C_KAO253.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Walter/C_KAO255.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Walter/C_KAO251.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Walter/C_KAO254.png", flip: true },
    },
    variants: {}
  },

  Kevin: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kevin/C_KA1060.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kevin/C_KA1061.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kevin/C_KA1076.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kevin/C_KA1069.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kevin/C_KA1066.png", flip: true },
      friendly: {
        frames: [
          { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kevin/C_KA1062.png", flip: true },
          { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kevin/C_KA1066.png", flip: true },
          { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kevin/C_KA1062.png", flip: true },
        ],
        fps: 6,
        delay: 1000
      },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kevin/C_KA1064.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kevin/C_KA1071.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kevin/C_KA1074.png", flip: true },
    },
    variants: {}
  },

  Casius: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Cassius/C_KAO080.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Cassius/C_KAO081.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Cassius/C_KAO083.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Cassius/C_KAO087.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Cassius/C_KAO081.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Cassius/C_KAO081.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Cassius/C_KAO084.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Cassius/C_KAO084.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Cassius/C_KAO085.png", flip: true },
    },
    variants: {}
  },

  Don: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Don/C_KAO190.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Don/C_KAO191.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Don/C_KAO197.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Don/C_KAO195.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Don/C_KAO194.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Don/C_KAO196.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Don/C_KAO196.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Don/C_KAO191.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Don/C_KAO198.png", flip: true },
    },
    variants: {}
  },

  Josette: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Josette/C_KAO210.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Josette/C_KAO211.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Josette/C_KAO215.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Josette/C_KAO214.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Josette/C_KAO415.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Josette/C_KAO415.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Josette/C_KAO418.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Josette/C_KAO414.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Josette/C_KAO416.png", flip: true },
    },
    variants: {}
  },

  Jill: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Jill/C_KAO640.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Jill/C_KAO659.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Jill/C_KAO645.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Jill/C_KAO646.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Jill/C_KAO640.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Jill/C_KAO640.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Jill/C_KAO643.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Jill/C_KAO649.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Jill/C_KAO647.png", flip: true },
    },
    variants: {}
  },

  Richard: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Richard/C_KAO110.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Richard/C_KAO111.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Richard/C_KAO116.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Richard/C_KAO117.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Richard/C_KAO110.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Richard/C_KAO110.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Richard/C_KAO114.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Richard/C_KAO118.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Richard/C_KAO115.png", flip: true },
    },
    variants: {}
  },

  Kanone: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kanone/C_KA1320.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kanone/C_KA1325.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kanone/C_KA1185.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kanone/C_KA1188.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kanone/C_KA1181.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kanone/C_KA1181.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kanone/C_KA1323.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kanone/C_KA1181.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Kanone/C_KA1187.png", flip: true },
    },
    variants: {}
  },

  Grant: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Grant/C_KAO820.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Grant/C_KAO821.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Grant/C_KAO824.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Grant/C_KAO826.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Grant/C_KAO820.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Grant/C_KAO825.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Grant/C_KAO826.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Grant/C_KAO825.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Grant/C_KAO823.png", flip: true },
    },
    variants: {}
  },

  Kurt: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Gus/C_KAO840.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Gus/C_KAO841.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Gus/C_KAO847.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Gus/C_KAO842.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Gus/C_KAO841.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Gus/C_KAO841.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Gus/C_KAO845.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Gus/C_KAO845.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Gus/C_KAO843.png", flip: true },
    },
    variants: {}
  },

  Carna: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Cana/C_KAO830.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Cana/C_KAO831.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Cana/C_KAO834.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Cana/C_KAO836.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Cana/C_KAO831.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Cana/C_KAO831.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Cana/C_KAO836.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Cana/C_KAO835.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Cana/C_KAO833.png", flip: true },
    },
    variants: {}
  },

  Shwarz: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Schwarz/C_KAO170.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Schwarz/C_KAO171.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Schwarz/C_KAO175.png", flip: true },
      angry:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Schwarz/C_KAO177.png", flip: true },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Schwarz/C_KAO171.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Schwarz/C_KAO171.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Schwarz/C_KAO174.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Schwarz/C_KAO171.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Schwarz/C_KAO173.png", flip: true },
    },
    variants: {}
  },

  Zin: {
    base: {
      default:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Zin/C_KAO070.png", flip: true },
      happy:      { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Zin/C_KAO071.png", flip: true },
      sad:        { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Zin/C_KAO075.png", flip: true },
      angry: {
        frames: [
          { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Zin/C_KAO076.png", flip: true },
          { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Zin/C_KAO077.png", flip: true },
          { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Zin/C_KAO076.png", flip: true },
        ],
        fps: 6,
        delay: 1000
      },
      supportive: { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Zin/C_KAO071.png", flip: true },
      friendly:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Zin/C_KAO071.png", flip: true },
      shocked:    { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Zin/C_KAO073.png", flip: true },
      love:       { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Zin/C_KAO079.png", flip: true },
      thinking:   { url: "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Zin/C_KAO074.png", flip: true },
    },
    variants: {}
  },

};

const expressionKeywords = [
  { keywords: ["lol", "haha", "lmao", "hehe", "xd", ":)", "😂", "😄", "funny", "hilarious", "lmfao", "rofl", "giggle", "chuckle", "amusing", "cracking up", "dying", "ded", "💀", "crying laughing", "screaming"], expression: "happy" },
  { keywords: ["sad", "cry", ":(", "rip", "aw", "nooo", "😢", "😭", "gutted", "heartbroken", "devastated", "depressed", "miserable", "upset", "unhappy", "down", "gloomy", "sorrow", "tears", "crying", "sobbing", "pain", "hurts", "awful", "terrible"], expression: "sad" },
  { keywords: ["angry", "mad", "rage", "ugh", "grr", "!!", "😡", "🤬", "furious", "outraged", "livid", "fuming", "seething", "annoyed", "irritated", "frustrated", "hate", "disgusted", "infuriated", "pissed", "done with", "fed up"], expression: "angry" },
  { keywords: ["gg", "well done", "nice", "great", "amazing", "poggers", "pog", "lets go", "🎉", "👏", "well played", "good job", "excellent", "brilliant", "fantastic", "awesome", "incredible", "proud", "congrats", "gratz", "you got this", "keep going", "cheering", "support", "rooting"], expression: "supportive" },
  { keywords: ["hey", "hi", "hello", "howdy", "hiya", "sup", "yo", "👋", "good morning", "good evening", "good night", "welcome", "greetings", "salutations", "afternoon", "evening", "morning", "heya", "hai", "ello"], expression: "friendly" },
  { keywords: ["wow", "omg", "what", "no way", "seriously", "really", "😲", "😮", "shocked", "wait", "whaaat", "unbelievable", "cant believe", "impossible", "insane", "wild", "crazy", "mind blown", "🤯", "unexpected", "surprised", "whoa", "blimey", "bloody hell"], expression: "shocked" },
  { keywords: ["love", "heart", "<3", "❤️", "💕", "adore", "cute", "aww", "precious", "sweet", "lovely", "beautiful", "gorgeous", "darling", "cherish", "favorite", "best", "💖", "💗", "😍", "🥰", "obsessed", "amazing person"], expression: "love" },
  { keywords: ["think", "hmm", "maybe", "idk", "not sure", "perhaps", "🤔", "pondering", "wondering", "considering", "debating", "unsure", "curious", "question", "dunno", "could be", "possibly", "interesting", "hmmm", "let me think", "good question", "fair point"], expression: "thinking" },
];

var PREMIUM_BITS_REQUIRED = 500;
var manualUnlocks = {};
const pinnedUsers = {};

var totalMessages    = 0;
var messagesLimit    = 0;
var channelName;
var provider;
var addition;
var removeSelector;
var autoUserColor;
var userColor;
var carimboHora;
var localCarimboHora;
var animationIn      = "fadeIn";
var animationOut     = "fadeOut";
var hideCommands     = "true";
var hideAfter        = 30;
var ignoredUsers     = [];
var userCharacterMap = {};
var userCharacterAssignments = {};
var userPremiumUnlocks = {};

var bracerData = {};
var BRACER_RANKS = [
  { name: "Junior",  badge: "Jr",  bp: 0,      senior: false },
  { name: "Senior",  badge: "Sr",  bp: 0,      senior: true  },
  { name: "G",       badge: "G",   bp: 500,    senior: true  },
  { name: "G+",      badge: "G+",  bp: 1200,   senior: true  },
  { name: "F",       badge: "F",   bp: 2500,   senior: true  },
  { name: "F+",      badge: "F+",  bp: 4500,   senior: true  },
  { name: "E",       badge: "E",   bp: 7000,   senior: true  },
  { name: "E+",      badge: "E+",  bp: 10500,  senior: true  },
  { name: "D",       badge: "D",   bp: 15000,  senior: true  },
  { name: "D+",      badge: "D+",  bp: 21000,  senior: true  },
  { name: "C",       badge: "C",   bp: 29000,  senior: true  },
  { name: "C+",      badge: "C+",  bp: 39000,  senior: true  },
  { name: "B",       badge: "B",   bp: 52000,  senior: true  },
  { name: "B+",      badge: "B+",  bp: 68000,  senior: true  },
  { name: "A",       badge: "A",   bp: 88000,  senior: true  },
  { name: "A+",      badge: "A+",  bp: 115000, senior: true  },
  { name: "S",       badge: "S",   bp: 200000, senior: true  },
];
var BRACER_STREAMS_FOR_SENIOR = 5;

function getBracerRank(userId) {
  var user = bracerData[userId];
  if (!user) return BRACER_RANKS[0];
  var senior = (user.qualifiedStreams || 0) >= BRACER_STREAMS_FOR_SENIOR;
  var best = BRACER_RANKS[0];
  for (var i = 0; i < BRACER_RANKS.length; i++) {
    var r = BRACER_RANKS[i];
    if (r.senior && !senior) continue;
    if (user.bp >= r.bp) best = r;
  }
  return best;
}

function getBracerBadgeHtml(userId) {
  if (userId == '161179132' || userId == 161179132 || String(userId) === '161179132') {
    return '<span class="bracer-rank-badge"><span style="font-size:16px;">S</span></span>';
  }
  var rank = getBracerRank(userId);
  var isSr = rank.senior;
  if (isSr && rank.name !== 'Senior') {
    return '<span class="bracer-rank-badge"><span style="font-size:16px;">' + rank.badge + '</span></span>';
  }
  var prefix = isSr ? 'SR' : 'Jr';
  return '<span class="bracer-rank-badge"><span style="font-size:16px;">' + prefix + '</span></span>';
}

function loadPersistentData() {
  SE_API.store.get('chatOverlayAssignments').then(function(data) {
    if (data && data.value) {
      try { userCharacterAssignments = JSON.parse(data.value); }
      catch(e) { userCharacterAssignments = {}; }
    }
  });
  SE_API.store.get('chatOverlayUnlocks').then(function(data) {
    if (data && data.value) {
      try { userPremiumUnlocks = JSON.parse(data.value); }
      catch(e) { userPremiumUnlocks = {}; }
    }
  });
  SE_API.store.get('bracerPointsData').then(function(data) {
    if (data && data.value) {
      try { bracerData = JSON.parse(data.value); }
      catch(e) { bracerData = {}; }
    }
  });
  Object.keys(manualUnlocks).forEach(function(uid) {
    if (!userPremiumUnlocks[uid]) userPremiumUnlocks[uid] = [];
    manualUnlocks[uid].forEach(function(variant) {
      if (userPremiumUnlocks[uid].indexOf(variant) === -1) {
        userPremiumUnlocks[uid].push(variant);
      }
    });
  });
}

function saveAssignments() {
  SE_API.store.set('chatOverlayAssignments', JSON.stringify(userCharacterAssignments));
}

function saveUnlocks() {
  SE_API.store.set('chatOverlayUnlocks', JSON.stringify(userPremiumUnlocks));
}

function hasUnlocked(userId, variantKey) {
  var unlocks = userPremiumUnlocks[userId] || [];
  return unlocks.indexOf(variantKey) !== -1;
}

function unlockVariant(userId, variantKey) {
  if (!userPremiumUnlocks[userId]) userPremiumUnlocks[userId] = [];
  if (!hasUnlocked(userId, variantKey)) {
    userPremiumUnlocks[userId].push(variantKey);
    saveUnlocks();
    console.log("🔓 Unlocked " + variantKey + " for user " + userId);
  }
}

function getPortraitForMessage(userId, messageText, isSubscriber) {
  if (pinnedUsers[userId] !== undefined) {
    return characterPortraits[pinnedUsers[userId]];
  }
  var assignment = userCharacterAssignments[userId];
  if (assignment) {
    // Pool-only character (from random pool, not expression set)
    if (assignment.poolOnly) {
      var poolChar = characterPortraits.find(function(c) {
        return c.name.toLowerCase() === assignment.character.toLowerCase();
      });
      if (poolChar) return poolChar;
    }
    var charName    = assignment.character;
    var variantName = assignment.variant || null;
    var charData    = characterExpressions[charName];
    if (charData) {
      var pool = charData.base;
      if (variantName && charData.variants && charData.variants[variantName]) {
        pool = charData.variants[variantName];
      }
      if (!isSubscriber) {
        var defaultPortrait = pool["default"];
        if (!defaultPortrait || !defaultPortrait.url) {
          return characterPortraits[Math.floor(Math.random() * characterPortraits.length)];
        }
        return defaultPortrait;
      }
      var expression = "default";
      var lower = messageText ? messageText.toLowerCase() : "";
      for (var k = 0; k < expressionKeywords.length; k++) {
        var match = expressionKeywords[k].keywords.some(function(word) {
          try {
            return new RegExp('(^|\\s)' + word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(\\s|$)').test(lower);
          } catch(e) {
            return lower.includes(word);
          }
        });
        if (match) { expression = expressionKeywords[k].expression; break; }
      }
      var portrait = pool[expression] || pool["default"];
      if (!portrait || (!portrait.url && !portrait.frames)) {
        return characterPortraits[Math.floor(Math.random() * characterPortraits.length)];
      }
      return portrait;
    }
  }
  var mergedPool = characterPortraits.slice();
  Object.keys(characterExpressions).forEach(function(charName) {
    var defaultImg = characterExpressions[charName] && characterExpressions[charName].base && characterExpressions[charName].base.default;
    if (defaultImg && defaultImg.url && defaultImg.url !== "PASTE_LINK_HERE") {
      mergedPool.push(defaultImg);
    }
  });
  return mergedPool[Math.floor(Math.random() * mergedPool.length)];
}

window.addEventListener("onEventReceived", function(obj) {
  if (obj.detail.listener === "delete-message") {
    $(".message-row[data-id=" + obj.detail.event.msgId + "]").remove();
    return;
  }
  if (obj.detail.listener === "delete-messages") {
    $(".message-row[data-from=" + obj.detail.event.userId + "]").remove();
    return;
  }
  if (obj.detail.listener === "event" &&
      obj.detail.event.type === "cheer" &&
      obj.detail.event.data) {
    var cheerData = obj.detail.event.data;
    var cheerBits = parseInt(cheerData.amount) || 0;
    var cheerUID  = cheerData.userId;
    var cheerName = cheerData.displayName;
    var cheerMsg  = (cheerData.message || "").replace(/cheer\d+/gi, "").trim();
    if (cheerBits >= PREMIUM_BITS_REQUIRED) {
      var unlockedSomething = false;
      Object.keys(characterExpressions).forEach(function(charName) {
        var variants = characterExpressions[charName].variants || {};
        Object.keys(variants).forEach(function(variantKey) {
          var fullKey = charName + " " + variantKey;
          if (cheerMsg.toLowerCase() === fullKey.toLowerCase()) {
            unlockVariant(cheerUID, fullKey);
            unlockedSomething = true;
          }
        });
      });
      if (!unlockedSomething) {
        console.log("⚠️ " + cheerName + " cheered " + cheerBits + " bits but no matching variant found: '" + cheerMsg + "'");
      }
    }
    return;
  }
  if (obj.detail.event.listener === "widget-button") {
    if (obj.detail.event.field === "testMessage") {
      var emulated = new CustomEvent("onEventReceived", {
        detail: {
          listener: "message",
          event: {
            service: "twitch",
            data: {
              time: Date.now(),
              tags: { color: "#f5c842", "display-name": "StreamElements",
                emotes: "", flags: "", id: "test-id-001", mod: "1",
                "room-id": "0", subscriber: "0", turbo: "0",
                "user-id": "100135110", "user-type": "mod" },
              nick: channelName, userId: "100135110",
              displayName: channelName, displayColor: "#f5c842",
              badges: [{ type: "moderator", version: "1",
                url: "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/3",
                description: "Moderator" }],
              channel: channelName,
              text: "I definitely can't imagine Schera being anyone's bride...",
              isAction: false, emotes: [], msgId: "test-id-001"
            },
            renderedText: "I definitely can't imagine Schera being anyone's bride..."
          }
        }
      });
      window.dispatchEvent(emulated);
    }
    return;
  }
  if (obj.detail.listener !== "message") return;
  var data = obj.detail.event.data;

  if (data.text.toLowerCase() === "!reset") {
    delete userCharacterAssignments[data.userId];
    saveAssignments();
    console.log(data.displayName + " reset their character — back to random");
    return;
  }
  if (data.text.toLowerCase().startsWith("!set ")) {
    var parts      = data.text.slice(5).trim();
    var charName   = null;
    var variantKey = null;

    // Check expression characters first
    Object.keys(characterExpressions).forEach(function(name) {
      if (parts.toLowerCase().startsWith(name.toLowerCase())) {
        charName = name;
        var rest = parts.slice(name.length).trim();
        if (rest) variantKey = rest;
      }
    });

    // If not found in expressions, check random pool
    if (!charName) {
      characterPortraits.forEach(function(c) {
        if (parts.toLowerCase() === c.name.toLowerCase()) {
          charName = c.name;
        }
      });
      if (charName) {
        userCharacterAssignments[data.userId] = { character: charName, variant: null, poolOnly: true };
        saveAssignments();
        console.log(data.displayName + " set to pool character: " + charName);
        return;
      }
    }

    if (charName) {
      if (variantKey) {
        var fullKey = charName + " " + variantKey;
        if (hasUnlocked(data.userId, fullKey)) {
          userCharacterAssignments[data.userId] = { character: charName, variant: variantKey };
          saveAssignments();
        } else {
          console.log(data.displayName + " tried locked variant: " + fullKey);
        }
      } else {
        userCharacterAssignments[data.userId] = { character: charName, variant: null };
        saveAssignments();
        console.log(data.displayName + " set to " + charName);
      }
    }
    return;
  }

  if (data.text.startsWith("!") && hideCommands === "true") return;
  if (ignoredUsers.indexOf(data.nick) !== -1) return;

  var message = attachEmotes(data);
  var badges  = getBracerBadgeHtml(data.userId);
  var color = data.tags.color;
  if (!color || color === "") {
    color = data.displayColor !== "" ? data.displayColor : "#f5c842";
  }
  console.log("👤 " + data.displayName + " | ID: " + data.userId);
  var isSubscriber = data.tags.subscriber === "1";
  addMessage(data.displayName, message, badges, data.userId, data.msgId, color, data.isAction, data.text, isSubscriber);
});

window.addEventListener("onWidgetLoad", function(obj) {
  var f        = obj.detail.fieldData;
  messagesLimit    = f.messagesLimit;
  hideCommands     = f.hideCommands;
  carimboHora      = f.carimboHora;
  channelName      = obj.detail.channel.username;
  userColor        = f.userColor;
  autoUserColor    = f.autoUserColor;
  localCarimboHora = f.localCarimboHora;
  ignoredUsers = f.ignoredUsers.toLowerCase().replace(" ", "").split(",");
  fetch("https://api.streamelements.com/kappa/v2/channels/" + obj.detail.channel.id + "/")
    .then(function(r) { return r.json(); })
    .then(function(p) { provider = p.provider; });
  if (f.alignMessages === "display: block") {
    addition       = "prepend";
    removeSelector = ".message-row:nth-child(n+" + (messagesLimit + 1) + ")";
  } else {
    addition       = "append";
    removeSelector = ".message-row:nth-last-child(n+" + (messagesLimit + 1) + ")";
  }
  loadPersistentData();
  characterPortraits.forEach(function(c) {
    var img = new Image();
    img.src = c.url;
  });
});

function addMessage(username, message, badges, userId, msgId, color, isAction, rawText, isSubscriber) {
  totalMessages += 1;
  var character   = getPortraitForMessage(userId, rawText || message, isSubscriber);
  var actionClass = isAction ? "action" : "";
  var nameColor = "#f5c842";
  if (autoUserColor === "sim") nameColor = color;
  else if (userColor && userColor !== "") nameColor = userColor;
  var hora = "";
  if (carimboHora === "sim") {
    var d = new Date();
    hora = '<span class="time">' + ("0"+d.getHours()).slice(-2) + ':' + ("0"+d.getMinutes()).slice(-2) + '</span>';
  }
  var isAnimated = character && character.frames && character.frames.length > 0;
  var firstFrame = isAnimated ? character.frames[0] : character;
  if (!firstFrame || !firstFrame.url) {
    firstFrame = characterPortraits[0];
    isAnimated = false;
  }
  var html =
    '<div data-from="' + userId + '" data-id="' + msgId + '" class="message-row ' + animationIn + ' animated" id="msg-' + totalMessages + '">' +
      '<div class="message-row-inner">' +
        '<div class="portrait-col">' +
          '<img class="character-portrait" id="portrait-' + totalMessages + '" src="' + firstFrame.url + '" alt="" onerror="this.style.display=\'none\'" style="' + (firstFrame.flip ? 'transform:scaleX(-1);' : '') + '" />' +
        '</div>' +
        '<div class="dialogue-box-border">' +
          '<svg class="border-svg" xmlns="http://www.w3.org/2000/svg">' +
            '<polygon id="border-poly-' + totalMessages + '" points="" fill="none" stroke="#555566" stroke-width="2"/>' +
            '<polygon id="border-shine-' + totalMessages + '" points="" fill="none" stroke="#d0d0e0" stroke-width="0.75"/>' +
          '</svg>' +
          '<div class="dialogue-box">' +
            '<div class="text-col-top-gap"></div>' +
            '<div class="name-bar">' +
              '<div class="badges">' + badges + '</div>' +
              '<div class="name" style="color:' + nameColor + ';">' + username + '</div>' +
            '</div>' +
            '<div class="dialogue-box-content">' +
              '<div class="text-col">' +
                '<div class="message-body ' + actionClass + '" id="msg-body-' + totalMessages + '"></div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="dialogue-tail-outer"></div>' +
        '<img class="dialogue-arrow-gif" id="arrow-' + totalMessages + '" src="https://images2.imgbox.com/68/3f/Q6mOixyF_o.gif" style="display:none;" />' +
      '</div>' +
    '</div>';
  var element = $.parseHTML(html);
  function drawBorder(n) {
    var box   = document.querySelector("#msg-" + n + " .dialogue-box");
    var poly  = document.getElementById("border-poly-" + n);
    var shine = document.getElementById("border-shine-" + n);
    if (!box || !poly) return;
    var w = box.offsetWidth, h = box.offsetHeight, c = 12;
    if (!w || !h) return;
    var pts = c+",1 "+(w-c)+",1 "+(w-1)+","+c+" "+(w-1)+","+(h-c)+" "+(w-c)+","+(h-1)+" "+c+","+(h-1)+" 1,"+(h-c)+" 1,"+c;
    poly.setAttribute("points", pts);
    if (shine) shine.setAttribute("points", pts);
  }
  if (addition === "append") {
    if (hideAfter !== 0) {
      $(element).appendTo("#log").delay(hideAfter * 1000).queue(function() {
        $(this).removeClass(animationIn).addClass(animationOut).delay(1000).queue(function() {
          $(this).remove();
        }).dequeue();
      });
    } else { $(element).appendTo("#log"); }
  } else {
    if (hideAfter !== 0) {
      $(element).prependTo("#log").delay(hideAfter * 1000).queue(function() {
        $(this).removeClass(animationIn).addClass(animationOut).delay(1000).queue(function() {
          $(this).remove();
        }).dequeue();
      });
    } else { $(element).prependTo("#log"); }
  }
  setTimeout(function() { drawBorder(totalMessages); }, 50);
  setTimeout(function() { typeWriter('msg-body-' + totalMessages, message + hora, 35, totalMessages); }, 100);
  if (isAnimated) {
    setTimeout(function() { animatePortrait('portrait-' + totalMessages, character.frames, character.fps || 8, character.delay || 1000); }, 100);
  }
  if (messagesLimit > 0 && totalMessages > messagesLimit) removeRow();
}

function animatePortrait(elementId, frames, fps, delay) {
  var el = document.getElementById(elementId);
  if (!el || !frames || frames.length < 2) return;
  var frameDelay = delay || 1000;
  function showFrame(index) {
    if (index >= frames.length) return;
    if (!document.getElementById(elementId)) return;
    el.src = frames[index].url;
    el.style.transform = frames[index].flip ? 'scaleX(-1)' : '';
    if (index + 1 < frames.length) {
      setTimeout(function() { showFrame(index + 1); }, frameDelay);
    }
  }
  setTimeout(function() { showFrame(1); }, frameDelay);
}

function typeWriter(elementId, text, speed, msgNum) {
  var el = document.getElementById(elementId);
  if (!el) return;
  var i = 0, isTag = false, output = '';
  function showArrow() {
    var arrow = document.getElementById('arrow-' + msgNum);
    if (arrow) arrow.style.display = 'block';
  }
  function type() {
    if (i < text.length) {
      if (text.charAt(i) === '<') isTag = true;
      if (isTag) {
        output += text.charAt(i);
        if (text.charAt(i) === '>') isTag = false;
        i++; el.innerHTML = output; type();
      } else {
        output += text.charAt(i);
        el.innerHTML = output; i++;
        // If text is already overflowing show arrow now and stop waiting
        if (el.scrollHeight > el.clientHeight) {
          showArrow();
        }
        setTimeout(type, speed);
      }
    } else {
      showArrow();
    }
  }
  type();
}

function attachEmotes(message) {
  var text = html_encode(message.text);
  var data = message.emotes;
  if (typeof message.attachment !== "undefined")
    if (typeof message.attachment.media !== "undefined")
      if (typeof message.attachment.media.image !== "undefined")
        text = message.text + '<img src="' + message.attachment.media.image.src + '">';
  return text.replace(/([^\s]*)/gi, function(m, key) {
    var result = data.filter(function(e) { return e.name === key; });
    if (typeof result[0] !== "undefined") {
      var url = result[0]["urls"][4];
      if (provider === "twitch") return '<img width="22" class="emote" src="' + url + '"/>';
      if (typeof result[0].coords === "undefined") result[0].coords = { x: 0, y: 0 };
      var x = parseInt(result[0].coords.x), y = parseInt(result[0].coords.y);
      var width = "auto", height = "auto";
      if (provider === "mixer") {
        if (result[0].coords.width)  width  = result[0].coords.width  + "px";
        if (result[0].coords.height) height = result[0].coords.height + "px";
      }
      return '<div class="emote" style="width:' + width + ';height:' + height + ';display:inline-block;background-image:url(' + url + ');background-position:-' + x + 'px -' + y + 'px;"></div>';
    }
    return key;
  });
}

function html_encode(str) {
  var el = document.createElement("textarea");
  el.innerHTML = str;
  return el.value;
}

function removeRow() {
  if (!$(removeSelector).length) return;
  if (animationOut !== "none" || !$(removeSelector).hasClass(animationOut)) {
    if (hideAfter !== 0) { $(removeSelector).dequeue(); }
    else { $(removeSelector).addClass(animationOut).delay(1000).queue(function() { $(this).remove().dequeue(); }); }
    return;
  }
  $(removeSelector).animate({ height: 0, opacity: 0 }, "slow", function() { $(removeSelector).remove(); });
}
