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

## João Augusto
<figure>
  @startuml
class Reino {
    - static Reino[] instances = new Reino[3]
    - String nome
    - Reino(String nome)
    + static Reino getInstance(int index) 
    + String getNome() 
}

Reino : - instances
Reino : - nome
Reino : + getInstance(index)
Reino : + getNome()

Reino --> Reino : "getInstance(0) <<Norte>>"
Reino --> Reino : "getInstance(1) <<Sul>>"
Reino --> Reino : "getInstance(2) <<Oeste>>"
@enduml

</figure>
