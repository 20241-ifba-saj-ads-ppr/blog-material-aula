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

## Rian Fonseca

```java
import java.util.LinkedList;
import java.util.Queue;

public class ObjectPool {
    // Classe que representa uma conexão de rede
    class ConexaoRede {
        private boolean emUso;

        public ConexaoRede() {
            this.emUso = false;
        }

        public void conectar() {
            if (emUso) {
                throw new IllegalStateException("Conexão já está em uso.");
            }
            emUso = true;
        }

        public void desconectar() {
            if (!emUso) {
                throw new IllegalStateException("Conexão não está em uso.");
            }
            emUso = false;
        }

        public boolean isEmUso() {
            return emUso;
        }
    }

    // Classe que gerencia o pool de conexões de rede
    class ConexaoRedePool {
        private Queue<ConexaoRede> pool;
        private int tamanhoMaximo;

        public ConexaoRedePool(int tamanhoMaximo) {
            this.tamanhoMaximo = tamanhoMaximo;
            pool = new LinkedList<>();
            for (int i = 0; i < tamanhoMaximo; i++) {
                pool.add(new ConexaoRede());
            }
        }

        public ConexaoRede pegarConexao() {
            if (pool.isEmpty()) {
                throw new RuntimeException("Não há conexões disponíveis.");
            }
            return pool.poll();
        }

        public void devolverConexao(ConexaoRede conexao) {
            if (conexao.isEmUso()) {
                throw new IllegalArgumentException("Não é possível devolver uma conexão em uso.");
            }
            pool.add(conexao);
        }
    }

    // Classe principal para demonstrar o uso do pool de conexões
    public static void main(String[] args) {
        ObjectPool objectPool = new ObjectPool();
        ConexaoRedePool pool = objectPool.new ConexaoRedePool(3);

        // Pega uma conexão do pool
        ConexaoRede conexao1 = pool.pegarConexao();
        System.out.println("Conexão 1 em uso: " + conexao1.isEmUso()); // Deve ser false

        // Conecta a conexão
        conexao1.conectar();
        System.out.println("Conexão 1 em uso: " + conexao1.isEmUso()); // Deve ser true

        // Desconecta a conexão
        conexao1.desconectar();
        System.out.println("Conexão 1 em uso: " + conexao1.isEmUso()); // Deve ser false

        // Devolve a conexão ao pool
        pool.devolverConexao(conexao1);

        // Pega outra conexão do pool
        ConexaoRede conexao2 = pool.pegarConexao();
        System.out.println("Conexão 2 em uso: " + conexao2.isEmUso()); // Deve ser false
    }
}
```
