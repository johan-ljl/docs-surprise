import{_ as s,c as a,o as e,a as n}from"./app.22356a8a.js";const l="/docs-surprise/assets/vue2_reactive_pattern.8b7ae1ae.png",y=JSON.parse('{"title":"Vue2 Reactive","description":"","frontmatter":{},"headers":[{"level":2,"title":"Dep","slug":"dep","link":"#dep","children":[]},{"level":2,"title":"Observer","slug":"observer","link":"#observer","children":[]},{"level":2,"title":"Watcher","slug":"watcher","link":"#watcher","children":[]},{"level":2,"title":"Compiler","slug":"compiler","link":"#compiler","children":[]},{"level":2,"title":"Vue","slug":"vue","link":"#vue","children":[]}],"relativePath":"vue/vue2-reactive.md","lastUpdated":1671451261000}'),p={name:"vue/vue2-reactive.md"},r=n('<h1 id="vue2-reactive" tabindex="-1">Vue2 Reactive <a class="header-anchor" href="#vue2-reactive" aria-hidden="true">#</a></h1><p><img src="'+l+`" alt="vue2_reactive_pattern.png"></p><div class="info custom-block"><p class="custom-block-title">\u7B80\u4ECB</p><p><strong>Vue2 \u54CD\u5E94\u5F0F\u57FA\u672C\u6D41\u7A0B\uFF1A</strong></p><ol><li>Vue\u5B9E\u4F8B\u521B\u5EFA -&gt; Observer \u5BF9\u5B9E\u4F8B\u4E2D Data \u904D\u5386\u4F7F\u7528 Object.defineProperty \u8FDB\u884C\u6570\u636E\u52AB\u6301\uFF0C\u5E76\u4F7F\u7528 getter \u548C setter \u83B7\u53D6\u76D1\u542C</li><li>Vue Template or Render \u8FDB\u884C\u7F16\u8BD1 -&gt; \u7F16\u8BD1\u4E2D\u9047\u5230 Model\u53D8\u91CF \u7684\u5F15\u7528 -&gt; \u521B\u5EFA Watcher\u89C2\u5BDF\u8005 -&gt; \u5E76\u901A\u8FC7 Object.defineProperty \u4E2D\u7684 getter \u5411 Dep\u53D1\u5E03\u8005 \u6DFB\u52A0\u89C2\u5BDF\u8005 -&gt; \u6700\u540E\u7F16\u8BD1\u5B8C\u6210\uFF0C\u521B\u5EFA View\u5C42</li><li>View\u5C42 or Model\u5C42 \u7684\u6570\u636E\u53D8\u5316 -&gt; \u4F1A\u88AB Object.defineProperty \u76D1\u542C\u5230\u53D8\u5316 -&gt; \u6B64\u65F6 Dep \u8FDB\u884C\u904D\u5386 Watcher \u8FDB\u884C\u901A\u77E5 -&gt; Watcher \u5185\u90E8\u901A\u8FC7 newValue\u548ColdValue \u7684\u6BD4\u8F83\u6765\u66F4\u65B0 View\u5C42</li></ol></div><h2 id="dep" tabindex="-1">Dep <a class="header-anchor" href="#dep" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">\u53D1\u5E03\u8005</p><p>\u7528\u4E8E\u5B58\u50A8 Watcher\u89C2\u5BDF\u8005\uFF0C\u4EE5\u53CA\u901A\u77E5 Watcher\u89C2\u5BDF\u8005 \u6570\u636E\u5DF2\u53D8\u5316</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#66D9EF;">class</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;font-weight:bold;">Dep</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;">constructor</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#88846F;">// \u5B58\u50A8\u6240\u6709Watcher</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.subs </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [];</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// \u6DFB\u52A0Watcher</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">addSub</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">sub</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.subs.</span><span style="color:#A6E22E;">push</span><span style="color:#F8F8F2;">(sub);</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// \u5BF9\u6BCF\u4E2AWatcher\u53D1\u5E03\u901A\u77E5</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">notify</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.subs.</span><span style="color:#A6E22E;">forEach</span><span style="color:#F8F8F2;">((</span><span style="color:#FD971F;">sub</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">            sub.</span><span style="color:#A6E22E;">update</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F8F8F2;">        });</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></div><h2 id="observer" tabindex="-1">Observer <a class="header-anchor" href="#observer" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">\u53D1\u5E03\u8005</p><p>\u7528\u4E8E\u5B58\u50A8 Watcher\u89C2\u5BDF\u8005\uFF0C\u4EE5\u53CA\u901A\u77E5 Watcher\u89C2\u5BDF\u8005 \u6570\u636E\u5DF2\u53D8\u5316</p></div><h2 id="watcher" tabindex="-1">Watcher <a class="header-anchor" href="#watcher" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">\u53D1\u5E03\u8005</p><p>\u7528\u4E8E\u5B58\u50A8 Watcher\u89C2\u5BDF\u8005\uFF0C\u4EE5\u53CA\u901A\u77E5 Watcher\u89C2\u5BDF\u8005 \u6570\u636E\u5DF2\u53D8\u5316</p></div><h2 id="compiler" tabindex="-1">Compiler <a class="header-anchor" href="#compiler" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">\u53D1\u5E03\u8005</p><p>\u7528\u4E8E\u5B58\u50A8 Watcher\u89C2\u5BDF\u8005\uFF0C\u4EE5\u53CA\u901A\u77E5 Watcher\u89C2\u5BDF\u8005 \u6570\u636E\u5DF2\u53D8\u5316</p></div><h2 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">\u53D1\u5E03\u8005</p><p>\u7528\u4E8E\u5B58\u50A8 Watcher\u89C2\u5BDF\u8005\uFF0C\u4EE5\u53CA\u901A\u77E5 Watcher\u89C2\u5BDF\u8005 \u6570\u636E\u5DF2\u53D8\u5316</p></div>`,13),c=[r];function t(o,i,F,d,u,h){return e(),a("div",null,c)}const v=s(p,[["render",t]]);export{y as __pageData,v as default};
