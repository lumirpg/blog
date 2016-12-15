---
title: Apresentando posições
layout: post
tags: [batalha, posições, sequências]
featured: http://i.imgur.com/gIVKXuN.png
---
Lumi não esperava por essa! Para protegê-la, Alvaro empurra Lumi pra retaguarda.

Para facilitar a introdução sobre posições em batalha, do plugin do <a href="http://yanfly.moe/2016/01/02/yep-54-row-formation/" target="_blank">Yanfly Row Formation</a>, resolvi fazer um Action Sequence que cabe dentro do meu jogo. Ainda não estou 100% satisfeito com o resultado, mas está 90% do que pretendo.
<!--more-->

![](http://i.imgur.com/wP6h7mx.gif)

Pra conseguir esse efeito, eu usei os seguintes plugins do [Yanfly](http://yanfly.moe/yep/): [Battle Engine Core](http://yanfly.moe/2015/10/10/yep-3-battle-engine-core), <a href="http://yanfly.moe/2015/10/11/yep-4-action-sequence-pack-1/" target="_blank">Action Sequences 1</a>, <a href="http://yanfly.moe/2015/10/12/yep-5-action-sequence-pack-2/" target="_blank">Action Sequences 2</a>, <a href="http://yanfly.moe/2015/10/12/yep-6-action-sequence-pack-3/" target="_blank">Action Sequences 3</a> - provavelmente não precisa desse último, mas pretendo adicionar alguns efeitos de câmera mais pra frente. Para os efeitos nas mensagens, <a href="http://yanfly.moe/2015/10/10/yep-2-message-core/" target="_blank">Message Core</a>, <a href="http://yanfly.moe/2016/01/30/yep-65-extended-message-pack-1/" target="_blank">Extended Message Pack 1</a>, <a href="http://yanfly.moe/2016/02/21/yep-73-message-macros-rpg-maker-mv/" target="_blank">Message Macros</a> e claro, pra posicionar, o <a href="http://yanfly.moe/2016/01/02/yep-54-row-formation/" target="_blank">Row Formation</a>. Pra não precisar explicar tudo isso de novo, eu vou colocar isso no site em algum lugar em breve.

Antes de explicar como consegui o efeito acima, eu gostaria muito que alguém fizesse um addon / plugin que fizesse loop do motion desejado... por enquanto, se você insere o comando motion target: action ele executa e o loop fica configurado no core do motion; ou seja, pra alguns motions existe loop, pra outros não.

Primeiro, configurando a habilidade. Ela chama-se **Para trás** e tem como alvo `1 Aliado`:

```
<target action>
  move user: target, front base, 12
  wait for movement
  face user: backward
  se: attack_axe
  motion thrust: user, no weapon
  wait: 12

  motion damage: target
  move target: forward, -60, 6
  wait: 12
  motion escape: target
  wait: 12

  jump target: 50%, 12
  move target: forward, -120, 6
  motion abnormal: target
  wait for jump
  se: attack_rod
  add state 26: target

  common event: 2
  wait: 24
  move user: home, 12
  wait for movement
  face user: forward
</target action>

<setup action>
  hide battle hud
</setup action>

<finish action>
  show battle hud
</finish action>
```

Ufa! Na tropa, eu coloco o texto inicial do Alvaro Para trás!. Eu também tive que chamar um `script call` porque por algum motivo o `Forced Action` não estava funcionando. Deveria funcionar diretamente com ele, mas se não funcionar, segue o código:

```javascript
var actor1 = $gameParty.members()[0];
var actor2 = $gameParty.members()[1];
actor2.forceAction(25, actor1);
BattleManager.forceAction(actor2);
```

O `Common Event 2` é onde a Lumi reage, onde rola o restante do texto e depois retira o `State 26` dela. Falando nisso, esse state eu fiz apenas por comesmética, pra ficar mostrando as estrelas rodando na cabeça e os pontos de interrogação. Pra fazer a animação ficar em loop nela, é necessário o plugin [Visual State Effects](http://yanfly.moe/2016/08/20/yep-114-visual-state-effects-rpg-maker-mv/), também do Yanfly. Nesse state eu coloquei a tag da animação que ficará em loop: `<State Animation: 306>`; e também marquei `SV Overlay: Confusion`, que são os pontos de interrogação animados.
