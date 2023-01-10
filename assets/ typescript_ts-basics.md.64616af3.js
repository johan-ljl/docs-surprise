import{_ as s,c as n,o as a,a as l}from"./app.9e35db72.js";const d=JSON.parse('{"title":"Typescript 基础","description":"","frontmatter":{},"headers":[],"relativePath":" typescript/ts-basics.md","lastUpdated":1673343761000}'),p={name:" typescript/ts-basics.md"},e=l(`<h1 id="typescript-基础" tabindex="-1">Typescript 基础 <a class="header-anchor" href="#typescript-基础" aria-hidden="true">#</a></h1><p>强类型定义，静态类型检测</p><p>需要npm i -g typescript 安装，tsc &#39;.ts&#39;⽂件进⾏编译，再通过node &#39;.js&#39;运⾏编译后的⽂件</p><p><strong>基础类型</strong></p><ol><li>any：任意类型 <ol><li>变量可以赋予任意类型的值</li></ol></li><li>number：数字类型 <ol><li>变量表示整数和分数（二进制到十六进制）</li></ol></li><li>string：字符串类型 <ol><li>变量表示字符串</li></ol></li><li>boolean：布尔类型 <ol><li>变量表示逻辑（true和false）</li></ol></li><li>[]：数组类型 <ol><li>变量为数组</li></ol></li><li>let x:[string,number] == x [&#39;string&#39;,1]：元祖类型 <ol><li>变量为已知定义的类型，对应赋值类型必须相同</li></ol></li><li>enum：枚举类型</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">enum</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Color</span><span style="color:#F8F8F2;"> {Red, Green, Blue};</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> c</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Color</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Color.Blue;</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(c);    </span><span style="color:#88846F;">// 输出 2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>void：没有返回值 定义函数，没有返回值 null 变量的值缺失 undefined 变量初始化是一个未定义的值 never 定义函数，其他类型的子类型，代表从不会出现的值</p><p><strong>变量声明</strong></p><ol><li>var 变量：类型 = 值</li></ol><p><strong>运算符</strong></p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai"><code><span class="line"><span style="color:#88846F;">// 算术运算符</span></span>
<span class="line"><span style="color:#F92672;">+</span><span style="color:#F8F8F2;">、</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">、</span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;">、</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">、</span><span style="color:#F92672;">%</span><span style="color:#F8F8F2;">、</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">、</span><span style="color:#F92672;">--</span></span>
<span class="line"><span style="color:#88846F;">// 关系运算符</span></span>
<span class="line"><span style="color:#F92672;">==</span><span style="color:#F8F8F2;">、</span><span style="color:#F92672;">!=</span><span style="color:#F8F8F2;">、</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">、</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">、</span><span style="color:#F92672;">&gt;=</span><span style="color:#F8F8F2;">、</span><span style="color:#F92672;">&lt;=</span></span>
<span class="line"><span style="color:#88846F;">// 逻辑运算符</span></span>
<span class="line"><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;">（and）、</span><span style="color:#F92672;">||</span><span style="color:#F8F8F2;">（or）、</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">（not）</span></span>
<span class="line"><span style="color:#88846F;">// 赋值运算符</span></span>
<span class="line"><span style="color:#F92672;">=</span><span style="color:#F8F8F2;">、</span><span style="color:#F92672;">+=</span><span style="color:#F8F8F2;">、</span><span style="color:#F92672;">-=</span><span style="color:#F8F8F2;">、\\</span><span style="color:#F92672;">*=</span><span style="color:#F8F8F2;">、</span><span style="color:#F92672;">/=</span></span>
<span class="line"><span style="color:#88846F;">// 三元运算符</span></span>
<span class="line"><span style="color:#F8F8F2;">age </span><span style="color:#F92672;">?</span><span style="color:#F8F8F2;"> var1 </span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> var2</span></span>
<span class="line"><span style="color:#88846F;">// 类型运算符</span></span>
<span class="line"><span style="color:#F92672;">typeof</span><span style="color:#F8F8F2;"> var  </span><span style="color:#88846F;">// 返回操作数的类型</span></span>
<span class="line"><span style="color:#F92672;">instanceof</span><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">// 判断对象是否为指定的类型</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><strong>条件语句</strong></p><p>1 if语句</p><p>2 if...else语句</p><p>3 if...else if...else语句 4 switch(){</p><p>5 case var: {</p><p>6 break;</p><p>7 }</p><p>8 default: {</p><p>9 break</p><p>10 }</p><p>11 }</p><p><strong>循环语句</strong></p><p>1 for</p><p>2 for in 3 for of 4 forEach 5 every</p><p>6 some</p><p>7 while</p><p>8 do...while</p><p>9 break；终⽌循环</p><p>10 continue；跳过当前循环 11 ⽆限循环</p><p><strong>函数</strong></p><ol><li>function和js一样</li><li>参数可以定义类型 function (s: number)</li><li>可选参数 function (s?; number)</li><li>默认参数 function (s:number = 0.5)</li><li>剩余参数 function (...s:number[])</li><li><strong>函数重载</strong></li></ol><p>1 // 函数声明，定义具有多个不同类型：参数类型，返回值类型的同名函数 2 // 减少代码量，让函数具有多个类型约束</p><p>3 function disp(x:string):void;</p><p>4 function disp(x:number):void;</p><p>5 // 函数实现</p><p>6 function disp(x:number | string):void {}</p><ol><li>重载的⽅法名字相同，但是参数不同</li><li>每个重载⽅法都必须有⼀个独⼀⽆⼆的参数类型列表</li></ol><p><strong>联合类型</strong></p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> arr</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">|</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">string</span></span>
<span class="line"><span style="color:#88846F;">// 符合两个类型之一都可</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>类型别名</strong></p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">type</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Name</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">string</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">type</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Age</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">type</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Resolver</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Name</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">|</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Age</span></span>
<span class="line"><span style="color:#88846F;">// type 创建类型别名</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">type</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">NameResolver</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> () </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">string</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">vvvv</span><span style="color:#F8F8F2;">()</span><span style="color:#F92672;">:</span><span style="color:#A6E22E;text-decoration:underline;">NameResolver</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> () </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;11&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#88846F;">// 类型别名常用于联合类型/交叉类型</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>联合断⾔</strong></p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai"><code><span class="line"><span style="color:#F8F8F2;">a </span><span style="color:#F92672;">as</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">string</span></span>
<span class="line"><span style="color:#F8F8F2;">(a </span><span style="color:#F92672;">as</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">string</span><span style="color:#F8F8F2;">).age  </span><span style="color:#88846F;">// a.age</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#66D9EF;font-style:italic;">string</span><span style="color:#F8F8F2;">&gt;a</span></span>
<span class="line"><span style="color:#F8F8F2;">(&lt;</span><span style="color:#66D9EF;font-style:italic;">string</span><span style="color:#F8F8F2;">&gt;a).age  </span><span style="color:#88846F;">// a.age</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>接⼝</strong></p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">interface</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">person</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    firstname：string,</span></span>
<span class="line"><span style="color:#F8F8F2;">    lastname：string</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">var</span><span style="color:#F8F8F2;"> child</span><span style="color:#F92672;">:</span><span style="color:#A6E22E;text-decoration:underline;">person</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    firstname: </span><span style="color:#E6DB74;">&#39;hello&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    lastname: </span><span style="color:#E6DB74;">&#39;world&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AE81FF;">1.</span><span style="color:#F8F8F2;"> 使⽤ interface定义接⼝，使⽤具体类去实现定义的接⼝类型</span></span>
<span class="line"><span style="color:#AE81FF;">2.</span><span style="color:#F8F8F2;"> 使⽤ implements实现接⼝（还可以实现类型）</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>声明合并</strong></p><ol><li>接⼝合并</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">interface</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">A</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    number</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">interface</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">A</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    age</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">string</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#88846F;">// 等价于,相同名称的interface会自动合并</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">interface</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">A</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    number</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">number</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    age</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">string</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="2"><li>函数合并</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai"><code><span class="line"><span style="color:#88846F;">// 函数合并就是函数重载</span></span>
<span class="line"><span style="color:#88846F;">// 定义多个不同类型参数 or 不同类型返回值的同名函数</span></span>
<span class="line"><span style="color:#88846F;">// 最后来实现同名函数定义的多个类型</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3"><li><strong>联合类型</strong> (如果⼀个值是联合类型， <strong>只能访问联合类型的共有成员</strong> )</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">interface</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">BB</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    number</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">string</span></span>
<span class="line"><span style="color:#F8F8F2;">    age</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">string</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">interface</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">BC</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    age</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">string</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">vv</span><span style="color:#F8F8F2;">()</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">BB</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">|</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">BC</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">        age: </span><span style="color:#E6DB74;">&#39;1&#39;</span><span style="color:#F8F8F2;">,  </span><span style="color:#88846F;">// 可以只返回age</span></span>
<span class="line"><span style="color:#F8F8F2;">        number: </span><span style="color:#E6DB74;">&#39;s&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#88846F;">// 只能访问多个类型的共有成员</span></span>
<span class="line"><span style="color:#A6E22E;">vv</span><span style="color:#F8F8F2;">().age </span><span style="color:#88846F;">// &#39;1&#39;</span></span>
<span class="line"><span style="color:#A6E22E;">vv</span><span style="color:#F8F8F2;">().number </span><span style="color:#88846F;">//  error(BC不存在number)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ol start="4"><li><strong>交叉类型</strong>（把多个类型合并成⼀个类型，包含合并的所有类型）</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">vv</span><span style="color:#F8F8F2;">()</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">BB</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">BC</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#88846F;">// 必须返回所有类型的属性</span></span>
<span class="line"><span style="color:#F8F8F2;">        age: </span><span style="color:#E6DB74;">&#39;1&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        number: </span><span style="color:#E6DB74;">&#39;s&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">vv</span><span style="color:#F8F8F2;">().age </span><span style="color:#88846F;">// &#39;1&#39;</span></span>
<span class="line"><span style="color:#A6E22E;">vv</span><span style="color:#F8F8F2;">().number </span><span style="color:#88846F;">// &#39;s&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>类</strong></p><ol><li>通过class定义类 <ol><li>constructor()定义构造函数和实例接收参数</li><li>disp(){}定义方法函数</li><li>通过new 类，创建一个实例对象</li></ol></li><li>类的继承</li><li>class Child extends Person</li><li>该类具有person类的所有方法和构造函数</li><li>通过创建实例的传参，会person类的构造函数，进行赋值等操作</li><li>多重继承</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">class</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Child</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">extends</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;font-style:italic;text-decoration:underline;">Person</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">class</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">exleaf</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">extends</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;font-style:italic;text-decoration:underline;">Child</span><span style="color:#F8F8F2;"> </span></span>
<span class="line"><span style="color:#88846F;">// exleaf继承了Child和Person类</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="4"><li>static关键字 <ol><li>定义类的数据成员为静态</li><li>可以直接通过类名调用</li></ol></li><li>instanceof运算符</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">var</span><span style="color:#F8F8F2;"> obj </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">Person</span><span style="color:#F8F8F2;">() </span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">var</span><span style="color:#F8F8F2;"> isPerson </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> obj </span><span style="color:#F92672;">instanceof</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Person</span><span style="color:#F8F8F2;">; </span></span>
<span class="line"><span style="color:#88846F;">// 判断obj是不是指定的类型，或者说指定是类实例化而来</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="6"><li>访问控制修饰符</li><li>public：公有属性，可以在任何地⽅访问</li></ol><p><strong>i. 实例可访问，⼦类可访问，</strong> class<strong>内部可访问</strong></p><ol start="2"><li>private：私有的，只能在该类访问</li><li><strong>实例不可访问，⼦类不访问，</strong> class<strong>内部可访问</strong></li><li><strong>不允许被继承和实例化</strong></li><li>protected：受保护的，可以被⾃身和⼦类、⽗类访问</li><li><strong>实例不可访问，⼦类可访问，</strong> class<strong>内部可访问</strong></li><li><strong>只允许被继承</strong></li><li>readonly：只读的</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">class</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Animal</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">// public name: string;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">public</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">constructor</span><span style="color:#F8F8F2;">(</span><span style="color:#F92672;">public</span><span style="color:#F8F8F2;"> </span><span style="color:#FD971F;font-style:italic;">name</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// this.name = name;</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#88846F;">// 可以在构造函数中定义参数的修饰符</span></span>
<span class="line"><span style="color:#88846F;">// 相当于在class中定义该属性，并将name参数的值赋值给class中的name</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="7"><li>类的接⼝和实现 <ol><li>定义接⼝： interface</li><li>实现接⼝： implements</li><li>需要实现接⼝定义的属性</li></ol></li><li>类的抽象类</li><li>做为其他⼦类的基类使⽤，不能够被实例化，抽象类的抽象⽅法必须在⼦类中实现</li><li>具有抽象⽅法的类，也是抽象类，⼦类继承抽象类必须实现抽象⽅法（<strong>所谓的多态</strong>）</li><li><strong>⽗类定义抽象⽅法不能实现该⽅法，必须是继承它的⼦类去实现，不同的⼦类有不同表现</strong></li><li>抽象⽅法需要在⼦类中实现，虽然普通基类也可以达到效果，但是抽象⽅法会给⼈提示作⽤</li><li>抽象类中的抽象⽅法必须被⼦类实现</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai"><code><span class="line"><span style="color:#88846F;">// 定义抽象类</span></span>
<span class="line"><span style="color:#F92672;">abstract</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;font-style:italic;">class</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">Department</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">constructor</span><span style="color:#F8F8F2;">(</span><span style="color:#F92672;">public</span><span style="color:#F8F8F2;"> </span><span style="color:#FD971F;font-style:italic;">name</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;">string</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#88846F;">// 必须实现抽象类构造函数</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#88846F;">// 必须在子类（派生类）中实现</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">abstract</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">printMeeting</span><span style="color:#F8F8F2;">()</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;">void</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">class</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;text-decoration:underline;">AccountingDepartment</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">extends</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;font-style:italic;text-decoration:underline;">Department</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">constructor</span><span style="color:#F8F8F2;">(</span><span style="color:#F92672;">public</span><span style="color:#F8F8F2;"> </span><span style="color:#FD971F;font-style:italic;">name</span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&#39;实现父类的构造函数&#39;</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#FD971F;">super</span><span style="color:#F8F8F2;">(name)</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#A6E22E;">printMeeting</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#F92672;">return</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ol start="2"><li><strong>类的多态</strong><ol><li><strong>⽗类定义⼀个⽅法不去实现，让继承它的⼦类去实现，不同的⼦类有不同表现</strong></li></ol></li><li><strong>类的重写</strong></li><li>继承⽗类，⼦类写⼀个⽗类同名⽅法，使⽤ super.⽅法名调⽤⽗类的⽅法（重写）</li><li>并可以在此基础上添加其他⽅法</li></ol><p><strong>泛型</strong></p><ol><li>定义泛型</li></ol><p><strong>a. 泛型解决类、接⼝、⽅法的复⽤性以及对不特定类型的数据的⽀持</strong></p><ol><li>定义泛型函数</li><li>参数为泛型</li><li>函数类型有 void（⽆返回值）， any（任意值）， T：（必须 return返回值）</li><li>泛型接⼝ <ol><li>泛型类</li></ol></li><li>实现函数泛型或者参数泛型</li></ol><p>i. 可以指定调⽤函数所传的数据类型</p><ol start="2"><li>iden(&#39;字符串 &#39;) <ol><li>也可以不指定，泛型会⾃动识别参数类型</li></ol></li><li>如果对函数定义（： T），就必须 return返回值 <ol><li>如果不 return 返回值就会报错</li></ol></li><li>如果对函数没有定义（： T），不⽤ ne返回 return</li></ol><p>i. 但是会提示 undefined</p>`,74),o=[e];function r(t,c,i,F,y,b){return a(),n("div",null,o)}const m=s(p,[["render",r]]);export{d as __pageData,m as default};
