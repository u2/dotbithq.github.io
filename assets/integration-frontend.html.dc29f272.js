import{_ as r,o as l,c as i,a as n,b as s,d as a,w as t,e as c,r as p}from"./app.870e5b30.js";const d={},u=n("h1",{id:"\u524D\u7AEF\u96C6\u6210-bit",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u524D\u7AEF\u96C6\u6210-bit","aria-hidden":"true"},"#"),s(" \u524D\u7AEF\u96C6\u6210 .bit")],-1),k={id:"dotbit-js",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#dotbit-js","aria-hidden":"true"},"#",-1),v={href:"https://github.com/dotbitHQ/dotbit.js",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/dotbitHQ/dotbit.js",target:"_blank",rel:"noopener noreferrer"},m=n("blockquote",null,[n("p",null,"\u6CE8\u610F\uFF0C\u5E94\u7528\u5728\u5F97\u5230\u7528\u6237\u8BBE\u7F6E\u7684\u6570\u636E\u7684\u503C\u540E\uFF0C\u8981\u5BF9\u5176\u503C\u7684\u6709\u6548\u6027\u8FDB\u884C\u6821\u9A8C")],-1),_={href:"https://github.com/dotbitHQ/dotbit.js",target:"_blank",rel:"noopener noreferrer"},g=n("h3",{id:"\u4F9D\u8D56",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F9D\u8D56","aria-hidden":"true"},"#"),s(" \u4F9D\u8D56")],-1),y=n("p",null,"\u6211\u4EEC\u63A8\u8350\u5F00\u53D1\u8005\u81EA\u5EFA .bit Indexer\uFF0C\u4F46\u662F\u5F00\u53D1\u8005\u53EF\u4EE5\u5728\u5F00\u53D1\u9636\u6BB5\u4F7F\u7528\u5B98\u65B9\u7684 .bit Indexer \u670D\u52A1\u6765\u505A\u5F00\u53D1\u3001\u6D4B\u8BD5\uFF0C\u8BE6\u89C1\uFF1A",-1),f=c(`<h3 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// For ES Module</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;dotbit&#39;</span>
<span class="token keyword">const</span> dotbit <span class="token operator">=</span> <span class="token function">createInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// Get the account info of a .bit account</span>
dotbit<span class="token punctuation">.</span><span class="token function">records</span><span class="token punctuation">(</span><span class="token string">&quot;jeffx.bit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8F93\u51FA</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;address.polygon&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Usually&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;0xB2bE2887A26f44555835EEaCC47d65B88b6B42c2&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">ttl</span><span class="token operator">:</span> <span class="token string">&#39;300&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;address&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">subtype</span><span class="token operator">:</span> <span class="token string">&#39;polygon&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;profile.discord&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Discord Username&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;west.bit#8906&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ttl</span><span class="token operator">:</span> <span class="token string">&#39;300&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;profile&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">subtype</span><span class="token operator">:</span> <span class="token string">&#39;discord&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4E0B\u4E00\u6B65" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u4E00\u6B65" aria-hidden="true">#</a> \u4E0B\u4E00\u6B65</h4>`,5);function x(j,E){const o=p("ExternalLinkIcon"),e=p("RouterLink");return l(),i("div",null,[u,n("h2",k,[b,s(),n("a",v,[s("dotbit.js"),a(o)])]),n("p",null,[n("a",h,[s("dotbit.js"),a(o)]),s(" \u662F\u4E00\u4E2A npm \u5305\uFF0C\u5C01\u88C5\u4E86\u5BF9\u4E8E indexer \u7684 JSON-RPC \u7684\u8C03\u7528\u3002")]),n("p",null,[s("Dapp \u53EA\u9700\u96C6\u6210\u8BE5 SDK\uFF0C\u5E76\u8C03\u7528\u5BF9\u5E94\u7684\u63A5\u53E3\uFF08\u6570\u636E\u7531 .bit "),a(e,{to:"/zh/developers/integration-backend.html#das-account-indexer"},{default:t(()=>[s("das-account-indexer")]),_:1}),s("\uFF09\uFF0C\u5373\u83B7\u5F97\u6240\u9700\u7684\u6570\u636E\u3002")]),m,n("blockquote",null,[n("p",null,[n("a",_,[s("dotbit.js \u6587\u6863"),a(o)])])]),g,n("p",null,[s("\u4F7F\u7528\u8BE5 SDK \u9700\u8981\u4F9D\u8D56 "),a(e,{to:"/zh/developers/integration-backend.html"},{default:t(()=>[s("das-account-indexer")]),_:1}),s(" \u6240\u63D0\u4F9B\u7684 JSON-RPC \u670D\u52A1\u3002")]),y,n("blockquote",null,[n("p",null,[a(e,{to:"/zh/developers/integration-backend.html#%E5%AE%98%E6%96%B9-indexer-%E6%9C%8D%E5%8A%A1"},{default:t(()=>[s("\u5B98\u65B9 Indexer \u670D\u52A1")]),_:1})])]),f,n("ul",null,[n("li",null,[s("\u5982\u679C\u9700\u8981\u540E\u7AEF\u63A5\u5165 .bit\uFF0C\u8BF7\u9605\u8BFB "),a(e,{to:"/zh/developers/integration-backend.html"},{default:t(()=>[s("\u540E\u7AEF\u63A5\u5165")]),_:1})]),n("li",null,[s("\u5982\u679C\u9700\u8981\u67E5\u770B\u8BBE\u8BA1\u6307\u5357\uFF0C\u8BF7\u67E5\u770B "),a(e,{to:"/zh/developers/design-guide.html"},{default:t(()=>[s("\u8BBE\u8BA1\u6307\u5357")]),_:1})])])])}var C=r(d,[["render",x],["__file","integration-frontend.html.vue"]]);export{C as default};
