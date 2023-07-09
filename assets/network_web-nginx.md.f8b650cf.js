import{_ as s,c as n,o as a,O as l}from"./chunks/framework.d7e37bdc.js";const m=JSON.parse('{"title":"Nginx","description":"","frontmatter":{},"headers":[],"relativePath":"network/web-nginx.md","filePath":"network/web-nginx.md","lastUpdated":1688875425000}'),e={name:"network/web-nginx.md"},p=l(`<h1 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h1><h2 id="负载均衡" tabindex="-1">负载均衡 <a class="header-anchor" href="#负载均衡" aria-label="Permalink to &quot;负载均衡&quot;">​</a></h2><div class="language-nginx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki monokai"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">upstream</span><span style="color:#F8F8F2;"> nginx_boot{</span></span>
<span class="line"><span style="color:#F8F8F2;">   </span><span style="color:#88846F;"># 30s内检查心跳发送两次包，未回复就代表该机器宕机，请求分发权重比为1:2</span></span>
<span class="line"><span style="color:#F8F8F2;">   </span><span style="color:#F92672;">server</span><span style="color:#F8F8F2;"> 192.168.0.000:8080 </span><span style="color:#FD971F;font-style:italic;">weight</span><span style="color:#F92672;">=</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;"> max_fails=2 </span><span style="color:#FD971F;font-style:italic;">fail_timeout</span><span style="color:#F92672;">=</span><span style="color:#AE81FF;">30s</span><span style="color:#F8F8F2;">; </span></span>
<span class="line"><span style="color:#F8F8F2;">   server 192.168.0.000:8090 </span><span style="color:#FD971F;font-style:italic;">weight</span><span style="color:#F92672;">=</span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;"> max_fails=2 </span><span style="color:#FD971F;font-style:italic;">fail_timeout</span><span style="color:#F92672;">=</span><span style="color:#AE81FF;">30s</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">   </span><span style="color:#88846F;"># 这里的IP请配置成你WEB服务所在的机器IP</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">server {</span></span>
<span class="line"><span style="color:#F8F8F2;">    location / {</span></span>
<span class="line"><span style="color:#F8F8F2;">        root   html;</span></span>
<span class="line"><span style="color:#F8F8F2;">       </span><span style="color:#F92672;"> index </span><span style="color:#F8F8F2;"> index.html index.htm</span></span>
<span class="line"><span style="color:#F8F8F2;">        proxy_set_header Host $host;</span></span>
<span class="line"><span style="color:#F8F8F2;">       </span><span style="color:#F92672;"> proxy_set_header </span><span style="color:#F8F8F2;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#F8F8F2;">       </span><span style="color:#F92672;"> proxy_set_header </span><span style="color:#F8F8F2;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#88846F;"># 请求交给名为nginx_boot的upstream上</span></span>
<span class="line"><span style="color:#F8F8F2;">       </span><span style="color:#F92672;"> proxy_pass </span><span style="color:#F8F8F2;">http://nginx_boot;</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="压缩" tabindex="-1">压缩 <a class="header-anchor" href="#压缩" aria-label="Permalink to &quot;压缩&quot;">​</a></h2><h2 id="缓存" tabindex="-1">缓存 <a class="header-anchor" href="#缓存" aria-label="Permalink to &quot;缓存&quot;">​</a></h2><h2 id="跨域" tabindex="-1">跨域 <a class="header-anchor" href="#跨域" aria-label="Permalink to &quot;跨域&quot;">​</a></h2>`,6),o=[p];function r(t,c,i,F,y,b){return a(),n("div",null,o)}const _=s(e,[["render",r]]);export{m as __pageData,_ as default};
