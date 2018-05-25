# SECCOM 2018 - teaser

  É possível visualizar o site [aqui](https://seccom-ufsc.github.io/2018/).
  
## Site
  
  O teaser possui como principal o contador de dias até o evento. Além disso, possui um sistema de feed de notícias (ainda não implementado).
  
  - Contador;
  - Informações sobre a SECCOM (com link do site do ano passado);
  - Cronograma inicial do evento;
  - Feed de notícias.
  
## Repositório

  O site segue a organização do [Jekyll](https://jekyllrb.com/). Possui pastas para javascript, css, imagens, dados, templates (tanto de uma página ou de partes de html) e posts.
  
  - ***\_data*** : guarda dados de forma a terem acesso fácil no html, como dados de patrocinadores ou palestrantes;
  - ***\_includes*** : contém partes de html que são repetidas em vários arquivos, fazendo com que seja preciso apenas chamar o arquivo ao invés de copiar e colar o trecho de html;
  - ***\_layouts*** : possui html base para a formatação de páginas, fazendo com que o que estiver no arquivo que chame o layout seja considerado *content*;
  - ***\_posts*** : é a pasta onde ficam os posts finalizados. Eles obedecem um formato de nome de arquivo específico: *YEAR-MONTH-DAY-title.html*;
  - ***\_drafts*** : onde ficam os rascunhos dos posts, que não serão postados. Eles não obedecem o formato de nome dos posts, não precisando da data no nome, porém seguem o formato *title.html*;
  - ***assets*** : guarda todas as imagens (também pode guardar outros arquivos, como pdfs) usadas no site, para facilitar o acesso a elas;
  - ***css*** : possui o css usado no site, guardado para facilitar o acesso e a organização;
  - ***js*** : contém o javascript usado no site, guardado para facilitar a organização e o acesso;
  
  - ***index.html*** : é o arquivo da página inicial do site;
  - ***posts.html*** : é o arquivo da página do feed de notícias.
  
Quaisquer outras páginas a serem adicionadas deverão ser adicionadas no repositório fora de pastas. É possível organizar os arquivos em subpastas, contanto que o *index.html* fique fora de pastas.
