"use strict";

const questionDiv = document.querySelector(".question");
const optionsUl = document.querySelector(".options");
const scoreDiv = document.querySelector(".score");
const answerDiv = document.querySelector(".answer");
const noOfQuestions = document.querySelector(".no-of-questions");
const nextBtn = document.querySelector(".nxt");
const container = document.querySelector(".container");
const chapterSelect = document.getElementById("chapter-select");
const resetButton01 = document.querySelector(".reset-btn-01");
const levelAndChapter = document.querySelector(".level-chapter-no");

// N5/N4 Vocab Array
const arrOfN5N4 = {
  lesson26: [
    {
      question: "Which one means 'be in good condition'?",
      options: ["suteki", "benri", "choushi ga ii", "yakusoku"].sort(
        () => Math.random() - 0.5
      ),
      answer: "choushi ga ii",
    },
    {
      question: "Which one means 'be late'?",
      options: ["san-kasuru", "gozen", "shusseki", "chikokusuru"].sort(
        () => Math.random() - 0.5
      ),
      answer: "chikokusuru",
    },
    {
      question: "Which one means 'inconvenient'?",
      options: ["fuben", "benri", "yakusoku", "kawaru"].sort(
        () => Math.random() - 0.5
      ),
      answer: "fuben",
    },
    {
      question: "Which one means 'garbage'?",
      options: ["gomi", "kimochi", "yakusoku", "benri"].sort(
        () => Math.random() - 0.5
      ),
      answer: "gomi",
    },
    {
      question: "Which one means 'place'?",
      options: ["maniau", "yakusoku", "benri", "basho"].sort(
        () => Math.random() - 0.5
      ),
      answer: "basho",
    },
    {
      question: "Which one means 'feel'?",
      options: ["benri", "yakusoku", "kawaru", "kimochi"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kimochi",
    },
    {
      question: "Which one means 'so much (not used in positive sense)'?",
      options: ["totemo", "kawaru", "itsudemo", "sonnani"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sonnani",
    },
    {
      question: "Which one means 'everywhere'?",
      options: ["basho", "dokodemo", "kaisha", "itsudemo"].sort(
        () => Math.random() - 0.5
      ),
      answer: "dokodemo",
    },
    {
      question: "Which one means 'promise'?",
      options: ["gozen", "shusseki", "yakusoku", "kesseki"].sort(
        () => Math.random() - 0.5
      ),
      answer: "yakusoku",
    },
    {
      question: "Which one means 'anytime'?",
      options: ["tokidoki", "mainichi", "gozen", "itsudemo"].sort(
        () => Math.random() - 0.5
      ),
      answer: "itsudemo",
    },
    {
      question: "Which one means 'attend/participate'?",
      options: ["yakusoku", "kesseki", "maniau", "san-kasuru"].sort(
        () => Math.random() - 0.5
      ),
      answer: "san-kasuru",
    },
    {
      question: "Which one means 'wonderful, lovely'?",
      options: ["yakusoku", "suteki", "maniau", "benri"].sort(
        () => Math.random() - 0.5
      ),
      answer: "suteki",
    },
    {
      question: "Which one means 'company picnic'?",
      options: ["ensoku", "shukudai", "kaisha", "undoukai"].sort(
        () => Math.random() - 0.5
      ),
      answer: "ensoku",
    },
    {
      question: "Which one means 'anything'?",
      options: ["gomi", "dokodemo", "yakusoku", "nandemo"].sort(
        () => Math.random() - 0.5
      ),
      answer: "nandemo",
    },
    {
      question: "Which one means 'dialect'?",
      options: ["hougen", "kaisha", "yakusoku", "benri"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hougen",
    },
    {
      question: "Which one means 'be absent'?",
      options: ["san-kasuru", "yakusoku", "shusseki", "kesseki"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kesseki",
    },
    {
      question: "Which one means 'sports day'?",
      options: ["ensoku", "shukudai", "benri", "undoukai"].sort(
        () => Math.random() - 0.5
      ),
      answer: "undoukai",
    },
    {
      question: "Which one means 'be in bad condition'?",
      options: ["maniau", "gozen", "choushi ga warui", "choushi ga ii"].sort(
        () => Math.random() - 0.5
      ),
      answer: "choushi ga warui",
    },
    {
      question: "Which one means 'convenient'?",
      options: ["suteki", "maniau", "fuben", "benri"].sort(
        () => Math.random() - 0.5
      ),
      answer: "benri",
    },
    {
      question: "Which one means 'be on time'?",
      options: ["yakusoku", "chikokusuru", "kawaru", "maniau"].sort(
        () => Math.random() - 0.5
      ),
      answer: "maniau",
    },
  ],
  lesson27: [
    {
      question: "Which one means 'freely'?",
      options: ["anzen ni", "benri ni", "subayaku", "jiyuu ni"].sort(
        () => Math.random() - 0.5
      ),
      answer: "jiyuu ni",
    },
    {
      question: "Which one means 'worried'?",
      options: ["omoshirona", "benrina", "suteki", "shinpaishina"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shinpaishina",
    },
    {
      question: "Which one means 'only'?",
      options: ["mo", "dake", "mada", "shika"].sort(() => Math.random() - 0.5),
      answer: "shika",
    },
    {
      question: "Which one means 'run'?",
      options: ["kau", "mieru", "tobu", "hashiru"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hashiru",
    },
    {
      question: "Which one means 'build'?",
      options: ["kikoeru", "kau", "tsukeru", "tateru"].sort(
        () => Math.random() - 0.5
      ),
      answer: "tateru",
    },
    {
      question: "Which one means 'open a class'?",
      options: ["dekiru", "hiraku", "tsukeru", "tobu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hiraku",
    },
    {
      question: "Which one means 'after ~'?",
      options: ["go", "mae", "ue", "naka"].sort(() => Math.random() - 0.5),
      answer: "go",
    },
    {
      question: "Which one means 'fly'?",
      options: ["tsukeru", "dekiru", "mieru", "tobu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "tobu",
    },
    {
      question: "Which one means 'be completed'?",
      options: ["tsukeru", "kikoeru", "dekiru", "mieru"].sort(
        () => Math.random() - 0.5
      ),
      answer: "dekiru",
    },
    {
      question: "Which one means 'do-it-yourself class'?",
      options: ["kaigi", "kouen", "undoukai", "kyoushitsu o hiraku"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kyoushitsu o hiraku",
    },
    {
      question: "Which one means 'to keep (a pet)'?",
      options: ["kau", "tateru", "tsukeru", "dekiru"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kau",
    },
    {
      question: "Which one means 'future'?",
      options: ["koukou", "ima", "shourai", "kako"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shourai",
    },
    {
      question: "Which one means 'set up'?",
      options: ["dekiru", "tobu", "tsukeru", "kau"].sort(
        () => Math.random() - 0.5
      ),
      answer: "tsukeru",
    },
    {
      question: "Which one means 'be visible'?",
      options: ["dekiru", "kikoeru", "kuru", "mieru"].sort(
        () => Math.random() - 0.5
      ),
      answer: "mieru",
    },
    {
      question: "Which one means 'be audible'?",
      options: ["dekiru", "mieru", "kikoeru", "kuru"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kikoeru",
    },
  ],
  lesson28: [
    {
      question: "What is the Japanese word for 'to choose'?",
      options: ["erabimasu", "shousetsu", "musuko", "kanrinin"].sort(
        () => Math.random() - 0.5
      ),
      answer: "erabimasu",
    },
    {
      question: "What is the Japanese word for 'enthusiastic'?",
      options: ["nesshin (na)", "bo-nasu", "soreni", "aji"].sort(
        () => Math.random() - 0.5
      ),
      answer: "nesshin (na)",
    },
    {
      question: "What is the Japanese word for 'color'?",
      options: ["iro", "keiken", "dorama", "shibaraku"].sort(
        () => Math.random() - 0.5
      ),
      answer: "iro",
    },
    {
      question: "What is the Japanese word for 'gum'?",
      options: ["gamu", "choudo ii", "shuukan", "musuko"].sort(
        () => Math.random() - 0.5
      ),
      answer: "gamu",
    },
    {
      question: "What is the Japanese word for 'custom'?",
      options: ["shuukan", "musume", "aji", "shousetsuka"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shuukan",
    },
    {
      question: "What is the Japanese word for 'taste'?",
      options: ["aji", "sorede", "shousetsu", "kashu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "aji",
    },
    {
      question: "What is the Japanese word for 'serious'?",
      options: ["majime (na)", "erai", "sorede", "kanrinin"].sort(
        () => Math.random() - 0.5
      ),
      answer: "majime (na)",
    },
    {
      question: "What is the Japanese word for 'to go to and from (school)'?",
      options: ["kayoimasu", "soreni", "iro", "musukosan"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kayoimasu",
    },
    {
      question: "What is the Japanese word for 'experience'?",
      options: ["keiken", "shibaraku", "bo-nasu", "taitei"].sort(
        () => Math.random() - 0.5
      ),
      answer: "keiken",
    },
    {
      question: "What is the Japanese word for 'great, admirable'?",
      options: ["erai", "keiken", "gamu", "shousetsu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "erai",
    },
    {
      question: "What is the Japanese word for 'bonus'?",
      options: ["bo-nasu", "sorede", "iro", "nesshin (na)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "bo-nasu",
    },
    {
      question: "What is the Japanese word for 'novelist'?",
      options: ["shousetsuka", "shousetsu", "kashu", "gamu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shousetsuka",
    },
    {
      question: "What is the Japanese word for 'caretaker'?",
      options: ["kanrinin", "musukosan", "aji", "shousetsu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kanrinin",
    },
    {
      question: "What is the Japanese word for 'drama'?",
      options: ["dorama", "shousetsuka", "musume", "choudo ii"].sort(
        () => Math.random() - 0.5
      ),
      answer: "dorama",
    },
    {
      question: "What is the Japanese word for 'to sell, be sold'?",
      options: ["uremasu", "musumesan", "taitei", "shousetsuka"].sort(
        () => Math.random() - 0.5
      ),
      answer: "uremasu",
    },
    {
      question: "What is the Japanese word for 'shape'?",
      options: ["katachi", "sorede", "majime (na)", "shuukan"].sort(
        () => Math.random() - 0.5
      ),
      answer: "katachi",
    },
    {
      question: "What is the Japanese word for 'singer'?",
      options: ["kashu", "kanrinin", "choudo ii", "keiken"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kashu",
    },
    {
      question: "What is the Japanese word for '(my) son'?",
      options: ["musuko", "musukosan", "musumesan", "musume"].sort(
        () => Math.random() - 0.5
      ),
      answer: "musuko",
    },
    {
      question: "What is the Japanese word for '(my) daughter'?",
      options: ["musume", "musumesan", "musukosan", "shousetsu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "musume",
    },
    {
      question: "What is the Japanese word for 'usually'?",
      options: ["taitei", "shibaraku", "bo-nasu", "erai"].sort(
        () => Math.random() - 0.5
      ),
      answer: "taitei",
    },
    {
      question: "What is the Japanese word for 'just right'?",
      options: ["choudo ii", "musukosan", "shibaraku", "keiken"].sort(
        () => Math.random() - 0.5
      ),
      answer: "choudo ii",
    },
    {
      question: "What is the Japanese word for 'for a while'?",
      options: ["shibaraku", "shuukan", "uremasu", "shousetsu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shibaraku",
    },
    {
      question: "What is the Japanese word for 'moreover'?",
      options: ["soreni", "musuko", "katachi", "bo-nasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "soreni",
    },
    {
      question: "What is the Japanese word for 'so, therefore'?",
      options: ["sorede", "shousetsuka", "nesshin (na)", "shibaraku"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sorede",
    },
    {
      question: "What is the Japanese word for '(someone else's) daughter'?",
      options: ["musumesan", "musume", "musukosan", "shousetsuka"].sort(
        () => Math.random() - 0.5
      ),
      answer: "musumesan",
    },
    {
      question: "What is the Japanese word for 'novel'?",
      options: ["shousetsu", "dorama", "gamu", "shibaraku"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shousetsu",
    },
    {
      question: "What is the Japanese word for '(someone else's) son'?",
      options: ["musukosan", "musuko", "musume", "shousetsu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "musukosan",
    },
    {
      question: "What is the Japanese word for 'popularity'?",
      options: ["ninki", "kanrinin", "shousetsuka", "aji"].sort(
        () => Math.random() - 0.5
      ),
      answer: "ninki",
    },
  ],
  lesson29: [
    {
      question: "What is the Japanese word for 'to fall down'?",
      options: ["taoremasu", "kowaremasu", "fukuro", "hazuremasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "taoremasu",
    },
    {
      question: "What is the Japanese word for 'wallet'?",
      options: ["saifu", "fukuro", "poketto", "komimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "saifu",
    },
    {
      question: "What is the Japanese word for 'bag'?",
      options: ["fukuro", "saifu", "waremasu", "shimarimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "fukuro",
    },
    {
      question: "What is the Japanese word for 'a light goes off'?",
      options: ["kiemasu", "tsukimasu", "fukimasu", "yogoremasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kiemasu",
    },
    {
      question: "What is the Japanese word for 'to tidy up'?",
      options: ["katazukemasu", "torikaemasu", "machigaemasu", "oremasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "katazukemasu",
    },
    {
      question: "What is the Japanese word for 'to drop, lose'?",
      options: ["otoshimasu", "kowaremasu", "taoremasu", "komimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "otoshimasu",
    },
    {
      question: "What is the Japanese word for 'to point'?",
      options: ["sashimasu", "taoremasu", "machigaemasu", "sukimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sashimasu",
    },
    {
      question: "What is the Japanese word for '(a door) closes'?",
      options: ["shimarimasu", "akimasu", "hazuremasu", "uremasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shimarimasu",
    },
    {
      question: "What is the Japanese word for 'glass (material)'?",
      options: ["garasu", "koppu", "ochawan", "tsukimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "garasu",
    },
    {
      question: "What is the Japanese word for '(a chair) breaks'?",
      options: [
        "kowaremasu",
        "waremasu",
        "katazukemasu",
        "kakarimasu (kagi ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "kowaremasu",
    },
    {
      question: "What is the Japanese word for 'lost item'?",
      options: ["wasuremono", "waremasu", "fukimasu", "komimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "wasuremono",
    },
    {
      question: "What is the Japanese word for 'plate'?",
      options: ["osara", "poketto", "ochawan", "eda"].sort(
        () => Math.random() - 0.5
      ),
      answer: "osara",
    },
    {
      question: "What is the Japanese word for 'branch'?",
      options: ["eda", "hou", "sashimasu", "komimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "eda",
    },
    {
      question: "What is the Japanese word for 'side (e.g., right side)'?",
      options: ["~gawa", "~hen", "sorede", "osakini douzo"].sort(
        () => Math.random() - 0.5
      ),
      answer: "~gawa",
    },
    {
      question: "What is the Japanese word for 'area'?",
      options: ["~hen", "komimasu", "hazuremasu", "waremasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "~hen",
    },
    {
      question: "What is the Japanese word for 'to be locked'?",
      options: [
        "kakarimasu (kagi ga)",
        "torikaemasu",
        "fukimasu",
        "akimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "kakarimasu (kagi ga)",
    },
    {
      question: "What is the Japanese word for '(a car) stops'?",
      options: ["tomarimasu", "oremasu", "komimasu", "machigaemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "tomarimasu",
    },
    {
      question: "What is the Japanese word for 'clock hand'?",
      options: ["hari", "hou", "eda", "garasu"].sort(() => Math.random() - 0.5),
      answer: "hari",
    },
    {
      question: "What is the Japanese word for 'to wipe'?",
      options: ["fukimasu", "sukimasu", "komimasu", "otoshimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "fukimasu",
    },
    {
      question: "What is the Japanese word for 'this neighborhood'?",
      options: ["kono hen", "hou", "eda", "~gawa"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kono hen",
    },
    {
      question: "What is the Japanese word for 'after you / go ahead'?",
      options: ["osakini douzo", "torikaemasu", "sashimasu", "waremasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "osakini douzo",
    },
    {
      question: "What is the Japanese word for '(a tree) breaks/snaps'?",
      options: ["oremasu", "kowaremasu", "waremasu", "yaburemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "oremasu",
    },
    {
      question: "What is the Japanese word for '(paper) tears'?",
      options: ["yaburemasu", "oremasu", "waremasu", "komimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "yaburemasu",
    },
    {
      question: "What is the Japanese word for 'to exchange'?",
      options: ["torikaemasu", "otoshimasu", "fukimasu", "katazukemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "torikaemasu",
    },
    {
      question: "What is the Japanese word for '(a pocket) is attached'?",
      options: [
        "tsukimasu (poketto ga)",
        "hazuremasu",
        "waremasu",
        "kakarimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "tsukimasu (poketto ga)",
    },
    {
      question: "What is the Japanese word for 'to get dirty'?",
      options: ["yogoremasu", "otoshimasu", "machigaemasu", "hazuremasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "yogoremasu",
    },
    {
      question: "What is the Japanese word for '(a light) comes on'?",
      options: ["tsukimasu", "akimasu", "shimarimasu", "machigaemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "tsukimasu",
    },
  ],
  lesson30: [
    {
      question: "What is the Japanese word for 'to hang'?",
      options: ["kakemasu", "kimemasu", "shimaimasu", "kazarimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kakemasu",
    },
    {
      question: "What is the Japanese word for 'vase'?",
      options: ["kabin", "hikidashi", "rouka", "ningyou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kabin",
    },
    {
      question: "What is the Japanese word for 'still'?",
      options: ["mada", "mannaka", "mawari", "harimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "mada",
    },
    {
      question: "What is the Japanese word for 'guidebook'?",
      options: ["annaisho", "oshirase", "kabe", "kouban"].sort(
        () => Math.random() - 0.5
      ),
      answer: "annaisho",
    },
    {
      question: "What is the Japanese word for 'to return, put back'?",
      options: [
        "modoshimasu",
        "kazarimasu",
        "fukushuu shimasu",
        "yoshu shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "modoshimasu",
    },
    {
      question: "What is the Japanese word for 'dream'?",
      options: ["yume", "moto no tokoro", "kaichuu dentou", "sumi"].sort(
        () => Math.random() - 0.5
      ),
      answer: "yume",
    },
    {
      question: "What is the Japanese word for 'to put together, summarize'?",
      options: ["matomemasu", "katazukemasu", "narabemasu", "shimemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "matomemasu",
    },
    {
      question: "What is the Japanese word for 'to live'?",
      options: [
        "seikatsu shimasu",
        "fukushuu shimasu",
        "yoshu shimasu",
        "kimemasu",
      ].sort(() => Math.random() - 0.5),
      answer: "seikatsu shimasu",
    },
    {
      question: "What is the Japanese word for 'class, lesson'?",
      options: ["jugyou", "oshirase", "harimasu", "gomibako"].sort(
        () => Math.random() - 0.5
      ),
      answer: "jugyou",
    },
    {
      question: "What is the Japanese word for 'center'?",
      options: ["mannaka", "mawari", "sumi", "yotei"].sort(
        () => Math.random() - 0.5
      ),
      answer: "mannaka",
    },
    {
      question: "What is the Japanese word for 'flashlight'?",
      options: [
        "kaichuu dentou",
        "hijou bukuro",
        "me ga samemasu",
        "ningyou",
      ].sort(() => Math.random() - 0.5),
      answer: "kaichuu dentou",
    },
    {
      question: "What is the Japanese word for 'emergency bag'?",
      options: ["hijou bukuro", "hijouji", "kaichuu dentou", "sumi"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hijou bukuro",
    },
    {
      question: "What is the Japanese word for 'to decorate'?",
      options: [
        "kazarimasu",
        "narabemasu",
        "modoshimasu",
        "yoshu shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "kazarimasu",
    },
    {
      question: "What is the Japanese word for 'to tidy up'?",
      options: ["katazukemasu", "matomemasu", "shimaimasu", "kimemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "katazukemasu",
    },
    {
      question: "What is the Japanese word for 'schedule, plan'?",
      options: ["yotei", "oshirase", "jugyou", "kouban"].sort(
        () => Math.random() - 0.5
      ),
      answer: "yotei",
    },
    {
      question: "What is the Japanese word for 'notice'?",
      options: ["oshirase", "annaisho", "jugyou", "yume"].sort(
        () => Math.random() - 0.5
      ),
      answer: "oshirase",
    },
    {
      question: "What is the Japanese word for 'doll'?",
      options: ["ningyou", "kabin", "hikidashi", "kaichuu dentou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "ningyou",
    },
    {
      question: "What is the Japanese word for 'to plant'?",
      options: ["uemasu", "narabemasu", "modoshimasu", "harimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "uemasu",
    },
    {
      question: "What is the Japanese word for 'emergency time'?",
      options: ["hijouji", "hijou bukuro", "yume", "kaichuu dentou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hijouji",
    },
    {
      question: "What is the Japanese word for 'to wake up'?",
      options: [
        "me ga samemasu",
        "kimemasu",
        "shimemasu",
        "moto no tokoro",
      ].sort(() => Math.random() - 0.5),
      answer: "me ga samemasu",
    },
    {
      question: "What is the Japanese word for 'to decide'?",
      options: [
        "kimemasu",
        "yoshu shimasu",
        "modoshimasu",
        "katazukemasu",
      ].sort(() => Math.random() - 0.5),
      answer: "kimemasu",
    },
    {
      question: "What is the Japanese word for 'police box'?",
      options: ["kouban", "kabe", "oshirase", "mannaka"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kouban",
    },
    {
      question: "What is the Japanese word for 'unpleasant'?",
      options: ["iya (na)", "me ga samemasu", "kaichuu dentou", "jugyou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "iya (na)",
    },
    {
      question: "What is the Japanese word for 'trash can'?",
      options: ["gomibako", "rouka", "hikidashi", "oshirase"].sort(
        () => Math.random() - 0.5
      ),
      answer: "gomibako",
    },
    {
      question: "What is the Japanese word for 'drawer'?",
      options: ["hikidashi", "kabin", "mawari", "mannaka"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hikidashi",
    },
    {
      question: "What is the Japanese word for 'around'?",
      options: ["mawari", "mannaka", "sumi", "moto no tokoro"].sort(
        () => Math.random() - 0.5
      ),
      answer: "mawari",
    },
    {
      question: "What is the Japanese word for 'original place'?",
      options: ["moto no tokoro", "yotei", "hijouji", "kimemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "moto no tokoro",
    },
    {
      question: "What is the Japanese word for 'corner'?",
      options: ["sumi", "mawari", "moto no tokoro", "mannaka"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sumi",
    },
    {
      question: "What is the Japanese word for 'corridor'?",
      options: ["rouka", "kabe", "hikidashi", "kouban"].sort(
        () => Math.random() - 0.5
      ),
      answer: "rouka",
    },
    {
      question: "What is the Japanese word for 'to review lessons'?",
      options: [
        "fukushuu shimasu",
        "yoshu shimasu",
        "kimemasu",
        "harimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "fukushuu shimasu",
    },
    {
      question: "What is the Japanese word for 'to prepare lessons'?",
      options: [
        "yoshu shimasu",
        "fukushuu shimasu",
        "modoshimasu",
        "kakemasu",
      ].sort(() => Math.random() - 0.5),
      answer: "yoshu shimasu",
    },
    {
      question: "What is the Japanese word for 'to post, put up'?",
      options: ["harimasu", "kakemasu", "kazarimasu", "narabemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "harimasu",
    },
    {
      question: "What is the Japanese word for 'to leave as it is'?",
      options: [
        "sono mama ni shimasu",
        "shimaimasu",
        "kimemasu",
        "mawari",
      ].sort(() => Math.random() - 0.5),
      answer: "sono mama ni shimasu",
    },
    {
      question: "What is the Japanese word for 'to arrange'?",
      options: ["narabemasu", "uemasu", "harimasu", "matomemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "narabemasu",
    },
    {
      question: "What is the Japanese word for 'to put away, store'?",
      options: ["shimaimasu", "katazukemasu", "modoshimasu", "harimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shimaimasu",
    },
    {
      question: "What is the Japanese word for 'wall'?",
      options: ["kabe", "kouban", "jugyou", "hikidashi"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kabe",
    },
  ],
  lesson31: [
    {
      question: "What is the Japanese word for 'to apply'?",
      options: [
        "moushikomi masu",
        "tsuzukemasu",
        "kyuukei shimasu",
        "tenrankai",
      ].sort(() => Math.random() - 0.5),
      answer: "moushikomi masu",
    },
    {
      question: "What is the Japanese word for 'graduate school'?",
      options: ["daigakuin", "eigakan", "honsha", "shiten"].sort(
        () => Math.random() - 0.5
      ),
      answer: "daigakuin",
    },
    {
      question: "What is the Japanese word for 'funeral'?",
      options: ["[o]soushiki", "shiki", "happyou", "kekkonshiki"].sort(
        () => Math.random() - 0.5
      ),
      answer: "[o]soushiki",
    },
    {
      question: "What is the Japanese word for 'to continue'?",
      options: ["tsuzukemasu", "mitsukemasu", "nokorimasu", "ukemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "tsuzukemasu",
    },
    {
      question: "What is the Japanese word for 'to take (a holiday)'?",
      options: [
        "torimasu (yasumi o)",
        "ukemasu (shiken o)",
        "tsuzukemasu",
        "futsuu no",
      ].sort(() => Math.random() - 0.5),
      answer: "torimasu (yasumi o)",
    },
    {
      question: "What is the Japanese word for 'movie theater'?",
      options: ["eigakan", "doubutsuen", "shiten", "mura"].sort(
        () => Math.random() - 0.5
      ),
      answer: "eigakan",
    },
    {
      question: "What is the Japanese word for 'presentation'?",
      options: ["happyou", "tenrankai", "sakubun", "shiki"].sort(
        () => Math.random() - 0.5
      ),
      answer: "happyou",
    },
    {
      question: "What is the Japanese word for 'church'?",
      options: ["kyoukai", "daigakuin", "honsha", "mura"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kyoukai",
    },
    {
      question: "What is the Japanese word for 'entrance exam'?",
      options: [
        "nyuugaku shiken",
        "sotsugyou shiken",
        "tsuki ni ~kai",
        "kekkonshiki",
      ].sort(() => Math.random() - 0.5),
      answer: "nyuugaku shiken",
    },
    {
      question: "What is the Japanese word for 'real, true'?",
      options: ["hontou no", "futsuu no", "mura", "tenrankai"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hontou no",
    },
    {
      question: "What is the Japanese word for 'to find'?",
      options: [
        "mitsukemasu",
        "tsuzukemasu",
        "moushikomi masu",
        "happyou",
      ].sort(() => Math.random() - 0.5),
      answer: "mitsukemasu",
    },
    {
      question: "What is the Japanese word for 'guest, customer'?",
      options: ["okyakusan", "doubutsuen", "eigakan", "mura"].sort(
        () => Math.random() - 0.5
      ),
      answer: "okyakusan",
    },
    {
      question: "What is the Japanese word for 'to take a break'?",
      options: [
        "kyuukei shimasu",
        "tsuzukemasu",
        "moushikomi masu",
        "ukemasu",
      ].sort(() => Math.random() - 0.5),
      answer: "kyuukei shimasu",
    },
    {
      question: "What is the Japanese word for 'consecutive holidays'?",
      options: ["renkyuu", "shiten", "kekkonshiki", "futsuu no"].sort(
        () => Math.random() - 0.5
      ),
      answer: "renkyuu",
    },
    {
      question: "What is the Japanese word for 'to remain, be left'?",
      options: ["nokorimasu", "mitsukemasu", "tsuzukemasu", "happyou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "nokorimasu",
    },
    {
      question: "What is the Japanese word for 'ceremony'?",
      options: ["shiki", "[o]soushiki", "tenrankai", "kekkonshiki"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shiki",
    },
    {
      question: "What is the Japanese word for 'direction of ~'?",
      options: ["~no hou", "~gou", "futsuu no", "mura"].sort(
        () => Math.random() - 0.5
      ),
      answer: "~no hou",
    },
    {
      question: "What is the Japanese word for 'to take (an exam)'?",
      options: [
        "ukemasu (shiken o)",
        "torimasu (yasumi o)",
        "tsuzukemasu",
        "sotsugyou shiken",
      ].sort(() => Math.random() - 0.5),
      answer: "ukemasu (shiken o)",
    },
    {
      question: "What is the Japanese word for 'wedding ceremony'?",
      options: ["kekkonshiki", "[o]soushiki", "shiki", "honsha"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kekkonshiki",
    },
    {
      question: "What is the Japanese word for 'village'?",
      options: ["mura", "shiten", "honsha", "hontou no"].sort(
        () => Math.random() - 0.5
      ),
      answer: "mura",
    },
    {
      question: "What is the Japanese word for 'zoo'?",
      options: ["doubutsuen", "eigakan", "kyoukai", "shiten"].sort(
        () => Math.random() - 0.5
      ),
      answer: "doubutsuen",
    },
    {
      question: "What is the Japanese word for 'head office'?",
      options: ["honsha", "shiten", "mura", "eigakan"].sort(
        () => Math.random() - 0.5
      ),
      answer: "honsha",
    },
    {
      question: "What is the Japanese word for 'branch office'?",
      options: ["shiten", "honsha", "doubutsuen", "mura"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shiten",
    },
    {
      question: "What is the Japanese word for 'number (train, typhoon)'?",
      options: ["~gou", "~no hou", "tsuki ni ~kai", "renkyuu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "~gou",
    },
    {
      question: "What is the Japanese word for 'composition'?",
      options: ["sakubun", "happyou", "shiki", "eigakan"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sakubun",
    },
    {
      question: "What is the Japanese word for 'exhibition'?",
      options: ["tenrankai", "sakubun", "happyou", "shiki"].sort(
        () => Math.random() - 0.5
      ),
      answer: "tenrankai",
    },
    {
      question: "What is the Japanese word for '~times per month'?",
      options: [
        "tsuki ni ~kai",
        "nyuugaku shiken",
        "sotsugyou shiken",
        "~gou",
      ].sort(() => Math.random() - 0.5),
      answer: "tsuki ni ~kai",
    },
    {
      question: "What is the Japanese word for 'ordinary, usual'?",
      options: ["futsuu no", "hontou no", "mura", "renkyuu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "futsuu no",
    },
    {
      question: "What is the Japanese word for 'Picasso'?",
      options: ["pikaso", "eigakan", "happyou", "shiki"].sort(
        () => Math.random() - 0.5
      ),
      answer: "pikaso",
    },
    {
      question: "What is the Japanese word for 'Ueno Park'?",
      options: ["ueno kouen", "doubutsuen", "kyoukai", "mura"].sort(
        () => Math.random() - 0.5
      ),
      answer: "ueno kouen",
    },
    {
      question: "What is the Japanese word for 'graduation exam'?",
      options: [
        "sotsugyou shiken",
        "nyuugaku shiken",
        "ukemasu (shiken o)",
        "happyou",
      ].sort(() => Math.random() - 0.5),
      answer: "sotsugyou shiken",
    },
  ],
  lesson32: [
    {
      question: "What is the Japanese word for 'to catch a cold'?",
      options: [
        "hikimasu (kaze o)",
        "tsuzukimasu (netsu ga)",
        "yamimasu (ame ga)",
        "haremasu",
      ].sort(() => Math.random() - 0.5),
      answer: "hikimasu (kaze o)",
    },
    {
      question: "What is the Japanese word for 'to exercise'?",
      options: [
        "undou shimasu",
        "seikou shimasu",
        "komimasu (michi ga)",
        "enjin",
      ].sort(() => Math.random() - 0.5),
      answer: "undou shimasu",
    },
    {
      question: "What is the Japanese word for 'moon'?",
      options: ["tsuki", "taiyou", "hoshi", "sora"].sort(
        () => Math.random() - 0.5
      ),
      answer: "tsuki",
    },
    {
      question: "What is the Japanese word for 'injury (get injured)'?",
      options: [
        "kega (~ o shimasu)",
        "yakedo (~ o shimasu)",
        "muri o shimasu",
        "komimasu (michi ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "kega (~ o shimasu)",
    },
    {
      question: "What is the Japanese word for 'wind'?",
      options: ["kaze", "hoshi", "sora", "tsuki"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kaze",
    },
    {
      question: "What is the Japanese word for 'please don’t overdo it'?",
      options: [
        "muri o shinaide kudasai",
        "yukkuri shimasu",
        "sore wa ikemasen",
        "muri o shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "muri o shinaide kudasai",
    },
    {
      question: "What is the Japanese word for 'sun'?",
      options: ["taiyou", "tsuki", "sora", "hoshi"].sort(
        () => Math.random() - 0.5
      ),
      answer: "taiyou",
    },
    {
      question: "What is the Japanese word for 'to win (a lottery)'?",
      options: [
        "atarimasu (takarakuji ga)",
        "seikou shimasu",
        "undou shimasu",
        "komimasu (michi ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "atarimasu (takarakuji ga)",
    },
    {
      question: "What is the Japanese word for 'horoscope'?",
      options: ["hoshi uranai", "oushiza", "sutoresu", "kenkou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hoshi uranai",
    },
    {
      question: "What is the Japanese word for 'to become cloudy'?",
      options: [
        "kumorimasu",
        "haremasu",
        "yamimasu (ame ga)",
        "sukimasu (michi ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "kumorimasu",
    },
    {
      question: "What is the Japanese word for 'noisy'?",
      options: ["urusai", "okashii", "hiyashimasu", "souda"].sort(
        () => Math.random() - 0.5
      ),
      answer: "urusai",
    },
    {
      question: "What is the Japanese word for 'Taurus'?",
      options: ["oushiza", "hoshi uranai", "taiyou", "kenkou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "oushiza",
    },
    {
      question: "What is the Japanese word for 'to succeed'?",
      options: [
        "seikou shimasu",
        "undou shimasu",
        "komimasu (michi ga)",
        "yamimasu (ame ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "seikou shimasu",
    },
    {
      question: "What is the Japanese word for 'east'?",
      options: ["higashi", "nishi", "kita", "minami"].sort(
        () => Math.random() - 0.5
      ),
      answer: "higashi",
    },
    {
      question: "What is the Japanese word for 'water supply'?",
      options: ["suidou", "enjin", "sutoresu", "seki (~ ga demasu)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "suidou",
    },
    {
      question: "What is the Japanese word for 'to pass (an exam)'?",
      options: [
        "goukaku shimasu (shiken ni)",
        "shippai shimasu (shiken ni)",
        "tsuzukimasu (netsu ga)",
        "hikimasu (kaze o)",
      ].sort(() => Math.random() - 0.5),
      answer: "goukaku shimasu (shiken ni)",
    },
    {
      question: "What is the Japanese word for 'tonight'?",
      options: ["konya", "yuugata", "osoku", "sore wa ikemasen"].sort(
        () => Math.random() - 0.5
      ),
      answer: "konya",
    },
    {
      question: "What is the Japanese word for 'to take it easy'?",
      options: [
        "yukkuri shimasu",
        "muri o shinasai",
        "souda",
        "hiyashimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "yukkuri shimasu",
    },
    {
      question: "What is the Japanese word for 'overworking'?",
      options: ["hatarakisugi", "sutoresu", "muri o shimasu", "souda"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hatarakisugi",
    },
    {
      question: "What is the Japanese word for 'to recover or be fixed'?",
      options: [
        "naorimasu (byouki ga / koshou ga)",
        "yamimasu (ame ga)",
        "haremasu",
        "okashii",
      ].sort(() => Math.random() - 0.5),
      answer: "naorimasu (byouki ga / koshou ga)",
    },
  ],
  lesson33: [
    {
      question: "What is the Japanese word for 'to throw'?",
      options: ["nagemasu", "nigemasu", "sagemasu", "tsutaemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "nagemasu",
    },
    {
      question: "What is the Japanese word for 'in use'?",
      options: ["shiyou chuu", "eigyou chuu", "shiyou kinshi", "muryou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shiyou chuu",
    },
    {
      question: "What is the Japanese word for 'free of charge'?",
      options: ["muryou", "dame (na)", "eigyou chuu", "kisoku"].sort(
        () => Math.random() - 0.5
      ),
      answer: "muryou",
    },
    {
      question: "What is the Japanese word for 'emergency exit'?",
      options: ["hijou guchi", "iriguchi", "deguchi", "seki"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hijou guchi",
    },
    {
      question: "What is the Japanese word for 'to change clothes'?",
      options: ["kigaemasu", "tatamimasu", "tsutaemasu", "chuui shimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kigaemasu",
    },
    {
      question: "What is the Japanese word for 'not allowed / no good'?",
      options: ["dame (na)", "chuui shimasu", "manaa", "seki"].sort(
        () => Math.random() - 0.5
      ),
      answer: "dame (na)",
    },
    {
      question: "What is the Japanese word for 'No Entry'?",
      options: [
        "tachiiri kinshi",
        "shiyou kinshi",
        "eigyou chuu",
        "honjitsu kyuugyou",
      ].sort(() => Math.random() - 0.5),
      answer: "tachiiri kinshi",
    },
    {
      question: "What is the Japanese word for 'to raise'?",
      options: ["agemasu", "sagemasu", "mamorimasu", "nagemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "agemasu",
    },
    {
      question: "What is the Japanese word for 'to obey or follow'?",
      options: ["mamorimasu", "tsutaemasu", "kigaemasu", "sawagimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "mamorimasu",
    },
    {
      question: "What is the Japanese word for 'to give up'?",
      options: [
        "akiramemasu",
        "nagemasu",
        "tsutaemasu",
        "hazushimasu (seki o)",
      ].sort(() => Math.random() - 0.5),
      answer: "akiramemasu",
    },
    {
      question: "What is the Japanese word for 'entrance'?",
      options: ["iriguchi", "deguchi", "hijou guchi", "shiyou chuu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "iriguchi",
    },
    {
      question: "What is the Japanese word for 'washing machine'?",
      options: ["sentakuki", "booru", "maaku", "seki"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sentakuki",
    },
    {
      question: "What is the Japanese word for 'manners'?",
      options: ["manaa", "ruuru", "kisoku", "maaku"].sort(
        () => Math.random() - 0.5
      ),
      answer: "manaa",
    },
    {
      question: "What is the Japanese word for 'rules / regulations'?",
      options: ["kisoku", "manaa", "shiyou kinshi", "ruuru"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kisoku",
    },
    {
      question: "What is the Japanese word for 'to fold'?",
      options: [
        "tatamimasu",
        "kigaemasu",
        "hazushimasu (seki o)",
        "chuui shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "tatamimasu",
    },
    {
      question: "What is the Japanese word for 'to make noise'?",
      options: ["sawagimasu", "nagemasu", "nigemasu", "dame (na)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sawagimasu",
    },
    {
      question: "What is the Japanese word for 'open for business'?",
      options: [
        "eigyou chuu",
        "honjitsu kyuugyou",
        "shiyou chuu",
        "maaku",
      ].sort(() => Math.random() - 0.5),
      answer: "eigyou chuu",
    },
    {
      question: "What is the Japanese word for 'seat'?",
      options: ["seki", "booru", "maaku", "nagemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "seki",
    },
    {
      question: "What is the Japanese word for 'mark / symbol'?",
      options: ["maaku", "booru", "ruuru", "kigaemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "maaku",
    },
    {
      question: "What is the Japanese word for 'Do not use'?",
      options: [
        "shiyou kinshi",
        "shiyou chuu",
        "tachiiri kinshi",
        "honjitsu kyuugyou",
      ].sort(() => Math.random() - 0.5),
      answer: "shiyou kinshi",
    },
    {
      question: "What is the Japanese word for 'exit'?",
      options: ["deguchi", "iriguchi", "hijou guchi", "shiyou kinshi"].sort(
        () => Math.random() - 0.5
      ),
      answer: "deguchi",
    },
    {
      question: "What is the Japanese word for 'to leave one’s seat'?",
      options: [
        "hazushimasu (seki o)",
        "kigaemasu",
        "tsutaemasu",
        "manaa",
      ].sort(() => Math.random() - 0.5),
      answer: "hazushimasu (seki o)",
    },
    {
      question: "What is the Japanese word for 'closed today'?",
      options: [
        "honjitsu kyuugyou",
        "eigyou chuu",
        "shiyou kinshi",
        "shiyou chuu",
      ].sort(() => Math.random() - 0.5),
      answer: "honjitsu kyuugyou",
    },
    {
      question: "What is the Japanese word for 'to run away'?",
      options: [
        "nigemasu",
        "mamorimasu",
        "hazushimasu (seki o)",
        "shiyou kinshi",
      ].sort(() => Math.random() - 0.5),
      answer: "nigemasu",
    },
    {
      question: "What is the Japanese word for 'to warn or advise'?",
      options: ["chuui shimasu", "tsutaemasu", "kigaemasu", "nagemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "chuui shimasu",
    },
    {
      question: "What is the Japanese word for 'ball'?",
      options: ["booru", "maaku", "seki", "nagemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "booru",
    },
    {
      question: "What is the Japanese word for 'to convey (a message)'?",
      options: ["tsutaemasu", "chuui shimasu", "manaa", "tatamimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "tsutaemasu",
    },
    {
      question: "What is the Japanese word for 'to lower'?",
      options: ["sagemasu", "agemasu", "mamorimasu", "nagemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sagemasu",
    },
    {
      question: "What is the Japanese word for 'to use'?",
      options: [
        "riyou shimasu",
        "shiyou chuu",
        "sentakuki",
        "eigyou chuu",
      ].sort(() => Math.random() - 0.5),
      answer: "riyou shimasu",
    },
    {
      question: "What is the Japanese word for 'rule'?",
      options: ["ruuru", "manaa", "kisoku", "maaku"].sort(
        () => Math.random() - 0.5
      ),
      answer: "ruuru",
    },
  ],
  lesson34: [
    {
      question: "What is the Japanese word for 'to be found (a key)'?",
      options: [
        "mitsukarimasu (kagi ga)",
        "kigatsukimasu (wasuremono ni)",
        "tsukemasu (shouyu o)",
        "migakimasu (ha o)",
      ].sort(() => Math.random() - 0.5),
      answer: "mitsukarimasu (kagi ga)",
    },
    {
      question: "What is the Japanese word for 'seatbelt'?",
      options: ["shiitoberuto", "kii", "soosu", "donburi"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shiitoberuto",
    },
    {
      question: "What is the Japanese word for 'to dip (in soy sauce)'?",
      options: [
        "tsukemasu (shouyu o)",
        "orimasu",
        "migakimasu (ha o)",
        "kumitatemasu",
      ].sort(() => Math.random() - 0.5),
      answer: "tsukemasu (shouyu o)",
    },
    {
      question: "What is the Japanese word for 'green tea'?",
      options: ["ocha", "shouyu", "oyu", "soosu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "ocha",
    },
    {
      question: "What is the Japanese word for 'to fold or bend'?",
      options: [
        "orimasu",
        "kumitatemasu",
        "migakimasu (ha o)",
        "tachimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "orimasu",
    },
    {
      question: "What is the Japanese word for 'hot water'?",
      options: ["oyu", "ocha", "kiiro", "shouyu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "oyu",
    },
    {
      question: "What is the Japanese word for 'Bon Festival dance'?",
      options: ["bon odori", "sadou", "donburi", "kagu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "bon odori",
    },
    {
      question: "What is the Japanese word for 'to assemble'?",
      options: ["kumitatemasu", "orimasu", "tachimasu", "nimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kumitatemasu",
    },
    {
      question: "What is the Japanese word for 'brown'?",
      options: ["chairo", "kiiro", "kon", "aka"].sort(
        () => Math.random() - 0.5
      ),
      answer: "chairo",
    },
    {
      question: "What is the Japanese word for 'last night'?",
      options: ["yuube", "sakki", "sadou", "migakimasu (ha o)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "yuube",
    },
    {
      question: "What is the Japanese word for 'to brush (teeth), to polish'?",
      options: [
        "migakimasu (ha o)",
        "orimasu",
        "kumitatemasu",
        "kigatsukimasu (wasuremono ni)",
      ].sort(() => Math.random() - 0.5),
      answer: "migakimasu (ha o)",
    },
    {
      question: "What is the Japanese word for 'manual or instruction book'?",
      options: ["setsumeisho", "yajirushi", "zu", "seki"].sort(
        () => Math.random() - 0.5
      ),
      answer: "setsumeisho",
    },
    {
      question: "What is the Japanese word for 'arrow (symbol)'?",
      options: ["yajirushi", "sen", "kii", "setsumeisho"].sort(
        () => Math.random() - 0.5
      ),
      answer: "yajirushi",
    },
    {
      question:
        "What is the Japanese word for 'to notice (something left behind)'?",
      options: [
        "kigatsukimasu (wasuremono ni)",
        "migakimasu (ha o)",
        "shitsumon shimasu",
        "tsukemasu (shouyu o)",
      ].sort(() => Math.random() - 0.5),
      answer: "kigatsukimasu (wasuremono ni)",
    },
    {
      question: "What is the Japanese word for 'yellow'?",
      options: ["kiiro", "aka", "ao", "shiro"].sort(() => Math.random() - 0.5),
      answer: "kiiro",
    },
    {
      question: "What is the Japanese word for 'furniture'?",
      options: ["kagu", "kii", "zu", "kon"].sort(() => Math.random() - 0.5),
      answer: "kagu",
    },
    {
      question: "What is the Japanese word for 'portion'?",
      options: ["~bun", "~ko", "~guramu", "donburi"].sort(
        () => Math.random() - 0.5
      ),
      answer: "~bun",
    },
    {
      question: "What is the Japanese word for 'tea ceremony'?",
      options: ["sadou", "bon odori", "yuube", "ocha"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sadou",
    },
    {
      question: "What is the Japanese word for 'blue'?",
      options: ["ao", "aka", "kon", "kiiro"].sort(() => Math.random() - 0.5),
      answer: "ao",
    },
    {
      question: "What is the Japanese word for 'soy sauce'?",
      options: ["shouyu", "soosu", "ocha", "oyu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shouyu",
    },
    {
      question: "What is the Japanese word for 'a little while ago'?",
      options: ["sakki", "yuube", "sadou", "donburi"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sakki",
    },
    {
      question: "What is the Japanese word for 'chicken and egg bowl'?",
      options: ["oyako donburi", "donburi", "sadou", "ocha"].sort(
        () => Math.random() - 0.5
      ),
      answer: "oyako donburi",
    },
    {
      question: "What is the Japanese word for 'thick (of large diameter)'?",
      options: ["futoi", "hosoi", "donburi", "zu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "futoi",
    },
    {
      question: "What is the Japanese word for 'sports club'?",
      options: ["supootsu kurabu", "sadou", "donburi", "shiitoberuto"].sort(
        () => Math.random() - 0.5
      ),
      answer: "supootsu kurabu",
    },
    {
      question: "What is the Japanese word for 'white'?",
      options: ["shiro", "kuro", "aka", "kon"].sort(() => Math.random() - 0.5),
      answer: "shiro",
    },
    {
      question: "What is the Japanese word for 'line'?",
      options: ["sen", "yajirushi", "zu", "kii"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sen",
    },
    {
      question: "What is the Japanese word for 'to boil or simmer'?",
      options: ["nimasu", "niemasu", "kumitatemasu", "orimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "nimasu",
    },
    {
      question: "What is the Japanese word for 'to be boiled, to be cooked'?",
      options: ["niemasu", "nimasu", "orimasu", "migakimasu (ha o)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "niemasu",
    },
    {
      question: "What is the Japanese word for 'key'?",
      options: ["kii", "kagi", "shouyu", "donburi"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kii",
    },
  ],
  lesson35: [
    {
      question: "What is the Japanese word for 'to be in trouble'?",
      options: [
        "komarimasu",
        "tsukemasu (maru o)",
        "sorenara",
        "mezurashii",
      ].sort(() => Math.random() - 0.5),
      answer: "komarimasu",
    },
    {
      question: "What is the Japanese word for 'method, way'?",
      options: ["houhou", "sousa", "kikai", "setsubi"].sort(
        () => Math.random() - 0.5
      ),
      answer: "houhou",
    },
    {
      question: "What is the Japanese word for 'to mark (with a circle)'?",
      options: [
        "tsukemasu (maru o)",
        "sakimasu (hana ga)",
        "hiroimasu",
        "kawarimasu (iro ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "tsukemasu (maru o)",
    },
    {
      question: "What is the Japanese word for 'circle'?",
      options: ["maru", "ha", "futoi", "shima"].sort(() => Math.random() - 0.5),
      answer: "maru",
    },
    {
      question: "What is the Japanese word for 'correct'?",
      options: ["tadashii", "mezurashii", "raku (na)", "kikou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "tadashii",
    },
    {
      question: "What is the Japanese word for 'easy, comfortable'?",
      options: ["raku (na)", "tadashii", "komarimasu", "sousa"].sort(
        () => Math.random() - 0.5
      ),
      answer: "raku (na)",
    },
    {
      question: "What is the Japanese word for 'mountain climbing'?",
      options: ["yamanobori", "kaigai", "mura", "hanaji"].sort(
        () => Math.random() - 0.5
      ),
      answer: "yamanobori",
    },
    {
      question: "What is the Japanese word for 'operation (of a machine)'?",
      options: ["sousa", "setsubi", "houhou", "kaaten"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sousa",
    },
    {
      question: "What is the Japanese word for 'leaf'?",
      options: ["ha", "hana", "mura", "minato"].sort(() => Math.random() - 0.5),
      answer: "ha",
    },
    {
      question: "What is the Japanese word for 'to bloom (flowers)'?",
      options: [
        "sakimasu (hana ga)",
        "kawarimasu (iro ga)",
        "tsukemasu (maru o)",
        "hiroimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "sakimasu (hana ga)",
    },
    {
      question: "What is the Japanese word for 'village'?",
      options: ["mura", "shima", "kaigai", "minato"].sort(
        () => Math.random() - 0.5
      ),
      answer: "mura",
    },
    {
      question: "What is the Japanese word for 'to change (color)'?",
      options: [
        "kawarimasu (iro ga)",
        "sakimasu (hana ga)",
        "tsukemasu (maru o)",
        "tadashii",
      ].sort(() => Math.random() - 0.5),
      answer: "kawarimasu (iro ga)",
    },
    {
      question: "What is the Japanese word for 'equipment, facilities'?",
      options: ["setsubi", "sousa", "houhou", "kaaten"].sort(
        () => Math.random() - 0.5
      ),
      answer: "setsubi",
    },
    {
      question: "What is the Japanese word for 'planning meeting'?",
      options: ["yokashikaigi", "kaigai", "kinjo", "yamanobori"].sort(
        () => Math.random() - 0.5
      ),
      answer: "yokashikaigi",
    },
    {
      question: "What is the Japanese word for 'string, cord'?",
      options: ["himo", "futa", "kaaten", "ha"].sort(() => Math.random() - 0.5),
      answer: "himo",
    },
    {
      question: "What is the Japanese word for 'harbor, port'?",
      options: ["minato", "mura", "shima", "kaigai"].sort(
        () => Math.random() - 0.5
      ),
      answer: "minato",
    },
    {
      question: "What is the Japanese word for 'overseas'?",
      options: ["kaigai", "minato", "shima", "kinjo"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kaigai",
    },
    {
      question: "What is the Japanese word for 'rooftop'?",
      options: ["okujou", "mura", "shima", "minato"].sort(
        () => Math.random() - 0.5
      ),
      answer: "okujou",
    },
    {
      question: "What is the Japanese word for 'sneeze'?",
      options: ["kushami", "seki", "hanaji", "hanamizu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kushami",
    },
    {
      question: "What is the Japanese word for 'nosebleed'?",
      options: ["hanaji", "kushami", "hanamizu", "seki"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hanaji",
    },
    {
      question: "What is the Japanese word for 'if so, in that case'?",
      options: [
        "sorenara",
        "komarimasu",
        "tsukemasu (maru o)",
        "kawarimasu (iro ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "sorenara",
    },
    {
      question: "What is the Japanese word for 'island'?",
      options: ["shima", "mura", "minato", "kaigai"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shima",
    },
    {
      question: "What is the Japanese word for 'cover, lid'?",
      options: ["futa", "himo", "kaaten", "ha"].sort(() => Math.random() - 0.5),
      answer: "futa",
    },
    {
      question: "What is the Japanese word for 'nasal discharge'?",
      options: ["hanamizu", "kushami", "hanaji", "seki"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hanamizu",
    },
    {
      question: "What is the Japanese word for 'neighborhood'?",
      options: ["kinjo", "mura", "shima", "kaigai"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kinjo",
    },
    {
      question: "What is the Japanese word for 'cough'?",
      options: ["seki", "kushami", "hanamizu", "hanaji"].sort(
        () => Math.random() - 0.5
      ),
      answer: "seki",
    },
    {
      question: "What is the Japanese word for 'rare, unusual'?",
      options: ["mezurashii", "tadashii", "raku (na)", "komarimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "mezurashii",
    },
    {
      question: "What is the Japanese word for 'curtain'?",
      options: ["kaaten", "futa", "himo", "ha"].sort(() => Math.random() - 0.5),
      answer: "kaaten",
    },
    {
      question: "What is the Japanese word for 'person (polite)'?",
      options: ["kata", "kinjo", "houhou", "sorenara"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kata",
    },
    {
      question: "What is the Japanese word for 'opportunity, chance'?",
      options: ["kikai", "kyoka", "houhou", "kata"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kikai",
    },
    {
      question: "What is the Japanese word for 'permission'?",
      options: ["kyoka", "kikai", "houhou", "kata"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kyoka",
    },
    {
      question: "What is the Japanese word for 'to pick up'?",
      options: [
        "hiroimasu",
        "tsukemasu (maru o)",
        "kawarimasu (iro ga)",
        "komarimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "hiroimasu",
    },
    {
      question: "What is the Japanese word for 'over there, beyond'?",
      options: ["mukou", "kaigai", "minato", "mura"].sort(
        () => Math.random() - 0.5
      ),
      answer: "mukou",
    },
  ],
  lesson36: [
    {
      question: "What is the Japanese word for 'to be delivered (a parcel)'?",
      options: [
        "todokimasu (nimotsu ga)",
        "hakobimasu",
        "uchimasu (waapuro o)",
        "charenji shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "todokimasu (nimotsu ga)",
    },
    {
      question:
        "What is the Japanese word for 'to type (on a word processor)'?",
      options: [
        "uchimasu (waapuro o)",
        "demasu (shiai ni)",
        "todokimasu (nimotsu ga)",
        "naremasu (shuukan ni)",
      ].sort(() => Math.random() - 0.5),
      answer: "uchimasu (waapuro o)",
    },
    {
      question: "What is the Japanese word for 'to carry'?",
      options: [
        "hakobimasu",
        "charenji shimasu",
        "riyoushimasu",
        "todokimasu (nimotsu ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "hakobimasu",
    },
    {
      question: "What is the Japanese word for 'guest, customer'?",
      options: ["okyakusama", "kendou", "tama ni", "kenkou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "okyakusama",
    },
    {
      question:
        "What is the Japanese word for 'absolutely (used with negatives)'?",
      options: ["zettai ni", "kanarazu", "dekiru dake", "jouzu ni"].sort(
        () => Math.random() - 0.5
      ),
      answer: "zettai ni",
    },
    {
      question: "What is the Japanese word for 'rare'?",
      options: ["mezurashii", "kondo", "kendou", "uchimasu (waapuro o)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "mezurashii",
    },
    {
      question: "What is the Japanese word for 'to save money'?",
      options: [
        "chokin shimasu",
        "riyoushimasu",
        "hakobimasu",
        "charenji shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "chokin shimasu",
    },
    {
      question: "What is the Japanese word for 'factory'?",
      options: ["koujou", "norimono", "kendou", "kenkou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "koujou",
    },
    {
      question: "What is the Japanese word for 'vehicle'?",
      options: ["norimono", "koujou", "hakobimasu", "riyoushimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "norimono",
    },
    {
      question: "What is the Japanese word for 'to participate (in a match)'?",
      options: [
        "demasu (shiai ni)",
        "todokimasu (nimotsu ga)",
        "charenji shimasu",
        "uchimasu (waapuro o)",
      ].sort(() => Math.random() - 0.5),
      answer: "demasu (shiai ni)",
    },
    {
      question: "What is the Japanese word for 'health'?",
      options: ["kenkou", "koujou", "tokubetsu (na)", "kendou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kenkou",
    },
    {
      question: "What is the Japanese word for 'special'?",
      options: ["tokubetsu (na)", "mezurashii", "kendou", "kenkou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "tokubetsu (na)",
    },
    {
      question: "What is the Japanese word for 'to get accustomed to'?",
      options: [
        "naremasu (shuukan ni)",
        "sugimasu (shichi ji o)",
        "uchimasu (waapuro o)",
        "chokin shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "naremasu (shuukan ni)",
    },
    {
      question: "What is the Japanese word for 'to pass (7 o'clock)'?",
      options: [
        "sugimasu (shichi ji o)",
        "naremasu (shuukan ni)",
        "todokimasu (nimotsu ga)",
        "chokin shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "sugimasu (shichi ji o)",
    },
    {
      question: "What is the Japanese word for 'hard'?",
      options: ["katai", "yawarakai", "kendou", "kenkou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "katai",
    },
    {
      question: "What is the Japanese word for 'soft'?",
      options: ["yawarakai", "katai", "koujou", "mezurashii"].sort(
        () => Math.random() - 0.5
      ),
      answer: "yawarakai",
    },
    {
      question: "What is the Japanese word for 'kendo'?",
      options: ["kendou", "kenkou", "koujou", "norimono"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kendou",
    },
    {
      question: "What is the Japanese word for 'these days'?",
      options: ["kono goro", "kanarazu", "jouzu ni", "tama ni"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kono goro",
    },
    {
      question: "What is the Japanese word for 'occasionally'?",
      options: ["tama ni", "kono goro", "kanarazu", "zettai ni"].sort(
        () => Math.random() - 0.5
      ),
      answer: "tama ni",
    },
    {
      question: "What is the Japanese word for 'without fail, definitely'?",
      options: ["kanarazu", "zettai ni", "tama ni", "kono goro"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kanarazu",
    },
    {
      question: "What is the Japanese word for 'as much as possible'?",
      options: ["dekiru dake", "kanarazu", "jouzu ni", "zettai ni"].sort(
        () => Math.random() - 0.5
      ),
      answer: "dekiru dake",
    },
    {
      question: "What is the Japanese word for 'well, skillfully'?",
      options: ["jouzu ni", "dekiru dake", "kanarazu", "mezurashii"].sort(
        () => Math.random() - 0.5
      ),
      answer: "jouzu ni",
    },
    {
      question: "What is the Japanese word for 'to challenge'?",
      options: [
        "charenji shimasu",
        "hakobimasu",
        "riyoushimasu",
        "naremasu (shuukan ni)",
      ].sort(() => Math.random() - 0.5),
      answer: "charenji shimasu",
    },
    {
      question: "What is the Japanese word for 'to use'?",
      options: [
        "riyoushimasu",
        "charenji shimasu",
        "uchimasu (waapuro o)",
        "demasu (shiai ni)",
      ].sort(() => Math.random() - 0.5),
      answer: "riyoushimasu",
    },
    {
      question: "What is the Japanese word for 'be doing (honorific)'?",
      options: [
        "shite irasshaimasu",
        "tsukatte irassharun desu ne",
        "charenji shimasu",
        "todokimasu (nimotsu ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "shite irasshaimasu",
    },
    {
      question: "What is the Japanese word for 'you are using (honorific)'?",
      options: [
        "tsukatte irassharun desu ne",
        "shite irasshaimasu",
        "riyoushimasu",
        "charenji shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "tsukatte irassharun desu ne",
    },
    {
      question: "What is the Japanese word for 'electronic ~'?",
      options: ["denshi~", "keitai~", "tokubetsu (na)", "koujou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "denshi~",
    },
    {
      question: "What is the Japanese word for 'portable ~'?",
      options: ["keitai~", "denshi~", "charenji shimasu", "mezurashii"].sort(
        () => Math.random() - 0.5
      ),
      answer: "keitai~",
    },
  ],
  lesson37: [
    {
      question: "What is the Japanese word for 'to scold'?",
      options: ["shikarimasu", "homemasu", "okoshimasu", "tanomimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shikarimasu",
    },
    {
      question: "What is the Japanese word for 'architect'?",
      options: ["kenchikuka", "kagakusha", "keikan", "sekkei shimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kenchikuka",
    },
    {
      question: "What is the Japanese word for 'to steal'?",
      options: [
        "torimasu (torimasu)",
        "kowashimasu",
        "tanomimasu",
        "okonaimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "torimasu (torimasu)",
    },
    {
      question: "What is the Japanese word for 'to translate (written)'?",
      options: [
        "honyaku shimasu",
        "yushutsu shimasu",
        "hakken shimasu",
        "yunyuu shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "honyaku shimasu",
    },
    {
      question: "What is the Japanese word for 'thief, robber'?",
      options: ["dorobou", "keikan", "kagakusha", "kenchikuka"].sort(
        () => Math.random() - 0.5
      ),
      answer: "dorobou",
    },
    {
      question: "What is the Japanese word for 'technology'?",
      options: ["gijutsu", "genryou", "sekkei shimasu", "souon"].sort(
        () => Math.random() - 0.5
      ),
      answer: "gijutsu",
    },
    {
      question:
        "What is the Japanese word for 'to carry out or hold (an event)'?",
      options: [
        "okonaimasu",
        "sekkei shimasu",
        "tanomimasu",
        "chuui shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "okonaimasu",
    },
    {
      question: "What is the Japanese word for 'to use'?",
      options: ["riyou shimasu", "tanomimasu", "sasoimasu", "umetatemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "riyou shimasu",
    },
    {
      question: "What is the Japanese word for 'to discover'?",
      options: [
        "hakken shimasu",
        "honyaku shimasu",
        "hakken shimasu",
        "hatsumei shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "hakken shimasu",
    },
    {
      question: "What is the Japanese word for 'raw materials'?",
      options: ["genryou", "mugi", "kome", "gijutsu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "genryou",
    },
    {
      question: "What is the Japanese word for 'someone'?",
      options: ["dareka", "nanigo", "kome", "yokatta desu ne?"].sort(
        () => Math.random() - 0.5
      ),
      answer: "dareka",
    },
    {
      question: "What is the Japanese word for 'to wake someone up'?",
      options: ["okoshimasu", "homemasu", "sasoimasu", "shikarimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "okoshimasu",
    },
    {
      question: "What is the Japanese word for 'to praise'?",
      options: [
        "homemasu",
        "shikarimasu",
        "chuui shimasu",
        "sekkei shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "homemasu",
    },
    {
      question: "What is the Japanese word for 'comic'?",
      options: ["manga", "souon", "kome", "kagakusha"].sort(
        () => Math.random() - 0.5
      ),
      answer: "manga",
    },
    {
      question: "What is the Japanese word for 'noise'?",
      options: ["souon", "gijutsu", "genryou", "mugi"].sort(
        () => Math.random() - 0.5
      ),
      answer: "souon",
    },
    {
      question: "What is the Japanese word for 'all over the world'?",
      options: ["sekaijuu", "nanigo", "kagakusha", "sekkei shimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sekaijuu",
    },
    {
      question: "What is the Japanese word for 'to invite'?",
      options: ["sasoimasu", "shoutai shimasu", "homemasu", "tanomimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sasoimasu",
    },
    {
      question: "What is the Japanese word for 'rice (uncooked)'?",
      options: ["kome", "mugi", "genryou", "souon"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kome",
    },
    {
      question: "What is the Japanese word for 'to import'?",
      options: [
        "yunyuu shimasu",
        "yushutsu shimasu",
        "riyou shimasu",
        "sekkei shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "yunyuu shimasu",
    },
    {
      question: "What is the Japanese word for 'wheat, barley'?",
      options: ["mugi", "kome", "souon", "gijutsu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "mugi",
    },
    {
      question: "What is the Japanese word for 'to reclaim (land)'?",
      options: [
        "umetatemasu",
        "okonaimasu",
        "sekkei shimasu",
        "tanomimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "umetatemasu",
    },
    {
      question: "What is the Japanese word for 'to design'?",
      options: [
        "sekkei shimasu",
        "okonaimasu",
        "hatsumei shimasu",
        "sasoimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "sekkei shimasu",
    },
    {
      question: "What is the Japanese word for 'to invent'?",
      options: [
        "hatsumei shimasu",
        "sekkei shimasu",
        "umetatemasu",
        "okoshimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "hatsumei shimasu",
    },
    {
      question: "What is the Japanese word for 'to export'?",
      options: [
        "yushutsu shimasu",
        "honyaku shimasu",
        "yunyuu shimasu",
        "sekkei shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "yushutsu shimasu",
    },
    {
      question: "What is the Japanese word for 'to make dirty'?",
      options: [
        "yogoshimasu",
        "kowashimasu",
        "torimasu (torimasu)",
        "okoshimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "yogoshimasu",
    },
    {
      question: "What is the Japanese word for 'That’s good.'?",
      options: [
        "yokatta desu ne.",
        "yokatta desu ne?",
        "dareka",
        "nanigo",
      ].sort(() => Math.random() - 0.5),
      answer: "yokatta desu ne.",
    },
    {
      question: "What is the Japanese word for 'to ask, request'?",
      options: ["tanomimasu", "homemasu", "shikarimasu", "sasoimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "tanomimasu",
    },
    {
      question: "What is the Japanese word for 'to break'?",
      options: [
        "kowashimasu",
        "yogoshimasu",
        "torimasu (torimasu)",
        "sekkei shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "kowashimasu",
    },
  ],
  lesson38: [
    {
      question: "What is the Japanese word for 'to lock'?",
      options: [
        "kakemasu (kagi o)",
        "oshimasu (hanko o)",
        "seiri shimasu",
        "hakobimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "kakemasu (kagi o)",
    },
    {
      question: "What is the Japanese word for 'to resemble'?",
      options: [
        "niteimasu",
        "sodatemasu",
        "kenka shimasu",
        "daisuki (na)",
      ].sort(() => Math.random() - 0.5),
      answer: "niteimasu",
    },
    {
      question: "What is the Japanese word for 'a book titled ~'?",
      options: ["~to iu hon", "~sei", "~ten", "go nensei"].sort(
        () => Math.random() - 0.5
      ),
      answer: "~to iu hon",
    },
    {
      question: "What is the Japanese word for 'Excuse me for going ahead'?",
      options: [
        "osakini (shitsurei shimasu)",
        "a, ikenai.",
        "kichinto",
        "kenkyuushitsu",
      ].sort(() => Math.random() - 0.5),
      answer: "osakini (shitsurei shimasu)",
    },
    {
      question: "What is the Japanese word for 'circular notice'?",
      options: ["kairan", "shorui", "kurusu", "dengen"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kairan",
    },
    {
      question: "What is the Japanese word for 'Oh no! (mistake)'?",
      options: [
        "a, ikenai.",
        "osakini (shitsurei shimasu)",
        "go nensei",
        "kenka shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "a, ikenai.",
    },
    {
      question: "What is the Japanese word for 'mysterious, strange'?",
      options: [
        "fushigi (na)",
        "daisuki (na)",
        "kiteimasu",
        "oshimasu (hanko o)",
      ].sort(() => Math.random() - 0.5),
      answer: "fushigi (na)",
    },
    {
      question: "What is the Japanese word for 'to sort out / put in order'?",
      options: [
        "seiri shimasu",
        "oshimasu (hanko o)",
        "kairan",
        "sanka shimasu (ryokou ni)",
      ].sort(() => Math.random() - 0.5),
      answer: "seiri shimasu",
    },
    {
      question: "What is the Japanese word for 'baby'?",
      options: ["akachan", "chiisana", "ookina", "kurusu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "akachan",
    },
    {
      question: "What is the Japanese word for 'to quarrel'?",
      options: [
        "kenka shimasu",
        "daisuki (na)",
        "kimochi ga warui",
        "chuugakkou",
      ].sort(() => Math.random() - 0.5),
      answer: "kenka shimasu",
    },
    {
      question: "What is the Japanese word for 'junior high school'?",
      options: ["chuugakkou", "shougakkou", "ekimae", "kaigan"].sort(
        () => Math.random() - 0.5
      ),
      answer: "chuugakkou",
    },
    {
      question: "What is the Japanese word for 'power switch'?",
      options: ["dengen", "kairan", "hanko", "kurusu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "dengen",
    },
    {
      question: "What is the Japanese word for 'to be hospitalized'?",
      options: ["nyuuin shimasu", "taiin shimasu", "hakobimasu", "shorui"].sort(
        () => Math.random() - 0.5
      ),
      answer: "nyuuin shimasu",
    },
    {
      question: "What is the Japanese word for 'coast'?",
      options: ["kaigan", "ekimae", "chuugakkou", "kimochi ga warui"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kaigan",
    },
    {
      question: "What is the Japanese word for 'pleasant, comfortable'?",
      options: [
        "kimochi ga ii",
        "kimochi ga warui",
        "daisuki (na)",
        "kenka shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "kimochi ga ii",
    },
    {
      question: "What is the Japanese word for 'to carry'?",
      options: [
        "hakobimasu",
        "kakemasu (kagi o)",
        "sanka shimasu (ryokou ni)",
        "oshimasu (hanko o)",
      ].sort(() => Math.random() - 0.5),
      answer: "hakobimasu",
    },
    {
      question: "What is the Japanese word for 'area in front of station'?",
      options: ["ekimae", "kaigan", "chuugakkou", "kenkyuushitsu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "ekimae",
    },
    {
      question:
        "What is the Japanese word for 'to join, participate (in a trip)'?",
      options: [
        "sanka shimasu (ryokou ni)",
        "hakobimasu",
        "oshimasu (hanko o)",
        "nyuuin shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "sanka shimasu (ryokou ni)",
    },
    {
      question: "What is the Japanese word for 'very fond of, love'?",
      options: [
        "daisuki (na)",
        "kenka shimasu",
        "fushigi (na)",
        "sewa o shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "daisuki (na)",
    },
    {
      question: "What is the Japanese word for 'to turn on (power)'?",
      options: [
        "iremasu (dengen o)",
        "kirimasu (dengen o)",
        "oshimasu (hanko o)",
        "hakobimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "iremasu (dengen o)",
    },
    {
      question: "What is the Japanese word for 'to affix (a seal)'?",
      options: [
        "oshimasu (hanko o)",
        "kakemasu (kagi o)",
        "iremasu (dengen o)",
        "hakobimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "oshimasu (hanko o)",
    },
    {
      question: "What is the Japanese word for 'documents, papers'?",
      options: ["shorui", "kairan", "kurusu", "ekimae"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shorui",
    },
    {
      question: "What is the Japanese word for 'seal (used for signature)'?",
      options: ["hanko", "shorui", "kurusu", "kairan"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hanko",
    },
  ],
  lesson39: [
    {
      question: "What is the Japanese word for 'to answer (a question)'?",
      options: [
        "kotaemasu (shitsumon ni)",
        "toorimasu (michi o)",
        "yakemasu (pan ga)",
        "bikkuri shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "kotaemasu (shitsumon ni)",
    },
    {
      question: "What is the Japanese word for 'to gain weight'?",
      options: ["futorimasu", "yasemasu", "bikkuri shimasu", "hazukashii"].sort(
        () => Math.random() - 0.5
      ),
      answer: "futorimasu",
    },
    {
      question: "What is the Japanese word for 'to sweat'?",
      options: [
        "ase o kakimasu",
        "yakemasu (niku ga)",
        "fukuzatsu (na)",
        "soutai shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "ase o kakimasu",
    },
    {
      question: "What is the Japanese word for 'telephone charge'?",
      options: ["denwa dai", "taoru", "furonto", "jishin"].sort(
        () => Math.random() - 0.5
      ),
      answer: "denwa dai",
    },
    {
      question:
        "What is the Japanese word for 'Thank you for your hard work.'?",
      options: ["otsukaresama deshita", "ukagaimasu", "haikingu", "omiai"].sort(
        () => Math.random() - 0.5
      ),
      answer: "otsukaresama deshita",
    },
    {
      question: "What is the Japanese word for 'complicated'?",
      options: ["fukuzatsu (na)", "jama (na)", "kanashii", "kitanai"].sort(
        () => Math.random() - 0.5
      ),
      answer: "fukuzatsu (na)",
    },
    {
      question: "What is the Japanese word for 'sad'?",
      options: [
        "kanashii",
        "hazukashii",
        "bikkuri shimasu",
        "gakkari shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "kanashii",
    },
    {
      question: "What is the Japanese word for 'to die'?",
      options: [
        "shinimasu",
        "taoremasu (biru ga)",
        "yakemasu (uchi ga)",
        "rikon shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "shinimasu",
    },
    {
      question: "What is the Japanese word for 'fire'?",
      options: ["kaji", "jiko", "jishin", "taifuu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kaji",
    },
    {
      question: "What is the Japanese word for 'to pass (along a street)'?",
      options: [
        "toorimasu (michi o)",
        "kotaemasu (shitsumon ni)",
        "shinimasu",
        "yasemasu",
      ].sort(() => Math.random() - 0.5),
      answer: "toorimasu (michi o)",
    },
    {
      question: "What is the Japanese word for 'earthquake'?",
      options: ["jishin", "jiko", "taifuu", "kaji"].sort(
        () => Math.random() - 0.5
      ),
      answer: "jishin",
    },
    {
      question: "What is the Japanese word for 'front desk'?",
      options: ["furonto", "taoru", "denwa dai", "haikingu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "furonto",
    },
    {
      question: "What is the Japanese word for 'to be surprised'?",
      options: [
        "bikkuri shimasu",
        "gakkari shimasu",
        "hazukashii",
        "shinimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "bikkuri shimasu",
    },
    {
      question: "What is the Japanese word for 'obstructive, in the way'?",
      options: [
        "jama (na)",
        "fukuzatsu (na)",
        "kanashii",
        "yakemasu (uchi ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "jama (na)",
    },
    {
      question: "What is the Japanese word for 'to leave early (work/school)'?",
      options: [
        "soutai shimasu",
        "chikoku shimasu",
        "yasemasu",
        "rikon shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "soutai shimasu",
    },
    {
      question:
        "What is the Japanese word for 'arranged meeting for marriage'?",
      options: ["omiai", "haikingu", "furonto", "ukagaimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "omiai",
    },
    {
      question: "What is the Japanese word for 'to be disappointed'?",
      options: [
        "gakkari shimasu",
        "bikkuri shimasu",
        "hazukashii",
        "taoremasu (biru ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "gakkari shimasu",
    },
    {
      question: "What is the Japanese word for 'I'm coming (humble)'?",
      options: ["ukagaimasu", "otsukaresama deshita", "omiai", "taoru"].sort(
        () => Math.random() - 0.5
      ),
      answer: "ukagaimasu",
    },
    {
      question: "What is the Japanese word for 'to bake (bread)'?",
      options: [
        "yakemasu (pan ga)",
        "yakemasu (uchi ga)",
        "yakemasu (niku ga)",
        "toorimasu (michi o)",
      ].sort(() => Math.random() - 0.5),
      answer: "yakemasu (pan ga)",
    },
    {
      question: "What is the Japanese word for 'to be late'?",
      options: [
        "chikoku shimasu",
        "soutai shimasu",
        "yasemasu",
        "shinimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "chikoku shimasu",
    },
    {
      question: "What is the Japanese word for 'to lose weight'?",
      options: [
        "yasemasu",
        "futorimasu",
        "bikkuri shimasu",
        "soutai shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "yasemasu",
    },
    {
      question: "What is the Japanese word for 'typhoon'?",
      options: ["taifuu", "jishin", "jiko", "yakemasu (uchi ga)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "taifuu",
    },
    {
      question: "What is the Japanese word for 'towel'?",
      options: ["taoru", "ase", "furonto", "goushitsu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "taoru",
    },
    {
      question: "What is the Japanese word for 'to grill (meat)'?",
      options: [
        "yakemasu (niku ga)",
        "yakemasu (pan ga)",
        "yakemasu (uchi ga)",
        "toorimasu (michi o)",
      ].sort(() => Math.random() - 0.5),
      answer: "yakemasu (niku ga)",
    },
    {
      question: "What is the Japanese word for 'ashamed, embarrassed'?",
      options: ["hazukashii", "kanashii", "jama (na)", "gakkari shimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hazukashii",
    },
  ],
  lesson40: [
    {
      question: "What is the Japanese word for 'to measure, weigh'?",
      options: [
        "hakarimasu (hakari masu)",
        "tashikamemasu",
        "ugokashimasu",
        "tsumimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "hakarimasu (hakari masu)",
    },
    {
      question: "What is the Japanese word for 'to confirm, make sure'?",
      options: [
        "tashikamemasu",
        "hakarimasu (hakari masu)",
        "yoimasu",
        "touchaku shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "tashikamemasu",
    },
    {
      question: "What is the Japanese word for 'truth'?",
      options: ["hontou", "machigai", "henji", "you su"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hontou",
    },
    {
      question: "What is the Japanese word for 'reply, answer'?",
      options: ["henji", "moushikomi", "you su", "tokorode"].sort(
        () => Math.random() - 0.5
      ),
      answer: "henji",
    },
    {
      question: "What is the Japanese word for 'criminal'?",
      options: ["hannin", "yoimasu", "henji", "hontou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hannin",
    },
    {
      question: "What is the Japanese word for 'to obtain, get'?",
      options: [
        "te ni iremasu",
        "tsumimasu",
        "tashikamemasu",
        "hakarimasu (hakari masu)",
      ].sort(() => Math.random() - 0.5),
      answer: "te ni iremasu",
    },
    {
      question: "What is the Japanese word for 'application'?",
      options: ["moushikomi", "henji", "machigai", "kontesuto"].sort(
        () => Math.random() - 0.5
      ),
      answer: "moushikomi",
    },
    {
      question: "What is the Japanese word for 'back side'?",
      options: ["ura", "omote", "henji", "moushikomi"].sort(
        () => Math.random() - 0.5
      ),
      answer: "ura",
    },
    {
      question: "What is the Japanese word for 'to move/start (a machine)'?",
      options: [
        "ugokashimasu",
        "tsumimasu",
        "yoimasu",
        "touchaku shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "ugokashimasu",
    },
    {
      question: "What is the Japanese word for 'size'?",
      options: ["ookisa", "omote", "machigai", "hontou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "ookisa",
    },
    {
      question: "What is the Japanese word for 'to gossip'?",
      options: [
        "uwasa shimasu",
        "te ni iremasu",
        "tokorode",
        "tashikamemasu",
      ].sort(() => Math.random() - 0.5),
      answer: "uwasa shimasu",
    },
    {
      question: "What is the Japanese word for 'second party'?",
      options: ["nijikai", "bounenkai", "shinnenkai", "taikai"].sort(
        () => Math.random() - 0.5
      ),
      answer: "nijikai",
    },
    {
      question: "What is the Japanese word for 'defect, wound'?",
      options: ["kizu", "machigai", "hontou", "ura"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kizu",
    },
    {
      question: "What is the Japanese word for 'situation, condition'?",
      options: ["yousu", "henji", "machigai", "kontesuto"].sort(
        () => Math.random() - 0.5
      ),
      answer: "yousu",
    },
    {
      question: "What is the Japanese word for 'to depart'?",
      options: [
        "shuppatsu shimasu",
        "touchaku shimasu",
        "yoimasu",
        "aimasu (saizu ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "shuppatsu shimasu",
    },
    {
      question: "What is the Japanese word for 'to arrive'?",
      options: [
        "touchaku shimasu",
        "shuppatsu shimasu",
        "yoimasu",
        "uwasa shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "touchaku shimasu",
    },
    {
      question: "What is the Japanese word for 'to pile up, load'?",
      options: ["tsumimasu", "ugokashimasu", "yoimasu", "tashikamemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "tsumimasu",
    },
    {
      question: "What is the Japanese word for 'to get drunk'?",
      options: [
        "yoimasu",
        "shuppatsu shimasu",
        "hakarimasu (hakari masu)",
        "tsumimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "yoimasu",
    },
    {
      question: "What is the Japanese word for 'dangerous'?",
      options: ["kiken na", "hitsuyou (na)", "omote", "ura"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kiken na",
    },
    {
      question: "What is the Japanese word for 'necessary'?",
      options: ["hitsuyou (na)", "kiken na", "you su", "henji"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hitsuyou (na)",
    },
  ],
  lesson41: [
    {
      question: "What is the Japanese word for 'a few words'?",
      options: ["hitokoto", "zutsu", "kono aida", "jouhou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hitokoto",
    },
    {
      question: "What is the Japanese word for 'uncle' (plain)?",
      options: ["oji", "oji (san)", "mago", "otaku"].sort(
        () => Math.random() - 0.5
      ),
      answer: "oji",
    },
    {
      question: "What is the Japanese word for 'to give (to someone younger)'?",
      options: ["yarimasu", "agemasu", "kudasaimasu", "itadakimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "yarimasu",
    },
    {
      question: "What is the Japanese word for 'monkey'?",
      options: ["saru", "esa", "doubutsuen", "youchien"].sort(
        () => Math.random() - 0.5
      ),
      answer: "saru",
    },
    {
      question: "What is the Japanese word for 'kindergarten'?",
      options: ["youchien", "doubutsuen", "otaku", "oji"].sort(
        () => Math.random() - 0.5
      ),
      answer: "youchien",
    },
    {
      question: "What is the Japanese word for 'to calculate'?",
      options: ["keisan shimasu", "tasukemasu", "torikaemasu", "yobimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "keisan shimasu",
    },
    {
      question:
        "What is the Japanese word for 'expression of sympathy or gift'?",
      options: ["omimai", "oiwai", "kyoumi", "otoshidama"].sort(
        () => Math.random() - 0.5
      ),
      answer: "omimai",
    },
    {
      question: "What is the Japanese word for 'pronunciation'?",
      options: ["hatsuon", "bunpou", "jouhou", "kono aida"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hatsuon",
    },
    {
      question: "What is the Japanese word for 'to invite or call'?",
      options: [
        "yobimasu",
        "shinsetsu ni shimasu",
        "yarimasu",
        "tasukemasu",
      ].sort(() => Math.random() - 0.5),
      answer: "yobimasu",
    },
    {
      question: "What is the Japanese word for 'gift or celebration'?",
      options: ["oiwai", "otoshidama", "omimai", "kyoumi"].sort(
        () => Math.random() - 0.5
      ),
      answer: "oiwai",
    },
    {
      question: "What is the Japanese word for 'to help or save'?",
      options: ["tasukemasu", "torikaemasu", "itadakimasu", "doubutsuen"].sort(
        () => Math.random() - 0.5
      ),
      answer: "tasukemasu",
    },
    {
      question: "What is the Japanese word for 'interest'?",
      options: ["kyoumi", "jouhou", "bunpou", "oiwai"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kyoumi",
    },
    {
      question: "What is the Japanese word for 'grammar'?",
      options: ["bunpou", "jouhou", "hatsuon", "hitokoto"].sort(
        () => Math.random() - 0.5
      ),
      answer: "bunpou",
    },
    {
      question: "What is the Japanese word for 'toy'?",
      options: ["omocha", "ehon", "ehagaki", "doraibaa"].sort(
        () => Math.random() - 0.5
      ),
      answer: "omocha",
    },
    {
      question: "What is the Japanese word for 'handkerchief'?",
      options: ["hankachi", "kutsushita", "tebukuro", "otaku"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hankachi",
    },
    {
      question: "What is the Japanese word for 'gloves'?",
      options: ["tebukuro", "hankachi", "kutsushita", "oji (san)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "tebukuro",
    },
    {
      question: "What is the Japanese word for 'socks'?",
      options: ["kutsushita", "tebukuro", "hankachi", "mukashibanashi"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kutsushita",
    },
    {
      question: "What is the Japanese word for 'someone else's aunt'?",
      options: ["oba (san)", "oba", "oji (san)", "mago (san)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "oba (san)",
    },
    {
      question: "What is the Japanese word for 'the other day'?",
      options: ["kono aida", "hitokoto", "zutsu", "otaku"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kono aida",
    },
    {
      question: "What is the Japanese word for 'picture book'?",
      options: ["ehon", "ehagaki", "omocha", "doraibaa"].sort(
        () => Math.random() - 0.5
      ),
      answer: "ehon",
    },
    {
      question: "What is the Japanese word for 'each'?",
      options: ["zutsu", "hitokoto", "mukashibanashi", "bunpou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "zutsu",
    },
    {
      question: "What is the Japanese word for 'picture postcard'?",
      options: ["ehagaki", "ehon", "jouhou", "otaku"].sort(
        () => Math.random() - 0.5
      ),
      answer: "ehagaki",
    },
    {
      question:
        "What is the Japanese word for 'someone else's house (polite)'?",
      options: ["otaku", "oji (san)", "oba (san)", "bunpou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "otaku",
    },
    {
      question: "What is the Japanese word for 'old tale or folklore'?",
      options: ["mukashibanashi", "ehon", "ehagaki", "kono aida"].sort(
        () => Math.random() - 0.5
      ),
      answer: "mukashibanashi",
    },
  ],
  lesson42: [
    {
      question: "What is the Japanese word for 'to wrap'?",
      options: ["tsutsumimasu", "warimasu", "mazemasu", "narabimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "tsutsumimasu",
    },
    {
      question: "What is the Japanese word for 'to boil'?",
      options: ["wakashimasu", "mazemasu", "keisan shimasu", "sosogimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "wakashimasu",
    },
    {
      question: "What is the Japanese word for 'bottle opener'?",
      options: ["sennuki", "kankiri", "taionkei", "furoshiki"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sennuki",
    },
    {
      question: "What is the Japanese word for 'can opener'?",
      options: ["kankiri", "sennuki", "yakan", "mikisaa"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kankiri",
    },
    {
      question: "What is the Japanese word for 'gift envelope'?",
      options: ["noshibukuro", "furoshiki", "deeta", "fairu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "noshibukuro",
    },
    {
      question: "What is the Japanese word for 'wrapping cloth'?",
      options: ["furoshiki", "noshibukuro", "kandzume", "ronbun"].sort(
        () => Math.random() - 0.5
      ),
      answer: "furoshiki",
    },
    {
      question: "What is the Japanese word for 'thermometer'?",
      options: ["taionkei", "keisan shimasu", "zairyou", "warimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "taionkei",
    },
    {
      question: "What is the Japanese word for 'materials / ingredients'?",
      options: ["zairyou", "deeta", "ronbun", "tanoshimi"].sort(
        () => Math.random() - 0.5
      ),
      answer: "zairyou",
    },
    {
      question: "What is the Japanese word for 'data'?",
      options: ["deeta", "fairu", "boonasu", "sofu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "deeta",
    },
    {
      question: "What is the Japanese word for 'to break / divide'?",
      options: ["warimasu", "wakashimasu", "tsutsumimasu", "sosogimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "warimasu",
    },
    {
      question: "What is the Japanese word for 'to mix'?",
      options: ["mazemasu", "narabimasu", "warimasu", "hiromemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "mazemasu",
    },
    {
      question: "What is the Japanese word for 'strong / healthy'?",
      options: ["joubu (na)", "tanoshimi", "ronbun", "kandzume"].sort(
        () => Math.random() - 0.5
      ),
      answer: "joubu (na)",
    },
    {
      question: "What is the Japanese word for 'thesis / paper'?",
      options: ["ronbun", "joubu (na)", "mazemasu", "shounin"].sort(
        () => Math.random() - 0.5
      ),
      answer: "ronbun",
    },
    {
      question: "What is the Japanese word for 'enjoyment / expectation'?",
      options: ["tanoshimi", "warimasu", "fairu", "deeta"].sort(
        () => Math.random() - 0.5
      ),
      answer: "tanoshimi",
    },
    {
      question: "What is the Japanese word for 'bonus'?",
      options: ["boonasu", "deeta", "demasu (boonasu ga)", "zairyou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "boonasu",
    },
    {
      question: "What is the Japanese word for 'kettle'?",
      options: ["yakan", "sennuki", "kankiri", "mikisaa"].sort(
        () => Math.random() - 0.5
      ),
      answer: "yakan",
    },
    {
      question: "What is the Japanese word for 'to pour'?",
      options: ["sosogimasu", "mazemasu", "hiromemasu", "narabimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sosogimasu",
    },
    {
      question: "What is the Japanese word for 'witness'?",
      options: ["shounin", "sofu", "sobo", "ronbun"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shounin",
    },
    {
      question: "What is the Japanese word for 'to line up / queue'?",
      options: [
        "narabimasu",
        "mazemasu",
        "tsutsumimasu",
        "keisan shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "narabimasu",
    },
    {
      question: "What is the Japanese word for 'two people'?",
      options: ["futari", "oji", "sobo", "shounin"].sort(
        () => Math.random() - 0.5
      ),
      answer: "futari",
    },
    {
      question: "What is the Japanese word for 'to calculate'?",
      options: ["keisan shimasu", "warimasu", "wakashimasu", "hiromemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "keisan shimasu",
    },
    {
      question: "What is the Japanese word for 'to spread'?",
      options: ["hiromemasu", "sosogimasu", "mazemasu", "tsutsumimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hiromemasu",
    },
  ],
  lesson43: [
    {
      question: "What is the Japanese word for 'to increase (exports)'?",
      options: [
        "fuemasu (yushutsu ga)",
        "herimasu (yushutsu ga)",
        "agarimasu (nedan ga)",
        "nakunarimasu (gasorin ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "fuemasu (yushutsu ga)",
    },
    {
      question: "What is the Japanese word for 'to decrease (exports)'?",
      options: [
        "herimasu (yushutsu ga)",
        "fuemasu (yushutsu ga)",
        "ochimasu (nimotsu ga)",
        "toremasu (botan ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "herimasu (yushutsu ga)",
    },
    {
      question: "What is the Japanese word for 'to fall (price)'?",
      options: [
        "sagarimasu (nedan ga)",
        "agarimasu (nedan ga)",
        "nakunarimasu (gasorin ga)",
        "shiawase (na)",
      ].sort(() => Math.random() - 0.5),
      answer: "sagarimasu (nedan ga)",
    },
    {
      question: "What is the Japanese word for 'to rise (price)'?",
      options: [
        "agarimasu (nedan ga)",
        "sagarimasu (nedan ga)",
        "fuemasu (yushutsu ga)",
        "mazui",
      ].sort(() => Math.random() - 0.5),
      answer: "agarimasu (nedan ga)",
    },
    {
      question: "What is the Japanese word for 'to come off (button)'?",
      options: [
        "toremasu (botan ga)",
        "agarimasu (botan ga)",
        "ochimasu (nimotsu ga)",
        "sagarimasu (nedan ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "toremasu (botan ga)",
    },
    {
      question: "What is the Japanese word for 'to fall down (baggage)'?",
      options: [
        "ochimasu (nimotsu ga)",
        "nakunarimasu (gasorin ga)",
        "toremasu (botan ga)",
        "hen na",
      ].sort(() => Math.random() - 0.5),
      answer: "ochimasu (nimotsu ga)",
    },
    {
      question: "What is the Japanese word for 'to run out (gasoline)'?",
      options: [
        "nakunarimasu (gasorin ga)",
        "ochimasu (nimotsu ga)",
        "mazui",
        "fuemasu (yushutsu ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "nakunarimasu (gasorin ga)",
    },
    {
      question: "What is the Japanese word for 'strange / odd'?",
      options: ["hen na", "shiawase (na)", "joubu (na)", "panfuretto"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hen na",
    },
    {
      question: "What is the Japanese word for 'happy'?",
      options: ["shiawase (na)", "uma i", "hen na", "heikin"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shiawase (na)",
    },
    {
      question: "What is the Japanese word for 'delicious / good at'?",
      options: ["umai", "mazui", "shiawase (na)", "ochimasu (nimotsu ga)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "umai",
    },
    {
      question: "What is the Japanese word for 'boring'?",
      options: ["tsumaranai", "uma i", "panfuretto", "gasorin"].sort(
        () => Math.random() - 0.5
      ),
      answer: "tsumaranai",
    },
    {
      question: "What is the Japanese word for 'bad tasting'?",
      options: ["mazui", "umai", "hen na", "sagarimasu (nedan ga)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "mazui",
    },
    {
      question: "What is the Japanese word for 'gasoline'?",
      options: ["gasorin", "heikin", "shiawase (na)", "ima nimo"].sort(
        () => Math.random() - 0.5
      ),
      answer: "gasorin",
    },
    {
      question: "What is the Japanese word for 'fire'?",
      options: ["hi", "bakuhatsu", "gasorin", "panfuretto"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hi",
    },
    {
      question: "What is the Japanese word for 'explosion'?",
      options: ["bakuhatsu", "hi", "gasorin", "joubu (na)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "bakuhatsu",
    },
    {
      question: "What is the Japanese word for 'strong / durable'?",
      options: ["joubu (na)", "heikin", "uma i", "ochimasu (nimotsu ga)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "joubu (na)",
    },
    {
      question: "What is the Japanese word for 'average'?",
      options: ["heikin", "shuunyuu", "joubu (na)", "tsumaranai"].sort(
        () => Math.random() - 0.5
      ),
      answer: "heikin",
    },
    {
      question: "What is the Japanese word for 'income'?",
      options: ["shuunyuu", "heikin", "bakuhatsu", "hen na"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shuunyuu",
    },
    {
      question: "What is the Japanese word for 'pamphlet'?",
      options: ["panfuretto", "doraibu", "ima nimo", "gasorin"].sort(
        () => Math.random() - 0.5
      ),
      answer: "panfuretto",
    },
    {
      question: "What is the Japanese word for 'drive'?",
      options: [
        "doraibu",
        "panfuretto",
        "fuemasu (yushutsu ga)",
        "joubu (na)",
      ].sort(() => Math.random() - 0.5),
      answer: "doraibu",
    },
    {
      question: "What is the Japanese word for 'at any moment (now)'?",
      options: [
        "ima nimo",
        "gasorin",
        "panfuretto",
        "sagarimasu (nedan ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "ima nimo",
    },
  ],
  lesson44: [
    {
      question: "What is the Japanese word for 'to cry'?",
      options: [
        "nakimasu",
        "waraimasu",
        "suberimasu",
        "kawakimasu (shatsu ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "nakimasu",
    },
    {
      question: "What is the Japanese word for 'to laugh'?",
      options: [
        "waraimasu",
        "nakimasu",
        "nuremasu (shatsu ga)",
        "dou iu ~",
      ].sort(() => Math.random() - 0.5),
      answer: "waraimasu",
    },
    {
      question: "What is the Japanese word for 'to get wet (shirt)'?",
      options: [
        "nuremasu (shatsu ga)",
        "kawakimasu (shatsu ga)",
        "nakimasu",
        "atsui",
      ].sort(() => Math.random() - 0.5),
      answer: "nuremasu (shatsu ga)",
    },
    {
      question: "What is the Japanese word for 'to dry (shirt)'?",
      options: [
        "kawakimasu (shatsu ga)",
        "nuremasu (shatsu ga)",
        "suberimasu",
        "atsui",
      ].sort(() => Math.random() - 0.5),
      answer: "kawakimasu (shatsu ga)",
    },
    {
      question: "What is the Japanese word for 'to slip'?",
      options: ["suberimasu", "waraimasu", "nakimasu", "anzen (na)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "suberimasu",
    },
    {
      question: "What is the Japanese word for '(an accident) happen'?",
      options: ["okimasu (jiko ga)", "nakimasu", "kiken (na)", "dou iu ~"].sort(
        () => Math.random() - 0.5
      ),
      answer: "okimasu (jiko ga)",
    },
    {
      question: "What is the Japanese word for 'to adjust'?",
      options: ["chousetsu shimasu", "anzen (na)", "usui", "ryou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "chousetsu shimasu",
    },
    {
      question: "What is the Japanese word for 'safe'?",
      options: ["anzen (na)", "kiken (na)", "koi", "shokuhin"].sort(
        () => Math.random() - 0.5
      ),
      answer: "anzen (na)",
    },
    {
      question: "What is the Japanese word for 'dangerous'?",
      options: ["kiken (na)", "anzen (na)", "usui", "atsui"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kiken (na)",
    },
    {
      question: "What is the Japanese word for 'strong taste / dark color'?",
      options: ["koi", "usui", "atsui", "dou iu ~"].sort(
        () => Math.random() - 0.5
      ),
      answer: "koi",
    },
    {
      question: "What is the Japanese word for 'weak taste / light color'?",
      options: ["usui", "koi", "anzen (na)", "atsui"].sort(
        () => Math.random() - 0.5
      ),
      answer: "usui",
    },
    {
      question: "What is the Japanese word for 'thick'?",
      options: ["atsui", "usui", "hanbun", "ryou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "atsui",
    },
    {
      question: "What is the Japanese word for 'thin'?",
      options: ["usui", "atsui", "koi", "anzen (na)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "usui",
    },
    {
      question: "What is the Japanese word for 'size'?",
      options: ["ookisa", "ryou", "hanbun", "~bai"].sort(
        () => Math.random() - 0.5
      ),
      answer: "ookisa",
    },
    {
      question: "What is the Japanese word for 'times (multiplier)'?",
      options: ["~bai", "hanbun", "ookisa", "~mitai ni"].sort(
        () => Math.random() - 0.5
      ),
      answer: "~bai",
    },
    {
      question: "What is the Japanese word for 'half'?",
      options: ["hanbun", "~bai", "ookisa", "anzen (na)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hanbun",
    },
    {
      question: "What is the Japanese word for 'food (in general)'?",
      options: ["shokuhin", "ryou", "usui", "dou iu ~"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shokuhin",
    },
    {
      question: "What is the Japanese word for 'quantity'?",
      options: ["ryou", "shokuhin", "ookisa", "anzen (na)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "ryou",
    },
    {
      question: "What is the Japanese expression for 'like ~'?",
      options: ["~mitai ni", "anna ni", "dou iu ~", "anzen (na)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "~mitai ni",
    },
    {
      question:
        "What is the Japanese expression for 'like that (far from both)'?",
      options: ["anna ni", "~mitai ni", "dou iu ~", "anzen (na)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "anna ni",
    },
    {
      question: "What is the Japanese phrase for 'what kind of ~'?",
      options: ["dou iu ~", "anna ni", "~mitai ni", "anzen (na)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "dou iu ~",
    },
    {
      question: "What is the Japanese phrase for 'unlucky / bad luck'?",
      options: ["engi ga warui", "dou iu ~", "anna ni", "usui"].sort(
        () => Math.random() - 0.5
      ),
      answer: "engi ga warui",
    },
  ],
  lesson45: [
    {
      question: "What is the Japanese word for 'to apologize'?",
      options: [
        "ayamarimasu",
        "shinjimasu",
        "aimasu (jiko ni)",
        "chuui shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "ayamarimasu",
    },
    {
      question: "What is the Japanese word for 'to encounter (an accident)'?",
      options: [
        "aimasu (jiko ni)",
        "umaku ikimasu",
        "chuushi",
        "soredemo",
      ].sort(() => Math.random() - 0.5),
      answer: "aimasu (jiko ni)",
    },
    {
      question: "What is the Japanese word for 'to believe / trust'?",
      options: [
        "shinjimasu",
        "ayamarimasu",
        "youi shimasu",
        "yuushou shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "shinjimasu",
    },
    {
      question: "What is the Japanese word for 'to prepare'?",
      options: [
        "youi shimasu",
        "setto shimasu",
        "chuui shimasu",
        "narimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "youi shimasu",
    },
    {
      question: "What is the Japanese word for 'to cancel'?",
      options: ["kyanseru shimasu", "chuushi", "ayamarimasu", "muri ni"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kyanseru shimasu",
    },
    {
      question: "What is the Japanese word for 'to go well'?",
      options: [
        "umaku ikimasu",
        "yuushou shimasu",
        "narimasu",
        "me ga samemasu",
      ].sort(() => Math.random() - 0.5),
      answer: "umaku ikimasu",
    },
    {
      question: "What is the Japanese word for 'warranty card'?",
      options: ["hoshousho", "ryoushuusho", "okurimono", "kakari"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hoshousho",
    },
    {
      question: "What is the Japanese word for 'receipt'?",
      options: ["ryoushuusho", "hoshousho", "okurimono", "chuushi"].sort(
        () => Math.random() - 0.5
      ),
      answer: "ryoushuusho",
    },
    {
      question: "What is the Japanese word for 'gift'?",
      options: ["okurimono", "hoshousho", "machigai denwa", "nayami"].sort(
        () => Math.random() - 0.5
      ),
      answer: "okurimono",
    },
    {
      question: "What is the Japanese word for 'wrong number'?",
      options: ["machigai denwa", "okurimono", "kaitou", "me ga samemasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "machigai denwa",
    },
    {
      question: "What is the Japanese word for 'cancellation'?",
      options: ["chuushi", "chuui shimasu", "kyuu ni", "setto shimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "chuushi",
    },
    {
      question: "What is the Japanese word for 'suddenly'?",
      options: ["kyuu ni", "muri ni", "soredemo", "ayamarimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kyuu ni",
    },
    {
      question: "What is the Japanese word for 'person in charge'?",
      options: ["kakari", "kaitou", "setto shimasu", "umaku ikimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kakari",
    },
    {
      question: "What is the Japanese word for 'to warn or advise'?",
      options: ["chuui shimasu", "ayamarimasu", "narimasu", "shinjimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "chuui shimasu",
    },
    {
      question: "What is the Japanese word for 'forcibly'?",
      options: ["muri ni", "kyuu ni", "setto shimasu", "yuushou shimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "muri ni",
    },
    {
      question: "What is the Japanese phrase for 'Let's finish now.'?",
      options: [
        "kore de owarimashou",
        "soredemo",
        "nayami",
        "me ga samemasu",
      ].sort(() => Math.random() - 0.5),
      answer: "kore de owarimashou",
    },
    {
      question: "What is the Japanese word for 'rank'?",
      options: ["~i", "chuushi", "kaitou", "youi shimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "~i",
    },
    {
      question: "What is the Japanese word for 'to win the championship'?",
      options: [
        "yuushou shimasu",
        "umaku ikimasu",
        "shinjimasu",
        "setto shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "yuushou shimasu",
    },
    {
      question: "What is the Japanese word for 'trouble or worry'?",
      options: ["nayami", "kaitou", "okurimono", "kakari"].sort(
        () => Math.random() - 0.5
      ),
      answer: "nayami",
    },
    {
      question: "What is the Japanese word for 'alarm clock'?",
      options: ["mezamashi dokei", "me ga samemasu", "narimasu", "kaitou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "mezamashi dokei",
    },
    {
      question: "What is the Japanese word for 'to wake up'?",
      options: [
        "me ga samemasu",
        "mezamashi dokei",
        "nayami",
        "shinjimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "me ga samemasu",
    },
    {
      question: "What is the Japanese word for 'answer / reply'?",
      options: ["kaitou", "kakari", "setto shimasu", "ayamarimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kaitou",
    },
    {
      question: "What is the Japanese word for 'to ring / to sound'?",
      options: ["narimasu", "chuui shimasu", "chuushi", "muri ni"].sort(
        () => Math.random() - 0.5
      ),
      answer: "narimasu",
    },
    {
      question: "What is the Japanese word for 'to set (e.g. alarm)'?",
      options: ["setto shimasu", "narimasu", "chuui shimasu", "soredemo"].sort(
        () => Math.random() - 0.5
      ),
      answer: "setto shimasu",
    },
    {
      question: "What is the Japanese word for 'nevertheless'?",
      options: ["soredemo", "kyuu ni", "chuushi", "kakari"].sort(
        () => Math.random() - 0.5
      ),
      answer: "soredemo",
    },
  ],
  lesson46: [
    {
      question: "What is the Japanese word for 'to be delivered (parcel)'?",
      options: [
        "todokimasu (nimotsu ga)",
        "yakemasu (pan ga)",
        "tsuite imasu",
        "yakimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "todokimasu (nimotsu ga)",
    },
    {
      question: "What is the Japanese word for 'to enter (university)'?",
      options: [
        "nyuugaku shimasu (daigaku ni)",
        "sotsugyou shimasu (daigaku o)",
        "yakemasu (niku ga)",
        "mukaimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "nyuugaku shimasu (daigaku ni)",
    },
    {
      question: "What is the Japanese word for 'to graduate (university)'?",
      options: [
        "sotsugyou shimasu (daigaku o)",
        "nyuugaku shimasu (daigaku ni)",
        "todokimasu (nimotsu ga)",
        "yakemasu (pan ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "sotsugyou shimasu (daigaku o)",
    },
    {
      question: "What is the Japanese word for 'to bake / roast / grill'?",
      options: [
        "yakimasu",
        "yakemasu (niku ga)",
        "panfuretto",
        "tsuite imasu",
      ].sort(() => Math.random() - 0.5),
      answer: "yakimasu",
    },
    {
      question: "What is the Japanese word for 'to be baked (bread)'?",
      options: [
        "yakemasu (pan ga)",
        "yakemasu (niku ga)",
        "yakimasu",
        "todokimasu (nimotsu ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "yakemasu (pan ga)",
    },
    {
      question: "What is the Japanese word for 'home delivery service'?",
      options: ["takuhai bin", "gasu renji", "setto", "guai"].sort(
        () => Math.random() - 0.5
      ),
      answer: "takuhai bin",
    },
    {
      question: "What is the Japanese phrase for 'just now (past)'?",
      options: [
        "tatta ima",
        "choudo",
        "tsuite imasu",
        "yakemasu (pan ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "tatta ima",
    },
    {
      question: "What is the Japanese phrase for 'May I speak to you now?'",
      options: [
        "ima ii deshou ka",
        "kore de yoroshii deshou ka",
        "dochira sama de shou ka",
        "tatta ima",
      ].sort(() => Math.random() - 0.5),
      answer: "ima ii deshou ka",
    },
    {
      question: "What is the Japanese word for 'gas stove'?",
      options: ["gasu renji", "panfuretto", "setto", "tsuite imasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "gasu renji",
    },
    {
      question: "What is the Japanese word for 'condition'?",
      options: [
        "guai",
        "yakemasu (niku ga)",
        "gasu renji",
        "yakemasu (pan ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "guai",
    },
    {
      question: "What is the Japanese phrase for 'Who is this, please?'",
      options: [
        "dochira sama de shou ka",
        "ima ii deshou ka",
        "tatta ima",
        "panfuretto",
      ].sort(() => Math.random() - 0.5),
      answer: "dochira sama de shou ka",
    },
    {
      question: "What is the Japanese word for 'to be attached'?",
      options: ["tsuite imasu", "yakemasu (pan ga)", "guai", "mukaimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "tsuite imasu",
    },
    {
      question: "What is the Japanese word for 'remote / separated'?",
      options: [
        "hanareta",
        "tsuite imasu",
        "todokimasu (nimotsu ga)",
        "yakemasu (niku ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "hanareta",
    },
    {
      question: "What is the Japanese word for 'pamphlet'?",
      options: [
        "panfuretto",
        "gasu renji",
        "takuhai bin",
        "yakemasu (pan ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "panfuretto",
    },
    {
      question: "What is the Japanese word for 'setting / setup'?",
      options: ["setto", "yakemasu (niku ga)", "guai", "tsuite imasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "setto",
    },
    {
      question: "What is the Japanese phrase for 'like ~'?",
      options: ["~ no you ni", "~ no tokoro", "dono hen", "panfuretto"].sort(
        () => Math.random() - 0.5
      ),
      answer: "~ no you ni",
    },
    {
      question: "What is the Japanese phrase for 'Is this all right?'",
      options: [
        "kore de yoroshii deshou ka",
        "ima ii deshou ka",
        "dochira sama de shou ka",
        "tatta ima",
      ].sort(() => Math.random() - 0.5),
      answer: "kore de yoroshii deshou ka",
    },
    {
      question: "What is the Japanese word for 'whereabouts'?",
      options: [
        "dono hen",
        "guai",
        "yakemasu (niku ga)",
        "yakemasu (pan ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "dono hen",
    },
    {
      question: "What is the Japanese phrase for 'looking forward to'?",
      options: [
        "tanoshimi ni shite imasu",
        "~ no you ni",
        "yakemasu (pan ga)",
        "todokimasu (nimotsu ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "tanoshimi ni shite imasu",
    },
  ],
  lesson47: [
    {
      question: "What is the Japanese word for 'people gather'?",
      options: [
        "atsumarimasu (hito ga)",
        "wakaremasu (hito ga)",
        "kurabemasu (~ to)",
        "dansei",
      ].sort(() => Math.random() - 0.5),
      answer: "atsumarimasu (hito ga)",
    },
    {
      question: "What is the Japanese word for 'people part / separate'?",
      options: [
        "wakaremasu (hito ga)",
        "atsumarimasu (hito ga)",
        "keshou (wo shimasu)",
        "jikken",
      ].sort(() => Math.random() - 0.5),
      answer: "wakaremasu (hito ga)",
    },
    {
      question: "What is the Japanese word for 'live long'?",
      options: [
        "nagaiki shimasu",
        "aji ga shimasu",
        "nioi ga shimasu",
        "kowai",
      ].sort(() => Math.random() - 0.5),
      answer: "nagaiki shimasu",
    },
    {
      question: "What is the Japanese expression for 'sound / voice is heard'?",
      options: ["oto / koe ga shimasu", "ninki", "deeta", "kowai"].sort(
        () => Math.random() - 0.5
      ),
      answer: "oto / koe ga shimasu",
    },
    {
      question: "What is the Japanese word for 'taste' (is sensed)?",
      options: [
        "aji ga shimasu",
        "nagaiki shimasu",
        "nijimasu",
        "keshou (wo shimasu)",
      ].sort(() => Math.random() - 0.5),
      answer: "aji ga shimasu",
    },
    {
      question: "What is the Japanese word for 'smell' (is sensed)?",
      options: [
        "nioi ga shimasu",
        "aji ga shimasu",
        "atsumarimasu (hito ga)",
        "dansei",
      ].sort(() => Math.random() - 0.5),
      answer: "nioi ga shimasu",
    },
    {
      question: "What is the Japanese word for 'terrible'?",
      options: ["hidoi", "kowai", "jikken", "sansei"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hidoi",
    },
    {
      question: "What is the Japanese word for 'scary'?",
      options: ["kowai", "hidoi", "nioi ga shimasu", "bunpou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kowai",
    },
    {
      question: "What is the Japanese word for 'experiment'?",
      options: ["jikken", "kagaku", "bungaku", "kyuukyuusha"].sort(
        () => Math.random() - 0.5
      ),
      answer: "jikken",
    },
    {
      question: "What is the Japanese word for 'data'?",
      options: [
        "deeta",
        "keshou (wo shimasu)",
        "kurabemasu (~ to)",
        "deeto",
      ].sort(() => Math.random() - 0.5),
      answer: "deeta",
    },
    {
      question: "What is the Japanese word for 'popularity'?",
      options: ["ninki", "deeta", "dansei", "patokaa"].sort(
        () => Math.random() - 0.5
      ),
      answer: "ninki",
    },
    {
      question: "What is the Japanese word for 'science'?",
      options: ["kagaku", "igaku", "bunpou", "keshou (wo shimasu)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kagaku",
    },
    {
      question: "What is the Japanese word for 'medical science'?",
      options: ["igaku", "kagaku", "bungaku", "kurabemasu (~ to)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "igaku",
    },
    {
      question: "What is the Japanese word for 'literature'?",
      options: ["bungaku", "igaku", "kagaku", "dansei"].sort(
        () => Math.random() - 0.5
      ),
      answer: "bungaku",
    },
    {
      question: "What is the Japanese word for 'patrol car'?",
      options: ["patokaa", "kyuukyuusha", "dansei", "ninki"].sort(
        () => Math.random() - 0.5
      ),
      answer: "patokaa",
    },
    {
      question: "What is the Japanese word for 'ambulance'?",
      options: ["kyuukyuusha", "patokaa", "deeta", "sansei"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kyuukyuusha",
    },
    {
      question: "What is the Japanese word for 'approval'?",
      options: ["sansei", "hantai", "dansei", "josei"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sansei",
    },
    {
      question: "What is the Japanese word for 'opposition'?",
      options: ["hantai", "sansei", "jikken", "kagaku"].sort(
        () => Math.random() - 0.5
      ),
      answer: "hantai",
    },
    {
      question: "What is the Japanese word for 'man / male'?",
      options: ["dansei", "josei", "kurabemasu (~ to)", "aji ga shimasu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "dansei",
    },
    {
      question: "What is the Japanese word for 'woman / female'?",
      options: ["josei", "dansei", "hidoi", "bungaku"].sort(
        () => Math.random() - 0.5
      ),
      answer: "josei",
    },
    {
      question: "What is the Japanese phrase meaning 'it seems that ~'?",
      options: [
        "doumo",
        "~ ni yoru to",
        "kurabemasu (~ to)",
        "nioi ga shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "doumo",
    },
    {
      question: "What is the Japanese phrase for 'according to ~'?",
      options: [
        "~ ni yoru to",
        "doumo",
        "kon'yaku shimasu",
        "kurabemasu (~ to)",
      ].sort(() => Math.random() - 0.5),
      answer: "~ ni yoru to",
    },
    {
      question: "What is the Japanese word for 'to get engaged'?",
      options: [
        "kon'yaku shimasu",
        "kurabemasu (~ to)",
        "dansei",
        "bunpou",
      ].sort(() => Math.random() - 0.5),
      answer: "kon'yaku shimasu",
    },
    {
      question: "What is the Japanese word for 'to compare (with ~)'?",
      options: [
        "kurabemasu (~ to)",
        "kon'yaku shimasu",
        "bunpou",
        "nioi ga shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "kurabemasu (~ to)",
    },
    {
      question: "What is the Japanese word for 'makeup (to put on makeup)'?",
      options: [
        "keshou (wo shimasu)",
        "kurabemasu (~ to)",
        "ninki",
        "kagaku",
      ].sort(() => Math.random() - 0.5),
      answer: "keshou (wo shimasu)",
    },
  ],
  lesson48: [
    {
      question: "What is the Japanese word for 'to withdraw (money)'?",
      options: [
        "oroshimasu (okane o)",
        "todokemasu",
        "kawari o shimasu",
        "kyousou shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "oroshimasu (okane o)",
    },
    {
      question: "What is the Japanese word for 'to deliver'?",
      options: [
        "todokemasu",
        "oroshimasu (okane o)",
        "tanoshimi",
        "narimasu (oto/koe ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "todokemasu",
    },
    {
      question: "What is the Japanese word for 'Immigration Bureau'?",
      options: ["nyuukan", "seito", "shokunin", "kantoku"].sort(
        () => Math.random() - 0.5
      ),
      answer: "nyuukan",
    },
    {
      question: "What is the Japanese word for 'pupil / student'?",
      options: ["seito", "nyuukan", "seitotachi", "sakkaa senshu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "seito",
    },
    {
      question: "What is the Japanese word for 'freely'?",
      options: ["jiyuu ni", "sukejuuru", "kyousou shimasu", "sakkaa"].sort(
        () => Math.random() - 0.5
      ),
      answer: "jiyuu ni",
    },
    {
      question: "What is the Japanese word for 'line'?",
      options: ["sen", "juku", "seito", "kantoku"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sen",
    },
    {
      question: "What is the Japanese word for 'cram school'?",
      options: ["juku", "jiyuu ni", "sukejuuru", "sen"].sort(
        () => Math.random() - 0.5
      ),
      answer: "juku",
    },
    {
      question: "What is the Japanese word for 'schedule'?",
      options: ["sukejuuru", "jiyuu ni", "kawari o shimasu", "tanoshimi"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sukejuuru",
    },
    {
      question: "What is the Japanese word for 'next (after that)'?",
      options: ["sono tsugi", "~kan", "seito", "kawari ni"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sono tsugi",
    },
    {
      question: "What is the Japanese word for 'supervisor / director'?",
      options: ["kantoku", "shokunin", "nyuukan", "sukejuuru"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kantoku",
    },
    {
      question: "What is the Japanese expression for 'duration of ~'?",
      options: ["~kan", "sono tsugi", "sen", "juku"].sort(
        () => Math.random() - 0.5
      ),
      answer: "~kan",
    },
    {
      question: "What is the Japanese word for 'enjoyment / pleasure'?",
      options: [
        "tanoshimi",
        "jiyuu ni",
        "oroshimasu (okane o)",
        "seitotachi",
      ].sort(() => Math.random() - 0.5),
      answer: "tanoshimi",
    },
    {
      question: "What is the Japanese expression for 'to substitute'?",
      options: [
        "kawari o shimasu",
        "kawari ni",
        "kyousou shimasu",
        "todokemasu",
      ].sort(() => Math.random() - 0.5),
      answer: "kawari o shimasu",
    },
    {
      question: "What is the Japanese word for 'to compete'?",
      options: [
        "kyousou shimasu",
        "kawari o shimasu",
        "oroshimasu (okane o)",
        "sen",
      ].sort(() => Math.random() - 0.5),
      answer: "kyousou shimasu",
    },
    {
      question: "What is the Japanese word for 'soccer'?",
      options: ["sakkaa", "sakkaa senshu", "shokunin", "tanoshimi"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sakkaa",
    },
    {
      question: "What is the Japanese word for 'soccer player'?",
      options: ["sakkaa senshu", "sakkaa", "seito", "nyuukan"].sort(
        () => Math.random() - 0.5
      ),
      answer: "sakkaa senshu",
    },
    {
      question: "What is the Japanese word for 'craftsman'?",
      options: ["shokunin", "kantoku", "nyuukan", "sukejuuru"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shokunin",
    },
    {
      question: "What is the Japanese phrase for 'sound / voice rings'?",
      options: [
        "narimasu (oto/koe ga)",
        "todokemasu",
        "kyousou shimasu",
        "sen",
      ].sort(() => Math.random() - 0.5),
      answer: "narimasu (oto/koe ga)",
    },
    {
      question: "What is the Japanese word for 'students (plural)'?",
      options: ["seitotachi", "seito", "sakkaa", "kawari ni"].sort(
        () => Math.random() - 0.5
      ),
      answer: "seitotachi",
    },
    {
      question: "What is the Japanese phrase for 'instead of'?",
      options: [
        "kawari ni",
        "kawari o shimasu",
        "tanoshimi",
        "kyousou shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "kawari ni",
    },
  ],
  lesson49: [
    {
      question: "What is the Japanese word for 'to work for (a company)'?",
      options: [
        "tsutomemasu (kaisha ni)",
        "yasumimasu (kaisha o)",
        "kakemasu (isu ni)",
        "sugoshimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "tsutomemasu (kaisha ni)",
    },
    {
      question:
        "What is the Japanese word for 'to take a day off (from work)'?",
      options: [
        "yasumimasu (kaisha o)",
        "tsutomemasu (kaisha ni)",
        "kakemasu (isu ni)",
        "susumimasu (kenkyuu ni)",
      ].sort(() => Math.random() - 0.5),
      answer: "yasumimasu (kaisha o)",
    },
    {
      question: "What is the Japanese word for 'to sit on (a chair)'?",
      options: [
        "kakemasu (isu ni)",
        "sugoshimasu",
        "yorimasu (ginkou ni)",
        "kankei ga arimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "kakemasu (isu ni)",
    },
    {
      question: "What is the Japanese word for 'to spend (time)'?",
      options: [
        "sugoshimasu",
        "yasumimasu (kaisha o)",
        "mezashimasu",
        "shitsurei itashimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "sugoshimasu",
    },
    {
      question: "What is the Japanese word for 'to stop by (at a bank)'?",
      options: [
        "yorimasu (ginkou ni)",
        "tsutomemasu (kaisha ni)",
        "kaijou",
        "ryokan",
      ].sort(() => Math.random() - 0.5),
      answer: "yorimasu (ginkou ni)",
    },
    {
      question: "What is the honorific word for 'to eat / drink'?",
      options: [
        "meshiagarimasu",
        "irasshaimasu",
        "ossahaimasu",
        "nasaimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "meshiagarimasu",
    },
    {
      question: "What is the honorific word for 'to say'?",
      options: [
        "osshaimaasu",
        "goran ni narimasu",
        "gozonji desu",
        "meshiagarimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "osshaimaasu",
    },
    {
      question: "What is the honorific word for 'to do'?",
      options: [
        "nasaimasu",
        "ossahaimasu",
        "meshiagarimasu",
        "goran ni narimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "nasaimasu",
    },
    {
      question: "What is the Japanese word for 'meeting place / venue'?",
      options: ["kaijou", "kouen", "boueki", "basutei"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kaijou",
    },
    {
      question: "What is the Japanese word for 'bus stop'?",
      options: ["basutei", "haizara", "kaijou", "ryokan"].sort(
        () => Math.random() - 0.5
      ),
      answer: "basutei",
    },
    {
      question: "What is the Japanese word for 'trade, commerce'?",
      options: ["boueki", "kouen", "keireki", "igakubu"].sort(
        () => Math.random() - 0.5
      ),
      answer: "boueki",
    },
    {
      question: "What is the Japanese honorific of ～san?",
      options: ["~sama", "~nen ~kumi", "dewa", "enryo naku"].sort(
        () => Math.random() - 0.5
      ),
      answer: "~sama",
    },
    {
      question:
        "What is the Japanese word for 'Excuse me. / May I come in?' (humble)?",
      options: [
        "shitsurei itashimasu",
        "douzo yoroshiku",
        "goran ni narimasu",
        "dewa",
      ].sort(() => Math.random() - 0.5),
      answer: "shitsurei itashimasu",
    },
    {
      question:
        "What is the Japanese word for 'background / personal history'?",
      options: ["keireki", "igakubu", "kaijou", "saibou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "keireki",
    },
    {
      question: "What is the Japanese word for 'faculty of medicine'?",
      options: ["igakubu", "keireki", "kouen", "kaeri ni"].sort(
        () => Math.random() - 0.5
      ),
      answer: "igakubu",
    },
    {
      question: "What is the Japanese word for 'aim for'?",
      options: [
        "mezashimasu",
        "susumimasu (kenkyuu ni)",
        "jushou shimasu",
        "tsutomemasu (kaisha ni)",
      ].sort(() => Math.random() - 0.5),
      answer: "mezashimasu",
    },
    {
      question: "What is the Japanese word for 'go on to (graduate school)'?",
      options: [
        "susumimasu (kenkyuu ni)",
        "mezashimasu",
        "kankei ga arimasu",
        "kaeri ni",
      ].sort(() => Math.random() - 0.5),
      answer: "susumimasu (kenkyuu ni)",
    },
    {
      question: "What is the Japanese word for 'to be awarded'?",
      options: [
        "jushou shimasu",
        "mezashimasu",
        "susumimasu (kenkyuu ni)",
        "boueki",
      ].sort(() => Math.random() - 0.5),
      answer: "jushou shimasu",
    },
    {
      question: "What is the Japanese word for 'lecture'?",
      options: ["kouen", "kaijou", "shitsurei itashimasu", "saibou"].sort(
        () => Math.random() - 0.5
      ),
      answer: "kouen",
    },
    {
      question: "What is the Japanese word for 'cell (biological)'?",
      options: ["saibou", "kouen", "kaijou", "boueki"].sort(
        () => Math.random() - 0.5
      ),
      answer: "saibou",
    },
  ],
  lesson50: [
    {
      question: "What is the humble form of 'go / come'?",
      options: [
        "mairimasu (ikimasu/kimasu)",
        "orimasu (imasu)",
        "itadakimasu (tabemasu/nomimasu)",
        "ukagaimasu (kikimasu/ikimasu)",
      ].sort(() => Math.random() - 0.5),
      answer: "mairimasu (ikimasu/kimasu)",
    },
    {
      question: "What is the humble form of 'be (exist)'?",
      options: [
        "orimasu (imasu)",
        "mairimasu (ikimasu/kimasu)",
        "gozaimasu (arimasu)",
        "watakushi",
      ].sort(() => Math.random() - 0.5),
      answer: "orimasu (imasu)",
    },
    {
      question: "What is the humble form of 'eat / drink'?",
      options: [
        "itadakimasu (tabemasu/nomimasu)",
        "mairimasu (ikimasu/kimasu)",
        "haiken shimasu (mimasu)",
        "kansha shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "itadakimasu (tabemasu/nomimasu)",
    },
    {
      question: "What is the humble form of 'say'?",
      options: [
        "moushimasu (iimasu)",
        "zonjimasu (shirimasu)",
        "watakushi",
        "gozaimasu (arimasu)",
      ].sort(() => Math.random() - 0.5),
      answer: "moushimasu (iimasu)",
    },
    {
      question: "What is the humble form of 'see'?",
      options: [
        "haiken shimasu (mimasu)",
        "itadakimasu (tabemasu/nomimasu)",
        "mairimasu (ikimasu/kimasu)",
        "kanaimasu (yume ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "haiken shimasu (mimasu)",
    },
    {
      question: "What is the humble form of 'know'?",
      options: [
        "zonjimasu (shirimasu)",
        "moushimasu (iimasu)",
        "kanaimasu (yume ga)",
        "watakushi",
      ].sort(() => Math.random() - 0.5),
      answer: "zonjimasu (shirimasu)",
    },
    {
      question: "What is the humble form of 'ask / hear / visit'?",
      options: [
        "ukagaimasu (kikimasu/ikimasu)",
        "orimasu (imasu)",
        "gozaimasu (arimasu)",
        "kanaimasu (yume ga)",
      ].sort(() => Math.random() - 0.5),
      answer: "ukagaimasu (kikimasu/ikimasu)",
    },
    {
      question: "What is the humble form of 'meet'?",
      options: [
        "o me ni kakarimasu (aimasu)",
        "ukagaimasu (kikimasu/ikimasu)",
        "kanaimasu (yume ga)",
        "ouen shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "o me ni kakarimasu (aimasu)",
    },
    {
      question: "What is the polite form of 'be (exist)'?",
      options: [
        "gozaimasu (arimasu)",
        "mairimasu (ikimasu/kimasu)",
        "watakushi",
        "~ de gozaimasu (~ desu)",
      ].sort(() => Math.random() - 0.5),
      answer: "gozaimasu (arimasu)",
    },
    {
      question: "What is the polite equivalent of 'desu'?",
      options: [
        "~ de gozaimasu (~ desu)",
        "gozaimasu (arimasu)",
        "kanaimasu (yume ga)",
        "kansha shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "~ de gozaimasu (~ desu)",
    },
    {
      question: "What is the humble form of 'I'?",
      options: ["watakushi", "watashi", "boku", "moushimasu (iimasu)"].sort(
        () => Math.random() - 0.5
      ),
      answer: "watakushi",
    },
    {
      question: "What is the Japanese phrase for 'first of all'?",
      options: [
        "hajime ni",
        "kansha shimasu",
        "kanaimasu (yume ga)",
        "shoukin",
      ].sort(() => Math.random() - 0.5),
      answer: "hajime ni",
    },
    {
      question: "What is the Japanese word for 'to become tense / be nervous'?",
      options: [
        "kinchou shimasu",
        "housou shimasu",
        "kanaimasu (yume ga)",
        "ikashimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "kinchou shimasu",
    },
    {
      question: "What is the Japanese word for 'to broadcast'?",
      options: [
        "housou shimasu",
        "ouen shimasu",
        "kanaimasu (yume ga)",
        "meiwaku o kakemasu",
      ].sort(() => Math.random() - 0.5),
      answer: "housou shimasu",
    },
    {
      question: "What is the Japanese word for 'prize money'?",
      options: ["shoukin", "kansha shimasu", "ikashimasu", "kirin"].sort(
        () => Math.random() - 0.5
      ),
      answer: "shoukin",
    },
    {
      question: "What is the Japanese word for 'giraffe'?",
      options: [
        "kirin",
        "shoukin",
        "kanaimasu (yume ga)",
        "ukagaimasu (kikimasu/ikimasu)",
      ].sort(() => Math.random() - 0.5),
      answer: "kirin",
    },
    {
      question: "What is the Japanese phrase for '(a dream) be realized'?",
      options: [
        "kanaimasu (yume ga)",
        "ikashimasu",
        "watakushi",
        "ukagaimasu (kikimasu/ikimasu)",
      ].sort(() => Math.random() - 0.5),
      answer: "kanaimasu (yume ga)",
    },
    {
      question: "What is the Japanese word for 'to support'?",
      options: [
        "ouen shimasu",
        "kansha shimasu",
        "kirin",
        "kinchou shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "ouen shimasu",
    },
    {
      question:
        "What is the Japanese phrase for 'from the bottom of one's heart'?",
      options: [
        "kokoro kara",
        "kanaimasu (yume ga)",
        "watakushi",
        "ouen shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "kokoro kara",
    },
    {
      question: "What is the Japanese word for 'to thank / be grateful'?",
      options: [
        "kansha shimasu",
        "ouen shimasu",
        "meiwaku o kakemasu",
        "hajime ni",
      ].sort(() => Math.random() - 0.5),
      answer: "kansha shimasu",
    },
    {
      question:
        "What is the Japanese expression for 'to cause trouble / annoyance'?",
      options: [
        "meiwaku o kakemasu",
        "kanaimasu (yume ga)",
        "ouen shimasu",
        "kansha shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "meiwaku o kakemasu",
    },
    {
      question: "What is the Japanese word for 'to make use of'?",
      options: [
        "ikashimasu",
        "ukagaimasu (kikimasu/ikimasu)",
        "kanaimasu (yume ga)",
        "kinchou shimasu",
      ].sort(() => Math.random() - 0.5),
      answer: "ikashimasu",
    },
  ],
};

let count = sessionStorage.getItem("clickCount") || 0;
count = parseInt(count);
let score = sessionStorage.getItem("currentScore") || 0;
score = parseInt(score);
let answer = document.createElement("p");
let finalScore = document.createElement("p");
let isAnswered = false;
let isCorrect = false;
let userChapterNo = 0;

function displayDisclaimer() {
  // Show only if not shown before
  if (sessionStorage.getItem("disclaimerShown") === "true") {
    return;
  }

  // Create the overlay
  const disclaimerEl = document.createElement("div");
  disclaimerEl.classList.add("disclaimer");
  const message = document.createElement("p");
  const closeBtn = document.createElement("span");
  closeBtn.innerText = "✕";
  closeBtn.classList.add("close-btn");
  closeBtn.onclick = () => {
    disclaimerEl.remove();
    sessionStorage.setItem("disclaimerShown", "true");
  };

  message.appendChild(closeBtn);

  message.append(
    `As of now, only N4 Chapters are available for the Quiz — Kindly enter Chapter Numbers Between 26 to 50
    Happy Learning!`
  );

  disclaimerEl.appendChild(message);
  document.body.append(disclaimerEl);
}

displayDisclaimer();

// User Input
let lessonInput = document.getElementById("n5-chapter");
let applyChapter = document.getElementById("apply-chapter");

// User Selected N5/N4
let selectedLesson = sessionStorage.getItem("selectedLesson") || "lesson26";

const currentLessonNumber = selectedLesson.replace("lesson", "");
levelAndChapter.innerText = `${currentLessonNumber}/50`;

applyChapter.addEventListener("click", () => {
  const n5N4Value = lessonInput.value.trim();

  if (n5N4Value < 26 || n5N4Value > 50) {
    alert("Enter chapter number between 26 to 50!");
    lessonInput.value = "";
  } else {
    if (!n5N4Value) {
      selectedLesson = "lesson26";
    } else {
      selectedLesson = `lesson${n5N4Value}`;
    }

    sessionStorage.setItem("selectedLesson", selectedLesson);

    // Reset counters when switching chapters
    count = 0;
    score = 0;
    sessionStorage.setItem("clickCount", count);
    sessionStorage.setItem("currentScore", score);
    sessionStorage.removeItem("selectedAnswer");
    sessionStorage.removeItem("selectedAnswerDetails");
    sessionStorage.removeItem("isAnswered");

    const chapterNumber = selectedLesson.replace("lesson", "");
    levelAndChapter.innerText = `${chapterNumber}/50`;

    lessonInput.value = "";

    domDisplay();
  }
});

const resetFunction = () => {
  count = 0;
  score = 0;
  isAnswered = false;
  isCorrect = false;

  // Reset sessionStorage
  sessionStorage.setItem("clickCount", count);
  sessionStorage.setItem("currentScore", score);
  sessionStorage.setItem("selectedLesson", "lesson26");
  sessionStorage.removeItem("selectedAnswer");
  sessionStorage.removeItem("selectedAnswerDetails");
  sessionStorage.removeItem("isAnswered");

  // Reset UI
  container.innerHTML = "";

  // Rebind elements
  location.reload();
};

resetButton01.addEventListener("click", resetFunction);

nextBtn.addEventListener("click", () => {
  if (isAnswered) {
    count++;
    sessionStorage.setItem("clickCount", count);

    // CLEAR ELEMENTS
    questionDiv.innerHTML = "";
    optionsUl.innerHTML = "";
    answerDiv.innerHTML = "";
    isAnswered = false;
    isCorrect = false;
    sessionStorage.removeItem("selectedAnswer");
    sessionStorage.removeItem("selectedAnswerDetails");
    sessionStorage.removeItem("isAnswered");

    if (count !== arrOfN5N4[selectedLesson].length) {
      domDisplay();

      if (count == arrOfN5N4[selectedLesson].length - 1) {
        nextBtn.innerText = "Finish";
      }
    } else {
      container.innerHTML = "Questions Completed!";

      finalScore.innerText = `Your Total Score is: ${score} out of ${arrOfN5N4[selectedLesson].length}`;
      container.appendChild(finalScore);

      const resetButton = document.createElement("button");
      resetButton.textContent = "Reset";
      resetButton.className = "reset-btn";

      container.appendChild(resetButton);

      resetButton.addEventListener("click", resetFunction);
    }
  } else {
    alert("Please select the option!");
  }
});

const domDisplay = () => {
  // ✅ Clear old content
  questionDiv.innerHTML = "";
  optionsUl.innerHTML = "";
  answerDiv.innerHTML = "";

  let question = document.createElement("p");
  // NO OF QUESTIONS
  noOfQuestions.innerText = `${count + 1}/${arrOfN5N4[selectedLesson].length}`;
  // NO OF SCORE
  scoreDiv.innerText = `${score}/${arrOfN5N4[selectedLesson].length}`;

  // QUESTION
  question.innerText = arrOfN5N4[selectedLesson][count].question;
  questionDiv.appendChild(question);

  // OPTIONS
  let newOptions = [...arrOfN5N4[selectedLesson][count].options];

  newOptions.forEach((optionText, i) => {
    let li = document.createElement("li");
    li.className = "option";
    li.textContent = optionText;
    li.setAttribute("data-index", i + 1);
    optionsUl.appendChild(li);

    // USER OPTION CLICKED
    li.addEventListener("click", () => {
      answerStore(li);
    });
  });

  // Store Selected Answer
  const answerStore = (li) => {
    const detailsOfSelectedItem = {
      optionNumber: li.getAttribute("data-index"),
      correctAnswerIs: arrOfN5N4[selectedLesson][count].answer,
      userSelectedAnswerIS: li.textContent,
    };

    sessionStorage.setItem(
      "selectedAnswerDetails",
      JSON.stringify(detailsOfSelectedItem)
    );
    answerSelected(li, detailsOfSelectedItem.correctAnswerIs);

    sessionStorage.setItem("isAnswered", "true");
  };

  // ANSWER
  const answerSelected = (element, correctAns) => {
    if (element.textContent == correctAns) {
      element.style.backgroundColor = "#18881860";
      answer.innerText = `Correct Answer!`;
      answerDiv.appendChild(answer);

      // Only increase score if question wasn't already answered
      if (sessionStorage.getItem("isAnswered") !== "true") {
        score++;
        sessionStorage.setItem("currentScore", score);
      }
      scoreDiv.innerText = `${score}/${arrOfN5N4[selectedLesson].length}`;
      isCorrect = true;
    } else {
      element.style.backgroundColor = "#d129296f";
      answer.innerText = `Wrong, Correct Ans is: ${correctAns}`;
    }

    answerDiv.innerHTML = "";
    answerDiv.appendChild(answer);

    // OPTIONS DISABLED
    Array.from(optionsUl.children).forEach((optEl) => {
      optEl.classList.add("disabled");
    });
    isAnswered = true;
  };

  // 🔄 Restore previous selection (on refresh)
  const storedAnswer = JSON.parse(
    sessionStorage.getItem("selectedAnswerDetails")
  );
  if (
    storedAnswer &&
    storedAnswer.correctAnswerIs === arrOfN5N4[selectedLesson][count].answer
  ) {
    const selectedEl = document.querySelector(
      `[data-index="${storedAnswer.optionNumber}"]`
    );
    if (selectedEl) {
      answerSelected(selectedEl, storedAnswer.correctAnswerIs);
    }
  }
};

domDisplay();

// Animation

const petalsDiv = document.getElementById("petals");
const maxPetals = window.innerWidth < 768 ? 6 : 10;

function createPetal() {
  if (petalsDiv.children.length >= maxPetals) return;

  const petal = document.createElement("div");
  petal.className = "petal";
  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.animation = `fall ${Math.random() * 4 + 5}s linear infinite`;

  petalsDiv.appendChild(petal);

  setTimeout(() => petal.remove(), 9000);
}

setInterval(createPetal, 1000);
createPetal();
