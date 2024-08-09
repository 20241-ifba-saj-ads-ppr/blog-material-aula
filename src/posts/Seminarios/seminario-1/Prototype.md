---
icon: edit
date: 2024-07-25 20:10:00.00 -3
tag:
  - Prototype
  - gof
category:
  - seminario-1
order: 10
excerpt: Apresentação do Padrão de Projeto Prototype
author: GabrielMreira, Redror
---

# Prototype

## Gabriel Moreira Bispo Santos (20221TADSSAJ0020)
[@GabrielMreira](https://github.com/GabrielMreira)

<!-- @include: ../../../includes/seminario-1-GabrielMreira/README.md -->


## Pedro Carlos de Gois Barros Santos (20221TADSSAJ0006)
[@Redror](https://github.com/Redror)

<!-- @include: ../../../includes/seminario-1-Redror/README.md -->


## Yuri Pêpe

<figure>
  
```mermaid
classDiagram
    class Produto {
        <<interface>>
        + clonar() Produto
        + exibirDetalhes() void
    }

    class ProdutoEletronico {
        - nome: String
        - modelo: String
        + clonar() Produto
        + exibirDetalhes() void
    }

    class ProdutoDigital {
        - nome: String
        - tipo: String
        + clonar() Produto
        + exibirDetalhes() void
    }

    class Cliente {
        + main(args: String[]) void
    }

    Produto <|-- ProdutoEletronico
    Produto <|-- ProdutoDigital

    Cliente o-- Produto : "usa"


```
</figure>
