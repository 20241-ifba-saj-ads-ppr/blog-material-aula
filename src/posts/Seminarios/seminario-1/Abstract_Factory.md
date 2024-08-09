---
icon: edit
date: 2024-07-25 20:10:00.00 -3
tag:
  - 'Abstract Factory'
  - gof
category:
  - seminario-1
order: 10
excerpt: Apresentação do Padrão de Projeto Abstract Factory
author: Brenda-Martinez
---
# Abstract Factory


## Brenda Gabriela Martinez Araújo (20221TADSSAJ0001) 

[@Brenda-Martinez](https://github.com/Brenda-Martinez)

<!-- @include: ../../../includes/seminario-1-Brenda-Martinez/README.md -->





## João Augusto

<figure>
  
```plantuml

@startuml
interface Personagem {
    +descricao(): String
}

interface Equipamento {
    +usar(): void
}

interface RPGFactory {
    +criarPersonagem(): Personagem
    +criarEquipamento(): Equipamento
}

class Cavaleiro implements Personagem {
    +descricao(): String
}

class Espada implements Equipamento {
    +usar(): void
}

class Mago implements Personagem {
    +descricao(): String
}

class Cajado implements Equipamento {
    +usar(): void
}

class CavaleiroFactory implements RPGFactory {
    +criarPersonagem(): Personagem
    +criarEquipamento(): Equipamento
}

class MagoFactory implements RPGFactory {
    +criarPersonagem(): Personagem
    +criarEquipamento(): Equipamento
}

RPGFactory <|-- CavaleiroFactory
RPGFactory <|-- MagoFactory
CavaleiroFactory --> Cavaleiro : cria >
CavaleiroFactory --> Espada : cria >
MagoFactory --> Mago : cria >
MagoFactory --> Cajado : cria >
@enduml

```
</figure>

## Yuri Pêpe
</figure>

```mermaid
classDiagram
    class Monstro {
        <<interface>>
        +atacar() void
    }

    class Arma {
        <<interface>>
        +usar() void
    }

    class Orc {
        +atacar() void
    }

    class Elfo {
        +atacar() void
    }

    class Espada {
        +usar() void
    }

    class Arco {
        +usar() void
    }

    class MonstroFactory {
        <<interface>>
        +criarMonstro() Monstro
        +criarArma() Arma
    }

    class OrcFactory {
        +criarMonstro() Monstro
        +criarArma() Arma
    }

    class ElfoFactory {
        +criarMonstro() Monstro
        +criarArma() Arma
    }

    Monstro <|.. Orc
    Monstro <|.. Elfo
    Arma <|.. Espada
    Arma <|.. Arco
    MonstroFactory <|-- OrcFactory
    MonstroFactory <|-- ElfoFactory

    OrcFactory o-- Orc : "cria"
    OrcFactory o-- Espada : "cria"
    ElfoFactory o-- Elfo : "cria"
    ElfoFactory o-- Arco : "cria"
```
</figure>

