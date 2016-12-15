---
title: Imagens locais
layout: post
tags: [meta]
---
Sei que estou postando muito sobre o [Jekyll](https://jekyllrb.com) e pouco sobre o jogo em si, mas ele me ajudou tanto a resolver o formato e a infra do blog que resolvi postar sobre ele também. Afinal estou perdendo um tempo considerável nisso e é bom relatar de qualquer maneira. Hoje resolvi colocar as imagens do site localmente. Por que?
<!--more-->

## Antes: Usando Puush e ShareX

Estava hospedando as imagens no [Puush](https://puush.me). Primeiro porque é muito simples escrever markdown com imagens externas, a tag é como um link, fácil e intuitiva:

```
![](link-para-a-imagem)
```

Enquanto estou fazendo o jogo, aperto `CTRL+SHIFT+4` me traz o [ShareX](https://getsharex.com) e um cursor para selecionar parte da tela que quero transformar em imagem. Depois que selecionei (ou só dei um click simples para capturar a janela toda) ele envia automaticamente pro serviço que escolhi. O serviço é o Puush nesse caso. Assim que a imagen é enviada, ele me traz um link na área de transferencia e aí era só dar `CTRL+v` na tag acima.

## Por que mudei?

Isso serve bastante para coisas que você não vai precisar depois de 1 mês, já que essa é a duração das imagens nesse serviço - **e isso eu não sabia**!

Resolvi então procurar por outro serviço onde as imagens não morriam depois de 1 mês, mas percebi que isso faria que as imagens ficariam fora do meu repositório / infra de qualquer maneira e caso o serviço deixasse de existir por algum motivo, eu não teria mais as imagens. O principal desse projeto é documentar o desenvolvimento desse jogo e uma documentação sem informação suficiente acabaria ficando incompleta, obviamente.

## Prevendo a solução

Então decidi que as imagens ficariam localmente. Para inserir uma imagem localmente, seria tão simples quanto uma externa:

```markdown
![]({{ site.url }}/assets/imagem.ext)
```

Porém esse formato iria ficar velho logo. Imagine esse diretório cheio de imagens sem nenhuma organização... seria um horror! Então decidi organizar o diretório por ano e mês, assim saberia pelo menos uma referencia sobre onde buscar a imagen mais tarde caso necessário. As imagens então ficam em `/assets/posts/ANO/MÊS`.

## Entra o include

Em uma busca rápida pelo google encontrei [esse post](https://eduardoboucas.com/blog/2014/12/07/including-and-managing-images-in-jekyll.html) de um blog feito em Jekyll. Achei a solução bem simples e elegante ([obrigado Eduardo Boucas!](https://eduardoboucas.com/blog/2014/12/07/including-and-managing-images-in-jekyll.html#comment8)), então resolvi aplicar aqui. Alterei a solução dele para ter apenas ano e mês no caminho pra imagem e voilà! Agora, para incluir uma imagem, ao invés da tag anterior eu uso:

```liquid
{% raw %}
{% include image name="NOME-DA-IMAGEM.png" %}
{% endraw %}
```

## Pequenos problemas

Isso resolveu a questão rapidamente, porém para os layouts funcionarem foi outra questão. Lá eu tive que manualmente construir o link. Acredito que no layout do post não teria problema, mas no `index.html`, como uso o [Jekyll Pagination](https://jekyllrb.com/docs/pagination), ele não funcionava bem, não conseguindo traduzir as variáveis `post.date` / `page.date` direito. Então foi só uma questão de ajustar diretamente:

```liquid
{% raw %}
{% if post.featured %}
<div class="list-post-featured">
  <img src="{{ site.url }}/assets/posts/{{ post.date | date: '%Y/%-m' }}/{{ post.featured }}" alt="Destaque: {{ post.title }}">
</div>
{% endif %}
{% endraw %}
```

E agora, no [Front Matter](https://jekyllrb.com/docs/frontmatter), eu só coloco o nome da imagem que será a imagem de destaque na postagem. Simples e bem interessante!
