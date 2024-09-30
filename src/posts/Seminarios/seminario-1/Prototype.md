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


## João Augusto

<figure>

  @startuml
interface HeroPrototype {
    + clone() : HeroPrototype
}

abstract class Hero implements HeroPrototype {
    - String nome
    - int nivel
    - String classe

    + Hero(String nome, int nivel, String classe)
    + setNome(String nome) : void
    + setNivel(int nivel) : void
    + setClasse(String classe) : void
    + String getNome() : String
    + int getNivel() : int
    + String getClasse() : String
    + clone() : HeroPrototype
}

class Guerreiro extends Hero {
    + Guerreiro(String nome, int nivel)
    + clone() : HeroPrototype
}

class Mago extends Hero {
    + Mago(String nome, int nivel)
    + clone() : HeroPrototype
}

class RPGGame {
    + HeroPrototype createHero(String tipo, String nome, int nivel) : HeroPrototype
}

HeroPrototype <|.. Hero
Hero <|-- Guerreiro
Hero <|-- Mago

RPGGame o-- HeroPrototype : "createHero(tipo, nome, nivel)"
@enduml

</figure>
