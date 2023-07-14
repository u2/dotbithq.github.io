import{_ as p,o as r,c,a as t,b as e,d as a,w as l,e as s,r as i}from"./app.870e5b30.js";const d={},u=s('<h1 id="bit-alias" tabindex="-1"><a class="header-anchor" href="#bit-alias" aria-hidden="true">#</a> .bit Alias</h1><p><strong>.bit Alias</strong> is a feature provided by .bit, which can give any address a globally-unique Alias.</p><p>For example, you can give your BTC address <code>bc123...456</code> an alias to <code>mybtc.bit</code>. That way, when other developers want to show <code>bc123...456</code> to the user, the alias <code>mybtc.bit</code> can be displayed at the same time, so that other users can verify the owner of the address.</p><p>For more information, please refer to the .bit website and articles:</p>',4),h={href:"https://www.did.id/bit-alias",target:"_blank",rel:"noopener noreferrer"},k=t("br",null,null,-1),b={href:"https://talk.did.id/t/bit-alias-comes/401",target:"_blank",rel:"noopener noreferrer"},f=t("h2",{id:"setting-up-bit-alias",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#setting-up-bit-alias","aria-hidden":"true"},"#"),e(" Setting up .bit Alias")],-1),m=t("p",null,"The .bit Alias now supports ETH/BSC/TRX/Polygon addresses.",-1),g={href:"https://app.did.id/alias",target:"_blank",rel:"noopener noreferrer"},y={href:"https://talk.did.id/t/bit/400#h-7",target:"_blank",rel:"noopener noreferrer"},_=t("h2",{id:"resolve-bit-alias",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#resolve-bit-alias","aria-hidden":"true"},"#"),e(" Resolve .bit Alias")],-1),v=t("h3",{id:"frontend-resolution",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#frontend-resolution","aria-hidden":"true"},"#"),e(" Frontend Resolution")],-1),q={href:"https://github.com/dotbitHQ/dotbit.js",target:"_blank",rel:"noopener noreferrer"},x=s(`<p>All you need to do is invoke the <code>reverseRecord</code> method and pass in the parameters to complete the resolution of the .bit Alias.</p><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> account <span class="token operator">=</span> <span class="token keyword">await</span> das<span class="token punctuation">.</span><span class="token function">reverseRecord</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;blockchain&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">key_info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">coin_type</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">chain_id</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;0x1d643fac9a463c9d544506006a6348c234da485f&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span>account <span class="token operator">===</span> <span class="token string">&#39;imac.bit&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Detailed parameters see below: <a href="#detailed-of-parameters">Detailed of Parameters</a></p></blockquote><h3 id="backend-resolution" tabindex="-1"><a class="header-anchor" href="#backend-resolution" aria-hidden="true">#</a> Backend Resolution</h3>`,5),w={href:"https://github.com/dotbitHQ/das-account-indexer",target:"_blank",rel:"noopener noreferrer"},A=s(`<p>All you need to do is invoke the <code>das_reverseRecord</code> method and pass in the parameters to complete the resolution of the .bit Alias.</p><h4 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example</h4><p><strong>Request</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST https://indexer-basic.did.id -d&#39;<span class="token punctuation">{</span><span class="token string">&quot;jsonrpc&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2.0&quot;</span>,<span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,<span class="token string">&quot;method&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;das_reverseRecord&quot;</span>,<span class="token string">&quot;params&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;blockchain&quot;</span>,<span class="token string">&quot;key_info&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;coin_type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;60&quot;</span>,<span class="token string">&quot;chain_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1&quot;</span>,<span class="token string">&quot;key&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0x1d643fac9a463c9d544506006a6348c234da485f&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Response</strong></p><div class="language-json5 ext-json5 line-numbers-mode"><pre class="language-json5"><code><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;jsonrpc&quot;</span><span class="token operator">:</span><span class="token string">&quot;2.0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;result&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;errno&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;errmsg&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;account&quot;</span><span class="token operator">:</span><span class="token string">&quot;imac.bit&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Detailed parameters see below: <a href="#detailed-of-parameters">Detailed of Parameters</a></p></blockquote><h3 id="detailed-of-parameters" tabindex="-1"><a class="header-anchor" href="#detailed-of-parameters" aria-hidden="true">#</a> Detailed of Parameters</h3><p>Both the front-end function call and the back-end JSON-RPC call need to pass in the same parameters:</p><div class="language-json5 ext-json5 line-numbers-mode"><pre class="language-json5"><code><span class="token punctuation">{</span>
  <span class="token property unquoted">type</span><span class="token operator">:</span> <span class="token string">&#39;blockchain&#39;</span><span class="token punctuation">,</span>
  <span class="token property unquoted">key_info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property unquoted">coin_type</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
    <span class="token property unquoted">chain_id</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
    <span class="token property unquoted">key</span><span class="token operator">:</span> <span class="token string">&#39;0x1d643fac9a463c9d544506006a6348c234da485c&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The values of each field are as follows:</p><h4 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h4><p>The type of data to be parsed, currently only &#39;blockchain&#39; is supported, but &#39;OpenPGP&#39; and &#39;SSL&#39; will be supported in the future.</p><h4 id="coin-type" tabindex="-1"><a class="header-anchor" href="#coin-type" aria-hidden="true">#</a> coin_type</h4>`,14),T=t("code",null,"coin_type",-1),S={href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md",target:"_blank",rel:"noopener noreferrer"},C=s('<p>Here are some common values:</p><table><thead><tr><th style="text-align:left;">coin_type</th><th style="text-align:left;">Symbol</th><th style="text-align:left;">Chain</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;">BTC</td><td style="text-align:left;">Bitcoin</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;">DOGE</td><td style="text-align:left;">Dogecoin</td></tr><tr><td style="text-align:left;">60</td><td style="text-align:left;">ETH</td><td style="text-align:left;">Ethereum</td></tr><tr><td style="text-align:left;">966</td><td style="text-align:left;">MATIC</td><td style="text-align:left;">Matic</td></tr><tr><td style="text-align:left;">9006</td><td style="text-align:left;">BSC</td><td style="text-align:left;">Binance Smart Chain</td></tr></tbody></table>',2),B={href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md",target:"_blank",rel:"noopener noreferrer"},E=s('<h4 id="chain-id" tabindex="-1"><a class="header-anchor" href="#chain-id" aria-hidden="true">#</a> chain_id</h4><p>In the case of EVM compatible chains, <code>chain_id</code> can be used to further distinguish specific chains, such as ETH, BSC, and HECO.</p><p>Here are some common values:</p><table><thead><tr><th style="text-align:left;">chain_id</th><th style="text-align:left;">Symbol</th><th style="text-align:left;">Chain</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:left;">ETH</td><td style="text-align:left;">Ethereum</td></tr><tr><td style="text-align:left;">56</td><td style="text-align:left;">BNB</td><td style="text-align:left;">Binance Smart Chain</td></tr><tr><td style="text-align:left;">137</td><td style="text-align:left;">MATIC</td><td style="text-align:left;">Polygon</td></tr></tbody></table>',4),j={href:"https://chainlist.org/",target:"_blank",rel:"noopener noreferrer"},R=t("h4",{id:"key",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#key","aria-hidden":"true"},"#"),e(" key")],-1),P=t("p",null,[e("This is the specific value, like the ETH address of user: "),t("code",null,"0x1d643fac9a463c9d544506006a6348c234da485c"),e(".")],-1);function I(H,D){const n=i("ExternalLinkIcon"),o=i("RouterLink");return r(),c("div",null,[u,t("blockquote",null,[t("p",null,[t("a",h,[e(".bit Alias Website"),a(n)]),k,t("a",b,[e(".bit Alias Comes!"),a(n)])])]),f,m,t("p",null,[e("Users can visit "),t("a",g,[e(".bit Alias App"),a(n)]),e(" and log in their wallet, then they can set up .bit Alias for their addresses.")]),t("blockquote",null,[t("p",null,[e("More information in "),t("a",y,[e(".bit Alias Guide"),a(n)])])]),_,v,t("p",null,[e("If you want to resolve .bit Alias in frontend, you need to use "),t("a",q,[e("dotbit.js"),a(n)]),e(".")]),t("blockquote",null,[t("p",null,[e("More information in "),a(o,{to:"/developers/integration-frontend.html"},{default:l(()=>[e("Frontend Integration")]),_:1})])]),x,t("p",null,[e("If you want to resolve .bit Alias in backend, you need to set up "),t("a",w,[e("das-account-indexer"),a(n)]),e(" first.")]),t("blockquote",null,[t("p",null,[e("Please see "),a(o,{to:"/developers/integration-backend.html"},{default:l(()=>[e("Backend Integration")]),_:1})])]),A,t("p",null,[e("The "),T,e(" of the target address\uFF0Cfollowing "),t("a",S,[e("SLIP-0044 Spec"),a(n)]),e(" \u3002")]),C,t("blockquote",null,[t("p",null,[e("See "),t("a",B,[e("SLIP-0044 Spec"),a(n)]),e(" \u3002")])]),E,t("blockquote",null,[t("p",null,[e("The data is from "),t("a",j,[e("Chainlist"),a(n)])])]),R,P])}var M=p(d,[["render",I],["__file","dotbit-alias.html.vue"]]);export{M as default};
