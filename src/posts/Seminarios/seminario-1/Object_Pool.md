---
icon: edit
date: 2024-07-25 20:10:00.00 -3
tag:
  - 'Object Pool'
  - gof
category:
  - seminario-1
order: 10
excerpt: Apresentação do Padrão de Projeto Object Pool
author: JoaoAugustoMPdJ, SalvadorCerqueiraJr
---

# Object Pool

## João Augusto Moura Peixoto de Jesus (20211TADSSAJ0004)
[@JoaoAugustoMPdJ](https://github.com/JoaoAugustoMPdJ)

<!-- @include: ../../../includes/seminario-1-JoaoAugustoMPdJ/README.md -->


## Salvador Cerqueira Júnior (20212TADSSAJ0020)
[@SalvadorCerqueiraJr](https://github.com/SalvadorCerqueiraJr)

<!-- @include: ../../../includes/seminario-1-SalvadorCerqueiraJr/README.md -->


## Yuri Pêpe

<figure>

```mermaid
classDiagram
    class Impressora {
        <<abstract>>
        - emUso: boolean
        + conectar() void
        + desconectar() void
        + estaEmUso() boolean
        + imprimir(documento: String) void
    }
    class ImpressoraSimples {
        + imprimir(documento: String) void
    }
    class ImpressoraColorida {
        + imprimir(documento: String) void
    }
    class ObjectPool {
        - pool: List<Impressora>
        - tamanhoMaximo: int
        + pegarImpressora() Impressora
        + devolverImpressora(impressora: Impressora) void
    }
    class GerenciadorImpressao {
        + main(args: String[]) void
    }
    Impressora <|-- ImpressoraSimples
    Impressora <|-- ImpressoraColorida
    ObjectPool o-- Impressora : "gerencia"
    GerenciadorImpressao o-- ObjectPool : "usa"
```
</figure>
