import{_ as a}from"./Bridge-DJAuu4X8.js";import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as i,o}from"./app-BrOvOMMH.js";const t={};function p(l,n){return o(),e("div",null,n[0]||(n[0]=[i('<h1 id="padrao-de-projeto-bridge-yuri-pepe" tabindex="-1"><a class="header-anchor" href="#padrao-de-projeto-bridge-yuri-pepe"><span>Padrão de Projeto Bridge, Yuri Pêpe</span></a></h1><h2 id="intencao" tabindex="-1"><a class="header-anchor" href="#intencao"><span>Intenção</span></a></h2><p>A intenção do padrão Bridge é desacoplar uma abstração de sua implementação para que os dois possam evoluir separadamente. Isso é útil quando você tem uma hierarquia de classes onde diferentes implementações podem coexistir com várias abstrações. O padrão Bridge evita a explosão combinatória de classes e promove o princípio da Responsabilidade Única, Embora seja opcional, o padrão Bridge permite que você substitua o objeto de implementação dentro da abstração. É tão fácil quanto designar um novo valor para um campo.</p><h3 id="tambem-conhecido-como" tabindex="-1"><a class="header-anchor" href="#tambem-conhecido-como"><span>Também conhecido como</span></a></h3><ol><li><strong>Handle</strong></li><li><strong>Body</strong></li></ol><h2 id="motivacao" tabindex="-1"><a class="header-anchor" href="#motivacao"><span>Motivação</span></a></h2><p>Quando uma abstração pode ter uma entre várias implementações possíveis, a maneira usual de acomodá-las é usando a <strong>herança</strong>. Uma classe abstrata define a interface para a abstração, e subclasses concretas a implementam de formas diferentes. Mas essa abordagem nem sempre é suficientemente flexível. A herança liga uma implementação à abstração permanentemente, o que torna difícil modificar, aumentar e reutilizar abstrações e implementações independentemente.</p><h2 id="aplicabilidade" tabindex="-1"><a class="header-anchor" href="#aplicabilidade"><span>Aplicabilidade</span></a></h2><ul><li><p><strong>Utilize o padrão Bridge quando:</strong></p><ul><li><p><strong>Dividir e organizar uma classe monolítica que tem diversas variantes da mesma funcionalidade:</strong></p><p>Por exemplo, se a classe pode trabalhar com diversos servidores de base de dados. Quanto maior a classe se torna, mais difícil é de entender como ela funciona, e mais tempo se leva para fazer mudanças. As mudanças feitas para uma das variações de funcionalidade podem precisar de mudanças feitas em toda a classe, o que quase sempre resulta em erros ou falha em lidar com efeitos colaterais.</p><p>O padrão Bridge permite que você divida uma classe monolítica em diversas hierarquias de classe. Após isso, você pode modificar as classes em cada hierarquia independentemente das classes nas outras. Essa abordagem simplifica a manutenção do código e minimiza o risco de quebrar o código existente.</p></li><li><p><strong>Estender uma classe em diversas dimensões ortogonais (independentes):</strong></p><p>O Bridge sugere que você extraia uma hierarquia de classe separada para cada uma das dimensões. A classe original delega o trabalho relacionado para os objetos pertencentes àquelas hierarquias ao invés de fazer tudo por conta própria.</p></li><li><p><strong>Ser capaz de trocar implementações durante o momento de execução:</strong></p><p>Embora seja opcional, o padrão Bridge permite que você substitua o objeto de implementação dentro da abstração. É tão fácil quanto designar um novo valor para um campo.</p><p>A propósito, este último item é o maior motivo pelo qual muitas pessoas confundem o Bridge com o padrão Strategy. Lembre-se que um padrão é mais que apenas uma maneira de estruturar suas classes. Ele também pode comunicar intenções e resolver um problema.</p></li></ul></li></ul><h2 id="estrutura-das-classes" tabindex="-1"><a class="header-anchor" href="#estrutura-das-classes"><span>Estrutura das Classes</span></a></h2><figure><img src="'+a+`" alt="Estrutura Bridge" tabindex="0" loading="lazy"><figcaption>Estrutura Bridge</figcaption></figure><h3 id="participantes" tabindex="-1"><a class="header-anchor" href="#participantes"><span>Participantes</span></a></h3><ol><li><blockquote><p>A Abstração: Define a interface de alto nível que usará a implementação. Geralmente, mantém uma referência a um objeto do tipo Implementador.</p></blockquote></li><li><blockquote><p>Abstrações Refinadas: estende a interface da abstração e adiciona operações adicionais que podem ser específicas.</p></blockquote></li><li><blockquote><p>A Implementação declara: a interface que é comum para todas as implementações concretas. Um abstração só pode se comunicar com um objeto de implementação através de métodos que são declarados aqui.A abstração pode listar os mesmos métodos que a implementação, mas geralmente a abstração declara alguns comportamentos complexos que dependem de uma ampla variedade de operações primitivas declaradas pela implementação.</p></blockquote></li><li><blockquote><p>Implementações Define a interface para todas as implementações concretas. A abstração delega o trabalho real para um objeto Implementador.</p></blockquote></li><li><blockquote><p>Geralmente o Cliente está apenas interessado em trabalhar com a abstração. Contudo, é trabalho do cliente ligar o objeto de abstração com um dos objetos de implementação.</p></blockquote></li></ol><h2 id="exemplos" tabindex="-1"><a class="header-anchor" href="#exemplos"><span>EXEMPLOS</span></a></h2><h3 id="refactoring-guru" tabindex="-1"><a class="header-anchor" href="#refactoring-guru"><span>Refactoring Guru</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// A &quot;abstração&quot; define a interface para a parte &quot;controle&quot; das</span>
<span class="token comment">// duas hierarquias de classe. Ela mantém uma referência a um</span>
<span class="token comment">// objeto da hierarquia de &quot;implementação&quot; e delega todo o</span>
<span class="token comment">// trabalho real para esse objeto.</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">ControleRemoto</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">Dispositivo</span> dispositivo<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ControleRemoto</span><span class="token punctuation">(</span><span class="token class-name">Dispositivo</span> dispositivo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>dispositivo <span class="token operator">=</span> dispositivo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">alternarEnergia</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dispositivo<span class="token punctuation">.</span><span class="token function">estaLigado</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            dispositivo<span class="token punctuation">.</span><span class="token function">desligar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            dispositivo<span class="token punctuation">.</span><span class="token function">ligar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">diminuirVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dispositivo<span class="token punctuation">.</span><span class="token function">definirVolume</span><span class="token punctuation">(</span>dispositivo<span class="token punctuation">.</span><span class="token function">obterVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">aumentarVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dispositivo<span class="token punctuation">.</span><span class="token function">definirVolume</span><span class="token punctuation">(</span>dispositivo<span class="token punctuation">.</span><span class="token function">obterVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">diminuirCanal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dispositivo<span class="token punctuation">.</span><span class="token function">definirCanal</span><span class="token punctuation">(</span>dispositivo<span class="token punctuation">.</span><span class="token function">obterCanal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">aumentarCanal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dispositivo<span class="token punctuation">.</span><span class="token function">definirCanal</span><span class="token punctuation">(</span>dispositivo<span class="token punctuation">.</span><span class="token function">obterCanal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Você pode estender classes a partir dessa hierarquia de</span>
<span class="token comment">// abstração independentemente das classes de dispositivo.</span>
<span class="token keyword">class</span> <span class="token class-name">ControleRemotoAvancado</span> <span class="token keyword">extends</span> <span class="token class-name">ControleRemoto</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ControleRemotoAvancado</span><span class="token punctuation">(</span><span class="token class-name">Dispositivo</span> dispositivo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>dispositivo<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">silenciar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dispositivo<span class="token punctuation">.</span><span class="token function">definirVolume</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// A interface &quot;implementação&quot; declara métodos comuns a todas as</span>
<span class="token comment">// classes concretas de implementação. Ela não precisa coincidir</span>
<span class="token comment">// com a interface de abstração. Na verdade, as duas interfaces</span>
<span class="token comment">// podem ser inteiramente diferentes. Tipicamente a interface de</span>
<span class="token comment">// implementação fornece apenas operações primitivas, enquanto</span>
<span class="token comment">// que a abstração define operações de alto nível baseadas</span>
<span class="token comment">// naquelas primitivas.</span>
<span class="token keyword">interface</span> <span class="token class-name">Dispositivo</span> <span class="token punctuation">{</span>
    <span class="token keyword">boolean</span> <span class="token function">estaLigado</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">ligar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">desligar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">obterVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">definirVolume</span><span class="token punctuation">(</span><span class="token keyword">int</span> percentual<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">obterCanal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">definirCanal</span><span class="token punctuation">(</span><span class="token keyword">int</span> canal<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Todos os dispositivos seguem a mesma interface.</span>
<span class="token keyword">class</span> <span class="token class-name">Tv</span> <span class="token keyword">implements</span> <span class="token class-name">Dispositivo</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Radio</span> <span class="token keyword">implements</span> <span class="token class-name">Dispositivo</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// Em algum lugar no código cliente.</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Tv</span> tv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ControleRemoto</span> controleRemoto <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ControleRemoto</span><span class="token punctuation">(</span>tv<span class="token punctuation">)</span><span class="token punctuation">;</span>
        controleRemoto<span class="token punctuation">.</span><span class="token function">alternarEnergia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Radio</span> radio <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Radio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ControleRemotoAvancado</span> controleRemotoAvancado <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ControleRemotoAvancado</span><span class="token punctuation">(</span>radio<span class="token punctuation">)</span><span class="token punctuation">;</span>
        controleRemotoAvancado<span class="token punctuation">.</span><span class="token function">silenciar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="meu-exemplo" tabindex="-1"><a class="header-anchor" href="#meu-exemplo"><span>MEU EXEMPLO</span></a></h3><div class="language-Java line-numbers-mode" data-ext="Java" data-title="Java"><pre class="language-Java"><code>
abstract class Documento {
    protected Impressora impressora;

    public Documento(Impressora impressora) {
        this.impressora = impressora;
    }

    public abstract void imprimir();
}


class Relatorio extends Documento {
    public Relatorio(Impressora impressora) {
        super(impressora);
    }

    @Override
    public void imprimir() {
        impressora.imprimirRelatorio();
    }
}

class Fatura extends Documento {
    public Fatura(Impressora impressora) {
        super(impressora);
    }

    @Override
    public void imprimir() {
        impressora.imprimirFatura();
    }
}


interface Impressora {
    void imprimirRelatorio();
    void imprimirFatura();
}


class ImpressoraLaser implements Impressora {

    @Override
    public void imprimirRelatorio() {
        System.out.println(&quot;Imprimindo relatório na impressora a laser.&quot;);
    }

    @Override
    public void imprimirFatura() {
        System.out.println(&quot;Imprimindo fatura na impressora a laser.&quot;);
    }
}


class ImpressoraTinta implements Impressora {

    @Override
    public void imprimirRelatorio() {
        System.out.println(&quot;Imprimindo relatório na impressora jato de tinta.&quot;);
    }

    @Override
    public void imprimirFatura() {
        System.out.println(&quot;Imprimindo fatura na impressora jato de tinta.&quot;);
    }
}


public class Main {
    public static void main(String[] args) {
     
        Impressora impressoraLaser = new ImpressoraLaser();
        Documento relatorio = new Relatorio(impressoraLaser);
        relatorio.imprimir();

        Impressora impressoraTinta = new ImpressoraJatoTinta();
        Documento fatura = new Fatura(impressoraJatoTinta);
        fatura.imprimir();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18)]))}const u=s(t,[["render",p],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/includes/seminario-2-YuriPepezin/","title":"Padrão de Projeto Bridge, Yuri Pêpe","lang":"pt-BR","frontmatter":{"description":"Padrão de Projeto Bridge, Yuri Pêpe Intenção A intenção do padrão Bridge é desacoplar uma abstração de sua implementação para que os dois possam evoluir separadamente. Isso é út...","head":[["meta",{"property":"og:url","content":"https://20241-ifba-saj-ads-ppr.github.io/blog-material-aula/blog-material-aula/includes/seminario-2-YuriPepezin/"}],["meta",{"property":"og:site_name","content":"20241 PPR Blog das Aulas"}],["meta",{"property":"og:title","content":"Padrão de Projeto Bridge, Yuri Pêpe"}],["meta",{"property":"og:description","content":"Padrão de Projeto Bridge, Yuri Pêpe Intenção A intenção do padrão Bridge é desacoplar uma abstração de sua implementação para que os dois possam evoluir separadamente. Isso é út..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"pt-BR"}],["meta",{"property":"article:author","content":"Leandro Souza"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Padrão de Projeto Bridge, Yuri Pêpe\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leandro Souza\\",\\"url\\":\\"https://github.com/leandro-costa\\"}]}"]]},"headers":[{"level":2,"title":"Intenção","slug":"intencao","link":"#intencao","children":[{"level":3,"title":"Também conhecido como","slug":"tambem-conhecido-como","link":"#tambem-conhecido-como","children":[]}]},{"level":2,"title":"Motivação","slug":"motivacao","link":"#motivacao","children":[]},{"level":2,"title":"Aplicabilidade","slug":"aplicabilidade","link":"#aplicabilidade","children":[]},{"level":2,"title":"Estrutura das Classes","slug":"estrutura-das-classes","link":"#estrutura-das-classes","children":[{"level":3,"title":"Participantes","slug":"participantes","link":"#participantes","children":[]}]},{"level":2,"title":"EXEMPLOS","slug":"exemplos","link":"#exemplos","children":[{"level":3,"title":"Refactoring Guru","slug":"refactoring-guru","link":"#refactoring-guru","children":[]},{"level":3,"title":"MEU EXEMPLO","slug":"meu-exemplo","link":"#meu-exemplo","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.23,"words":968},"filePathRelative":"includes/seminario-2-YuriPepezin/README.md","autoDesc":true}');export{u as comp,m as data};
