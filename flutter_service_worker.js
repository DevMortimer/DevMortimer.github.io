'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js": "baac89c79475fe97b267adbf212d38fb",
"version.json": "009c9e65172e010890f7f65fde438006",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "25acd3eb714862ce00b9e75aad565743",
"assets/fonts/MaterialIcons-Regular.otf": "ed87e42f47ad92ed11797ddf3b3d1d8e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "3af217f8bd1815926dcd253915db85d2",
"assets/AssetManifest.bin": "5796f5838bda7028373b63389b0b4128",
"assets/AssetManifest.bin.json": "a4e40b2291692cfd74a7115d6844524a",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/NOTICES": "911b32caf856c8aa664284fa8f257e54",
"assets/assets/pokeball.png": "a85f4fe0ab90088f3dc252ae3d10c670",
"assets/assets/mweather.png": "66d6772ee8c7ec0bcc41e87847aa22ad",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "7ee56aa64609b39a57ff52f02354836f",
"index.html": "1cabb62fc03874d83af2dc9648658e91",
"/": "1cabb62fc03874d83af2dc9648658e91",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/master": "44d1e40a8b08336cc4affd181c94466a",
".git/refs/remotes/origin/master": "44d1e40a8b08336cc4affd181c94466a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/93/25370ba29f50c5a5036f3cee5d7f487ce6d29e": "5c7a72125bf27c412e37ac56dfee666a",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/6183358134692dc005cdbfeb23184d3d9ce880": "447aef0c343321b43568311707d41f15",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/69/010fecbfd1ef6d3e24ae9bacac3a33b0ad43e9": "8b3cd1c833d7ba0cf6a4ac43b46a9889",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c5/c80a7eafa74b25e9bc7d3d18d37306d04edf9c": "062ffa50d2c09797db131b09fec890eb",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/ce93f5724138a54c4ae5050060135da1265c1c": "1129882ad1cad77abe2ad7732af652c8",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/efee37b1176475444f1566abd36b362f0cb95e": "a28147dceb6cf91fc7dd54f8d6c954a8",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/fba697ae8fb08443c801eba790fa65a62225cc": "679f660d8a814a8888db74da84438968",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e6cb76ee903b7470a27844f9bad49e3104ab4d": "f5dd556e1203579497dcc10fc1f226de",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/9b0d96ba150f7b01b585dc504b8f1d24fb71f7": "b752b2481d8eb963f5a3fd572b1cd7f1",
".git/objects/0f/ec6d11bddf323809422ac3ebb600fe30b632d2": "f14c68ee2fa2aa9ff33dbec1aebdd3a8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/52/2305dd53bac69dba33c7877ea5e3f44b3834b5": "c8a6e1ee1abdb56f863d8969b3658b09",
".git/objects/7d/35348780a6a275a01c669b21c8f227aac07361": "71b7b03fda3fdcc1251aa5a91b3c394c",
".git/objects/7d/5e18406dac163ea1198720b85c8b0aaadf38bd": "8f52f8d070d51af1a4b58322e0daae84",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ff/f438ba4f88fc0ef8ff28e2021b34023ff64c15": "f440a6d950c9859d1ee12b394afff882",
".git/objects/ff/9b1e6fec670f1f63f9be1c052b04ee75404002": "55c411da6d0df3762c4fd0de587cf1f7",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4f1b9ac9f1d539074b91cd3a55c9097aef2697": "a17bc0806962a9b4cf8567d364d0a29d",
".git/objects/b9/48beead0de45a738d6bcb1d8af5dedee834ad5": "9e25cfa4b3dbaa1b84c06fbad2962b1a",
".git/objects/fc/87aeb2145072a444e8410dadba246ea1a6a1cb": "64f66c4df08f86859a86680a5ed2654d",
".git/objects/c6/3c227a0c902bcf8ddad02392b5c8b08365b488": "d889b2f8400b57ed81a4038922ae0fee",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c6/36b361e09795505b339d38b8dbadcb197f88a2": "9c19319c29ac480c117a9d02a73aeca5",
".git/objects/f1/fd6b3e7b2cc65f62c0cd61bf6b6608a65fa933": "f7f597cfd7dda62e0df254f27fb7518e",
".git/objects/9b/76e178fc4cb604655e0c0344a532f64b415da1": "7a092aa251db7fa076e20ac90e981371",
".git/objects/9b/e2113becb2feee0f4ca3a7f67f425c2d737df3": "e2f333f3a1ec544f17b6b1a4c4c2e6bf",
".git/objects/18/4f17324c2fefc81ae9ab2d8fa06c64e8f2eccc": "09883e8e2072a96c16e5d2358e4c6f4e",
".git/objects/18/7fb8665f783afd63383c1007cf7f6e0e3a5963": "3e6b015e92f87da8095e7261eb8aff65",
".git/objects/37/284b12f2366fdb7825bdf827d97ea09e9500b2": "3c148ad0ec10eeb5c12b738eb6c8d208",
".git/objects/0d/d814e7e34ec79bd0324e61a665b9d2a6426593": "a988f8c2e211df4141be66494d15a948",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/78/784dfcf442678fb957c96df46ede8a20ccedb5": "3a278c07836fc87b87a84ffc143dbf48",
".git/objects/21/6717d4773f177a2d2742e0c3ae2de783c9e2b2": "e970e6e3181d5f657d916395ac25b1ca",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/9e/a7ca35a71234e0d1aaf61e2dccfbf34ac64faf": "b47ace42396a0edf31f398a8bc8fa9fe",
".git/objects/ad/0c84940c93a7c7ea86783e9b1aedc123e21cbc": "24b66b13a6ba1c2794a81e5814d51af7",
".git/objects/bc/3d28f2dac8c5d88bcadd10890d969058c153bf": "010f5c2a723fb93f3e181c95dbce8f83",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/7e/e8ed043f06f07ef40423c1b9582b173684275d": "74fcd39dd8a637926fee0f5b9e4a1605",
".git/objects/89/68b88c89184a5892f0716f38dc9bc8c5cb42b5": "a55f356fa920eb8456b6f02ad9ab1da0",
".git/objects/9c/04c6a04debcebb5380c1400d7c8c8e70469d00": "f62ba16852a7461846a59a4b0a7caa6c",
".git/objects/43/fe3d773ec0069c80f9a8bcb6e7abb3fb5d6d9b": "b3456442f91a36514a570b6b4f77d0c6",
".git/objects/01/9b3c2a935c82b11f2708e710c69de27fb7cd3a": "3abe5d8436cd32183bd92540cbc121d3",
".git/objects/ac/e0c4daf97dd4caae4300c31a595ca987ecca4e": "05727ca1ada0868cd5f281bd727537c5",
".git/objects/57/3fa879d009f4c1c605a24329cabe002c2450d6": "50fb55996fc67b6c6b37f97f1712fac0",
".git/objects/b0/a7e9d3ce363e21e830ff01d50c9ebd88b6da70": "ac9168beaa046118d8c3f3894d75d9a4",
".git/objects/ee/a243980fac4dd229230892248c3959e35fd559": "01be5f2b564ee5b302448bc9477b4c8e",
".git/objects/54/811a52653e0ebc92cfb692a5cfd592377b7616": "7495b9768432dee4d6587baffd362d16",
".git/objects/da/5240d42bc1da4cab019a839d6504f1a3e9a37b": "1d547bebc8d42d44e34302f3c137867b",
".git/objects/62/91947a6af6c3916ddb51794f25ed3a28b33b4e": "e20d7def7bcb9f45e4b2ac2153bc2c68",
".git/objects/30/74feba3f807be32a15e0708011446bd0b4b54c": "6ec49555b109f549ef477fcede537839",
".git/objects/d3/7ba6f1fd1c6797c7ff04846cfa981dfc1c79c7": "df9ab879b87a72ee5e6ffad19192b69d",
".git/objects/9d/f3b7f6e76f265ade2ebf58fb678a6478f06820": "6ffc1b0afdfb7a92affc42093ddcbc94",
".git/objects/9d/92b8d75e1af26889a1ac701ba318787baaec1d": "0bd04046588b8222016e5fc5102e1d9c",
".git/objects/06/9e73a8a1f12cdb3301e2b599ffa71b82edd8db": "da27a1f5efd21c5e5ce5858f2eb7a196",
".git/objects/60/ff1dd1c1aca7c33805e8230b9a43dfe5c7ac42": "ab32c108e9e3a125fa61088ef3aa2163",
".git/objects/d8/3ebad42e78c9aaa56998822e66df8f9b1caed7": "98e894322811bf404ce2c759efa2c6d8",
".git/objects/27/793433e520977bc16660e6e7cb2dace865fdb5": "8384bc1154fba5ff0346323d42002afa",
".git/objects/98/fb009bc5f41ab0e62b30edcb33fcfd872fc954": "7feec7c7c1afca74436aac57bbd38b9e",
".git/objects/98/c7df6b5d1387380610867838437e105a5d3206": "2cfdd4405b86e71a6d643e7f0cf3d93d",
".git/objects/99/096b55ab63e566f5d7101152fdf5438b1a8938": "e01731fce2f958a01d4ec7180c15dbd0",
".git/objects/34/6d389856e6698c63648c2e74bfb207f755dc81": "4639769b16560738e98835582ec23b39",
".git/objects/34/724a1b1e4db21d75f7e725f833e605205fb911": "540ccc386413927b6b2d4c59431be273",
".git/objects/1a/683426803904442b9c992a997f4354515808e2": "356dbd400e41c783c80b1096ef13e48d",
".git/objects/b6/5efc9979bfc7fc649db64d2d71585feaa9007d": "6bbadddd1c6e4bc1101fb0f3a7f9f0c2",
".git/objects/58/7fd6ffa0aff05e8d41948aad09e90f1087f555": "11281cc9594dd4df8c3c912a0125e4ef",
".git/objects/0c/5791210b094b649d2db62d5fc3139690a89755": "c4a66f68be8c50beb2ef21881e7b29da",
".git/objects/0c/03d4fbac36778d1975b8c5cfae3312b642f5d0": "6e52bc7522af7e526be838437487ba99",
".git/objects/87/3c19a76d595cba807793a401432fba42a20886": "d4f4db00b75bb051226c2eba870a437e",
".git/objects/ae/bfedc88d4f61185bdc396166bb65827790362d": "f81cc7fa3afdac4062d462e483675468",
".git/objects/ef/0bc459c1f1555b34aa4f4a2cd200733d9803e5": "1907a27d909db2e31d5771591defe753",
".git/objects/fd/4db3b3c400346da517259517d3a780f2890fb7": "7ddea81c50bf008fdfb473faa378173b",
".git/objects/3f/22c274e557769a3db4b66880761a4a1c3aa8f1": "4866668705df0d5184057bb65619eec3",
".git/objects/d2/e71ff30b4337ccc2cef52df1d8f35307a8f020": "508c5afdf6b65dba27f3e67c73fb5c89",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/config": "e772e8653b2ef1c61d8a6878bf983987",
".git/COMMIT_EDITMSG": "1afadc4cb4aae99e9e3a68bec6ffd045",
".git/logs/HEAD": "ab8fa345813b1752063347bee402d2e1",
".git/logs/refs/heads/master": "ab8fa345813b1752063347bee402d2e1",
".git/logs/refs/remotes/origin/master": "35e07663737f24d3e483100dc2b26bd6",
".git/index": "ea312c5b9297d65708c37b5f74ac0bdd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
