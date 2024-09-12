---
icon: edit
date: 2024-09-12 19:00:00.00 -3
tag:
  - GOF
category:
  - aula
order: 11
---

# Padrões de projeto comportamentais

[^GAMMA]

Os padrões comportamentais se preocupam com algoritmos e a atribuição de respon- sabilidades entre objetos. Os padrões comportamentais não descrevem apenas padrões de objetos ou classes, mas também os padrões de comunicação entre eles. Esses padrões caracterizam fluxos de controle difíceis de seguir em tempo de execução. Eles afastam o foco do fluxo de controle para permitir que você se concentre somente na maneira como os objetos são interconectados.
Os padrões comportamentais de classe utilizam a herança para distribuir o comportamento entre classes. Este capítulo inclui dois padrões desse tipo. O [Template Method] é o mais simples e o mais comum dos dois. Um método template é uma definição abstrata de um algoritmo. Ele define o algoritmo passo a passo. Cada passo invoca uma operação abstrata ou uma operação primitiva. Uma subclasse encarna um algoritmo através da definição das operações abstratas. O outro padrão comporta- mental de classe é [Interpreter] , o qual representa uma gramática como uma hierarquia de classes e implementa um interpretador como uma operação em instâncias destas classes.
Os padrões comportamentais de objetos utilizam a composição de objetos em vez da herança. Alguns descrevem como um grupo de objetos-pares cooperam para a execução de uma tarefa que nenhum objeto sozinho poderia executar por si mesmo. Um aspecto importante aqui é como os objetos-pares conhecem uns aos outros. Os pares poderiam manter referências explícitas uns para os outros, mas isso aumentaria o seu acoplamento. Levado ao extremo, cada objeto teria conhecimento de cada um dos demais. O padrão [Mediator] evita essa situação pela introdução de um objeto mediador entre os objetos-pares. Um mediador fornece o referenciamento indireto necessário para um acoplamento fraco.

O padrão [Chain of Responsibility] fornece um acoplamento ainda mais fraco. Ele permite enviar solicitações implicitamente para um objeto através de uma cadeia de objetos candidatos. Qualquer candidato pode satisfazer a solicitação dependendo de condições em tempo de execução. O número de candidatos é aberto e você pode selecionar quais candidatos participam da cadeia em tempo de execução.
O padrão [Observer]  define e mantém uma dependência entre objetos. O exemplo clássico do Observer está no Model/View/Controller da Smalltalk, onde todas as visões do modelo são notificadas sempre que o estado do modelo muda.
Outros padrões comportamentais de objetos se preocupam com o encapsulamen- to de comportamento em um objeto e com a delegação de solicitações para ele. O padrão [Strategy] encapsula um algoritmo num objeto. Strategy torna fácil especificar e mudar o algoritmo que um objeto usa. O padrão [Command] encapsula uma solicitação num objeto, de maneira que possa ser passada como um parâmetro, armazenada numa lista histórica ou manipulada de outras formas. O padrão [State] encapsula os estados de um objeto, de maneira que o objeto possa mudar o seu comportamento quando o seu objeto-estado mudar. [Visitor]  encapsula comportamento que, de outra forma, seria distribuído entre classes, [Iterator] abstrai a maneira como objetos de um agregado são acessados e percorridos.





## Entrega

Link




## Referências

<!-- @include: ../../includes/bib.md -->
