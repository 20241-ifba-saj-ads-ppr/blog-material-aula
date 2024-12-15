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


[![](https://mermaid.ink/img/pako:eNpdUMkKwjAQ_ZUyJ8X6A0EEFxAPPQmechmSsQ1tk5JMDqX0301rXXAus7w3b5YBlNMEAlSDIZwNlh5baaXNks217I6N0cjG2VOihuGFTbY1NjBaRUFkBXa7mvr8n77_oZ-R8YiBDiq1rNZfZJNk2KjsQnxdJN_wCDm05Fs0Om05D5fAFbUkQaRQo68lSDvxMLK79VaBYB8pB-9iWYF4YBNSFru0Fi0nfqqkDTtfLE-Y3PgEYr5aAA?type=png)](https://mermaid.live/edit#pako:eNpdUMkKwjAQ_ZUyJ8X6A0EEFxAPPQmechmSsQ1tk5JMDqX0301rXXAus7w3b5YBlNMEAlSDIZwNlh5baaXNks217I6N0cjG2VOihuGFTbY1NjBaRUFkBXa7mvr8n77_oZ-R8YiBDiq1rNZfZJNk2KjsQnxdJN_wCDm05Fs0Om05D5fAFbUkQaRQo68lSDvxMLK79VaBYB8pB-9iWYF4YBNSFru0Fi0nfqqkDTtfLE-Y3PgEYr5aAA)
