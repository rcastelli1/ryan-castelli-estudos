Assuntos Estudados - Primeira Semana:
---
Segurança da Informação:

- Pilares e políticas de Segurança da informação

- Classificação da Informação

- Engenharia Social

- Boas práticas e diretrizes

- Segurança para Inteligência Artificial Generativa

---

Scrum

O que é Scrum, para que serve, quando usar, divisão, pessoas, artefatos

---

Aprendendo Git e GitHub em 3 dias

- Estágios do Git
- Git reset
- Alias
- Branchs
- Pull e Push
- Remoção
- Commits
- Conexão com o git hub
- Merge

---

The Pratical Guide - Maximilian

- Diretório e Repositório
- Branches
- Detached Head
- Estágios do Git
- Git reset
- Alias
- Branchs
- Pull e Push
- Remoção
- Commits
- Conexão com o git hub
- Merge
- Stash
- Reflog
- Fast-Foward e Non-Fast-Foward
- Rebase
- Cherry Pick
- GitHub
- Pull Request e Fork

---

Comandos do git:

O hard faz com que tudo antes do commit selecionado seja excluído permanentemente, não há maneira de voltar atrás: git reset --hard (numero do commit)

"git init" inicializa o repositorio

"git status" dá informações como: Branch que você está, commits e arquivos que foram mudados

untracked files: arquivos que estão fora do repositório

"git add exemplo.html" coloca arquivos especificos

"git add . ou --all" coloca todos os arquivos para stage ou seja: prontos para o commit

"git commit -m "Sua mensagem"" Commit e deixando uma mensagem, coloque o que o commit está fazendo

"git diff" para ver o que foi alterado

"git commit -am "Terceiro commit pulo de working para commit"" Código para pular de working para commit

"git rm hamburger.jpg" Para remover um arquivo X que você quiser

para mover o arquivo para Working usa o comando: "git restore --staged hamburger.jpg" e para restaurar o arquivo o comando é: "git restore hamburger.jpg"

Para Trocar o nome de um arquivo é: "git mv hamburger.jpg hamburguer.jpg" e ele vai direto para o stage, 

Para trocar uma mensagem de commit se usa o código: "git commit -m "Terceiro commit pulo de working para commit e fazendo um amend" --amend"

"git log -p" te dá todas as informações de todas as alterações e para sair é usar apertar 'q' ou 'esc'

"git branch" para ver qual branch você está

"git branch ExemploDBr" Assim você cria uma nova branch

"git switch ExemploDBr" para trocar de uma branch para outra 

"git merge -m "Qualquer coisa"" para fazer um commit de uma branch para a main

"git branch -d nomeDaBranch" para deletar uma branch (se já for feito o merge para a main, a main continua com o merge feito) 

"git branch -M nomeDaBranch" Para renomear a branch que você está

"git push -u origin main" Para enviar os arquivos no servidor local para o git hub

"git push --all" para fazer trazer o commit de não só uma branch, mas de todas

"git switch -c AddItem" Para criar uma branch nova e mudar de branch

"git pull" para puxar a versão feita no git hub para a sua maquina

"git clean -df" para remover arquivos untracked