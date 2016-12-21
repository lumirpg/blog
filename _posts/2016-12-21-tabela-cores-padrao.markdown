---
title: Tabela de cores padrão
layout: post
tags: [windowskin, cores]
featured: Windowskin.png
---
{% capture squareColor %}<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="16" height="16" fill="#var1"></rect></svg> `#var1`{% endcapture %}

Resolvi postar algo que sempre esqueço: a tabela de cores padrão. Essas cores são usadas por todo seu jogo e vem junto com sua `windowskin`. São aqueles quadradinhos embaixo e à direita da imagem.
<!--more-->
Cada um dos quadrados representa uma cor, com o total de 32 cores. Na escala de cores para ser usada no código dos diálogos (exemplo: `\c[3]esse texto é verde limão\c[0] e voltou a ser branco`), a primeira cor começa em 0 (zero).

{:.table-colors}
| #   | Cor | Hex | RGB | Nome aprox. | Muitas infos |
| :---: | :--- | :---: | :---: | ---: | ---: |
| 0 | Branco | {{ squareColor | replace: 'var1', 'ffffff' }} | 255, 255, 255 | [White](http://chir.ag/projects/name-that-color/#FFFFFF) | [White](http://www.colorhexa.com/ffffff)
| 1 | Azul | {{ squareColor | replace: 'var1', '20a0d6' }} | 32, 160, 214 | [Curious Blue](http://chir.ag/projects/name-that-color/#20A0D6) | [Strong blue](http://www.colorhexa.com/20a0d6) |
| 2 | Coral | {{ squareColor | replace: 'var1', 'ff784c' }} | 255, 120, 76 | [Coral](http://chir.ag/projects/name-that-color/#FF784C) | [Light red](http://www.colorhexa.com/ff784c) |
| 3 | Verde limão | {{ squareColor | replace: 'var1', '66cc40' }} | 102, 204, 64 | [Atlantis](http://chir.ag/projects/name-that-color/#66CC40) | [Moderate green](http://www.colorhexa.com/66cc40) |
| 4 | Azul bebê | {{ squareColor | replace: 'var1', '99ccff' }} | 153, 204, 255 | [Anakiwa](http://chir.ag/projects/name-that-color/#99CCFF) | [Very light blue](http://www.colorhexa.com/99ccff) |
| 5 | Lilás | {{ squareColor | replace: 'var1', 'ccc0ff' }} | 204, 192, 255 | [Melrose](http://chir.ag/projects/name-that-color/#CCC0FF) | [Very pale blue](http://www.colorhexa.com/ccc0ff) |
| 6 | Amarelo claro | {{ squareColor | replace: 'var1', 'ffffa0' }} | 255, 255, 160 | [Milan](http://chir.ag/projects/name-that-color/#FFFFA0) | [Pale yellow](http://www.colorhexa.com/ffffa0) |
| 7 | Cinza | {{ squareColor | replace: 'var1', '808080' }} | 128, 128, 128 | [Gray](http://chir.ag/projects/name-that-color/#808080) | [Dark gray](http://www.colorhexa.com/808080) |
| 8 | Cinza claro | {{ squareColor | replace: 'var1', 'c0c0c0' }} | 192, 192, 192 | [Prata](http://chir.ag/projects/name-that-color/#C0C0C0) | [Light gray](http://www.colorhexa.com/c0c0c0) |
| 9 | Azul forte | {{ squareColor | replace: 'var1', '2080cc' }} | 32, 128, 204 | [Curious Blue](http://chir.ag/projects/name-that-color/#2080CC) | [Strong Blue](http://www.colorhexa.com/2080cc) |
| 10 | Escarlate | {{ squareColor | replace: 'var1', 'ff3810' }} | 255, 56, 16 | [Scarlet](http://chir.ag/projects/name-that-color/#FF3810) | [Vivid red](http://www.colorhexa.com/ff3810) |
| 11 | Verde | {{ squareColor | replace: 'var1', '00a010' }} | 0, 160, 16 | [Japanese Laurel](http://chir.ag/projects/name-that-color/#00A010) | [Dark lime green](http://www.colorhexa.com/ff3810) |
| 12 | Azul brilhante | {{ squareColor | replace: 'var1', '3e9ade' }} | 62, 154, 222 | [Picton Blue](http://chir.ag/projects/name-that-color/#3E9ADE) | [Bright blue](http://www.colorhexa.com/3e9ade) |
| 13 | Roxo | {{ squareColor | replace: 'var1', 'a098ff' }} | 160, 152, 255 | [Melrose](http://chir.ag/projects/name-that-color/#A098FF) | [Very light blue](http://www.colorhexa.com/a098ff) |
| 14 | Amarelo gema | {{ squareColor | replace: 'var1', 'ffcc20' }} | 255, 204, 32 | [Lightning Yellow](http://chir.ag/projects/name-that-color/#FFCC20) | [Vivid yellow](http://www.colorhexa.com/ffcc20) |
| 15 | Preto | {{ squareColor | replace: 'var1', '000000' }} | 0, 0, 0 | [Black](http://chir.ag/projects/name-that-color/#000000) | [Black](http://www.colorhexa.com/000000) |
| 16 | Azul | {{ squareColor | replace: 'var1', '84aaff' }} | 132, 170, 255 | [Malibu](http://chir.ag/projects/name-that-color/#84AAFF) | [Very light blue](http://www.colorhexa.com/84aaff) |
| 17 | Amarelo | {{ squareColor | replace: 'var1', 'ffff40' }} | 255, 255, 64 | [Golden Fizz](http://chir.ag/projects/name-that-color/#FFFF40) | [Light yellow](http://www.colorhexa.com/ffff40) |
| 18 | Vermelho | {{ squareColor | replace: 'var1', 'ff2020' }} | 255, 32, 32 | [Torch Red](http://chir.ag/projects/name-that-color/#FF2020) | [Vivid red](http://www.colorhexa.com/ff2020) |
| 19 | Azul escuro | {{ squareColor | replace: 'var1', '202040' }} | 32, 32, 64 | [Mirage](http://chir.ag/projects/name-that-color/#202040) | [Very dark desaturated blue](http://www.colorhexa.com/202040) |
| 20 | Laranja | {{ squareColor | replace: 'var1', 'e08040' }} | 224, 128, 64 | [Red Damask](http://chir.ag/projects/name-that-color/#E08040) | [Bright orange](http://www.colorhexa.com/e08040) |
| 21 | Amarelo | {{ squareColor | replace: 'var1', 'f0c040' }} | 240, 192, 64 | [Ronchi](http://chir.ag/projects/name-that-color/#F0C040) | [Bright orange](http://www.colorhexa.com/f0c040) |
| 22 | Azul | {{ squareColor | replace: 'var1', '4080c0' }} | 64, 128, 192 | [Steel Blue](http://chir.ag/projects/name-that-color/#4080C0) | [Moderate blue](http://www.colorhexa.com/4080c0) |
| 23 | Ciano | {{ squareColor | replace: 'var1', '40c0f0' }} | 64, 192, 240 | [Picton Blue](http://chir.ag/projects/name-that-color/#40C0F0) | [Bright blue](http://www.colorhexa.com/40c0f0) |
| 24 | Menta | {{ squareColor | replace: 'var1', '80ff80' }} | 64, 192, 240 | [Mint Green](http://chir.ag/projects/name-that-color/#80FF80) | [Very light lime green](http://www.colorhexa.com/80ff80) |
| 25 | Vermelho pálido | {{ squareColor | replace: 'var1', 'c08080' }} | 192, 128, 128 | [Old Rose](http://chir.ag/projects/name-that-color/#C08080) | [Slightly desaturated red](http://www.colorhexa.com/c08080) |
| 26 | Azul pálido | {{ squareColor | replace: 'var1', '8080ff' }} | 128, 128, 255 | [Malibu](http://chir.ag/projects/name-that-color/#8080FF) | [Very light blue](http://www.colorhexa.com/8080ff) |
| 27 | Rosa | {{ squareColor | replace: 'var1', 'ff80ff' }} | 255, 128, 255 | [Blush Pink](http://chir.ag/projects/name-that-color/#FF80FF) | [Very light magenta](http://www.colorhexa.com/ff80ff) |
| 28 | Verde ciano | {{ squareColor | replace: 'var1', '00a040' }} | 0, 160, 64 | [Green Haze](http://chir.ag/projects/name-that-color/#00A040) | [Dark cyan - lime green](http://www.colorhexa.com/00a040) |
| 29 | Verde ciano | {{ squareColor | replace: 'var1', '00e060' }} | 0, 224, 96 | [Malachite](http://chir.ag/projects/name-that-color/#00E060) | [Pure (or mostly pure) cyan - lime green](http://www.colorhexa.com/00e060) |
| 30 | Roxo | {{ squareColor | replace: 'var1', 'a060e0' }} | 160, 96, 224 | [Medium Purple](http://chir.ag/projects/name-that-color/#A060E0) | [Soft violet](http://www.colorhexa.com/a060e0) |
| 31 | Violeta | {{ squareColor | replace: 'var1', 'c080ff' }} | 192, 128, 255 | [Heliotrope](http://chir.ag/projects/name-that-color/#C080FF) | [Very light violet](http://www.colorhexa.com/a060e0) |


Fazendo essa tabela no Jekyll
===

Infelizmente o markdown quebra se eu usar um `include` para inserir os quadradinhos na tabela via `liquid tag`. Então tive que fazer manualmente cada um inline! Entretanto, arrumei um jeito um pouco mais *DRY* de fazer os quadrinhos. Criei uma variável, a capturei e depois, ao chamá-la, dou um replace apenas na cor.

Minha variável:

```liquid
{% raw %}
{% capture squareColor %}
  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="16" height="16" fill="var1"></rect>
  </svg> `var1`
{% endcapture %}
{% endraw %}
```

E então chamo assim:

```liquid
{% raw %}
{{ squareColor | replace: 'var1', '#ffffff' }}
{% endraw %}
```

Eu poderia ter feito isso para os links também. Talvez eu o faça, mas só pensei isso agora, no fim do documento. Fica pra uma próxima? :+1:
