---
icon: edit
date: 2024-07-25 20:10:00.00 -3
tag:
  - Multiton
  - gof
category:
  - seminario-1
order: 10
excerpt: Apresentação do Padrão de Projeto Multiton
author: GuiSamp, RiansFonseca
---

# Multiton

## Guilherme Sampaio Oliveira (20221TADSSAJ0011)
[@GuiSamp](https://github.com/GuiSamp)

<!-- @include: ../../../includes/seminario-1-GuiSamp/Multiton.md -->



## Rian Silva da Fonseca (20221TADSSAJ0002)
[@RiansFonseca](https://github.com/RiansFonseca)

<!-- @include: ../../../includes/seminario-1-RiansFonseca/README-MULTITON.md -->


## Leandro

```java

public enum Configuracao {
    localDb("jdbc:mysql://localhost:3306/meuBanco",
                "admin",
                "senha123"),
    remotoDb("jdbc:mysql://remotehost:3306/outroBanco",
                "root",
                "rootpassword");

    private final String urlBancoDeDados;
    private final String usuario;
    private final String senha;

    private Configuracao(String urlBancoDeDados, String usuario,String senha){
        this.urlBancoDeDados = urlBancoDeDados;
        this.usuario = usuario;
        this.senha = senha;
    }

    public String getSenha() {
        return senha;
    }

    public String getUrlBancoDeDados() {
        return urlBancoDeDados;
    }

    public String getUsuario() {
        return usuario;
    }
    public static void main(String[] args) {
        Configuracao.localDb.getSenha();
    }
    
}
```

# Pedro Carlos
```mermaid
classDiagram
    class GoogleOneConta {
        +String accessarToken
        +String recarregarToken
        +String clienteId
        +String clienteSegredo
        +conectar(): void
        +disconectar(): void
        +recarregarToken(): void
    }

    class GoogleOneContasMultiton {
        -Map<String, GoogleOneConta> instances
        -final int LIMITE_CONTA = 5
        +getInstance(String key): GoogleOneConta
        +destruirInstance(String key): void
    }

    GoogleOneContaMultiton --> GoogleGoogleOneConta : "1..5" 
```
