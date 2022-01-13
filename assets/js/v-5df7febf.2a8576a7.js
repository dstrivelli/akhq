"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[305],{1668:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-5df7febf",path:"/docs/configuration/schema-registry/schema-references.html",title:"Schema references",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"docs/configuration/schema-registry/schema-references.md",git:{updatedTime:164206131e4,contributors:[{name:"Albert Dixon",email:"albertd@gladly.com",commits:1}]}}},4186:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var e=a(6252);const p=(0,e.uE)('<h1 id="schema-references" tabindex="-1"><a class="header-anchor" href="#schema-references" aria-hidden="true">#</a> Schema references</h1><p>Since Confluent 5.5.0, Avro schemas can now be reused by others schemas through schema references. This feature allows to define a schema once and use it as a record type inside one or more schemas.</p><p>When registering new Avro schemas with AKHQ UI, it is now possible to pass a slightly more complex object with a <code>schema</code> and a <code>references</code> field.</p><p>To register a new schema without references, no need to change anything:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Schema1&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;org.akhq&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;record&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;description&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>To register a new schema with a reference to an already registered schema:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;schema&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Schema2&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;org.akhq&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;record&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;schema1&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Schema1&quot;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;references&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Schema1&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SCHEMA_1&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token number">1</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>',7),t=(0,e.Uk)("Documentation on Confluent 5.5 and schema references can be found "),o={href:"https://docs.confluent.io/5.5.0/schema-registry/serdes-develop/index.html",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("here"),c=(0,e.Uk)("."),u={},l=(0,a(3744).Z)(u,[["render",function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("p",null,[t,(0,e._)("a",o,[r,(0,e.Wm)(a)]),c])],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);