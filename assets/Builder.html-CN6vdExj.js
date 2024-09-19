import{_ as l,a as d,b as c}from"./colaboracoes-B2twUomn.js";import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,b as n,d as i,e as a,a as o,o as m,r as t}from"./app-BqHeFw7Q.js";const v={},b={href:"https://github.com/gabrielflb",target:"_blank",rel:"noopener noreferrer"},k={href:"https://mermaid.js.org/syntax/classDiagram.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/LuisMiguelADS",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/YuriPepezin",target:"_blank",rel:"noopener noreferrer"};function x(C,e){const s=t("ExternalLinkIcon"),r=t("Mermaid");return m(),p("div",null,[e[5]||(e[5]=n("h1",{id:"builder",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#builder"},[n("span",null,"Builder")])],-1)),e[6]||(e[6]=n("h2",{id:"gabriel-ferreira-lima-brito-20212tadssaj0015",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gabriel-ferreira-lima-brito-20212tadssaj0015"},[n("span",null,"Gabriel Ferreira Lima Brito (20212TADSSAJ0015)")])],-1)),n("p",null,[n("a",b,[e[0]||(e[0]=i("@gabrielflb")),a(s)])]),e[7]||(e[7]=o('<h1 id="seminario-1" tabindex="-1"><a class="header-anchor" href="#seminario-1"><span>Seminario - 1</span></a></h1><h2 id="intencao" tabindex="-1"><a class="header-anchor" href="#intencao"><span>Intenção</span></a></h2><ul><li>A intenção do padrão Builder é separar a construção de um objeto complexo da sua representação, permitindo que o mesmo processo de construção possa criar diferentes representações.</li></ul><h2 id="tambem-conhecido-como" tabindex="-1"><a class="header-anchor" href="#tambem-conhecido-como"><span>Também Conhecido Como</span></a></h2><ul><li>Construtor</li></ul><h2 id="motivacao" tabindex="-1"><a class="header-anchor" href="#motivacao"><span>Motivação</span></a></h2><ul><li>Imagine um objeto complexo que pode ser construído de várias maneiras. A classe construtora precisa lidar com diferentes configurações e opções, tornando o código complicado e difícil de manter. O padrão Builder resolve isso ao separar o processo de construção em passos mais gerenciáveis e permitir que diferentes partes de um objeto sejam configuradas de maneira modular.</li></ul><h2 id="aplicabilidade" tabindex="-1"><a class="header-anchor" href="#aplicabilidade"><span>Aplicabilidade</span></a></h2><h3 id="use-o-padrao-builder-quando" tabindex="-1"><a class="header-anchor" href="#use-o-padrao-builder-quando"><span>Use o padrão Builder quando:</span></a></h3><ul><li>A criação de um objeto envolve muitos passos e configurações complexas.</li><li>O objeto precisa ser criado de diferentes maneiras ou representações.</li><li>Você quer evitar construtores longos e complexos com muitos parâmetros opcionais.</li><li>Builder com interface fluente</li></ul><h2 id="estrutura" tabindex="-1"><a class="header-anchor" href="#estrutura"><span>Estrutura</span></a></h2><h3 id="o-padrao-builder-normalmente-envolve-os-seguintes-componentes" tabindex="-1"><a class="header-anchor" href="#o-padrao-builder-normalmente-envolve-os-seguintes-componentes"><span>O padrão Builder normalmente envolve os seguintes componentes:</span></a></h3><ul><li>Builder: Interface ou classe abstrata que define todos os passos de criação que devem ser implementados.</li><li>ConcreteBuilder(contrução concreta/real): Implementa a interface Builder e fornece a implementação específica dos passos de construção.</li><li>Produto: O objeto complexo a ser construído.</li><li>Diretor: (Opcional) Gerencia o processo de construção utilizando o Builder.</li></ul>',13)),a(r,{id:"mermaid-99",code:"eJy9UkGOwjAMvPcVORbt5gM97GEFdyT4gGkNREpq5IQT4u80cZqqigQ3LEWx7LE9GUdr3cQTTLDYqT16T6BQHdHimUZUKdtb8H5r4MLgGjVZCszoRwpF04fAZryokRxWQXRgbBX1dGJc48vskJ2S+pGJrVz/d2MH5M2SDiRd202nxEu5Z1ORzrXf5N5fwcEArRRPDFdMFtyAh7nvR2xPbhepfQSOd4dMM7t2dt50ZgOc5S6oWs3y3lpIuiHDQCxVK4kTmWVWoSX537w7WWwel/+a1n/LzG5SWf7jeqkRlPGdig9pJnsB2DXZgQ=="}),e[8]||(e[8]=o('<h2 id="participantes" tabindex="-1"><a class="header-anchor" href="#participantes"><span>Participantes</span></a></h2><ul><li>Pessoa possui um relacionamento de &quot;tem&quot; com Telefone</li><li>Uma Pessoa pode ter um atributo do tipo Telefone.</li><li>PessoaBuilder cria instâncias de Pessoa:</li><li>O PessoaBuilder é usado para construir uma nova Pessoa com os atributos desejados.</li></ul><h1 id="consequencias" tabindex="-1"><a class="header-anchor" href="#consequencias"><span>Consequências:</span></a></h1><h2 id="vantagens" tabindex="-1"><a class="header-anchor" href="#vantagens"><span>Vantagens</span></a></h2><ul><li>Separa a criação da utilização(principio da responsabilidade unica).</li><li>Permite criar diferentes representações de um objeto.</li><li>A criação do objeto pode variar de acordo com a necessidade</li><li>Código de construção é mais modular e fácil de manter.</li><li>Mantem o principio Aberto-Fechado (OCP) podendo criar varios objetos Builders diferentes.</li></ul><h2 id="desvantagens" tabindex="-1"><a class="header-anchor" href="#desvantagens"><span>Desvantagens</span></a></h2><ul><li>Introduz complexidade adicional.</li><li>Pode ser exagerado para objetos simples.</li></ul><h1 id="implementacao" tabindex="-1"><a class="header-anchor" href="#implementacao"><span>Implementação</span></a></h1><ul><li>Para implementar o padrão Builder, siga estes passos:</li><li>Crie uma interface ou classe abstrata Builder que define os métodos para a construção das partes do produto.</li><li>Crie uma ou mais classes ConcreteBuilder que implementam a interface Builder.</li><li>Crie uma classe Produto que representa o objeto complexo a ser construído.</li><li>Opcionalmente, crie uma classe Diretor que usa o Builder para construir o Produto por etapas desejadas.</li></ul><h1 id="usos-conhecidos" tabindex="-1"><a class="header-anchor" href="#usos-conhecidos"><span>Usos Conhecidos</span></a></h1><ul><li>Construção de documentos complexos em diferentes formatos (HTML, PDF, DOC, etc.).</li><li>Configuração de objetos em jogos, como personagens ou níveis, onde diferentes partes precisam ser configuradas.</li></ul><h1 id="padroes-relacionados" tabindex="-1"><a class="header-anchor" href="#padroes-relacionados"><span>Padrões Relacionados</span></a></h1><ul><li>Abstract Factory: O Builder pode ser considerado uma variação mais flexível do Abstract Factory.</li><li>Composite: Pode ser usado com o Builder para construir árvores de objetos complexos.</li><li>Prototype: O Builder pode ser usado em conjunto com o Prototype para construir objetos complexos a partir de protótipos.</li></ul>',13)),n("p",null,[n("a",k,[e[1]||(e[1]=i("Mermaid Class Diagram.html")),a(s)])]),n("p",null,[n("a",g,[e[2]||(e[2]=i("Markdown")),a(s)])]),e[9]||(e[9]=n("h2",{id:"luis-miguel-de-jesus-oliveira-20211tadssaj0005",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#luis-miguel-de-jesus-oliveira-20211tadssaj0005"},[n("span",null,"Luis Miguel de Jesus Oliveira (20211TADSSAJ0005)")])],-1)),n("p",null,[n("a",h,[e[3]||(e[3]=i("@LuisMiguelADS")),a(s)])]),e[10]||(e[10]=o('<h1 id="builder-1" tabindex="-1"><a class="header-anchor" href="#builder-1"><span>Builder</span></a></h1><hr><h2 id="intencao-1" tabindex="-1"><a class="header-anchor" href="#intencao-1"><span>Intenção</span></a></h2><p>Separar a construção de um objeto complexo da sua representação de modo que o mesmo processo de construção possa criar diferentes representações.</p><hr><h2 id="tambem-conhecido-como-1" tabindex="-1"><a class="header-anchor" href="#tambem-conhecido-como-1"><span>Também conhecido como</span></a></h2><p>Constructor</p><hr><h2 id="motivacao-1" tabindex="-1"><a class="header-anchor" href="#motivacao-1"><span>Motivação</span></a></h2><p>Um leitor de um documento em RTF (Rich Text Format) deveria ser capaz de converter RTF em muitos formatos de texto. O leitor poderia converter documentos RTF em texto ASCII comum ou widget de texto, que possa ser editado interativamente. O problema, contudo, é que o número de conversões possíveis é aberto. Por isso, deve ser fácil acrescentar uma nova conversão sem modificar o leitor.</p><p>Uma solução é configurar a classe RTFReader com um objeto TextConverter que converte RTF para uma outra representação de textos. À medida que o RTFReader analisa o documento RTF, ele usa o objeto TextConverter para efetuar a conversão. Sempre que o RTFReader reconhece um símbolo RTF (texto simples, ou uma palavra de controle do RTF), ele emite uma solicitação para o TextConverter para converter esse símbolo. Os objetos TextConverter são responsáveis tanto por efetuar a conversão dos dados como pela representação do símbolo num formato particular.</p><p>As subclasses de TextConverter se especializam em diferentes conversões e formatos. Por exemplo, um ASCIIConverter ignora solicitações para converter qualquer coisa, exceto texto simples. Por outro lado, um TeXConverter implementará operações para todas as solicitações visando produzir uma representação TEX que capture toda a informação estilística do texto. Um TextWidgetConverter produzirá um objeto para uma interface de usuário complexa que permite ao usuário ver e editar o texto.</p><figure><img src="'+l+'" alt="Estrutura Motivação" tabindex="0" loading="lazy"><figcaption>Estrutura Motivação</figcaption></figure><p>Cada tipo de classe conversora implementa o mecanismo para criação e montagem de um objeto complexo, colocando-o atrás de uma interface abstrata. O conversor é separado do leitor, que é responsável pela análise de um documento RTF.</p><p>O padrão Builder captura todos estes relacionamentos. Cada classe conversora é chamada um builder no padrão, e o leitor é chamado de director. Aplicado a este exemplo, o Builder separa o algoritmo para interpretar um formato de texto (isto é, o analisador de documentos RTF) de como um formato convertido é criado e representado. Isso nos permite reutilizar o algoritmo de análise (parsing) do RTFReader para criar diferentes representações de texto a partir de documentos RTF – simplesmente configure o RTFReader com diferentes subclasses de TextConverter.</p><hr><h2 id="aplicabilidade-1" tabindex="-1"><a class="header-anchor" href="#aplicabilidade-1"><span>Aplicabilidade</span></a></h2><p>Use o padrão <strong>Builder</strong> quando:</p><ul><li>O algoritmo para criação de um objeto complexo deve ser independente das partes que compõem o objeto e de como elas são montadas.</li><li>O processo de construção deve permitir diferentes representações para o objeto que é construído.</li><li>Composição de vários objetos.</li></ul><hr><h2 id="estrutura-1" tabindex="-1"><a class="header-anchor" href="#estrutura-1"><span>Estrutura</span></a></h2><figure><img src="'+d+`" alt="Estrutura do Builder" tabindex="0" loading="lazy"><figcaption>Estrutura do Builder</figcaption></figure><hr><h2 id="participantes-1" tabindex="-1"><a class="header-anchor" href="#participantes-1"><span>Participantes</span></a></h2><ul><li><p><strong>Builder</strong> (TextConverter)</p><ul><li>Especifica uma interface abstrata para criação de partes de um objeto-produto.</li></ul></li><li><p><strong>ConcreteBuilder</strong> (ASCIIConverter, TeXConverter, TextWidgetConverter)</p><ul><li>Constrói e monta partes do produto pela implementação da interface de <strong>Builder</strong>;</li><li>Define e mantém a representação que cria;</li><li>Fornece uma interface para recuperação do produto (por exemplo, GetASCIIText, GetTextWidget).</li></ul></li><li><p><strong>Director</strong> (RTFReader)</p><ul><li>Constrói um objeto usando a interface de <strong>Builder</strong>.</li></ul></li><li><p><strong>Product</strong> (ASCIIText, TeXText, TextWidget)</p><ul><li>Representa o objeto complexo em construção. ConcreteBuilder constrói a representação interna do produto e define o processo pelo qual ele é montado;</li><li>Inclui classes que definem as partes constituintes, inclusive as interfaces para a montagem das partes no resultado final.</li></ul></li></ul><hr><h2 id="outro-exemplo" tabindex="-1"><a class="header-anchor" href="#outro-exemplo"><span>Outro exemplo</span></a></h2><p>Usar o padrão Builder só faz sentido quando seus produtos são bem complexos e requerem configuração extensiva. Os dois produtos a seguir são relacionados, embora eles não tenham uma interface em comum.</p><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>class Car is
    // Um carro pode ter um GPS, computador de bordo, e alguns
    // assentos. Diferentes modelos de carros (esportivo, SUV,
    // conversível) podem ter diferentes funcionalidades
    // instaladas ou equipadas.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>class Manual is
    // Cada carro deve ter um manual do usuário que corresponda
    // a configuração do carro e descreva todas suas
    // funcionalidades.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>// A interface builder especifica métodos para criar as
// diferentes partes de objetos produto.
interface Builder is
    method reset()
    method setSeats(...)
    method setEngine(...)
    method setTripComputer(...)
    method setGPS(...)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>// As classes builder concretas seguem a interface do
// builder e fornecem implementações específicas das etapas
// de construção. Seu programa pode ter algumas variações de
// builders, cada uma implementada de forma diferente.
class CarBuilder implements Builder is
    private field car:Car

    // Uma instância fresca do builder deve conter um objeto
    // produto em branco na qual ela usa para montagem futura.
    constructor CarBuilder() is
        this.reset()

    // O método reset limpa o objeto sendo construído.
    method reset() is
        this.car = new Car()

    // Todas as etapas de produção trabalham com a mesma
    // instância de produto.
    method setSeats(...) is
        // Define o número de assentos no carro.

    method setEngine(...) is
        // Instala um tipo de motor.

    method setTripComputer(...) is
        // Instala um computador de bordo.

    method setGPS(...) is
        // Instala um sistema de posicionamento global.

    // Geralmente, após retornar o resultado final para o
    // cliente, espera-se que uma instância de builder comece
    // a produzir outro produto. É por isso que é uma prática
    // comum chamar o método reset no final do corpo do método
    // \`getProduct\`. Contudo este comportamento não é
    // obrigatório, e você pode fazer seu builder esperar por
    // uma chamada explícita do reset a partir do código cliente
    // antes de se livrar de seu resultado anterior.
    method getProduct():Car is
        product = this.car
        this.reset()
        return product
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>// Ao contrário dos outros padrões criacionais, o Builder
// permite que você construa produtos que não seguem uma
// interface comum.
class CarManualBuilder implements Builder is
    private field manual:Manual

    constructor CarManualBuilder() is
        this.reset()

    method reset() is
        this.manual = new Manual()

    method setSeats(...) is
        // Documenta as funcionalidades do assento do carro.

    method setEngine(...) is
        // Adiciona instruções do motor.

    method setTripComputer(...) is
        // Adiciona instruções do computador de bordo.

    method setGPS(...) is
        // Adiciona instruções do GPS.

    method getProduct():Manual is
        // Retorna o manual e reseta o builder.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>// O diretor é apenas responsável por executar as etapas de
// construção em uma sequência em particular. Isso ajuda quando
// produzindo produtos de acordo com uma ordem específica ou
// configuração. A rigor, a classe diretor é opcional, já que o
// cliente pode controlar os builders diretamente.
class Director is
    // O diretor trabalha com qualquer instância builder que
    // o código cliente passar a ele. Dessa forma, o código
    // cliente pode alterar o tipo final do produto recém
    // montado. O diretor pode construir diversas variações
    // do produto usando as mesmas etapas de construção.
    method constructSportsCar(builder: Builder) is
        builder.reset()
        builder.setSeats(2)
        builder.setEngine(new SportEngine())
        builder.setTripComputer(true)
        builder.setGPS(true)

    method constructSUV(builder: Builder) is
        // ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>// O código cliente cria um objeto builder, passa ele para o
// diretor e então inicia o processo de construção. O resultado
// final é recuperado do objeto builder.
class Application is

    method makeCar() is
        director = new Director()

        CarBuilder builder = new CarBuilder()
        director.constructSportsCar(builder)
        Car car = builder.getProduct()

        CarManualBuilder builder = new CarManualBuilder()
        director.constructSportsCar(builder)

        // O produto final é frequentemente retornado de um
        // objeto builder uma vez que o diretor não está
        // ciente e não é dependente de builders e produtos
        // concretos.
        Manual manual = builder.getProduct()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Exemplo retirado do Reactoring Guru</p></blockquote><hr><h2 id="colaboracoes" tabindex="-1"><a class="header-anchor" href="#colaboracoes"><span>Colaborações</span></a></h2><ul><li>O cliente cria o objeto Director e o configura com o objeto Builder desejado.</li><li>Director notifica o construtor sempre que uma parte do produto deve ser construída.</li><li>Builder trata solicitações do diretor e acrescenta partes ao produto.</li><li>O cliente recupera o produto do construtor. <img src="`+c+`" alt="Diagrama de interação" loading="lazy"></li></ul><hr><h2 id="consequencias-1" tabindex="-1"><a class="header-anchor" href="#consequencias-1"><span>Consequências</span></a></h2><ul><li>Vantagens</li></ul><ol><li>Separa a criação da utilização.</li><li>O cliente não precisa criar os objetos diretamente.</li><li>O mesmo código pode construir objetos diferentes.</li><li>Oferece um controle mais fino sobre o processo de construção. Ao contrário de padrões de criação que constroem produtos de uma só vez, o Builder constrói o produto passo a passo sob o controle do diretor.</li></ol><ul><li>Desvantagens</li></ul><ol><li>O código final pode se tornar muito complexo.</li></ol><hr><h2 id="implementacao-1" tabindex="-1"><a class="header-anchor" href="#implementacao-1"><span>Implementação</span></a></h2><p>Ao implementar o padrão <strong>Builder</strong> leve em consideração os seguintes passos:</p><ol><li>A classe Builder define operações para cada componente que o diretor pode solicitar. Por padrão, essas operações são vazias. A interface do Builder deve ser genérica o suficiente para suportar a construção de diferentes produtos. O modelo de construção pode adicionar componentes ao produto em construção.</li><li>Geralmente, os produtos gerados por diferentes construtores concretos têm representações muito distintas, tornando pouco útil ter uma classe base comum para todos. No exemplo do RTF, objetos como ASCIIText e TextWidget são tão diferentes que não precisam de uma interface comum. O cliente configura o diretor com o construtor específico que cria o tipo desejado de produto. Assim, o cliente pode lidar com os produtos de acordo com o tipo concreto de construtor utilizado.</li><li>Em linguagens como C++, os métodos de construção em Builder são deixados vazios, permitindo que clientes redefinam apenas as operações que desejam personalizar.</li></ol><hr><h2 id="exemplo-de-codigo" tabindex="-1"><a class="header-anchor" href="#exemplo-de-codigo"><span>Exemplo de código</span></a></h2><p>Classe <code>Aparelho</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">exemploAparelho</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Aparelho</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> nome<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> marca<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">MemoriaRAM</span> memoriaRAM<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Memoria</span> memoria<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Processador</span> processador<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Placa</span> placa<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Double</span> preco<span class="token punctuation">;</span>

    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Interface <code>BuilderAparelhoInterface</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">exemploAparelho</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BuilderAparelhoInterface</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">Aparelho</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Aparelho</span> <span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildMemoria</span><span class="token punctuation">(</span><span class="token class-name">Memoria</span> memoria<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildMemoriaRAM</span><span class="token punctuation">(</span><span class="token class-name">MemoriaRAM</span> memoriaRAM<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildProcessador</span><span class="token punctuation">(</span><span class="token class-name">Processador</span> processador<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildPlaca</span><span class="token punctuation">(</span><span class="token class-name">Placa</span> placa<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Double</span> <span class="token function">getPreco</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Classe <code>BuilderAparelho</code> que implementa a interface <code>BuilderAparelhoInterface</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">exemploAparelho</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BuilderAparelho</span> <span class="token keyword">implements</span> <span class="token class-name">BuilderAparelhoInterface</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Aparelho</span> aparelho<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Double</span> preco<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Aparelho</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        aparelho <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Aparelho</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> aparelho<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Aparelho</span> <span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Aparelho</span> aparelho <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>aparelho<span class="token punctuation">;</span>
        <span class="token keyword">return</span> aparelho<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildProcessador</span><span class="token punctuation">(</span><span class="token class-name">Processador</span> processador<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        aparelho<span class="token punctuation">.</span><span class="token function">setProcessador</span><span class="token punctuation">(</span>processador<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildMemoria</span><span class="token punctuation">(</span><span class="token class-name">Memoria</span> memoria<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        aparelho<span class="token punctuation">.</span><span class="token function">setMemoria</span><span class="token punctuation">(</span>memoria<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildMemoriaRAM</span><span class="token punctuation">(</span><span class="token class-name">MemoriaRAM</span> memoriaRAM<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        aparelho<span class="token punctuation">.</span><span class="token function">setMemoriaRAM</span><span class="token punctuation">(</span>memoriaRAM<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildPlaca</span><span class="token punctuation">(</span><span class="token class-name">Placa</span> placa<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        aparelho<span class="token punctuation">.</span><span class="token function">setPlaca</span><span class="token punctuation">(</span>placa<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Double</span> <span class="token function">getPreco</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> preco <span class="token operator">=</span> aparelho<span class="token punctuation">.</span><span class="token function">getPreco</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Classe <code>DirectorCelularSamsung</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">exemploAparelho</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DirectorCelularSamsung</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">BuilderAparelho</span> builder<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">DirectorCelularSamsung</span><span class="token punctuation">(</span><span class="token class-name">BuilderAparelho</span> builder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>builder <span class="token operator">=</span> builder<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">criarCelular</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Memoria</span> memoria <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Memoria</span><span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">,</span> <span class="token string">&quot;Celular&quot;</span><span class="token punctuation">,</span> <span class="token number">350.00</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildMemoria</span><span class="token punctuation">(</span>memoria<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MemoriaRAM</span> memoriaRAM <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MemoriaRAM</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&quot;Celular&quot;</span><span class="token punctuation">,</span> <span class="token number">90.00</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildMemoriaRAM</span><span class="token punctuation">(</span>memoriaRAM<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Placa</span> placa <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Placa</span><span class="token punctuation">(</span><span class="token string">&quot;Samsung&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Galaxy Tab S6 Lite&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Celular&quot;</span><span class="token punctuation">,</span> <span class="token number">539.90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildPlaca</span><span class="token punctuation">(</span>placa<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Processador</span> processador <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Processador</span><span class="token punctuation">(</span><span class="token string">&quot;Snapdragon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Exynos 1280&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Celular&quot;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">899.90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildProcessador</span><span class="token punctuation">(</span>processador<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Classe <code>DirectorCelularXiaomi</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">exemploAparelho</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DirectorCelularXiaomi</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">BuilderAparelho</span> builder<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">DirectorCelularXiaomi</span><span class="token punctuation">(</span><span class="token class-name">BuilderAparelho</span> builder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>builder <span class="token operator">=</span> builder<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">criarCelular</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Memoria</span> memoria <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Memoria</span><span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">,</span> <span class="token string">&quot;Celular&quot;</span><span class="token punctuation">,</span> <span class="token number">200.00</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildMemoria</span><span class="token punctuation">(</span>memoria<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MemoriaRAM</span> memoriaRAM <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MemoriaRAM</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">&quot;Celular&quot;</span><span class="token punctuation">,</span> <span class="token number">180.00</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildMemoriaRAM</span><span class="token punctuation">(</span>memoriaRAM<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Placa</span> placa <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Placa</span><span class="token punctuation">(</span><span class="token string">&quot;Xiaomi&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Xiaomi Poco X5&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Celular&quot;</span><span class="token punctuation">,</span> <span class="token number">539.90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildPlaca</span><span class="token punctuation">(</span>placa<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Processador</span> processador <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Processador</span><span class="token punctuation">(</span><span class="token string">&quot;Snapdragon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Snapdragon 765&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Celular&quot;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">799.90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildProcessador</span><span class="token punctuation">(</span>processador<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Executando código cliente na classe <code>Main</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">exemploAparelho</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BuilderAparelho</span> builderAparelhoCelular <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BuilderAparelho</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">DirectorCelularSamsung</span> directorSamsung <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DirectorCelularSamsung</span><span class="token punctuation">(</span>builderAparelhoCelular<span class="token punctuation">)</span><span class="token punctuation">;</span>
        directorSamsung<span class="token punctuation">.</span><span class="token function">criarCelular</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Aparelho</span> celularSamsung <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Aparelho</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        celularSamsung <span class="token operator">=</span> builderAparelhoCelular<span class="token punctuation">.</span><span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>celularSamsung<span class="token punctuation">.</span><span class="token function">getPreco</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">DirectorCelularXiaomi</span> directorXiaomi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DirectorCelularXiaomi</span><span class="token punctuation">(</span>builderAparelhoCelular<span class="token punctuation">)</span><span class="token punctuation">;</span>
        directorXiaomi<span class="token punctuation">.</span><span class="token function">criarCelular</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Aparelho</span> celularXiaomi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Aparelho</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        celularXiaomi <span class="token operator">=</span> builderAparelhoCelular<span class="token punctuation">.</span><span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>celularXiaomi<span class="token punctuation">.</span><span class="token function">getPreco</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="usos-conhecidos-1" tabindex="-1"><a class="header-anchor" href="#usos-conhecidos-1"><span>Usos conhecidos</span></a></h2><p>O framework Service Configurator do Adaptive Communications Environment usa um builder para construir componentes de serviços de rede que são “linkeditados” a um servidor em tempo de execução [SS94]. Os componentes são descritos com uma linguagem de configuração que é analisada por um analisador LALR(1). As ações semânticas do analisador executam operações sobre o construtor que acrescenta informações ao componente de serviço. Neste caso, o analisador é o Director.</p><hr><h2 id="padroes-relacionados-1" tabindex="-1"><a class="header-anchor" href="#padroes-relacionados-1"><span>Padrões relacionados</span></a></h2><p>[Composite]: é o que freqüentemente o builder constrói. [Abstract Factory]: é semelhante a Builder no sentido de que também pode construir objetos complexos. A diferença principal é que o padrão Builder focaliza a construção de um objeto complexo passo a passo. A ênfase do Abstract Factory é sobre famílias de objetos-produto (simples ou complexos). Builder retorna o produto como um passo final, mas no caso do padrão Abstrac Factory o produto é retornado imediatamente.</p><hr><h2 id="referencias" tabindex="-1"><a class="header-anchor" href="#referencias"><span>Referências</span></a></h2><ul><li>Refactoring Guru - https://refactoring.guru/pt-br/design-patterns/builder</li><li>Gamma Erich - Padrões de Projetos - Soluções Reutilizáveis</li><li>Otávio Miranda - Builder Teoria - Padrões de Projeto - Parte 6/45 - https://www.youtube.com/watch?v=2VwLvwsIu-8</li><li>Otávio Miranda - Builder Prática - Padrões de Projeto - Parte 7/45 - https://www.youtube.com/watch?v=LWm3888uOrc</li></ul><h2 id="yuri-pepe-do-espirito-santo-20221tadssaj0005" tabindex="-1"><a class="header-anchor" href="#yuri-pepe-do-espirito-santo-20221tadssaj0005"><span>Yuri Pêpe do Espírito Santo (20221TADSSAJ0005)</span></a></h2>`,73)),n("p",null,[n("a",f,[e[4]||(e[4]=i("@YuriPepezin")),a(s)])]),e[11]||(e[11]=o('<h1 id="padrao-builder-yuri" tabindex="-1"><a class="header-anchor" href="#padrao-builder-yuri"><span>PADRÃO BUILDER - YURI</span></a></h1><h2 id="intencao-2" tabindex="-1"><a class="header-anchor" href="#intencao-2"><span>Intenção</span></a></h2><p>O padrão de projeto Builder tem como objetivo separar a construção de um objeto complexo da sua representação, permitindo que o mesmo processo de construção crie diferentes representações. Em outras palavras, ele facilita a criação de objetos complexos passo a passo.</p><h2 id="tambem-conhecido-como-2" tabindex="-1"><a class="header-anchor" href="#tambem-conhecido-como-2"><span>Também conhecido como</span></a></h2><p>O padrão Builder também é conhecido como Construtor, Construction Pattern.</p><h2 id="motivacao-para-o-padrao-de-projeto-builder" tabindex="-1"><a class="header-anchor" href="#motivacao-para-o-padrao-de-projeto-builder"><span>Motivação para o Padrão de Projeto Builder</span></a></h2><p>A construção de objetos complexos pode envolver uma série de etapas e opções que variam conforme o contexto e as necessidades do sistema. Codificar a construção desses objetos diretamente nas classes que os utilizam pode resultar em diversos problemas:</p><h3 id="complexidade-na-criacao-de-objetos" tabindex="-1"><a class="header-anchor" href="#complexidade-na-criacao-de-objetos"><span>Complexidade na Criação de Objetos</span></a></h3><p>Quando um objeto requer múltiplos parâmetros para sua construção e alguns desses parâmetros são opcionais, a criação do objeto pode se tornar complexa e difícil de entender. Se o construtor da classe precisa suportar todas as combinações possíveis de parâmetros, o número de construtores pode crescer exponencialmente, resultando em um código difícil de manter e entender.</p><h3 id="diferenca-entre-construcao-e-representacao" tabindex="-1"><a class="header-anchor" href="#diferenca-entre-construcao-e-representacao"><span>Diferença entre Construção e Representação</span></a></h3><p>A lógica para construir um objeto pode ser complexa e diferente da lógica para representar o objeto em si. Quando a construção está codificada diretamente na classe, é difícil separar a construção da representação. O padrão Builder ajuda a manter essas responsabilidades separadas, permitindo uma construção mais flexível e uma representação mais clara.</p><h3 id="manutencao-e-extensibilidade" tabindex="-1"><a class="header-anchor" href="#manutencao-e-extensibilidade"><span>Manutenção e Extensibilidade</span></a></h3><p>Alterar o processo de construção de um objeto (por exemplo, adicionar um novo parâmetro ou alterar o método de construção) pode ser difícil se a construção estiver diretamente acoplada à classe do objeto. Com o padrão Builder, você pode modificar a construção do objeto sem alterar a classe que representa o objeto, facilitando a manutenção e a extensão do código.</p><h3 id="codigo-mais-limpo-e-legivel" tabindex="-1"><a class="header-anchor" href="#codigo-mais-limpo-e-legivel"><span>Código Mais Limpo e Legível</span></a></h3><p>Utilizar o padrão Builder pode tornar o código que cria e configura objetos mais limpo e legível. Em vez de um construtor com muitos parâmetros ou métodos de configuração confusos, o Builder oferece uma interface clara e fluente para configurar os objetos passo a passo.</p><h2 id="aplicabilidade-2" tabindex="-1"><a class="header-anchor" href="#aplicabilidade-2"><span>Aplicabilidade</span></a></h2><p>Use o padrão Builder quando:</p><ul><li>o algoritmo para criação de um objeto complexo deve ser independente das partes que compõem o objeto e de como elas são montadas.</li><li>o processo de construção deve permitir diferentes representações para o objeto que é construído</li></ul><h2 id="estrutura-2" tabindex="-1"><a class="header-anchor" href="#estrutura-2"><span>Estrutura</span></a></h2><p><strong>Builder</strong>:</p><ul><li>Declara uma interface para criar as partes do objeto <code>Product</code>.</li></ul><p><strong>ConcreteBuilder</strong>:</p><ul><li>Implementa a interface <code>Builder</code> para construir e montar as partes do objeto <code>Product</code>.</li><li>Mantém a representação do produto que está sendo construído.</li><li>Fornece um método para recuperar o produto.</li></ul><p><strong>Director</strong>:</p><ul><li>Constrói um objeto usando a interface <code>Builder</code>.</li><li>Orienta a sequência de construção.</li></ul><p><strong>Product</strong>:</p><ul><li>Representa o objeto complexo em construção.</li></ul><figure><img src="https://github.com/20241-ifba-saj-ads-ppr/seminario-1-YuriPepezin/blob/main/imagens/EstruturaBuilder2.png" alt="Exemplo de imagem" tabindex="0" loading="lazy"><figcaption>Exemplo de imagem</figcaption></figure>',28)),a(r,{id:"mermaid-707",code:"eJxLzkksLnbJTEwvSszlUgACsICCS2ZRanJJfpFCNVgQBHQVnEozc1JSixSSIDRcRluhLD8zRSE5P6+4pKg0uURDEyxVy4VkIEwvwjyoLrBhAYlFWHU55+clF6WWpBKtGyIVUJSfAnSHQnpqSVBqcWkOVrOhiiBCcP/q6trB3AqWgNlsU6Ori+4csAJ0J4IMgBkNAAegZSc="}),e[12]||(e[12]=o(`<h2 id="consequencias-2" tabindex="-1"><a class="header-anchor" href="#consequencias-2"><span>Consequências</span></a></h2><p>A seguir são apresentadas as conseqüências-chave da utilização do padrão Builder:</p><blockquote><p>Permite variar a representação interna de um produto. O objeto Builder fornece ao diretor uma interface abstrata para a construção do produto. Essa interface permite ao construtor ocultar a representação e a estrutura interna do produto, bem como o processo de montagem do produto. Como o produto é construído através de uma interface abstrata, tudo o que é necessário para mudar sua representação interna é definir um novo tipo de construtor.</p></blockquote><blockquote><p>O padrão Builder isola o código para construção e representação, melhorando a modularidade pelo encapsulamento da forma como um objeto complexo é construído e representado. Os clientes não precisam saber nada sobre as classes que definem a estrutura interna do produto, pois essas classes não aparecem na interface do Builder. Cada ConcreteBuilder contém todo o código necessário para criar e montar um tipo específico de produto. Esse código é escrito apenas uma vez; assim, diferentes Directors podem reutilizá-lo para construir variantes de produtos com o mesmo conjunto de partes.</p></blockquote><blockquote><p>O padrão Builder oferece um controle mais fino sobre o processo de construção. Ao contrário de outros padrões de criação que constroem produtos de uma só vez, o Builder constrói o produto passo a passo, sob o controle do diretor. Somente quando o produto está terminado o diretor o recupera do construtor. Dessa forma, a interface do Builder reflete o processo de construção do produto de maneira mais explícita do que outros padrões de criação. Isso proporciona um controle mais fino sobre o processo de construção e, consequentemente, sobre a estrutura interna do produto resultante.</p></blockquote><h2 id="implementacao-2" tabindex="-1"><a class="header-anchor" href="#implementacao-2"><span>Implementação</span></a></h2><h3 id="exemplo-do-builder-na-pratica" tabindex="-1"><a class="header-anchor" href="#exemplo-do-builder-na-pratica"><span>Exemplo do builder na Pratica</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Pessoa {

    private String nome;
    private String sobrenome;
    private String nick;
    private String email;

    private Pessoa(Builder builder) {
        this.nome = builder.nome;
        this.sobrenome = builder.sobrenome;
        this.nick = builder.nick;
        this.email = builder.email;
    }


    public String getNome() {
        return nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public String getNick() {
        return nick;
    }

    public String getEmail() {
        return email;
    }
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>   public static class Builder {
        private String nome;
        private String sobrenome;
        private String nick;
        private String email;

        public Builder nome(String nome) {
            this.nome = nome;
            return this;
        }

        public Builder sobrenome(String sobrenome) {
            this.sobrenome = sobrenome;
            return this;
        }

        public Builder nick(String nick) {
            this.nick = nick;
            return this;
        }

        public Builder email(String email) {
            this.email = email;
            return this;
        }

        public Pessoa build() {
            return new Pessoa(this);
        }
    }

    }
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="como-o-main-sem-o-builder" tabindex="-1"><a class="header-anchor" href="#como-o-main-sem-o-builder"><span>COMO O MAIN SEM O BUILDER</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Main {
    public static void main(String[] args) {
        // Criando objetos Pessoa usando o construtor
        Pessoa pessoa1 = new Pessoa(&quot;João&quot;, &quot;Silva&quot;, &quot;joaosilva&quot;, &quot;joao.silva@example.com&quot;);

        // Criando objetos Pessoa usando o construtor padrão e setters
        Pessoa pessoa2 = new Pessoa();
        pessoa2.setNome(&quot;Maria&quot;);
        pessoa2.setSobrenome(&quot;Oliveira&quot;);
        pessoa2.setNick(&quot;mariaoliveira&quot;);
        pessoa2.setEmail(&quot;maria.oliveira@example.com&quot;);
     }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="como-o-main-fica-com-o-builder" tabindex="-1"><a class="header-anchor" href="#como-o-main-fica-com-o-builder"><span>COMO O MAIN FICA COM O BUILDER</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Main {
        public static void main(String[] args) {
            Pessoa pessoa =  Pessoa.Builder()
                                .nome(&quot;João&quot;)
                                .sobrenome(&quot;Silva&quot;)
                                .nick(&quot;joaosilva&quot;)
                                .email(&quot;joao.silva@example.com&quot;)
                                .build();
    
            
        }
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exemplo-do-uso-do-padrao-de-projeto-builder" tabindex="-1"><a class="header-anchor" href="#exemplo-do-uso-do-padrao-de-projeto-builder"><span>EXEMPLO DO USO DO PADRÂO DE PROJETO BUILDER</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Computador {
    private String processador;
    private String RAM;
    private String armazenamento;
    private String placaDeVideo;
    private String sistemaOperacional;

    public void definirProcessador(String processador) {
        this.processador = processador;
    }

    public void definirRAM(String RAM) {
        this.RAM = RAM;
    }

    public void definirArmazenamento(String armazenamento) {
        this.armazenamento = armazenamento;
    }

    public void definirPlacaDeVideo(String placaDeVideo) {
        this.placaDeVideo = placaDeVideo;
    }

    public void definirSistemaOperacional(String sistemaOperacional) {
        this.sistemaOperacional = sistemaOperacional;
    }

    @Override
    public String toString() {
        return &quot;Computador{&quot; +
                &quot;processador=&#39;&quot; + processador + &#39;\\&#39;&#39; +
                &quot;, RAM=&#39;&quot; + RAM + &#39;\\&#39;&#39; +
                &quot;, armazenamento=&#39;&quot; + armazenamento + &#39;\\&#39;&#39; +
                &quot;, placaDeVideo=&#39;&quot; + placaDeVideo + &#39;\\&#39;&#39; +
                &quot;, sistemaOperacional=&#39;&quot; + sistemaOperacional + &#39;\\&#39;&#39; +
                &#39;}&#39;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface ConstrutorComputador {
    void definirProcessador();
    void definirRAM();
    void definirArmazenamento();
    void definirPlacaDeVideo();
    void definirSistemaOperacional();
    Computador construir();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class ConstrutorComputadorEscritorio implements ConstrutorComputador {
    private Computador computador;

    public ConstrutorComputadorEscritorio() {
        this.computador = new Computador();
    }

    @Override
    public void definirProcessador() {
        computador.definirProcessador(&quot;Intel i5&quot;);
    }

    @Override
    public void definirRAM() {
        computador.definirRAM(&quot;16GB&quot;);
    }

    @Override
    public void definirArmazenamento() {
        computador.definirArmazenamento(&quot;512GB SSD&quot;);
    }

    @Override
    public void definirPlacaDeVideo() {
        computador.definirPlacaDeVideo(&quot;Integrada&quot;);
    }

    @Override
    public void definirSistemaOperacional() {
        computador.definirSistemaOperacional(&quot;Windows 10&quot;);
    }

    @Override
    public Computador construir() {
        return computador;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class ConstrutorComputadorGamer implements ConstrutorComputador {
    private Computador computador;

    public ConstrutorComputadorGamer() {
        this.computador = new Computador();
    }

    @Override
    public void definirProcessador() {
        computador.definirProcessador(&quot;Intel i9&quot;);
    }

    @Override
    public void definirRAM() {
        computador.definirRAM(&quot;32GB&quot;);
    }

    @Override
    public void definirArmazenamento() {
        computador.definirArmazenamento(&quot;1TB SSD&quot;);
    }

    @Override
    public void definirPlacaDeVideo() {
        computador.definirPlacaDeVideo(&quot;NVIDIA RTX 3080&quot;);
    }

    @Override
    public void definirSistemaOperacional() {
        computador.definirSistemaOperacional(&quot;Windows 10&quot;);
    }

    @Override
    public Computador construir() {
        return computador;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class DiretorComputador {
    private ConstrutorComputador construtor;

    public DiretorComputador(ConstrutorComputador construtor) {
        this.construtor = construtor;
    }

    public Computador construirComputador() {
        construtor.definirProcessador();
        construtor.definirRAM();
        construtor.definirArmazenamento();
        construtor.definirPlacaDeVideo();
        construtor.definirSistemaOperacional();
        return construtor.construir();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Main {
    public static void main(String[] args) {
        ConstrutorComputador construtorGamer = new ConstrutorComputadorGamer();
        DiretorComputador diretorGamer = new DiretorComputador(construtorGamer);
        Computador computadorGamer = diretorGamer.construirComputador();

        System.out.println(&quot;Computador Gamer: &quot; + computadorGamer);

        ConstrutorComputador construtorEscritorio = new ConstrutorComputadorEscritorio();
        DiretorComputador diretorEscritorio = new DiretorComputador(construtorEscritorio);
        Computador computadorEscritorio = diretorEscritorio.construirComputador();

        System.out.println(&quot;Computador de Escritório: &quot; + computadorEscritorio);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="leandro" tabindex="-1"><a class="header-anchor" href="#leandro"><span>Leandro</span></a></h2><figure><img src="https://www.plantuml.com/plantuml/svg/lLJDJeGm4BxFK_Ie5n9lXXEh9fvCYFe2XSvA4zeXGxbezjsth1HAbuI3PhbGPfZlP_X2qJl9RZ0jG34VjNN8HrcZE7IIiMree_IY6Mj7_0F2Nw4gQjQImzFTFPm0m993uQWJT5nUp4N9f0P7i07-DEXMuOGjbVh4kfLgn9iARsIr9uyAQCXJBuK36_cDLXgqBWpEvDM8xujUdWVk-xbJKiKuiGjjkXR7-JuL9lvJsMdQ4EklniKxYiNa-GBbWHvUAq2hn3W8YOTtNTE-XPiuYAGa1Xut37mO7y2o8OiXN5lwry4BHglV-suOrpgl6VDyDNJ1cx2pgrL4ZNGbgRVo-LQU5gOTB-iF7vjS1U1lxc4MdcLf13TxGJmK7iJ_ZOI0S3m3" alt="uml diagram" loading="lazy"><figcaption> Exemplo de builder</figcaption></figure><h1 id="joao-augusto" tabindex="-1"><a class="header-anchor" href="#joao-augusto"><span>João Augusto</span></a></h1><figure><img src="https://www.plantuml.com/plantuml/svg/vLJ1ReCm3BtdAtBiDEK7gcb2qwITAbNh5wJWWQMG82Viq6t_FX98Im8S9rKQ5sBxcVVyC1JMIN9zgnWhhaVK3kX3bi2FUBb8_iNuS3to6jn1MYjt3tpFJuvGrxEAKOrPhRn3sG0cjH-Maxpqg2gWAvUDN6C7RttWd_1fi9fX0cl4-629YVmJYiOmmvqzVv0Ov7Y5fHeun_24RQV0Hf4XQa4xkoPUyBdcBEKbfgb9JqZUvV1lfgSMt3yQFjlDLnmwdKcMSvfwbrXm7kyPGMcqTTGZ1UocpGT9TGE4xiQNMvq94NoD_Iyr7g7hW8p6EvEOj3zz2x7ssMwXqlrcwHWtsFBzR48NDcL88PvJN_PpB-BuMqq3ElSY7MsEdBQR5Q2hy9kFfry0" alt="uml diagram" loading="lazy"><figcaption> Exemplo de builder </figcaption></figure>`,24))])}const B=u(v,[["render",x],["__file","Builder.html.vue"]]),S=JSON.parse('{"path":"/posts/Seminarios/seminario-1/Builder.html","title":"Builder","lang":"pt-BR","frontmatter":{"icon":"edit","date":"2024-07-25T23:10:00.000Z","tag":["builder","gof"],"category":["seminario-1"],"order":10,"excerpt":"Apresentação do Padrão de Projeto Builder","author":"gabrielflb, LuisMiguelADS, YuriPepezin","gitInclude":["../../../../src/includes/seminario-1-gabrielflb/README.md","../../../../src/includes/seminario-1-LuisMiguelADS/README.md","../../../../src/includes/seminario-1-YuriPepezin/ApYuri.md","../../../../src/includes/Leandro/builder/build.plantuml"],"description":"Builder Gabriel Ferreira Lima Brito (20212TADSSAJ0015) @gabrielflb Seminario - 1 Intenção A intenção do padrão Builder é separar a construção de um objeto complexo da sua repres...","head":[["meta",{"property":"og:url","content":"https://20241-ifba-saj-ads-ppr.github.io/blog-material-aula/blog-material-aula/posts/Seminarios/seminario-1/Builder.html"}],["meta",{"property":"og:site_name","content":"20241 PPR Blog das Aulas"}],["meta",{"property":"og:title","content":"Builder"}],["meta",{"property":"og:description","content":"Builder Gabriel Ferreira Lima Brito (20212TADSSAJ0015) @gabrielflb Seminario - 1 Intenção A intenção do padrão Builder é separar a construção de um objeto complexo da sua repres..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"pt-BR"}],["meta",{"property":"og:updated_time","content":"2024-09-19T23:23:15.000Z"}],["meta",{"property":"article:author","content":"gabrielflb, LuisMiguelADS, YuriPepezin"}],["meta",{"property":"article:tag","content":"builder"}],["meta",{"property":"article:tag","content":"gof"}],["meta",{"property":"article:published_time","content":"2024-07-25T23:10:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-19T23:23:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Builder\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-25T23:10:00.000Z\\",\\"dateModified\\":\\"2024-09-19T23:23:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"gabrielflb, LuisMiguelADS, YuriPepezin\\"}]}"]]},"headers":[{"level":2,"title":"Gabriel Ferreira Lima Brito (20212TADSSAJ0015)","slug":"gabriel-ferreira-lima-brito-20212tadssaj0015","link":"#gabriel-ferreira-lima-brito-20212tadssaj0015","children":[]},{"level":2,"title":"Intenção","slug":"intencao","link":"#intencao","children":[]},{"level":2,"title":"Também Conhecido Como","slug":"tambem-conhecido-como","link":"#tambem-conhecido-como","children":[]},{"level":2,"title":"Motivação","slug":"motivacao","link":"#motivacao","children":[]},{"level":2,"title":"Aplicabilidade","slug":"aplicabilidade","link":"#aplicabilidade","children":[{"level":3,"title":"Use o padrão Builder quando:","slug":"use-o-padrao-builder-quando","link":"#use-o-padrao-builder-quando","children":[]}]},{"level":2,"title":"Estrutura","slug":"estrutura","link":"#estrutura","children":[{"level":3,"title":"O padrão Builder normalmente envolve os seguintes componentes:","slug":"o-padrao-builder-normalmente-envolve-os-seguintes-componentes","link":"#o-padrao-builder-normalmente-envolve-os-seguintes-componentes","children":[]}]},{"level":2,"title":"Participantes","slug":"participantes","link":"#participantes","children":[]},{"level":2,"title":"Vantagens","slug":"vantagens","link":"#vantagens","children":[]},{"level":2,"title":"Desvantagens","slug":"desvantagens","link":"#desvantagens","children":[]},{"level":2,"title":"Luis Miguel de Jesus Oliveira (20211TADSSAJ0005)","slug":"luis-miguel-de-jesus-oliveira-20211tadssaj0005","link":"#luis-miguel-de-jesus-oliveira-20211tadssaj0005","children":[]},{"level":2,"title":"Intenção","slug":"intencao-1","link":"#intencao-1","children":[]},{"level":2,"title":"Também conhecido como","slug":"tambem-conhecido-como-1","link":"#tambem-conhecido-como-1","children":[]},{"level":2,"title":"Motivação","slug":"motivacao-1","link":"#motivacao-1","children":[]},{"level":2,"title":"Aplicabilidade","slug":"aplicabilidade-1","link":"#aplicabilidade-1","children":[]},{"level":2,"title":"Estrutura","slug":"estrutura-1","link":"#estrutura-1","children":[]},{"level":2,"title":"Participantes","slug":"participantes-1","link":"#participantes-1","children":[]},{"level":2,"title":"Outro exemplo","slug":"outro-exemplo","link":"#outro-exemplo","children":[]},{"level":2,"title":"Colaborações","slug":"colaboracoes","link":"#colaboracoes","children":[]},{"level":2,"title":"Consequências","slug":"consequencias-1","link":"#consequencias-1","children":[]},{"level":2,"title":"Implementação","slug":"implementacao-1","link":"#implementacao-1","children":[]},{"level":2,"title":"Exemplo de código","slug":"exemplo-de-codigo","link":"#exemplo-de-codigo","children":[]},{"level":2,"title":"Usos conhecidos","slug":"usos-conhecidos-1","link":"#usos-conhecidos-1","children":[]},{"level":2,"title":"Padrões relacionados","slug":"padroes-relacionados-1","link":"#padroes-relacionados-1","children":[]},{"level":2,"title":"Referências","slug":"referencias","link":"#referencias","children":[]},{"level":2,"title":"Yuri Pêpe do Espírito Santo (20221TADSSAJ0005)","slug":"yuri-pepe-do-espirito-santo-20221tadssaj0005","link":"#yuri-pepe-do-espirito-santo-20221tadssaj0005","children":[]},{"level":2,"title":"Intenção","slug":"intencao-2","link":"#intencao-2","children":[]},{"level":2,"title":"Também conhecido como","slug":"tambem-conhecido-como-2","link":"#tambem-conhecido-como-2","children":[]},{"level":2,"title":"Motivação para o Padrão de Projeto Builder","slug":"motivacao-para-o-padrao-de-projeto-builder","link":"#motivacao-para-o-padrao-de-projeto-builder","children":[{"level":3,"title":"Complexidade na Criação de Objetos","slug":"complexidade-na-criacao-de-objetos","link":"#complexidade-na-criacao-de-objetos","children":[]},{"level":3,"title":"Diferença entre Construção e Representação","slug":"diferenca-entre-construcao-e-representacao","link":"#diferenca-entre-construcao-e-representacao","children":[]},{"level":3,"title":"Manutenção e Extensibilidade","slug":"manutencao-e-extensibilidade","link":"#manutencao-e-extensibilidade","children":[]},{"level":3,"title":"Código Mais Limpo e Legível","slug":"codigo-mais-limpo-e-legivel","link":"#codigo-mais-limpo-e-legivel","children":[]}]},{"level":2,"title":"Aplicabilidade","slug":"aplicabilidade-2","link":"#aplicabilidade-2","children":[]},{"level":2,"title":"Estrutura","slug":"estrutura-2","link":"#estrutura-2","children":[]},{"level":2,"title":"Consequências","slug":"consequencias-2","link":"#consequencias-2","children":[]},{"level":2,"title":"Implementação","slug":"implementacao-2","link":"#implementacao-2","children":[{"level":3,"title":"Exemplo do builder na Pratica","slug":"exemplo-do-builder-na-pratica","link":"#exemplo-do-builder-na-pratica","children":[]},{"level":3,"title":"COMO O MAIN SEM O BUILDER","slug":"como-o-main-sem-o-builder","link":"#como-o-main-sem-o-builder","children":[]},{"level":3,"title":"COMO O MAIN FICA COM O  BUILDER","slug":"como-o-main-fica-com-o-builder","link":"#como-o-main-fica-com-o-builder","children":[]}]},{"level":2,"title":"EXEMPLO DO USO DO PADRÂO DE PROJETO BUILDER","slug":"exemplo-do-uso-do-padrao-de-projeto-builder","link":"#exemplo-do-uso-do-padrao-de-projeto-builder","children":[]},{"level":2,"title":"Leandro","slug":"leandro","link":"#leandro","children":[]}],"git":{"createdTime":1726788195000,"updatedTime":1726788195000,"contributors":[{"name":"leandro-costa","email":"leandro.costa@ifba.edu.br","commits":1}]},"readingTime":{"minutes":0.71,"words":213},"filePathRelative":"posts/Seminarios/seminario-1/Builder.md","localizedDate":"25 de julho de 2024","autoDesc":true}');export{B as comp,S as data};
