---
icon: edit
date: 2024-07-25 20:10:00.00 -3
tag:
  - 'Factory Method'
  - gof
category:
  - seminario-1
order: 10
excerpt: Apresentação do Padrão de Projeto Factory Method
author: Arlei10, zevictoros
---
# Factory Method

## Árlei Nóbrega Oliveira (20221TADSSAJ0012)

[@Arlei10](https://github.com/Arlei10)

<!-- @include: ../../../includes/seminario-1-Arlei10/README.md -->

## José Victor Oliveira dos Santos (20212TADSSAJ0008)

[@zevictoros](https://github.com/zevictoros)

<!-- @include: ../../../includes/seminario-1-zevictoros/README.md -->

## WALLACE SELES NEVES


## Leandro

@[code](../../../includes/Leandro/factory_method/Recepcionista.java)

## João Augusto

<figure>

```plantuml

@startuml
interface Relatorio {
    +generate(): void
}

class RelatorioEmPDF implements Relatorio {
    +generate(): void
}

class RelatorioEmExcel implements Relatorio {
    +generate(): void
}

abstract class RelatorioFactory {
    +createRelatorio(): Relatorio
}

class PDFRelatorioFactory extends RelatorioFactory {
    +createRelatorio(): Relatorio
}

class ExcelRelatorioFactory extends RelatorioFactory {
    +createRelatorio(): Relatorio
}

Relatorio <|-- RelatorioEmPDF
Relatorio <|-- RelatorioEmExcel
RelatorioFactory <|-- PDFRelatorioFactory
RelatorioFactory <|-- ExcelRelatorioFactory
RelatorioFactory --> Relatorio : createRelatorio()
PDFRelatorioFactory --> RelatorioEmPDF : creates >
ExcelRelatorioFactory --> RelatorioEmExcel : creates >
@enduml


```

</figure>

## Yuri Pêpe
<figure>

```mermaid
classDiagram
    class Notificacao {
        <<interface>>
        +enviar(mensagem: String) void
    }

    class EmailNotificacao {
        +enviar(mensagem: String) void
    }

    class SMSNotificacao {
        +enviar(mensagem: String) void
    }

    class NotificacaoFactory {
        <<abstract>>
        +criarNotificacao() Notificacao
        +enviarNotificacao(mensagem: String) void
    }

    class EmailNotificacaoFactory {
        +criarNotificacao() EmailNotificacao
    }

    class SMSNotificacaoFactory {
        +criarNotificacao() SMSNotificacao
    }

    Notificacao <|.. EmailNotificacao
    Notificacao <|.. SMSNotificacao
    NotificacaoFactory <|-- EmailNotificacaoFactory
    NotificacaoFactory <|-- SMSNotificacaoFactory

    NotificacaoFactory o-- Notificacao : "cria"
    EmailNotificacaoFactory o-- EmailNotificacao : "cria"
    SMSNotificacaoFactory o-- SMSNotificacao : "cria"

```
<figure>
