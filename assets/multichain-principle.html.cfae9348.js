import{_ as s,o as r,c as l,a as e,b as t,d as i,w as c,e as h,r as a}from"./app.870e5b30.js";var u="/assets/image-blockchain-cryptographics.00c8915b.png";const p={},d=h('<h1 id="bit-multi-chain-principle" tabindex="-1"><a class="header-anchor" href="#bit-multi-chain-principle" aria-hidden="true">#</a> .bit Multi-Chain Principle</h1><p>So far, .bit is the only Web3 DID that truly supports multi-chain. In the future, .bit will continue to support all EVM chains, social accounts, TouchID, FaceID, etc.</p><p>Currently, .bit already supports buying and holding public chain addresses from the following chains:</p><ul><li>Ethereum</li><li>Tron</li><li>Dogecoin</li><li>BNB Chain</li><li>Polygon</li></ul><p>To help you better understand .bit, here is an introduction to how .bit implements multi-chain.</p><h2 id="open-cryptographic-primitives" tabindex="-1"><a class="header-anchor" href="#open-cryptographic-primitives" aria-hidden="true">#</a> Open Cryptographic Primitives</h2><p>As we all know, the .bit contract is deployed on Nervos CKB (referred to as CKB later). The reason why the .bit team chose CKB is because of CKB&#39;s core ability: open cryptographic primitives. Based on this feature, .bit allows users to register and hold .bit accounts using any public chain address.</p><p>The vast majority of existing blockchains have a fixed template script for verifying transactions, and everyone will verify the signature according to the fixed verification logic.</p><blockquote><p>For example, BTC, as a representative of many blockchains, uses the Secp256k1 ECDSA signature algorithm, and verifies whether the transaction signature is correct according to a fixed Script template (the OP_CHECKSIG operation code behind it uses the relevant algorithms of ECDSA).</p></blockquote><p>Compared with the fixed verification mode of the stack of BTC, CKB abstracts it into a Turing-complete code. This allows developers to use any signature algorithm, as long as this code does not report an error, it is considered to have unlocked the assets inside.</p><blockquote><p>If the object that carries the blockchain assets is compared to a safe, then in BTC and other chains, the lock on this safe can only be &quot;Bull&quot; brand, while on CKB, you can freely choose the brand of this lock. It can be &quot;cow&quot; or &quot;heifer&quot;, or even a fingerprint lock or using an audio to unlock, or even without locking (that is, anyone can spend the assets inside).</p></blockquote><p>In other words, no matter what algorithm/method the public chain uses to sign, we only need to adopt the same algorithm/method to verify the signature on the contract side of CKB. Therefore, in theory, CKB supports any signature algorithm.</p><p>The following is the application of various algorithms in blockchains: <img src="'+u+'" alt="img.png"></p><p>Currently, .bit already supports ECDSA and EdDSA signature algorithms, so in theory, it can almost seamlessly support chain users who use these two signature algorithms without the need to care about what CKB is. Users can directly use the address/public-private key of the current chain to manage the .bit account.</p><h2 id="using-dogecoin-as-an-example" tabindex="-1"><a class="header-anchor" href="#using-dogecoin-as-an-example" aria-hidden="true">#</a> Using Dogecoin as an example</h2><p>As we all know, Dogecoin does not have &quot;smart contracts&quot;, making it difficult to implement a DID naming system based on Dogecoin. However, .bit now allows you to use Dogecoin to hold .bit accounts, relying on the open cryptographic primitives mentioned above.</p><p>To use a DOGE address (private key) to manage a .bit account, the following two problems need to be solved:</p>',17),g=e("p",null,"How to generate the signature digest?",-1),b={href:"https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/nervosnetwork/ckb-system-scripts/wiki/How-to-sign-transaction",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"What is the signing convention?",-1),y={href:"https://github.com/bitcoin/bitcoin/blob/40e1c4d4024b8ad35f2511b2e10bf80c5531dfde/src/util/message.cpp#L25",target:"_blank",rel:"noopener noreferrer"},w={href:"https://eips.ethereum.org/EIPS/eip-191",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/bitcoinjs/bitcoinjs-lib",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"Fortunately, there are ready-made solutions to the above problems, and we only need to:",-1),k=e("ol",null,[e("li",null,"Utilize the ability of CKB's custom cryptographic primitives to support DOGE's signature algorithm in the .bit contract."),e("li",null,"Implement the signature call for DOGE on the user side."),e("li",null,"When operating, the .bit contract verifies whether the user's signature is valid. If it is valid, it allows the user to perform subsequent operations on the .bit account; if it is invalid, it rejects the operation.")],-1),C=e("h2",{id:"faq",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#faq","aria-hidden":"true"},"#"),t(" FAQ")],-1),B=e("h3",{id:"why-can-users-pay-with-eth-tron-bnb-to-purchase-bit",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#why-can-users-pay-with-eth-tron-bnb-to-purchase-bit","aria-hidden":"true"},"#"),t(" Why can users pay with ETH/TRON/BNB to purchase .bit?")],-1);function x(D,T){const o=a("ExternalLinkIcon"),n=a("RouterLink");return r(),l("div",null,[d,e("ol",null,[e("li",null,[g,e("blockquote",null,[e("p",null,[t('We know that ECDSA is a signature/verification method for a message (referred to as "message digest" below), and '),e("a",b,[t("BIP143"),i(o)]),t(' specifies the specific rules for turning transactions into message digests. However, .bit is based on CKB applications, and because the transaction structure is different, we cannot follow this rule. Fortunately, CKB has its own "BIP143", which is detailed in '),e("a",m,[t("this official document"),i(o)]),t(", explaining the process of generating message digests from CKB transactions.")])])]),e("li",null,[f,e("blockquote",null,[e("ol",null,[e("li",null,[t("UTXO wallets have had signing conventions for messages for a long time (for security reasons), first by concatenating some "),e("a",y,[t("prefixes"),i(o)]),t(" to the original unsigned content (which gradually evolved into "),e("a",w,[t("EIP191"),i(o)]),t(" later), and then using the ECDSA signature algorithm to get the signature result.")]),e("li",null,[t("There are now multiple language implementations, such as a JavaScript implementation: "),e("a",v,[t("bitcoinjs-lib"),i(o)]),t(".")])])])])]),_,k,C,B,e("p",null,[t("This involves another part of the .bit ecosystem: the registrar. Please visit here to learn more: "),i(n,{to:"/contribute-to-das/registrar.html"},{default:c(()=>[t(".bit registrar")]),_:1})])])}var q=s(p,[["render",x],["__file","multichain-principle.html.vue"]]);export{q as default};
