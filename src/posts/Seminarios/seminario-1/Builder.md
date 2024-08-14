---
icon: edit
date: 2024-07-25 20:10:00.00 -3
tag:
  - builder
  - gof
category:
  - seminario-1
order: 10
excerpt: Apresentação do Padrão de Projeto Builder
author: gabrielflb, LuisMiguelADS, YuriPepezin
---
# Builder

## Gabriel Ferreira Lima Brito (20212TADSSAJ0015)

[@gabrielflb](https://github.com/gabrielflb)

<!-- @include: ../../../includes/seminario-1-gabrielflb/README.md -->

## Luis Miguel de Jesus Oliveira (20211TADSSAJ0005)

[@LuisMiguelADS](https://github.com/LuisMiguelADS)

<!-- @include: ../../../includes/seminario-1-LuisMiguelADS/README.md -->

## Yuri Pêpe do Espírito Santo (20221TADSSAJ0005)

[@YuriPepezin](https://github.com/YuriPepezin)

<!-- @include: ../../../includes/seminario-1-YuriPepezin/ApYuri.md -->

## Leandro

<figure>

```plantuml

<!-- @include: ../../../includes/Leandro/builder/build.plantuml -->

```

<figcaption> Exemplo de builder</figcaption>
</figure>

# João Augusto

<figure>

```plantuml

@startuml
interface Pizza {
    + getMassa() : String
    + getMolho() : String
    + getRecheio() : String
}

interface PizzaBuilder {
    + setMassa(String massa) : void
    + setMolho(String molho) : void
    + setRecheio(String recheio) : void
    + build() : Pizza
}

class PizzaSimplesBuilder implements PizzaBuilder {
    - String massa
    - String molho
    - String recheio
    
    + setMassa(String massa) : void
    + setMolho(String molho) : void
    + setRecheio(String recheio) : void
    + build() : Pizza
}

class PizzaGourmetBuilder implements PizzaBuilder {
    - String massa
    - String molho
    - String recheio
    
    + setMassa(String massa) : void
    + setMolho(String molho) : void
    + setRecheio(String recheio) : void
    + build() : Pizza
}

interface PizzaDirector {
    + setBuilder(PizzaBuilder builder) : void
    + construirPizza() : Pizza
}

class PizzaMargheritaDirector implements PizzaDirector {
    - PizzaBuilder builder
    + setBuilder(PizzaBuilder builder) : void
    + construirPizza() : Pizza
}

class PizzaPepperoniDirector implements PizzaDirector {
    - PizzaBuilder builder
    + setBuilder(PizzaBuilder builder) : void
    + construirPizza() : Pizza
}

PizzaBuilder <|-- PizzaSimplesBuilder
PizzaBuilder <|-- PizzaGourmetBuilder
PizzaDirector <|-- PizzaMargheritaDirector
PizzaDirector <|-- PizzaPepperoniDirector
PizzaDirector --> PizzaBuilder : setBuilder(builder)
PizzaDirector --> Pizza : construirPizza()
PizzaBuilder --> Pizza : build()
@enduml


```
<figcaption> Exemplo de builder </figcaption>
</figure>

##Rian Fonseca

```java
public class AbstractFactory {

    // [ABSTRACT PRODUCT]
    interface Tropa {
        void atacar();
    }

    interface Construcao {
        void construir();
    }

    interface Veiculo {
        void mover();
    }

    // [CONCRETE PRODUCT] Implementações para a Idade Média
    class Cavaleiro implements Tropa {
        public void atacar() {
            System.out.println("Cavaleiro atacando com espada!");
        }
    }

    class Castelo implements Construcao {
        public void construir() {
            System.out.println("Castelo sendo construído!");
        }
    }

    class Carroca implements Veiculo {
        public void mover() {
            System.out.println("Carroça se movendo lentamente.");
        }
    }

    // [CONCRETE PRODUCT] Implementações para a Era Moderna
    class Soldado implements Tropa {
        public void atacar() {
            System.out.println("Soldado atirando com rifle!");
        }
    }

    class Predio implements Construcao {
        public void construir() {
            System.out.println("Prédio sendo construído!");
        }
    }

    class Carro implements Veiculo {
        public void mover() {
            System.out.println("Carro se movendo nas estradas.");
        }
    }

    // [ABSTRACT FACTORY]
    interface EpocaFactory {
        Tropa criarTropa();
        Construcao criarConstrucao();
        Veiculo criarVeiculo();
    }

    // [CONCRETE FACTORY] Fábrica para a Idade Média
    class MedievalFactory implements EpocaFactory {
        public Tropa criarTropa() {
            return new Cavaleiro();
        }

        public Construcao criarConstrucao() {
            return new Castelo();
        }

        public Veiculo criarVeiculo() {
            return new Carroca();
        }
    }

    // [CONCRETE FACTORY] Fábrica para a Era Moderna
    class ModernFactory implements EpocaFactory {
        public Tropa criarTropa() {
            return new Soldado();
        }

        public Construcao criarConstrucao() {
            return new Predio();
        }

        public Veiculo criarVeiculo() {
            return new Carro();
        }
    }

    // CLIENT
    public class JogoDeEstrategia {
        private Tropa tropa;
        private Construcao construcao;
        private Veiculo veiculo;

        public JogoDeEstrategia(EpocaFactory factory) {
            tropa = factory.criarTropa();
            construcao = factory.criarConstrucao();
            veiculo = factory.criarVeiculo();
        }

        public void jogar() {
            tropa.atacar();
            construcao.construir();
            veiculo.mover();
        }

        public static void main(String[] args) {
            // Construindo o jogo na Idade Média
            EpocaFactory medievalFactory = new AbstractFactory().new MedievalFactory();
            JogoDeEstrategia jogoMedieval = new AbstractFactory().new JogoDeEstrategia(medievalFactory);
            jogoMedieval.jogar();

            // Construindo o jogo na Era Moderna
            EpocaFactory modernFactory = new AbstractFactory().new ModernFactory();
            JogoDeEstrategia jogoModerno = new AbstractFactory().new JogoDeEstrategia(modernFactory);
            jogoModerno.jogar();
        }
    }
}
```
