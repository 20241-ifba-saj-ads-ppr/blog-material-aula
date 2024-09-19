import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as s,d as t,e as a,a as e,o as r,r as l}from"./app-BqHeFw7Q.js";const d={},u={href:"https://github.com/JoaoAugustoMPdJ",target:"_blank",rel:"noopener noreferrer"},m={href:"https://mermaid.js.org/syntax/classDiagram.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax",target:"_blank",rel:"noopener noreferrer"};function b(k,n){const i=l("ExternalLinkIcon"),o=l("Mermaid");return r(),c("div",null,[n[3]||(n[3]=s("h1",{id:"object-pool",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#object-pool"},[s("span",null,"Object Pool")])],-1)),n[4]||(n[4]=s("h2",{id:"joao-augusto-moura-peixoto-de-jesus-20211tadssaj0004",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#joao-augusto-moura-peixoto-de-jesus-20211tadssaj0004"},[s("span",null,"João Augusto Moura Peixoto de Jesus (20211TADSSAJ0004)")])],-1)),s("p",null,[s("a",u,[n[0]||(n[0]=t("@JoaoAugustoMPdJ")),a(i)])]),n[5]||(n[5]=e('<h3 id="padrao-de-projeto-object-pool" tabindex="-1"><a class="header-anchor" href="#padrao-de-projeto-object-pool"><span>Padrão de Projeto Object Pool</span></a></h3><h4 id="intencao" tabindex="-1"><a class="header-anchor" href="#intencao"><span>Intenção</span></a></h4><p>Gerenciar a reutilização de objetos caros de serem criados ou inicializados, evitando a necessidade de criar novas instâncias repetidamente.</p><h4 id="outros-nomes" tabindex="-1"><a class="header-anchor" href="#outros-nomes"><span>Outros Nomes</span></a></h4><ul><li>Pool de Objetos</li><li>Pooling</li></ul><h4 id="motivacao" tabindex="-1"><a class="header-anchor" href="#motivacao"><span>Motivação</span></a></h4><p>Criar e destruir objetos pode ser caro em termos de tempo e recursos, especialmente quando os objetos são grandes ou complexos. O padrão Object Pool permite que os objetos sejam reutilizados, o que pode melhorar significativamente o desempenho da aplicação.</p><h4 id="aplicabilidade" tabindex="-1"><a class="header-anchor" href="#aplicabilidade"><span>Aplicabilidade</span></a></h4><p>Use o padrão Object Pool quando:</p><ul><li>A criação de objetos é custosa.</li><li>Muitos objetos similares são necessários ao longo do tempo.</li><li>Os objetos são caros para inicializar, manter ou destruir.</li></ul><h4 id="estrutura" tabindex="-1"><a class="header-anchor" href="#estrutura"><span>Estrutura</span></a></h4><p><strong>Diagrama de Classe</strong></p>',12)),a(o,{id:"mermaid-69",code:"eJxLzkksLnbJTEwvSszlUgAC55zM1LwSBV1dO4WA/PwcBSsFG5vS4tRiOzuwNFg9RKYaLAAC2onJhaWZRakamgihotSc1MRimFAtmARrs6nR1VVwzs9LLkotSQWJGOKRM0KyFEUPGbZjmmJEhimorgAHU1F+SmlyCcQbqMYjSSP7BEUHipARFwAnhXAV"}),n[6]||(n[6]=e(`<h4 id="participantes" tabindex="-1"><a class="header-anchor" href="#participantes"><span>Participantes</span></a></h4><ul><li><strong>Pool (ObjectPool)</strong>: Mantém uma coleção de objetos reutilizáveis. Fornece métodos para obter um objeto do pool e devolver um objeto ao pool.</li><li><strong>Cliente</strong>: Obtém e devolve objetos do pool conforme necessário.</li><li><strong>Objeto Pooled</strong>: A instância do objeto gerenciado pelo pool.</li></ul><h4 id="colaboracoes" tabindex="-1"><a class="header-anchor" href="#colaboracoes"><span>Colaborações</span></a></h4><ul><li><strong>Clientes</strong> obtêm objetos do pool quando necessário e devolvem ao pool quando não são mais necessários.</li><li><strong>Pool</strong> gerencia a disponibilidade dos objetos e garante que os objetos sejam resetados antes de serem reutilizados.</li></ul><h4 id="consequencias" tabindex="-1"><a class="header-anchor" href="#consequencias"><span>Consequências</span></a></h4><ul><li><strong>Vantagens</strong>: <ul><li>Reduz o tempo e recursos necessários para criar e destruir objetos.</li><li>Melhora o desempenho da aplicação em cenários de alta demanda de objetos.</li></ul></li><li><strong>Desvantagens</strong>: <ul><li>A implementação do pool pode ser complexa.</li><li>O gerenciamento do ciclo de vida dos objetos pode ser difícil, especialmente quando se lida com muitos objetos simultaneamente.</li></ul></li></ul><h4 id="implementacao" tabindex="-1"><a class="header-anchor" href="#implementacao"><span>Implementação</span></a></h4><p><strong>Java Example: Pool de Conexões de Banco de Dados</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// Classe que simula uma conexão com banco de dados</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DatabaseConnection</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">DatabaseConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Criando uma nova conexão com o banco de dados...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Resetando a conexão...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Fechando a conexão...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Pool de conexões</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Stack</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConnectionPool</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DatabaseConnection</span><span class="token punctuation">&gt;</span></span> pool<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> size<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ConnectionPool</span><span class="token punctuation">(</span><span class="token keyword">int</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pool<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DatabaseConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">DatabaseConnection</span> <span class="token function">acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pool<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Conexão adquirida do pool.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> pool<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Nenhuma conexão disponível. Criando uma nova.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DatabaseConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">release</span><span class="token punctuation">(</span><span class="token class-name">DatabaseConnection</span> connection<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        connection<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pool<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Conexão devolvida ao pool.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Uso do pool de conexões</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ConnectionPool</span> pool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionPool</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Adquirindo conexões</span>
        <span class="token class-name">DatabaseConnection</span> conn1 <span class="token operator">=</span> pool<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">DatabaseConnection</span> conn2 <span class="token operator">=</span> pool<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Usando as conexões...</span>

        <span class="token comment">// Devolvendo conexões ao pool</span>
        pool<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span>conn1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        pool<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span>conn2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Adquirindo novamente</span>
        <span class="token class-name">DatabaseConnection</span> conn3 <span class="token operator">=</span> pool<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Diagrama de classes Conexão com BD</em></p>`,10)),a(o,{id:"mermaid-154",code:"eJx9jsEKwjAMhu8+RY4d0hcYsot7AMEniCWMYtdqEy+K726XoRQ2l0MOyZcvvwvI3HscMo47KKWtR8ELMh1TjOTEp3hKKYC13coKWhgx4kCst2r8Z3gpMpWFs6C7HpZgB7eCVqCPAuyf9BvtAd394TOZpl35VHGZApWdWUKNUu/NyFXcScUkZj6bJy6kov6KPjXDYyc="}),n[7]||(n[7]=e(`<h4 id="usos-conhecidos" tabindex="-1"><a class="header-anchor" href="#usos-conhecidos"><span>Usos Conhecidos</span></a></h4><ul><li>Pools de conexões de banco de dados em sistemas web.</li><li>Pools de threads em servidores de aplicação.</li><li>Pools de objetos gráficos em jogos e sistemas de simulação.</li></ul><h4 id="padroes-relacionados" tabindex="-1"><a class="header-anchor" href="#padroes-relacionados"><span>Padrões Relacionados</span></a></h4><ul><li><strong>Factory Method</strong>: Pode ser usado para criar os objetos que serão gerenciados pelo pool.</li><li><strong>Prototype</strong>: Pode ser usado para clonar objetos que serão gerenciados pelo pool.</li></ul><h5 id="exemplo" tabindex="-1"><a class="header-anchor" href="#exemplo"><span>Exemplo:</span></a></h5><p><em>Exemplo: Pool de Objetos Gráficos em Jogo</em></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Stack</span></span><span class="token punctuation">;</span>

<span class="token comment">// Classe que gerencia o pool de objetos gráficos</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GraphicObjectPool</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">GraphicObject</span><span class="token punctuation">&gt;</span></span> spritePool<span class="token punctuation">;</span> <span class="token comment">// Pilha para objetos do tipo &quot;sprite&quot;</span>
    <span class="token keyword">private</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">GraphicObject</span><span class="token punctuation">&gt;</span></span> uiElementPool<span class="token punctuation">;</span> <span class="token comment">// Pilha para objetos do tipo &quot;uiElement&quot;</span>

    <span class="token comment">// Construtor que inicializa o pool com objetos gráficos</span>
    <span class="token keyword">public</span> <span class="token class-name">GraphicObjectPool</span><span class="token punctuation">(</span><span class="token keyword">int</span> spritePoolSize<span class="token punctuation">,</span> <span class="token keyword">int</span> uiElementPoolSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        spritePool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        uiElementPool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// Inicializa o pool de sprites com objetos gráficos do tipo &quot;sprite&quot;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> spritePoolSize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            spritePool<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GraphicObject</span><span class="token punctuation">(</span><span class="token string">&quot;sprite&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// Inicializa o pool de elementos de UI com objetos gráficos do tipo &quot;uiElement&quot;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> uiElementPoolSize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            uiElementPool<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GraphicObject</span><span class="token punctuation">(</span><span class="token string">&quot;uiElement&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Método para adquirir um objeto gráfico do pool com base no tipo</span>
    <span class="token keyword">public</span> <span class="token class-name">GraphicObject</span> <span class="token function">acquire</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;sprite&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>spritePool<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Retorna um objeto do pool de sprites se disponível</span>
            <span class="token keyword">return</span> spritePool<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;uiElement&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>uiElementPool<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Retorna um objeto do pool de elementos de UI se disponível</span>
            <span class="token keyword">return</span> uiElementPool<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// Se não houver objetos disponíveis, cria um novo objeto do tipo solicitado</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">GraphicObject</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Método para liberar um objeto gráfico e devolvê-lo ao pool apropriado</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">release</span><span class="token punctuation">(</span><span class="token class-name">GraphicObject</span> graphicObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;sprite&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>graphicObject<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Adiciona o objeto de volta ao pool de sprites</span>
            spritePool<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>graphicObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;uiElement&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>graphicObject<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Adiciona o objeto de volta ao pool de elementos de UI</span>
            uiElementPool<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>graphicObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// Opcional: reinicializa o objeto antes de adicioná-lo de volta ao pool</span>
        graphicObject<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Classe que representa um objeto gráfico</span>
<span class="token keyword">class</span> <span class="token class-name">GraphicObject</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> type<span class="token punctuation">;</span> <span class="token comment">// Tipo do objeto gráfico</span>

    <span class="token comment">// Construtor que define o tipo do objeto</span>
    <span class="token keyword">public</span> <span class="token class-name">GraphicObject</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Método para reinicializar o objeto gráfico</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Implementar a lógica de reinicialização, se necessário</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Método para desenhar o objeto gráfico</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Implementar a lógica de desenho, se necessário</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Método para obter o tipo do objeto gráfico</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> type<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="exemplo-de-pool-de-objetos-graficos" tabindex="-1"><a class="header-anchor" href="#exemplo-de-pool-de-objetos-graficos"><span>Exemplo de Pool de Objetos Gráficos</span></a></h3><hr>`,9)),a(o,{id:"mermaid-201",code:"eJyFkEEOwiAQRfc9BUsa7QUa05XGpSb1AiNOKkppBRqjxrsL1LSgNrIg4fPnzcxPmACtlxwqBXVC7PHXWkF75GyzPyEz26YRJMuKWCU5qUFChXos87AfxQ//605GSgPsvIg8BdGt4gad95+z4yuBNUoPHsyz76aUSxNwS37HOXFaRHByGmCAXTqukJZGcVkRc2sxzWN44FYoEDTSOBgb5fjq4c9kKp+PbIauU6tFk0WjaDQ0VA4KrpFQodnZKmoX6iHv0V4r85sQ"}),n[8]||(n[8]=e(`<h2 id="explicacao" tabindex="-1"><a class="header-anchor" href="#explicacao"><span>Explicação:</span></a></h2><p><em>GraphicObjectPool</em>:</p><p><em>Atributos</em>: -spritePool: Uma pilha (Stack) de objetos GraphicObject para sprites. -uiElementPool: Uma pilha (Stack) de objetos GraphicObject para elementos da interface do usuário.</p><p><em>Métodos</em>: -GraphicObjectPool(int spritePoolSize, int uiElementPoolSize): Construtor que inicializa o pool com o número especificado de objetos para sprites e UIElements. -acquire(String type): GraphicObject: Adquire um objeto do pool com base no tipo especificado (Sprite ou UIElement). -release(GraphicObject graphicObject): Devolve um objeto ao pool após resetá-lo.</p><p><em>GraphicObject</em>:</p><p><em>Atributos</em>: -type: O tipo do objeto gráfico (por exemplo, &quot;Sprite&quot;, &quot;UIElement&quot;).</p><p><em>Métodos</em>: -GraphicObject(String type): Construtor que cria um objeto gráfico do tipo especificado. -reset(): Reseta o objeto gráfico. -draw(): Desenha o objeto gráfico. -getType(): String: Retorna o tipo do objeto gráfico.</p><h3 id="referencias" tabindex="-1"><a class="header-anchor" href="#referencias"><span>Referências</span></a></h3><ul><li>GAMMA, Erich. et al. Padrões de projetos: Soluções reutilizáveis de software orientados a objetos Bookman editora, 2009</li><li>Object Pool Desing Pattern: https://www.geeksforgeeks.org/object-pool-design-pattern/</li><li>JAVA Developer Guide to start with Object Pool Design Pattern: https://medium.com/javarevisited/java-developer-guide-to-start-with-object-pool-design-pattern-3d5fb121b327</li><li>SOUZA, Alberto. Java EE.</li><li>Design Patterns em Java. K19 Treinamentos, 2012.</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
@include-pop()

## Salvador Cerqueira Júnior (20212TADSSAJ0020)
[@SalvadorCerqueiraJr](https://github.com/SalvadorCerqueiraJr)

@include-push(/home/runner/work/blog-material-aula/blog-material-aula/src/includes/seminario-1-SalvadorCerqueiraJr)
# Object Pool	

## Intenção
O pool de objetos pode oferecer um aumento significativo no desempenho; ele é mais eficaz em situações em que o custo de inicialização de uma instância de classe é alto, a taxa de instanciação de uma classe é alta e o número de instanciações em uso a qualquer momento é baixo.

## O que é um Object Pool Design Pattern?

O padrão de design Object Pool é um padrão de criação que gerencia um pool de objetos reutilizáveis, reduzindo assim a sobrecarga de criação e destruição de objetos. Neste padrão, um pool de objetos é criado e mantido, e os clientes podem pegar objetos emprestados do pool quando precisarem e devolvê-los ao pool quando terminarem

Um pool de objetos é um contêiner que contém uma certa quantidade de objetos.
Então, quando um objeto é retirado do pool, ele não fica disponível no pool até ser colocado de volta. 

## Problema
Os pools de objetos (também conhecidos como pools de recursos) são usados ​​para gerenciar o cache de objetos. Um cliente com acesso a um pool de objetos pode evitar a criação de novos objetos simplesmente solicitando ao pool um que já tenha sido instanciado. Geralmente, o pool será um pool crescente, ou seja, o próprio pool criará novos objetos se o pool estiver vazio, ou podemos ter um pool, o que restringe o número de objetos criados.

É desejável manter todos os objetos Reusable que não estão em uso no momento no mesmo pool de objetos para que eles possam ser gerenciados por uma política coerente. Para conseguir isso, a classe Reusable Pool é projetada para ser uma classe singleton.

## Discussão
O Object Pool permite que outros &quot;retirem&quot; objetos do seu pool. Quando esses objetos não são mais necessários para seus processos, eles são retornados ao pool para serem reutilizados.

No entanto, não queremos que um processo tenha que esperar que um objeto específico seja liberado, então o Object Pool também instancia novos objetos conforme necessário, mas também deve implementar um recurso para limpar objetos não utilizados periodicamente.

## Ciclo de vida do pool de objetos

O ciclo de vida dos objetos em um pool de objetos envolve os seguintes estágios:

- Etapa 1: Criação : Os objetos são inicialmente criados e adicionados ao pool.
- Etapa 2: Empréstimo : os clientes solicitam e tomam emprestados objetos do pool.
- Etapa 3: Uso : Os clientes usam os objetos emprestados para suas tarefas.
- Etapa 4: Devolução : Após o uso, os clientes devolvem os objetos ao pool para reutilização.
- Etapa 5: Rejeição ou Destruição : Se o pool estiver cheio ou os objetos não forem usados, eles podem ser rejeitados ou removidos do pool.

## Estrutura

![image](https://github.com/user-attachments/assets/576ef42b-bc82-4f05-9b40-39d50e9ab6f6)


- Cliente: Esta é a classe que utiliza um objeto do tipo PooledObject.
- ReuseablePool: a classe PooledObject é o tipo que é caro ou lento para instanciar ou que tem disponibilidade limitada, portanto, deve ser mantida no pool de objetos.
- ObjectPool: a classe Pool é a classe mais importante no padrão de design do pool de objetos. ObjectPool mantém uma lista de objetos disponíveis e uma coleção de objetos que já foram solicitados do pool.

## Quando usar o padrão de design de pool de objetos?
Veja abaixo quando usar o padrão de design de pool de objetos:

* Criação de Objetos Caros : Se a criação de instâncias de objetos exige muitos recursos, como estabelecer conexões de banco de dados, conexões de rede ou criar objetos pesados, o pooling pode ser benéfico. O pooling permite que você crie esses objetos caros uma vez e os reutilize várias vezes.
* Disponibilidade limitada de recursos : quando há disponibilidade limitada de recursos, como um número limitado de conexões de banco de dados, o pool ajuda a gerenciar esses recursos de forma eficiente, reutilizando-os em vez de criar novos além do limite.
* Redução de Overhead : O overhead de criação e destruição de objetos pode ser significativo em certos aplicativos. Ao reutilizar objetos do pool, você pode reduzir o overhead associado à criação e destruição de objetos com frequência.
* Melhoria do desempenho : o pool pode levar à melhoria do desempenho, evitando a sobrecarga de criação e destruição de objetos e reduzindo a contenção por recursos limitados.

## Quando não usar o padrão de design de pool de objetos?
Veja abaixo quando não usar o padrão de design de pool de objetos:

* Objetos leves : se os objetos forem leves para criar e destruir, e a sobrecarga da criação de objetos for insignificante, usar um pool de objetos pode introduzir complexidade desnecessária sem benefícios significativos.
* Sem escassez de recursos : se o sistema tiver recursos abundantes disponíveis e não houver risco de exaustão de recursos, implementar um pool de objetos pode não ser necessário e pode adicionar complexidade desnecessária.
* Padrões de uso imprevisíveis : se o padrão de uso de objetos for altamente imprevisível, de modo que os objetos raramente sejam reutilizados ou o tamanho do pool não possa ser estimado de forma eficaz, implementar um pool de objetos pode não ser benéfico.
* Sobrecarga de manutenção : pools de objetos introduzem complexidade adicional para gerenciar o ciclo de vida de objetos, como lidar com a criação, validação e destruição de objetos. Se a sobrecarga de manutenção superar os benefícios obtidos com o pooling, pode não valer a pena implementar.

## Exemplo 01
O padrão de pool de objetos é semelhante a um depósito de escritório. Quando um novo funcionário é contratado, a gerente do escritório tem que preparar um espaço de trabalho para ele. Ela descobre se há ou não um equipamento extra no depósito do escritório. Se houver, ela o usa. Se não, ela faz um pedido para comprar um novo equipamento da Amazon. Caso um funcionário seja demitido, seu equipamento é movido para o depósito, de onde pode ser levado quando um novo local de trabalho for necessário.

![image](https://github.com/user-attachments/assets/04f7d1f3-2c00-4727-a1ce-a6c04f83f315)


#### Lista de controle
1. Crie ObjectPooluma classe com uma matriz privada de Objects dentro
2. Crie acquiree releasemétodos na classe ObjectPool
3. Certifique-se de que seu ObjectPool é Singleton

#### Regras de ouro
* O padrão Factory Method pode ser usado para encapsular a lógica de criação de objetos. No entanto, ele não os gerencia após sua criação, o padrão object pool mantém o controle dos objetos que ele cria.
* Os pools de objetos geralmente são implementados como singletons.


## Exemplo 02 
Uma analogia do mundo real para o padrão de design Object Pool poderia ser uma biblioteca ou uma livraria.

1. Inventário de livros :
- Pense na coleção da biblioteca ou no inventário da livraria como um conjunto de objetos.
- Cada livro representa um objeto que pode ser emprestado ou usado.

2. Empréstimo de livros :
- Quando um usuário da biblioteca ou um cliente da livraria deseja pegar um livro emprestado, ele procura o bibliotecário ou o balconista da loja.
- Da mesma forma, no software, quando um componente precisa de um objeto, ele o solicita do pool de objetos.

3. Livros disponíveis :
- A biblioteca ou livraria mantém um registro dos livros disponíveis que ainda não foram emprestados.
- Esses livros estão prontos para serem emprestados. Similarmente, no pool de objetos, há objetos que estão disponíveis para uso.

4. Processo de empréstimo :
- Quando um cliente ou cliente deseja pegar um livro emprestado, ele o retira do acervo disponível.
- Essa ação é análoga a um componente que pega um objeto do pool de objetos.

5. Devolução de livros :
- Após ler ou usar o livro, o usuário ou cliente o devolve à biblioteca ou livraria.
- Da mesma forma, no software, quando um componente termina de usar um objeto, ele o retorna ao pool de objetos.

6. Condição do livro :
- A biblioteca ou livraria verifica regularmente as condições dos livros, repara quaisquer danos e retira de circulação quaisquer livros em mau estado.
- Esse processo de manutenção é semelhante aos procedimentos de validação e limpeza executados em objetos no pool de objetos.

7. Estoque máximo de livros :
- Tanto a biblioteca quanto a livraria têm um limite máximo para o número de livros que podem manter devido a restrições de espaço ou limitações orçamentárias.
- Da mesma forma, em software, os pools de objetos geralmente têm um tamanho máximo para evitar o esgotamento de recursos.



\`\`\`mermaid
---
title: Exemplo Biblioteca
---
classDiagram
    Bibliotecario &lt;|-- UsuarioBiblioteca
    Livro &lt;|-- Bibliotecario
    Livro &lt;|-- UsuarioBiblioteca

    Bibliotecario : +array instancia
    Bibliotecario: +get()

    class UsuarioBiblioteca{
        +String Nome
    }

    class Livro{
         +String Titulo
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exemplo-03" tabindex="-1"><a class="header-anchor" href="#exemplo-03"><span>Exemplo 03</span></a></h2>`,11)),a(o,{id:"mermaid-257",code:"eJxtjzEOwjAMRfecwsoERR1YK8QCIwNXsNKospQmEBcWxN1xAqIG1VPk977tuIDMR8Ih42hAqjbgkGL0bqIUzykFeFRUagMn4mk38z1cxFAc3fVG2c/Gat2pecrMPnhkbTp5almS90R9zTzN4n0/t5W8tMvGb+5NeuIl+Bn69127tdC0LdjG6k0djBhx8GzMCwvtXIU="}),n[9]||(n[9]=e(`<p>Descrição</p><ol><li><p><strong>ConnectionPool</strong>:</p><ul><li><strong>Atributos</strong>: <ul><li><code>pool</code>: Uma lista de conexões de banco de dados disponíveis para reutilização.</li></ul></li><li><strong>Métodos</strong>: <ul><li><code>acquireConnection()</code>: Adquire uma conexão do pool, retornando uma conexão disponível ou criando uma nova se necessário.</li><li><code>releaseConnection(conn)</code>: Libera uma conexão de volta para o pool, permitindo sua reutilização futura.</li></ul></li></ul></li><li><p><strong>Connection</strong>:</p><ul><li><strong>Métodos</strong>: <ul><li><code>connect()</code>: Estabelece uma conexão com o banco de dados.</li><li><code>disconnect()</code>: Fecha a conexão com o banco de dados.</li></ul></li></ul></li><li><p><strong>Relação</strong>:</p><ul><li>O <code>ConnectionPool</code> gerencia múltiplas instâncias de <code>Connection</code>, representado por uma relação de &quot;um para muitos&quot;.</li></ul></li></ol><h3 id="exemplo-04" tabindex="-1"><a class="header-anchor" href="#exemplo-04"><span>Exemplo 04</span></a></h3><ul><li><strong>Pool de Conexões de Banco de Dados</strong>: Imagine um sistema que precisa fazer muitas conexões com um banco de dados. Criar e destruir conexões repetidamente pode ser caro em termos de tempo e recursos. O pool de conexões mantém um número fixo de conexões abertas e as reutiliza. Quando um cliente precisa de uma conexão, ele a adquire do pool. Quando termina de usá-la, a conexão é liberada de volta ao pool, tornando-se disponível para outros clientes.</li></ul><p>Esse exemplo ilustra como o padrão Object Pool pode ser aplicado na prática para gerenciar recursos limitados e melhorar a eficiência.</p><h2 id="exemplo-pratico-livro-k19" tabindex="-1"><a class="header-anchor" href="#exemplo-pratico-livro-k19"><span>Exemplo prático - Livro K19</span></a></h2><p>Estamos desenvolvendo um sistema para uma empresa com uma quantidade muito grande de projetos. Esse sistema deve controlar os recursos utilizados nos projetos. De maneira genérica, um recurso pode ser um funcionário, uma sala, um computador, um carro, etc.</p><p>Podemos implementar classes especializadas no controle de cada tipo de recurso utilizado nos projetos. Além disso, seria interessante padronizar essas classes através de uma interface.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1 public interface Pool &lt;T &gt; {
2 T acquire () ;
3 void release ( T t ) ;
4 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Código Java 2.69: Pool.java</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1 public class FuncionarioPool implements Pool &lt; Funcionario &gt; {
2 private Collection &lt; Funcionario &gt; funcionarios ;
3
4 public FuncionarioPool () {
5 // iniciliaza a coleção de funcionários
6 }
7
8 public Funcionario acquire () {
9 // escolhe um funcionário da coleção
10 }
11
12 public void release ( Funcionario f ) {
13 // adiciona o funcionário na coleção
14 }
15 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Código Java 2.70: FuncionarioPool.java</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1 public class SalaPool implements Pool &lt; Sala &gt; {
2 private Collection &lt; Sala &gt; salas ;
3
4 public SalaPool () {
5 // iniciliaza a coleção de salas
6 }
7
8 public Sala acquire () {
9 // escolhe uma sala da coleção
10 }
11
12 public void release ( Sala sala ) {
13 // adiciona a sala na coleção
14 }
15 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Código Java 2.71: SalaPool.java</p><p>Agora, quando um projeto necessita de um recurso como funcionários ou salas basta utilizar os pools.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1 Pool &lt; Sala &gt; poolSalas = ...
2 Pool &lt; Funcionario &gt; poolFuncionario = ...
3
4 // obtendo os recursos
5 Sala sala = poolSalas . acquire () ;
6 Funcionario funcionario = poolFuncionario . acquire () ;
7
8 // usando os recursos
9 ...
10
11 // liberando os recursos
12 poolSalas . release ( sala ) ;
13 poolFuncionarios . release ( funcionario )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Código Java 2.72: interagindo com um pool</p><h3 id="organizacao" tabindex="-1"><a class="header-anchor" href="#organizacao"><span>Organização</span></a></h3><p>O diagrama UML abaixo ilustra a organização desse padrão.</p><figure><img src="https://github.com/user-attachments/assets/f9a0c4a0-c7e6-4d94-a029-0aeefc4c8760" alt="UML" tabindex="0" loading="lazy"><figcaption>UML</figcaption></figure><p>Os personagens desse padrão são:</p><p><strong>Product</strong> (Funcionario, Sala) Define os objetos gerenciados pelos Pools. <strong>Pool</strong> (Pool) Interface dos objetos que controlam a aquisição e a liberação dos Products. <strong>ConcretePool</strong> (SalaPool, FuncionarioPool) Implementação particular de um Pool que gerencia um Product específico.</p><h2 id="referencias-1" tabindex="-1"><a class="header-anchor" href="#referencias-1"><span>Referências</span></a></h2><ol><li>K19. Design Patterns em Java.</li><li>https://www.geeksforgeeks.org/object-pool-design-pattern/</li><li>https://sourcemaking.com/design_patterns/object_pool</li><li>https://acervolima.com/padrao-de-design-de-pool-de-objetos/</li></ol>`,24)),s("p",null,[s("a",m,[n[1]||(n[1]=t("Mermaid Class Diagram.html")),a(i)])]),s("p",null,[s("a",v,[n[2]||(n[2]=t("Markdown")),a(i)])])])}const h=p(d,[["render",b],["__file","Object_Pool.html.vue"]]),f=JSON.parse('{"path":"/posts/Seminarios/seminario-1/Object_Pool.html","title":"Object Pool","lang":"pt-BR","frontmatter":{"icon":"edit","date":"2024-07-25T23:10:00.000Z","tag":["Object Pool","gof"],"category":["seminario-1"],"order":10,"excerpt":"Apresentação do Padrão de Projeto Object Pool","author":"JoaoAugustoMPdJ, SalvadorCerqueiraJr","gitInclude":["../../../../src/includes/seminario-1-JoaoAugustoMPdJ/README.md","../../../../src/includes/seminario-1-SalvadorCerqueiraJr/README.md"],"description":"Object Pool João Augusto Moura Peixoto de Jesus (20211TADSSAJ0004) @JoaoAugustoMPdJ Padrão de Projeto Object Pool Intenção Gerenciar a reutilização de objetos caros de serem cri...","head":[["meta",{"property":"og:url","content":"https://20241-ifba-saj-ads-ppr.github.io/blog-material-aula/blog-material-aula/posts/Seminarios/seminario-1/Object_Pool.html"}],["meta",{"property":"og:site_name","content":"20241 PPR Blog das Aulas"}],["meta",{"property":"og:title","content":"Object Pool"}],["meta",{"property":"og:description","content":"Object Pool João Augusto Moura Peixoto de Jesus (20211TADSSAJ0004) @JoaoAugustoMPdJ Padrão de Projeto Object Pool Intenção Gerenciar a reutilização de objetos caros de serem cri..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"pt-BR"}],["meta",{"property":"og:updated_time","content":"2024-09-19T23:23:15.000Z"}],["meta",{"property":"article:author","content":"JoaoAugustoMPdJ, SalvadorCerqueiraJr"}],["meta",{"property":"article:tag","content":"Object Pool"}],["meta",{"property":"article:tag","content":"gof"}],["meta",{"property":"article:published_time","content":"2024-07-25T23:10:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-19T23:23:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Object Pool\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-25T23:10:00.000Z\\",\\"dateModified\\":\\"2024-09-19T23:23:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"JoaoAugustoMPdJ, SalvadorCerqueiraJr\\"}]}"]]},"headers":[{"level":2,"title":"João Augusto Moura Peixoto de Jesus (20211TADSSAJ0004)","slug":"joao-augusto-moura-peixoto-de-jesus-20211tadssaj0004","link":"#joao-augusto-moura-peixoto-de-jesus-20211tadssaj0004","children":[{"level":3,"title":"Padrão de Projeto Object Pool","slug":"padrao-de-projeto-object-pool","link":"#padrao-de-projeto-object-pool","children":[]},{"level":3,"title":"Exemplo de Pool de Objetos Gráficos","slug":"exemplo-de-pool-de-objetos-graficos","link":"#exemplo-de-pool-de-objetos-graficos","children":[]}]},{"level":2,"title":"Explicação:","slug":"explicacao","link":"#explicacao","children":[{"level":3,"title":"Referências","slug":"referencias","link":"#referencias","children":[]}]},{"level":2,"title":"Exemplo 03","slug":"exemplo-03","link":"#exemplo-03","children":[{"level":3,"title":"Exemplo 04","slug":"exemplo-04","link":"#exemplo-04","children":[]}]},{"level":2,"title":"Exemplo prático - Livro K19","slug":"exemplo-pratico-livro-k19","link":"#exemplo-pratico-livro-k19","children":[{"level":3,"title":"Organização","slug":"organizacao","link":"#organizacao","children":[]}]},{"level":2,"title":"Referências","slug":"referencias-1","link":"#referencias-1","children":[]}],"git":{"createdTime":1726788195000,"updatedTime":1726788195000,"contributors":[{"name":"leandro-costa","email":"leandro.costa@ifba.edu.br","commits":1}]},"readingTime":{"minutes":0.19,"words":57},"filePathRelative":"posts/Seminarios/seminario-1/Object_Pool.md","localizedDate":"25 de julho de 2024","autoDesc":true}');export{h as comp,f as data};
