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

## Rian Fonseca
```java
public class Prototype {
    // Interface Protótipo
    interface Protótipo {
        Protótipo clonar();
    }

    // Classe base para os produtos
    abstract class Produto implements Protótipo {
        protected String material;
        protected String cor;

        public Produto(String material, String cor) {
            this.material = material;
            this.cor = cor;
        }
    }

    // Classe Cadeira
    class Cadeira extends Produto {
        private String tipoAssento;

        public Cadeira(String material, String cor, String tipoAssento) {
            super(material, cor);
            this.tipoAssento = tipoAssento;
        }

        @Override
        public Cadeira clonar() {
            return new Cadeira(this.material, this.cor, this.tipoAssento);
        }

        public void exibir() {
            System.out.println("Cadeira - Material: " + material + ", Cor: " + cor + ", Tipo de Assento: " + tipoAssento);
        }
    }

    // Classe Mesa
    class Mesa extends Produto {
        private String formato;

        public Mesa(String material, String cor, String formato) {
            super(material, cor);
            this.formato = formato;
        }

        @Override
        public Mesa clonar() {
            return new Mesa(this.material, this.cor, this.formato);
        }

        public void exibir() {
            System.out.println("Mesa - Material: " + material + ", Cor: " + cor + ", Formato: " + formato);
        }
    }

    // Classe Estante
    class Estante extends Produto {
        private int numeroDePrateleiras;

        public Estante(String material, String cor, int numeroDePrateleiras) {
            super(material, cor);
            this.numeroDePrateleiras = numeroDePrateleiras;
        }

        @Override
        public Estante clonar() {
            return new Estante(this.material, this.cor, this.numeroDePrateleiras);
        }

        public void exibir() {
            System.out.println("Estante - Material: " + material + ", Cor: " + cor + ", Número de Prateleiras: " + numeroDePrateleiras);
        }
    }

    // Classe principal para testar o padrão Protótipo
    public class Principal {
        public void main(String[] args) {
            // Criando protótipos
            Cadeira cadeiraOriginal = new Cadeira("Madeira", "Preto", "Almofadado");
            Mesa mesaOriginal = new Mesa("Vidro", "Transparente", "Redonda");
            Estante estanteOriginal = new Estante("Madeira", "Branco", 5);

            // Clonando produtos
            Cadeira cadeiraClone = cadeiraOriginal.clonar();
            Mesa mesaClone = mesaOriginal.clonar();
            Estante estanteClone = estanteOriginal.clonar();

            // Exibindo produtos
            cadeiraOriginal.exibir();
            cadeiraClone.exibir();
            mesaOriginal.exibir();
            mesaClone.exibir();
            estanteOriginal.exibir();
            estanteClone.exibir();
        }
    }
}
``` 
