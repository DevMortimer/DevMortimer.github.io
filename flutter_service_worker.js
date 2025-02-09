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
"version.json": "009c9e65172e010890f7f65fde438006",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3fd97ad4776b321c84d5a8cb865d3125",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a235a64ea6cf6f88a1491277ba090744",
"assets/fonts/MaterialIcons-Regular.otf": "beb6a137a4277d84fe7407a8a7152d4f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "d45003a3334a7b632c11be413221ebdd",
"assets/AssetManifest.bin": "de36a0ae309d49f2692a4bc21b3e492a",
"assets/AssetManifest.bin.json": "0a796f0724df98b6923530ab8e10e8f2",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/NOTICES": "23c4d3f5a1ff178b0469aea8c8b6ab3e",
"assets/assets/pokeball.png": "a85f4fe0ab90088f3dc252ae3d10c670",
"assets/assets/mweather.png": "152188a6f5b931accadfbc6526a5b936",
"assets/assets/oneloyal.png": "83954961f66327158841a16f64b6ffe5",
"assets/assets/oneloyal_business.png": "67f6a668c7341264aa30495059a76970",
"assets/assets/favicon.png": "7ee56aa64609b39a57ff52f02354836f",
"assets/assets/zentyper.png": "a34667641dcc35131b197e46600f4a6d",
"assets/assets/colm.jpg": "a27afbe7a83a38d312f48344435dd6a2",
"assets/assets/sda.jpg": "cf1e708f97e64ac587bf3e728f47063d",
"assets/assets/bsu.png": "b9cd2eb3a111ca989761700fbe17a224",
"assets/assets/me.jpg": "fea53c30baec8d39a8c1dfb2a2ec536f",
"assets/favicon.png": "7ee56aa64609b39a57ff52f02354836f",
"assets/mweather.png": "152188a6f5b931accadfbc6526a5b936",
"assets/pokeball.png": "a85f4fe0ab90088f3dc252ae3d10c670",
"assets/oneloyal.png": "83954961f66327158841a16f64b6ffe5",
"assets/oneloyal_business.png": "67f6a668c7341264aa30495059a76970",
"assets/zentyper.png": "a34667641dcc35131b197e46600f4a6d",
"assets/bsu.png": "b9cd2eb3a111ca989761700fbe17a224",
"assets/colm.jpg": "a27afbe7a83a38d312f48344435dd6a2",
"assets/sda.jpg": "cf1e708f97e64ac587bf3e728f47063d",
"assets/me.jpg": "fea53c30baec8d39a8c1dfb2a2ec536f",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "7ee56aa64609b39a57ff52f02354836f",
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
".git/refs/heads/master": "3b6bcb2517fb67b0b1d2891aa4cd6641",
".git/refs/remotes/origin/master": "3b6bcb2517fb67b0b1d2891aa4cd6641",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/93/25370ba29f50c5a5036f3cee5d7f487ce6d29e": "5c7a72125bf27c412e37ac56dfee666a",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/6183358134692dc005cdbfeb23184d3d9ce880": "447aef0c343321b43568311707d41f15",
".git/objects/8f/716b96e13ab7b04275cd38b27f72077cb844d1": "d39bb5e0594beaf58a14411a64a507d6",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/69/010fecbfd1ef6d3e24ae9bacac3a33b0ad43e9": "8b3cd1c833d7ba0cf6a4ac43b46a9889",
".git/objects/69/e01e3fd071d91c23253f8513b6dc8db91d1796": "144fb949cc0efa8fe17a14c824cf7235",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/535674c402061a2fdec352ffe7f65941314ebf": "6627149d535800f5b5b6a43d66ce44be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/700978e982fc8645f6994804211d74688379a1": "c093b67a507f6c096def7d71afe9c9d8",
".git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
".git/objects/15/38b45a14500a4669663170265636d41a5a1164": "a69f3d30edcc7a6c642fccb6e7131d5d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/cfe5a7176b137a4384d5a996878de92286bbc4": "80c1de396687a8d28580c35c707966e4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/ed27d083e039de0a00d958caebc54eb9dbea55": "7d3159f9fe2fca2ca790047614594dfd",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c5/c80a7eafa74b25e9bc7d3d18d37306d04edf9c": "062ffa50d2c09797db131b09fec890eb",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/e83eac97d22eb3b5a09edd06ed47e1826ea2f2": "34cf9b9658b67aa12d0d47e270b612b5",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/ce93f5724138a54c4ae5050060135da1265c1c": "1129882ad1cad77abe2ad7732af652c8",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/efee37b1176475444f1566abd36b362f0cb95e": "a28147dceb6cf91fc7dd54f8d6c954a8",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/fba697ae8fb08443c801eba790fa65a62225cc": "679f660d8a814a8888db74da84438968",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/e72f897f957ddc7078625fef755c5a422e9f0d": "86dbb3bbeeae3c9b8af3af6b7c9fd1f4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e6cb76ee903b7470a27844f9bad49e3104ab4d": "f5dd556e1203579497dcc10fc1f226de",
".git/objects/8a/c32515d8fa544f23e5fe34725ca89d4b83b7db": "a0ee07e0b406a8311738bbf14e99c5f5",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/9b0d96ba150f7b01b585dc504b8f1d24fb71f7": "b752b2481d8eb963f5a3fd572b1cd7f1",
".git/objects/4a/464a63a419ef92577710b18e06d5a74afcf5dc": "d7241658310948d05b211bdbf4de2822",
".git/objects/4a/da629636e11b8e340e192697f963efba9fe7e5": "dbcb27d7d6a5e6efb785464d3bbb6b1e",
".git/objects/0f/ec6d11bddf323809422ac3ebb600fe30b632d2": "f14c68ee2fa2aa9ff33dbec1aebdd3a8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/04595fb41d446255e65a4845dba7ca6cf1c0df": "cf593dd7fef6ead89c36dac6559a154e",
".git/objects/52/2305dd53bac69dba33c7877ea5e3f44b3834b5": "c8a6e1ee1abdb56f863d8969b3658b09",
".git/objects/52/dc7c88d935d0200afc92de8ea86b8295e37d83": "9a3a7e44703ce813196523e877d6914e",
".git/objects/7d/35348780a6a275a01c669b21c8f227aac07361": "71b7b03fda3fdcc1251aa5a91b3c394c",
".git/objects/7d/5e18406dac163ea1198720b85c8b0aaadf38bd": "8f52f8d070d51af1a4b58322e0daae84",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/a67503778a0eb3f26829ffb61f86156b1e071c": "d748cfab42e921cc60d4f581dc2e9d49",
".git/objects/fe/4e68d99f7e2aaa917434ead42fdc411980984f": "dfbe34ff2c9d92be3923c1d83f5b2db7",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/fa9b6cec0d62d3f27f68738acc7790ecf2c2c4": "af183cbbeb731a30bf0222dc1a110978",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/a5c19007730e3b84fae00f61d2f4d79ceb25f5": "4699a791276f32186115a5161d98bc52",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/715fba7a9458e35a9bef558f109fddf0b65ac6": "f4beb8dfd24d201844c99980051c56d4",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/9cc21c2ae2482834f9cd234c1a63b9587c4997": "2c6d2000fcffa51374162b1d1f976d82",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/d92f6cc899c59b6337f020eeeaadf6989ee2d9": "5e77dffff9068f2bf130695314b17bec",
".git/objects/ff/f438ba4f88fc0ef8ff28e2021b34023ff64c15": "f440a6d950c9859d1ee12b394afff882",
".git/objects/ff/9b1e6fec670f1f63f9be1c052b04ee75404002": "55c411da6d0df3762c4fd0de587cf1f7",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5a/945f0ccb1746666ded61600cf2923cd4d31839": "202a7883d76dbfc3eec7b53861b16a08",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4f1b9ac9f1d539074b91cd3a55c9097aef2697": "a17bc0806962a9b4cf8567d364d0a29d",
".git/objects/b9/48beead0de45a738d6bcb1d8af5dedee834ad5": "9e25cfa4b3dbaa1b84c06fbad2962b1a",
".git/objects/fc/87aeb2145072a444e8410dadba246ea1a6a1cb": "64f66c4df08f86859a86680a5ed2654d",
".git/objects/fc/b6c4c790879604025d196e8db2891ece284d58": "c055d33d3043717b76449ee66e8f85e2",
".git/objects/c6/3c227a0c902bcf8ddad02392b5c8b08365b488": "d889b2f8400b57ed81a4038922ae0fee",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c6/36b361e09795505b339d38b8dbadcb197f88a2": "9c19319c29ac480c117a9d02a73aeca5",
".git/objects/f1/fd6b3e7b2cc65f62c0cd61bf6b6608a65fa933": "f7f597cfd7dda62e0df254f27fb7518e",
".git/objects/f1/819bdd9d30ae74685bf19fcb8bdc104f8af472": "fe428b23085db5609a4a18f59e9af306",
".git/objects/9b/76e178fc4cb604655e0c0344a532f64b415da1": "7a092aa251db7fa076e20ac90e981371",
".git/objects/9b/e2113becb2feee0f4ca3a7f67f425c2d737df3": "e2f333f3a1ec544f17b6b1a4c4c2e6bf",
".git/objects/9b/ab78946ffbd7fbfb336144504ff5df787fc17c": "9f9cac1324a4ff99bacce5c9b06f07d7",
".git/objects/18/4f17324c2fefc81ae9ab2d8fa06c64e8f2eccc": "09883e8e2072a96c16e5d2358e4c6f4e",
".git/objects/18/7fb8665f783afd63383c1007cf7f6e0e3a5963": "3e6b015e92f87da8095e7261eb8aff65",
".git/objects/37/284b12f2366fdb7825bdf827d97ea09e9500b2": "3c148ad0ec10eeb5c12b738eb6c8d208",
".git/objects/0d/d814e7e34ec79bd0324e61a665b9d2a6426593": "a988f8c2e211df4141be66494d15a948",
".git/objects/0d/919703ee8fea293a4cf2d4cbc3ee8948a19800": "dc56498bf4bc74651623e9998810ff2b",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/55/22e1246f106f64310bd56f5f2b21f7280d56cd": "beef05357c21a4e10d517fbcd780c520",
".git/objects/78/784dfcf442678fb957c96df46ede8a20ccedb5": "3a278c07836fc87b87a84ffc143dbf48",
".git/objects/21/6717d4773f177a2d2742e0c3ae2de783c9e2b2": "e970e6e3181d5f657d916395ac25b1ca",
".git/objects/21/b2fd75ae5f7b0e926c044dce937a1fe07e9b4d": "d57abca072bdaef390b6f710accadd03",
".git/objects/21/c20dfa771ff8a73e2e7be4026caf4bdafe6339": "52f7f30684073476a01ab0f4858f16da",
".git/objects/21/08dcfdf878d33cd69e06d3089e87117c273c36": "f99c6345934a07ddc3a1c258ed07dfd4",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/5985142095fbf245eee658836ae1aa46c4d3c5": "f771c7b25c48c8fd804ab2e66630c385",
".git/objects/9e/a7ca35a71234e0d1aaf61e2dccfbf34ac64faf": "b47ace42396a0edf31f398a8bc8fa9fe",
".git/objects/ad/0c84940c93a7c7ea86783e9b1aedc123e21cbc": "24b66b13a6ba1c2794a81e5814d51af7",
".git/objects/bc/3d28f2dac8c5d88bcadd10890d969058c153bf": "010f5c2a723fb93f3e181c95dbce8f83",
".git/objects/bc/2d7b792ac6c3c952800933c3803b05e967ebba": "6e398aa88d0ed39b4a613e1972b58771",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/33/b5da87b97d587e22d478ea398a842228a68505": "8ff6a28f7f260f225cdb591e77d16862",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/a6/f1dea964fff90b1424591af89bf87cebdb69fa": "6ddb58138430c82dee63c3ef1b714262",
".git/objects/7e/e8ed043f06f07ef40423c1b9582b173684275d": "74fcd39dd8a637926fee0f5b9e4a1605",
".git/objects/7e/08b5b7197652c60df24a186ed197995c11cfd3": "cb1af22172ff2251042d23432939b790",
".git/objects/89/68b88c89184a5892f0716f38dc9bc8c5cb42b5": "a55f356fa920eb8456b6f02ad9ab1da0",
".git/objects/9c/04c6a04debcebb5380c1400d7c8c8e70469d00": "f62ba16852a7461846a59a4b0a7caa6c",
".git/objects/43/fe3d773ec0069c80f9a8bcb6e7abb3fb5d6d9b": "b3456442f91a36514a570b6b4f77d0c6",
".git/objects/43/983b4471a57ace8d3bbe7dbd7f0cd46b2c5792": "fedcf8d7a12e8f2cf5e80a13c26c42b1",
".git/objects/01/9b3c2a935c82b11f2708e710c69de27fb7cd3a": "3abe5d8436cd32183bd92540cbc121d3",
".git/objects/ac/e0c4daf97dd4caae4300c31a595ca987ecca4e": "05727ca1ada0868cd5f281bd727537c5",
".git/objects/ac/7caddc442cdc8d8f5c50eb9b206f395cf640ae": "b439308bff032cf18ff5cf754be6c89f",
".git/objects/57/3fa879d009f4c1c605a24329cabe002c2450d6": "50fb55996fc67b6c6b37f97f1712fac0",
".git/objects/b0/a7e9d3ce363e21e830ff01d50c9ebd88b6da70": "ac9168beaa046118d8c3f3894d75d9a4",
".git/objects/ee/a243980fac4dd229230892248c3959e35fd559": "01be5f2b564ee5b302448bc9477b4c8e",
".git/objects/54/811a52653e0ebc92cfb692a5cfd592377b7616": "7495b9768432dee4d6587baffd362d16",
".git/objects/54/0229ec2461e408ba23607e84994f0b3382566f": "e5e8a51ad83b875b9a54fddc54514d2b",
".git/objects/da/5240d42bc1da4cab019a839d6504f1a3e9a37b": "1d547bebc8d42d44e34302f3c137867b",
".git/objects/da/fef7ea6a659d257fbc7b3599401fe748735694": "e5c3196e926515f55f177421a299465f",
".git/objects/62/91947a6af6c3916ddb51794f25ed3a28b33b4e": "e20d7def7bcb9f45e4b2ac2153bc2c68",
".git/objects/30/74feba3f807be32a15e0708011446bd0b4b54c": "6ec49555b109f549ef477fcede537839",
".git/objects/30/686ca92152a3fde02f8306a153500e97b0eaaf": "a7ec35d454b028902db039c280f50e6d",
".git/objects/d3/7ba6f1fd1c6797c7ff04846cfa981dfc1c79c7": "df9ab879b87a72ee5e6ffad19192b69d",
".git/objects/d3/14d1d51ea5794659fad648a54c77b862ee7cfb": "460a1c4fa566393851c7a8a07db47b84",
".git/objects/9d/f3b7f6e76f265ade2ebf58fb678a6478f06820": "6ffc1b0afdfb7a92affc42093ddcbc94",
".git/objects/9d/92b8d75e1af26889a1ac701ba318787baaec1d": "0bd04046588b8222016e5fc5102e1d9c",
".git/objects/9d/d94c1831b34eb1e7ce344429c5024864533a82": "58750e4a4f4e7525a498bd6e64d48094",
".git/objects/06/9e73a8a1f12cdb3301e2b599ffa71b82edd8db": "da27a1f5efd21c5e5ce5858f2eb7a196",
".git/objects/60/ff1dd1c1aca7c33805e8230b9a43dfe5c7ac42": "ab32c108e9e3a125fa61088ef3aa2163",
".git/objects/60/c732609f89787cd622a2a3ea652ad0b8d73012": "7887cef360e55f678f97f9fbb00bb02f",
".git/objects/d8/3ebad42e78c9aaa56998822e66df8f9b1caed7": "98e894322811bf404ce2c759efa2c6d8",
".git/objects/d8/9d696ceace3611c8914335b7319170a066846d": "2c69ffaa6353ae656d5675f0f54fe71b",
".git/objects/27/793433e520977bc16660e6e7cb2dace865fdb5": "8384bc1154fba5ff0346323d42002afa",
".git/objects/98/fb009bc5f41ab0e62b30edcb33fcfd872fc954": "7feec7c7c1afca74436aac57bbd38b9e",
".git/objects/98/c7df6b5d1387380610867838437e105a5d3206": "2cfdd4405b86e71a6d643e7f0cf3d93d",
".git/objects/99/096b55ab63e566f5d7101152fdf5438b1a8938": "e01731fce2f958a01d4ec7180c15dbd0",
".git/objects/99/2bf3c21155620dc60322ff4354da3178360c1f": "56e84954c32b6381cd081a2836c1552d",
".git/objects/34/6d389856e6698c63648c2e74bfb207f755dc81": "4639769b16560738e98835582ec23b39",
".git/objects/34/724a1b1e4db21d75f7e725f833e605205fb911": "540ccc386413927b6b2d4c59431be273",
".git/objects/1a/683426803904442b9c992a997f4354515808e2": "356dbd400e41c783c80b1096ef13e48d",
".git/objects/1a/7ac9e83288ead155110e77494b530f581fc835": "d3b1ebe233a10025dea7462140d5a954",
".git/objects/b6/5efc9979bfc7fc649db64d2d71585feaa9007d": "6bbadddd1c6e4bc1101fb0f3a7f9f0c2",
".git/objects/58/7fd6ffa0aff05e8d41948aad09e90f1087f555": "11281cc9594dd4df8c3c912a0125e4ef",
".git/objects/58/9bbc872b1ff8c2fd6674ee98872f9fcae6e329": "d9cc6ed2f765aed10358f6e7594e5c2a",
".git/objects/0c/5791210b094b649d2db62d5fc3139690a89755": "c4a66f68be8c50beb2ef21881e7b29da",
".git/objects/0c/03d4fbac36778d1975b8c5cfae3312b642f5d0": "6e52bc7522af7e526be838437487ba99",
".git/objects/87/3c19a76d595cba807793a401432fba42a20886": "d4f4db00b75bb051226c2eba870a437e",
".git/objects/87/0db4af4523e5694fc57b9159a6c00b1e27aa6d": "6a2bff25c1fbf4ae77854b8d38500232",
".git/objects/ae/bfedc88d4f61185bdc396166bb65827790362d": "f81cc7fa3afdac4062d462e483675468",
".git/objects/ef/0bc459c1f1555b34aa4f4a2cd200733d9803e5": "1907a27d909db2e31d5771591defe753",
".git/objects/fd/4db3b3c400346da517259517d3a780f2890fb7": "7ddea81c50bf008fdfb473faa378173b",
".git/objects/3f/22c274e557769a3db4b66880761a4a1c3aa8f1": "4866668705df0d5184057bb65619eec3",
".git/objects/3f/239374a515faca27d5e9bcb3613f1ccdf2dab6": "2e1b94e5741d4fb1ff90e6c8c3e0c055",
".git/objects/d2/e71ff30b4337ccc2cef52df1d8f35307a8f020": "508c5afdf6b65dba27f3e67c73fb5c89",
".git/objects/48/a44c9d24fe6416669097cf26a9794d802f5ea4": "80d3eeeb0fcb06e156efe258ce287959",
".git/objects/14/16b39b960ef81756e37b0e0d638b0837637c20": "8abcd42211263f870617014c50df1306",
".git/objects/14/b7aac871dc25fd7b564868cfca6a40ea03c93c": "dbd7014e4153ea1c35c511101d2da333",
".git/objects/14/cc9aff6b655a3df72ced23d7768c3cd75bf40e": "f5824d137b438a6ec30a11ab73f1ab9a",
".git/objects/14/c420df6788e7a1404a91958392a2a3935c971f": "95b9ccec5bfae8281fafde76de5d561e",
".git/objects/ab/d3f55df0d7eaf874557bc0ceb250cfa6f514dd": "51e03d159d65203324df58c82962b608",
".git/objects/e7/459311b9235fae46217ff10cd915cd3c3acd91": "6f2fe7ecbbb4d08205f83951e0043f3c",
".git/objects/79/ae9c133456448a0699c2bb1298fbbaff12e0b1": "bf2e7bcd257377026aef5c79d512e4e3",
".git/objects/b1/1308ccc7d88670258f59919eda2e6ae8c1ba39": "c31ac72d96769c31bc87790e82bf6a67",
".git/objects/b1/51cbd7dc20db5cdc5602173ac1aa51f7d6a8b6": "38fc79fafc0428026893923ada1be359",
".git/objects/4e/da9cd03bbafc06bfd408b256dcf7ec74a25331": "d008b4a6f416d70f40d5a2c31515aeff",
".git/objects/12/c527b1fb52ff3267a86241bde00e7382fe5108": "5487ebeaf84643fab4c2909fe6521652",
".git/objects/65/d34abba20f3ac6ad4311d563a89ed315d5f288": "60bbdb8d7907687cb41fc9220534cd71",
".git/objects/90/0ad5faa0c0e0343d9ff2a0a452609f439c6f2a": "93954f75acdb4bb632a579d1f613fdfa",
".git/objects/74/585932f3dc59ccf1b1327d3a41f8fd18113cd9": "946c8f6ab6df0d428ab4030ebf93ee50",
".git/objects/74/46fc5ec307a356ded02595c8fa2dc76105561c": "b823d05f8c63dab7672c9a4d94fb5606",
".git/objects/7a/2850edc37bd3678b30cd6c6a62db2386d98287": "9c3a2567d990c60b2d9ef2537ca7e858",
".git/objects/7a/1bc543fa4ab644230e12a79c5bbf4a9716612c": "77d13314c97969d87b0d999efa49a646",
".git/objects/8b/dcaaa80089df8c89f7b7a6bf2f79df8ff31ade": "e92403a97368d9c6a7bb7ce0c377e72a",
".git/objects/40/d4f7d26e8e9e8116ba9f25154ac0c73c2ba6a6": "c871064b523591b3a961e10162470dae",
".git/objects/56/6e1d3bcab2efb0bafc908002fb1d1d19c1995b": "c14a56cf0c7bd12d742455c8932ad12e",
".git/objects/5e/858eb017856e86fb75fab2f15a5f9c4a1decbc": "8f961be6775543822d0eee9662cf2259",
".git/objects/61/ecb08a85b439ad45dee5344cdbabcccc09dd02": "fa8b9c5f02c9381c3280086e7d997d2c",
".git/objects/81/e3f3c5d504f619d443c70ca963b2108f2fd1d8": "e8afdca514059862f244d5df2c9f2e90",
".git/objects/cf/a5be956e3faf43f4c98515107a8f200cb0667e": "98b3bf125a71a3b89e42639a9d318857",
".git/objects/9f/7426ef5b1d3cf4bd7c0db03613472877b0c37c": "217908b68899952c16446a79091a001c",
".git/objects/9f/5137967419714aaf43fcbfcd9c0bdd9684fe8a": "01b3d3c0bd8d343b5fcd82b8bdd789ec",
".git/objects/f5/ddb38163e1a545fc9fcae916a79cd84cd20d37": "2f9187850fc05b4ee94c759ce333b175",
".git/objects/c9/58f32cffc7e362c885e41379bc53b5a639b85a": "7dc688a914a6bd75b7af3ac5402aed02",
".git/objects/c0/42f8480e706f6400c4a6cc728f8333ac260a0f": "9f5a5058c514d166aee7034f605a7f19",
".git/objects/a5/bbe9cd992959f0eb78fed9a51224f8f41f2b9b": "172c2be80b422231016376834d1ee5f9",
".git/objects/a5/86fcb952244a1ba463f8a79a4dcf85b7fdb73a": "c014966e8ba2f833d3798bb17cafa458",
".git/objects/25/e07d9179cc839306e4012bf71df2ac5bef7aad": "fe3394c87f2bc16da0013a80c08099ae",
".git/objects/6d/0daf0e09884473dccdac73dfa4c3609f8b1299": "2c12b66f19ac3af6a825c431406708b8",
".git/objects/c7/2aa62f1f8741eeb0429091f2fbaaa82595c57a": "f8e3d80a55346016241e2eafebae0b00",
".git/objects/c7/d16d94947d490cdd8cc3d60541371f2b9ed7e1": "412376a77116ee37fadaf100d5803465",
".git/objects/c8/92e52301448146d50163a8472b2ff1a87af2fb": "3f3969203acfa47bd3b3d7c5c22a49c0",
".git/objects/f6/16dc380cf80ef69db1431348c3102a5ecc1ac3": "92fae47532007224a82408428098c357",
".git/objects/f6/d5230d2af4b71818769877b69e4c9db0fa84ac": "b9e0b629825eeddbfd1e31795ede7d05",
".git/objects/f6/24886b9382da1d7cbf25f491396490ef078962": "8d059cd690b062914e2d3ea7ef414d59",
".git/objects/bd/ef0d4c07963262987805c3c1c8db3d040c4822": "3254e201c74f2663943a17ba9677f84a",
".git/objects/d9/79deca38c423fbef6a39805707baac6a4bea73": "1da73e889bdf5645f140e5bc10401b1c",
".git/objects/e4/8624f14f8eb2454ed800e2219fbe27291f8c4e": "1518cde2d180c3043e7bac1fa828a77a",
".git/objects/a9/7e440c1ed003d1931964cb979f0cf228dfe60b": "54ed34c59463c0e817c2d0397de8e6fd",
".git/objects/a9/b55667caf6ebc9fcbbd709dd9e7a1a9476fce0": "7d207962023086593d22360d72866c55",
".git/objects/d0/0eadb55bae7981284200d48b2524004c0055c8": "ecda6c55fbe8ea30f1c2f3e62fe89c42",
".git/objects/f4/b4170882c1bb0164bc63f10e4f31e5abb2f142": "8c703da0ac2dddeca443017bd05fc37d",
".git/objects/49/8724523c677c19505ee9f0e58daa3e856040cd": "ec6a1532f3bb4a53e3c22ce82f941dae",
".git/objects/49/5a85c99d173bae3d8fb92afee19e4e3b1b0294": "abca6e1be7e064acfba837ff96a15b99",
".git/objects/cc/f753bf6ca243fea26e1eb27dc6cbb787f3cb6a": "89317f1a75a467c4122b6e829b350dba",
".git/objects/2d/e8a83ce4eca1dfe14c3bead6e69ff3fbb19468": "90856e65b77d64463aff16dbb5df84fa",
".git/objects/f8/71913d1db925cd605d0f3b36bbbc3a6c75225e": "0c5817db7ce3929bacc2f6b06a12abe3",
".git/objects/1b/278465b9b33bad26d04f4ffb6a84c009052389": "f5bc681b7ed775a8f2c10962452b91ac",
".git/objects/38/197f072b945538c1ad5e28443a1bd1d0931480": "ffe6ea604b1d8c85cdb45e5a8bcfa192",
".git/objects/bf/2c1af6933472e3322914b2f6f507387091ac85": "4c01bd9312911a215f1cd0a0ae0123e7",
".git/objects/bf/7113aa6151333308f60a94b07e406da1e720cd": "9be62ed1e0142a107a15f787c187232c",
".git/objects/a3/c5cf9c9eea5cbc04c72768ca21e3a9e5679edf": "4d51e2bf8b0cf9ee019b2d1006db559b",
".git/objects/75/e9edda0624ffc3d7dd141420fc4574dbccbfd0": "c52568ca317b413823488d6d1a4b7685",
".git/objects/ed/ba044e802eb0d3045714e671794111919c0471": "0e51d8161fcc5e3341cbd0a207bbe562",
".git/objects/c4/e94e17f2ce9efb18c1f07c40f0efd6600a1cd6": "e23cc25352c1e7cb1bc8a1d0dbb87593",
".git/objects/e9/4c0ee146561193ac0547517496c63a1aca25d2": "2dc013e1dbdaaf278ce72adc1ad52964",
".git/objects/e9/8a641513d1c4c3e5ae16e777ba18e8afe7e797": "713a7fb4f1b297447062674e24fa3220",
".git/objects/e9/ced7bb88233bb8b6cf76dd691786cf0b9dbd8a": "82d63425db024c04cdf777dedcd5b97e",
".git/objects/4f/2f5eb5c5afb90bcfe9570afc9ebe6112cf5a41": "2dabcca1dab07e09819e921c9f6fae2d",
".git/objects/0e/d9b4927d4447e107195f14dd398d92ae9cb662": "5d5068cd34a7985b99e626e6e9240bcd",
".git/objects/a7/c1a74ca3c0c322ede5492b1f326daef3824995": "2749a1c55d9decdbead0dba5177837d8",
".git/objects/5b/ef1fb8c2108135c15297c7fa3399e62c578c24": "f91cb0d601aa7da7d906dc9df7462d5d",
".git/objects/b3/4fd3b53e3bb7c944ddda40513d73f2eff7cdb0": "337172745b8dc5c9d490aa6c4e8cd88d",
".git/objects/fa/40cd71d7ce568bc941d1c4e156bce961e987f8": "cb9c47f7c29d9f77a93dd4a725213fe1",
".git/objects/95/ce436638f1627955ebc442b3201cbccde98c54": "536b4105ddb34c205ce72798959265e6",
".git/objects/e1/9118e295d309310a0448a3958c99e24f635c3c": "8884672c65daffdd631c863252499a36",
".git/objects/3d/e4ed8ebacc340ae3b38f0516d16542a7fba84a": "0a4b89215ec35bf1118bfa663a20cc23",
".git/objects/f7/10f9b2878ac0a02dabebcda6aa03b88927f800": "0ec3af0418e6e4fb787e1dcc6b02c619",
".git/objects/5d/2ff9d1c73a8aa78e1a133e6699480cd2551b30": "f44c972aba2eb402c66b5cbfbc230588",
".git/objects/5d/26932641ac8ea605b6cfc4e375d1af649cdc67": "4e9619e43012ada8d3b4b30c8e81551a",
".git/objects/6a/040497586e74eab9d943b8da5b66a75d8c29a2": "2c8eb9055c34747be46a5dfc101e3bd8",
".git/objects/6a/a25e4c6b2b7803fbb5c69a3b47967865178fbf": "22530094e5a5cf11af0762971d6d5773",
".git/objects/6a/ed53527740963df2fd1760b19964b3ca613346": "d0d7205a80637b314c0e235a5a37558a",
".git/objects/50/3629efbc9a84923121c4b60792ab621417dca2": "c28896ed6264f7b865977df9b0c487d9",
".git/objects/50/33fef84459ccb8e7c072c58d6de48a9730ff76": "32e6b170188d78f3979522f83c5fff88",
".git/objects/17/fbe52ecc6ba940d6c10dbe1f1eaafe54881463": "2ddc1abeafb752ecefa19a1b1b3e3ace",
".git/objects/ea/8e19ae2b8fcbdd344e007e34349255d5e1052b": "d4dce05af3ca96a99333971337f5c77d",
".git/objects/92/d0435a7570ccd393cef15737e3a72926b62995": "2509c29e7d5ee9005cd640a5c1bffa95",
".git/objects/2e/54fdb610d72d897dd799faeb18195de3d8825c": "da03a6365f6c1a4bccfa03b5b7ef4f00",
".git/objects/39/09663155d3c4c508674da0b2359fe08a33744a": "caf7b029bb0b80c588dad0fffb91a2cc",
".git/objects/e2/b6d9a2b39c00ddf2a02f29e4681a11d9b4e9bf": "6669e8711186717a7b5c34ab3ae3e588",
".git/objects/10/ea563ef97b938365235659bb9f56242bb78c0d": "ed13218612afc8bb13ea466fc51677e6",
".git/objects/dd/1b862462462067e555195d3d030f3effb0dacc": "a1d1b4ca52bd2adbde96a9fd983fbe22",
".git/objects/f9/706ff245a001196e35b93da6afe260635b591b": "1d55565067808bc0df2a384be84cf089",
".git/objects/db/a3f51fa970ffdc87fe71960f39c224dfaecb38": "a2d0ebb8c57ca9ab56d3708363fab5f7",
".git/FETCH_HEAD": "3b53a2f0808b4e7447d4f3351717dd6d",
".git/config": "e772e8653b2ef1c61d8a6878bf983987",
".git/COMMIT_EDITMSG": "1ae85491babec7ad4838def89edcc989",
".git/logs/HEAD": "ebf1a609fa8c671e67c02ad8b5550a1d",
".git/logs/refs/heads/master": "ebf1a609fa8c671e67c02ad8b5550a1d",
".git/logs/refs/remotes/origin/master": "3655c9041db8fdca4c07bed0d9d3068d",
".git/ORIG_HEAD": "3d251b92e760a768314819d6de10b62b",
".git/index": "3a53ca5415001623a9935d4fcd6fdce5",
"index.html": "46fb51bd39b3a75bd7f12c6dfffdb35a",
"/": "46fb51bd39b3a75bd7f12c6dfffdb35a",
"main.dart.js": "60cb302aae79f2d20b655d1449d8a9ed"};
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
