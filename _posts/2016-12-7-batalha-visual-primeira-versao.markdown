---
title: Batalha - Visual, primeira versão
layout: post
featured: http://i.imgur.com/b3y3IFb.jpg
tags: [batalha, visual]
---
O principal do jogo pra mim é que a batalha seja divertida, bonita, bem pensada, organizada e com desafios. Decidi então fazer pelo menos que o básico não se pareça tanto com o padrão do RPG Maker.<!--more-->

Comecei com os menus de batalha:

![](http://i.imgur.com/b3y3IFb.jpg)

Minha inspiração principal foi o menu de Final Fantasy X, Final Fantasy XII e Dissidia Final Fantasy. Dá pra ver que acabou ficando muito mais próximo do X que do restante.

![](http://i.imgur.com/Bcx4p4u.png)

O que está mais pronto é o layout do menu de atores e o layout do menu de Grupo, ali embaixo e à esquerda (ActorCommand e PartyCommand).

O menu de poderes (Skill) ainda preciso resolver se ficará assim mesmo. Eu gostaria que o menu "Mochila" (Items) lembrasse o interior de uma mochila, mas não sei se conseguirei os recursos pra isso em tempo. Se os dois conseguirem ficar no mesmo estilo, eu vou deixá-los assim mesmo.

![](http://i.imgur.com/6dhoLW4.png)

A tooltip do poder em si ainda não está boa (à direita), pois eu quero muito mais informações ali. Como estou capturando a `log_window` (ou seria `help_window`?) da `Scene_Battle` pra colocar esses dados, todas as informações da batalha estão indo ali. O ideal é criar uma `help_window` separada. Tenho a intenção também de fazer um plugin que leia as notetags de alguns dados extras, como Custo (energia, vida, especial, outra coisa?), Duração (se for melhoria, quanto tempo o alvo fica, em turnos), Recarga (Cooldown), Tempo de Lançamento (Cast Time), Alvo (1 inimigo, múltilpos inimigos, todos), etc - pra organizar e trazer a maior quantidade de informações possíveis sobre a magia. Parto do pressuposto que já que aquele personagem sabe lançar essa magia ele sabe muito bem sobre ela, certo? Isso terá que ser refletido também no menu principal das habilidades, quando aberto no mapa.

Devo trabalhar nas barras laterais do Medidor de Grupo (Party Gauge) vertical nas laterais ainda e aquele ícone horrível que ficou no caminho, mas deve sair em breve. Minha intenção ali é usar uma imagem mais apelativa, mas como ainda não consigo programar isso direito é possível que saia primeiro uma organização melhor, depois a parte visual.

Minha intenção é postar pelo menos 1 foto diferente da batalha por semana.

Se tiver alguma sugestão, por favor, me envie!
