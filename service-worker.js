if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const b=e=>a(e,r),t={module:{uri:r},exports:c,require:b};s[r]=Promise.all(i.map((e=>t[e]||b(e)))).then((e=>(d(...e),c)))}}define(["./workbox-b584cb72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/01_revisao_poo.html-YD_c1JW_.js",revision:"25be08538aef37d048016a940e92a0b7"},{url:"assets/02_revisao_poo2.html-C_OIXzUR.js",revision:"bee83d019c050cff27991a61b2cac8b1"},{url:"assets/03_SOLID_1.html-DCVwN-aM.js",revision:"761ed70b45b4a8b8ccdbd185c7854b6d"},{url:"assets/03_SOLID_2.html-DwdtTxR-.js",revision:"6a5376182721be9c6245df874938c2f9"},{url:"assets/03_SOLID_3.html-E5c1AGwl.js",revision:"ad20fcd389fa9a554e7569e42d54452a"},{url:"assets/03_SOLID_4.html-YybNBaP8.js",revision:"38c3314878ea311806e4f6792a3e21a8"},{url:"assets/03_SOLID_5.html-CrdvadWg.js",revision:"f831392f147d5c5c0a04a8f173d125fc"},{url:"assets/04_PadroesProjetos.html-B_AEaIx_.js",revision:"24c6e8e13588650331d691a9012de9ce"},{url:"assets/05_CodigoRefatoracao.html-EkdS1BgP.js",revision:"d31d1cb2c90c576196dd5595787f31c3"},{url:"assets/09_criacionais.html-pAr9bosw.js",revision:"6bec6f7849a1337eb002b09680f507fb"},{url:"assets/10_estruturuais.html-BX6gzzXw.js",revision:"a59e0b6d048d9e4e9660d59509067f5c"},{url:"assets/11_comportamentais.html-CxTNXGkH.js",revision:"da5839574623c593bfbbbc129d2b22d1"},{url:"assets/404.html-B6DsKDhC.js",revision:"9bdd630c1584adf8c4e505d4921826d0"},{url:"assets/Abstract_Factory.html-BNBIxk1n.js",revision:"452698cb7714f3b6c01cc99935ae9f54"},{url:"assets/app-DId127HP.js",revision:"4c5f6782c1b78bd538ed5cca86e5d695"},{url:"assets/ApYuri.html-CZjUshBR.js",revision:"deb57e249d7b8f0c119a30ebe7dc85d2"},{url:"assets/arc-5XEaTxWW.js",revision:"3aeaf8c68d5645d69541f372f2a527fa"},{url:"assets/array-BKyUJesY.js",revision:"17dcebeaf673b09a1ca5da014d20022f"},{url:"assets/bib.html-DOgWicqX.js",revision:"72d6a47a5a8d9e8d78b63ba396b9dfd2"},{url:"assets/blockDiagram-9f4a6865-COaf38GW.js",revision:"8cbe7e37dbda9a7b860cf1eee7f4d47a"},{url:"assets/Builder.html-BNlXf5Vt.js",revision:"484dbf1521b2627e387aa40fdaabb72d"},{url:"assets/c4Diagram-ae766693-CTNGMUl5.js",revision:"35fd029c809478f2f606a9d145eaeecc"},{url:"assets/channel-DSCKtF1C.js",revision:"62c317196570d99a3405ee124602f1a1"},{url:"assets/classDiagram-fb54d2a0-X4TFb4sa.js",revision:"e759816c9097ad7bd7dfea7e8954e82f"},{url:"assets/classDiagram-v2-a2b738ad-CHRGA0aw.js",revision:"77da5d17a4ae10aa706d09b286a280ad"},{url:"assets/clone-B_xFmOir.js",revision:"5f4108bf9bced2d4f7f640397e5ad082"},{url:"assets/colaboracoes-B2twUomn.js",revision:"8934a30c682633a7c9abd869324de85c"},{url:"assets/createText-ca0c5216-F__0Hd5M.js",revision:"fb9cd5658aa24ec459240b06f984a139"},{url:"assets/edges-066a5561-xmxnbjXl.js",revision:"88117ba2bc1772365b816c4b3c527d50"},{url:"assets/ementa.html-Cx_SzVjn.js",revision:"c60dd740692d86780f4045268227aa93"},{url:"assets/erDiagram-09d1c15f-HfP3usA0.js",revision:"363dd2dd8e28e5c1084daa824386602d"},{url:"assets/estrutura-CPmYvUcA.svg",revision:"e28ee908b22881abc76a8bfc248fc528"},{url:"assets/EstruturaLivro-2Z9ANaQi.js",revision:"86c827187dfa1aa44d0558f874f9e004"},{url:"assets/EstruturaMultiton-BsO-1dE9.js",revision:"9167e52d430a746239136a18fb2c784c"},{url:"assets/EstruturaSingleton-PB5fxm8k.js",revision:"544e42406fc5dda5b23f0e24bf637d1c"},{url:"assets/Factory_Method.html-CblNP95B.js",revision:"8bf6898d6f4519fad5071cabfaf74425"},{url:"assets/flowchart-elk-definition-ae0efee6-C8HBqCQq.js",revision:"61bdb3fb13a49564ae6216393092eb31"},{url:"assets/flowDb-c1833063-Ci5iHOGj.js",revision:"55f91f9d1d42a20527bc4d568c7a3390"},{url:"assets/flowDiagram-b222e15a-CA1cbnFX.js",revision:"2e107011d5efc5b340d9fa8db6eba514"},{url:"assets/flowDiagram-v2-13329dc7-j_ynB26L.js",revision:"6a8932801cbb24aff176c0ff8512acee"},{url:"assets/ganttDiagram-b62c793e-DhY9nknw.js",revision:"c1ed5d6cabcc5599a6178d5926f65a77"},{url:"assets/gitGraphDiagram-942e62fe-By67K-5B.js",revision:"3ddf7150b3592ed6bb1ffabc869dfab9"},{url:"assets/graph-hmWmzoL3.js",revision:"6be7efc87efc948499110f9e66597ad9"},{url:"assets/index-01f381cb-Bbe8RlP_.js",revision:"35bd6fa058896b0a40fbd4e5d34e1606"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-0bGxUYx1.js",revision:"4d024afa7c80894ae99cf81b61a981d3"},{url:"assets/index.html-5FJzVM5N.js",revision:"d25a60f20dab9777741eb1ed97b80652"},{url:"assets/index.html-7rhdVAuR.js",revision:"a3c5a5bae2e4dfab298b31cf866c3f7a"},{url:"assets/index.html-B1H_FmUI.js",revision:"debc9102483c91221395f5aac71fc6bf"},{url:"assets/index.html-B24Cxq3W.js",revision:"ceda8c403c41329a5c2e34800a46629d"},{url:"assets/index.html-B4uOC8Qc.js",revision:"0f382dc26dc9e293798c2b7b96bb5b0d"},{url:"assets/index.html-Ba9Z8_Mr.js",revision:"25fd297398b9d421c7fbaf9b325cf2b0"},{url:"assets/index.html-BCBX8O-2.js",revision:"8519504f7048efd32fbaea3e605e2238"},{url:"assets/index.html-BFmV6rNf.js",revision:"30d9aba4c8e73ab9197667aca13a0ca9"},{url:"assets/index.html-BvRiV03T.js",revision:"10d6bf76792aaefe34680d5d64f48a8f"},{url:"assets/index.html-BYsRQMYQ.js",revision:"3ac89cd6db3ffce94b50efb2ab612664"},{url:"assets/index.html-BYTY_8hn.js",revision:"e42050732ea5502a11bde46939ea950c"},{url:"assets/index.html-BZGUuJgg.js",revision:"f3d11de0f1def70fa5567b26bd5dc368"},{url:"assets/index.html-C-QEozS8.js",revision:"f1f1345902e3ff87251091d90c38d36f"},{url:"assets/index.html-CcQalfCm.js",revision:"135576bcea54797c005ee2e9b0e7e5fa"},{url:"assets/index.html-CGv0GbCs.js",revision:"e93c116e82206457fb0ad2bf8b6bc3c6"},{url:"assets/index.html-CkBewL39.js",revision:"bff5566a8f714b4f54f8b13b181f48b7"},{url:"assets/index.html-CM7i7pe3.js",revision:"b5b417e9a504bd759898ac354942714e"},{url:"assets/index.html-CN47qBl4.js",revision:"f68573d4b7ca362b815e7cf6080ced4a"},{url:"assets/index.html-COfRWqHE.js",revision:"21361c99a55ac593c389ed5f3b9ebd58"},{url:"assets/index.html-COVZAZk_.js",revision:"db21746da04f1bf08e8e199b004e85b3"},{url:"assets/index.html-CR7bNiYY.js",revision:"85fabb62e9f0276752fe845795b855a4"},{url:"assets/index.html-CTPK-KqH.js",revision:"c47784bc25f8b2ff2d2ffcc44fd2f397"},{url:"assets/index.html-Cu35rvFG.js",revision:"50592f0856e30aeb08d706cae3e71826"},{url:"assets/index.html-cU5sp7Ur.js",revision:"e1ca865f729e0f65c0fd46c704dca1b6"},{url:"assets/index.html-CUV-XqAT.js",revision:"0d09cdbf3611d549d89c1916d20bfb62"},{url:"assets/index.html-CWcHXEk9.js",revision:"37eb2d286fe321062f0835c271d94fdc"},{url:"assets/index.html-CyTulOCH.js",revision:"a67ded334b7d45ce93f84885e2f095c9"},{url:"assets/index.html-CzjmLXBl.js",revision:"f65bed2b1e8ed47e9c1fd333b8709884"},{url:"assets/index.html-D7slCmug.js",revision:"ee17713e75da0f6b08e7f761389fe318"},{url:"assets/index.html-D8H9Oc4t.js",revision:"3770b526fa4eb8ec303bad139f71e045"},{url:"assets/index.html-DAvZP3WD.js",revision:"1e9460f3136d3c1573612e31dbeb01c9"},{url:"assets/index.html-DcKcNBpJ.js",revision:"7a24ba722e6a4f96934d5e3620440d2f"},{url:"assets/index.html-DlGK48DK.js",revision:"0ad01a2314183532ffc2cbbd5457763a"},{url:"assets/index.html-DpEb7irE.js",revision:"81b55154176f9da8e94a60beec05e011"},{url:"assets/index.html-DPgjqvNj.js",revision:"4523ba0e629b628b966a005b0b2d58aa"},{url:"assets/index.html-DPs8dyfx.js",revision:"4c70c6d7180a1f96ed251f82f4c7561f"},{url:"assets/index.html-DRXZ0T4c.js",revision:"aabcc1280edf4d48995f75c127cf603b"},{url:"assets/index.html-DuDHr9vv.js",revision:"0800c0455e1b568199711201057ada22"},{url:"assets/index.html-DuTQwLZS.js",revision:"17958950390a748f6f2a7af8eaf76c0f"},{url:"assets/index.html-DV2ecHuS.js",revision:"5f29bd5d9bb47f6c6f53c898526667d6"},{url:"assets/index.html-MK5jmMEl.js",revision:"04f54556a3fa3d5ad0fd1643fa3a28e9"},{url:"assets/index.html-s1-GX-kM.js",revision:"ebf7118fc895831d8efd4a5c58f2880c"},{url:"assets/index.html-tdSRQyku.js",revision:"439eae21b07727d365e77bd26954cddc"},{url:"assets/index.html-YcDkcE9V.js",revision:"d582e9a311e1dcdc6f051ac7148db1fb"},{url:"assets/infoDiagram-94cd232f-BAfTDXmP.js",revision:"1ae90a454827f47855f510706584a2b7"},{url:"assets/init-Gi6I4Gst.js",revision:"3ce28180466443e9b617d7b96e9f7b8f"},{url:"assets/journeyDiagram-6625b456-CHWqKNsi.js",revision:"7898bc7aeb98f638d71e26e444527052"},{url:"assets/katex-CvgdMzdh.js",revision:"70bb133cbb8f6188f2a748ba388a3345"},{url:"assets/layout-_dBwYabr.js",revision:"bddfc5e622813e4bdc0bf1b529f408ec"},{url:"assets/line-CQXro1tz.js",revision:"1a982ca02ec936074eadeeff51c489d5"},{url:"assets/linear-MTapyuqA.js",revision:"428de79dc596c9db6a0dedfd392165e4"},{url:"assets/mermaid.core-BGa_-IY9.js",revision:"d32d2bfc54e8feab67cd4f75e390e932"},{url:"assets/mindmap-definition-307c710a-CYjeRRwh.js",revision:"dc7f1dce73969e07344bb82e2e973ecc"},{url:"assets/Multiton.html-C2qSEE9h.js",revision:"c30c4c02e61cb3a8725279c7282e10e7"},{url:"assets/Multiton.html-CochBGhU.js",revision:"1658d107d8f67f99132e9f40749c2860"},{url:"assets/Object_Pool.html-BWP_odik.js",revision:"9de93d2bbd68fb91656e5ab26dcf6785"},{url:"assets/ordinal-Cboi1Yqb.js",revision:"a1d5f6bb98dd6182ddcb9cde64c37dab"},{url:"assets/path-CbwjOpE9.js",revision:"f86c0243cb45746453c6b4f7dbd9f34d"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/pieDiagram-bb1d19e5-CPxoOGUA.js",revision:"0cd19dcfcd32414e84fc7f75014af954"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/Projeto.html-C_LcPPM4.js",revision:"c9f8ccb5d137d9754836bc0c649c7624"},{url:"assets/Prototype.html-Dcl81ZXK.js",revision:"ae93299c13db8367fcddb98cdb8484bb"},{url:"assets/quadrantDiagram-c759a472-Bgk923TQ.js",revision:"025aac7f1acf70346d9932b0451f444e"},{url:"assets/README-MULTITON.html-B06hzA9m.js",revision:"4ed43def7b6dff38be6c1a2cc36dbd04"},{url:"assets/README-SINGLETON.html-D2K9Uhpx.js",revision:"9fdb5fef31713f3eb7ba5fc28a6de275"},{url:"assets/requirementDiagram-87253d64-D6ze4xb5.js",revision:"125cb6460fe2b81055f28434211a5079"},{url:"assets/sankeyDiagram-707fac0f-Dq7dkiDF.js",revision:"3fc6a467e820607172c13eda59c32086"},{url:"assets/Seminario.html-DvBeHVN3.js",revision:"7bbac564ff6c3a389f9bf3ea5e7f23be"},{url:"assets/sequenceDiagram-6894f283-DkqnLfqO.js",revision:"b70c23ae051db5f15e9e74ddc848f5d4"},{url:"assets/Singleton.html-DOXo-hQP.js",revision:"8bf7ff8630fc3a71d8b21caffb5e0bd4"},{url:"assets/SOLID.html-C_4Rfc0B.js",revision:"20681904936c002c19e5c4ca4a1f5bae"},{url:"assets/stateDiagram-5dee940d-M3pu9F3t.js",revision:"378f9562a14bc1062e7cb7e4c37bab66"},{url:"assets/stateDiagram-v2-1992cada-CotUT51N.js",revision:"23b73e65a8c465916e1dc53b49b87eb4"},{url:"assets/Strategy.html-BlGnGc9u.js",revision:"346c0171ed3eb81ef662921bdc0cace6"},{url:"assets/style-AEmiTvzV.css",revision:"5ed57af467a24535ccb5e292cadd4e99"},{url:"assets/styles-0784dbeb-BMbFNh7u.js",revision:"f929e6541fd955ac2ae0cc16d741662a"},{url:"assets/styles-483fbfea-CMRxjNy3.js",revision:"ce704e3bd944bc7b9135eaea8aed99aa"},{url:"assets/styles-b83b31c9-XTqNht5J.js",revision:"f504056db8d0ed33ab673ad87c535668"},{url:"assets/svgDrawCommon-5e1cfd1d-44Sa71wL.js",revision:"14a6999410a22a3d66c31f5997c0b6f6"},{url:"assets/Tableau10-B-NsZVaP.js",revision:"f2197f44250cada74e1e663d3abfba3e"},{url:"assets/timeline-definition-bf702344-YTtLP30G.js",revision:"78c5f9ebd22437ea0921534f072bb59a"},{url:"assets/xychartDiagram-f11f50a6-DHe_hdLj.js",revision:"67f0ae26c64dd74bb1fbfb7ac0a3645b"},{url:"logo.svg",revision:"d158cad89bd4ee16f84caad47d744e7f"},{url:"404.html",revision:"b2b087c49146741b733910081e19cd32"},{url:"article/index.html",revision:"b8066cc520abe9da7df81843b1bdeb4a"},{url:"category/aula/index.html",revision:"f0c0b6692c5e923868f29843fc976e98"},{url:"category/entrega/index.html",revision:"e6674dafb74d94644fb00729f19ab0a3"},{url:"category/exercicio/index.html",revision:"be57b70b34b003b0c28dd02fbdfa58aa"},{url:"category/index.html",revision:"db07c009e14dc0764ee13041599dc5e8"},{url:"category/plano-de-curso/index.html",revision:"ada1b3b8ecce73f1985769448fc0c989"},{url:"category/seminario-1/index.html",revision:"f8ebbdf5adbda3fa70d1444e99181279"},{url:"includes/bib.html",revision:"9ad40f0dd3b5be3a616825ea99e46e89"},{url:"includes/index.html",revision:"d140a94fa2b35158f3bd3d4faadff8ac"},{url:"includes/seminario-1-Arlei10/index.html",revision:"cdd5a24b986056e5a77171f4963088f0"},{url:"includes/seminario-1-Brenda-Martinez/index.html",revision:"d424039b157aca211add337af0cded06"},{url:"includes/seminario-1-gabrielflb/index.html",revision:"21f726418e67c59202740731a41dd0b3"},{url:"includes/seminario-1-GabrielMreira/index.html",revision:"1d421c7ff4de7421b907b3db671aebc9"},{url:"includes/seminario-1-GuiSamp/index.html",revision:"27a67b2dce471ad9efeefb020d7e4ef8"},{url:"includes/seminario-1-GuiSamp/Multiton.html",revision:"418912065aa0ac77c769765a832c3e91"},{url:"includes/seminario-1-JoaoAugustoMPdJ/index.html",revision:"8833a6734db7598cf2b2bac270801478"},{url:"includes/seminario-1-LuisMiguelADS/index.html",revision:"e034243201ed292e6056790be06eed11"},{url:"includes/seminario-1-Redror/index.html",revision:"926f5fe3f1a27f7166945af38025366a"},{url:"includes/seminario-1-Redror/Seminario.html",revision:"81ef02e25763b82bbc8b07876d4751f0"},{url:"includes/seminario-1-RiansFonseca/index.html",revision:"5ae4453ab2b5813f319f23b3d2cf7a72"},{url:"includes/seminario-1-RiansFonseca/README-MULTITON.html",revision:"842db51d73e9f897d26ce329da03dfa9"},{url:"includes/seminario-1-RiansFonseca/README-SINGLETON.html",revision:"3dd1fe47367bb1e400070f1b74a12e1d"},{url:"includes/seminario-1-SalvadorCerqueiraJr/index.html",revision:"974fe3b857f85878e66760330e77f3e1"},{url:"includes/seminario-1-YuriPepezin/ApYuri.html",revision:"842bf81ce5b7ffd41b7713ab63bf0bfd"},{url:"includes/seminario-1-YuriPepezin/index.html",revision:"d222cb63f90882d63378993c1dae9f3e"},{url:"includes/seminario-1-zevictoros/index.html",revision:"9758c576e33ecf3ead621db01b2fb004"},{url:"includes/SOLID.html",revision:"f2c834a6455ccaeae573f5943f83f1db"},{url:"index.html",revision:"6e745374ad4aebe33cf4b1af32ea4b05"},{url:"posts/04_PadroesProjetos.html",revision:"fcb89b91a1d9b773172b7e41a4c8f2cd"},{url:"posts/Atividades/05_CodigoRefatoracao.html",revision:"a20cde84d6c54777bb866e11b4b1c1e8"},{url:"posts/Atividades/index.html",revision:"cbc25c641d26cccc2b2004ac12032727"},{url:"posts/ementa.html",revision:"493faf701336773fb18eda26c6133406"},{url:"posts/GOF/09_criacionais.html",revision:"690eb3b8dc3817a743ccdb87e1d3cd69"},{url:"posts/GOF/10_estruturuais.html",revision:"b980e29db338db68b0be496fa55ea460"},{url:"posts/GOF/11_comportamentais.html",revision:"99b14e6af6750895c4574c749e014202"},{url:"posts/GOF/index.html",revision:"54122e4d8269d158c7fd20732042e7cd"},{url:"posts/GOF/Strategy.html",revision:"1dc8d4e2698287c62f334b38f8e9deac"},{url:"posts/index.html",revision:"7951973369b7d57aed70c95c0882fc14"},{url:"posts/OO/01_revisao_poo.html",revision:"362a2937ed48399964ddca9eb0625e6f"},{url:"posts/OO/02_revisao_poo2.html",revision:"26adbecadc810c00950b3deaea9b0daf"},{url:"posts/OO/index.html",revision:"848cfc8f4f616f1f25e9da364cc1054b"},{url:"posts/Projeto.html",revision:"c62024c86acd5860d73efe189484a062"},{url:"posts/Seminarios/index.html",revision:"70a1b362ae77f7b98e86eb79b72c488c"},{url:"posts/Seminarios/seminario-1/Abstract_Factory.html",revision:"64e9f7a7e72fbb427d0b9f13a5c3f5e5"},{url:"posts/Seminarios/seminario-1/Builder.html",revision:"801b3181c43a002e1fea2ab70c02eef6"},{url:"posts/Seminarios/seminario-1/Factory_Method.html",revision:"410e52a65d7f42ee2d2c9e8f90ee8092"},{url:"posts/Seminarios/seminario-1/index.html",revision:"eed95bfbffecb2bd256264c094fa88d1"},{url:"posts/Seminarios/seminario-1/Multiton.html",revision:"87210e202b7ecd30c2cbda38893b6ccf"},{url:"posts/Seminarios/seminario-1/Object_Pool.html",revision:"44cd971db0beb7ec7c5dac4b2587fe49"},{url:"posts/Seminarios/seminario-1/Prototype.html",revision:"a82a3cc0c087ea2dcf378929e2244768"},{url:"posts/Seminarios/seminario-1/Singleton.html",revision:"5a54349bb56faebedfbb8168cc69f3b5"},{url:"posts/SOLID/03_SOLID_1.html",revision:"1736d531e951b07a5e7c9ddd48207a0c"},{url:"posts/SOLID/03_SOLID_2.html",revision:"17a778c21b12d1c53aca46195adde4eb"},{url:"posts/SOLID/03_SOLID_3.html",revision:"94b9e1b4f83228e29883aab983087af3"},{url:"posts/SOLID/03_SOLID_4.html",revision:"280bf5aa1718ff35e2b5b747f7a9897a"},{url:"posts/SOLID/03_SOLID_5.html",revision:"35cd4c407dccde36d5c0132bd7cfb097"},{url:"posts/SOLID/index.html",revision:"6ee4b96cdef5614bf73e7998dd03e2f0"},{url:"star/index.html",revision:"80d895029b80a763861f013122d56372"},{url:"tag/abstract-factory/index.html",revision:"e7d9b5c6ac78f28743eb1cdb93e0788c"},{url:"tag/builder/index.html",revision:"bca54bb15cd3b5c8e23bfd73602e0438"},{url:"tag/ementa/index.html",revision:"8c8a0a94465df0636d008beb232c3649"},{url:"tag/factory-method/index.html",revision:"c226aa0ced74db128a4e0ee5a8483c89"},{url:"tag/framwork/index.html",revision:"2488905b6b90fec5f9df618c2d057d50"},{url:"tag/gof/index.html",revision:"5f0826a5e2e0ce63de28cda0bf7beda7"},{url:"tag/index.html",revision:"3e8231d37405a3b5534462af7a04c652"},{url:"tag/multiton/index.html",revision:"0d6bb14824e87178032a5317c1516cdc"},{url:"tag/object-pool/index.html",revision:"abb24a44825b4f1012e04c9d44e32460"},{url:"tag/poo/index.html",revision:"b6de59ca4367bf8b81e64129d5469747"},{url:"tag/prototype/index.html",revision:"e9643520d388cde168392e16ba957e17"},{url:"tag/revisao/index.html",revision:"406b0d894cf0394d164aeeee4a672859"},{url:"tag/singleton/index.html",revision:"984b1e425871158e1fbd0b20173c4726"},{url:"tag/solid/index.html",revision:"ec942fb6c4a2d87049cbac53bbb9d7ee"},{url:"tag/strategy/index.html",revision:"1201fcfa882fed8c989845e611630028"},{url:"timeline/index.html",revision:"79dcfd1c47fb8a2fbf5b9b5537d98c0e"}],{}),e.cleanupOutdatedCaches()}));
