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

## Gabriel Moreira

[![](https://mermaid.ink/img/pako:eNqtU8FOhDAQ_ZVmThp3-YDGeFk18bAnExOTXiZlgEZoN6VoyLr_bqEsslA0JnKA9s2b95iZzBGkSQk4yBLr-l5hbrESmvnnhZQs6RGlM7Zlt5_bLduhHe6rlL3xZzmBo8wkGZAn7chmKEnoQFzksyS5Y69YYYFdrA9NNUeF4B9l_sDfFfTe-roC5bvA3vYcDBqRSji7kZbQUUCvrhcml2kj7hOz0qBjH6Tywq1xaofWPehcaa-9TjKHS0549yOdlHQMMPvtnwPtNBVZTOXPWlO12YxGLRZrSg9H-jDg89JnVucJ_q8HbKAiW6FK_eb00gJcQRUJ4P6Yon0TIHTHw8aZ51ZL4M42tAFrmrwAnmFZ-1tzSH3zhrUbUUqV7_F-WMzuc_oCDrMylA?type=png)](https://mermaid.live/edit#pako:eNqtU8FOhDAQ_ZVmThp3-YDGeFk18bAnExOTXiZlgEZoN6VoyLr_bqEsslA0JnKA9s2b95iZzBGkSQk4yBLr-l5hbrESmvnnhZQs6RGlM7Zlt5_bLduhHe6rlL3xZzmBo8wkGZAn7chmKEnoQFzksyS5Y69YYYFdrA9NNUeF4B9l_sDfFfTe-roC5bvA3vYcDBqRSji7kZbQUUCvrhcml2kj7hOz0qBjH6Tywq1xaofWPehcaa-9TjKHS0549yOdlHQMMPvtnwPtNBVZTOXPWlO12YxGLRZrSg9H-jDg89JnVucJ_q8HbKAiW6FK_eb00gJcQRUJ4P6Yon0TIHTHw8aZ51ZL4M42tAFrmrwAnmFZ-1tzSH3zhrUbUUqV7_F-WMzuc_oCDrMylA)
