# RevendaBoticario

Teste de FrontEnd para O Boticário 

## Executar

Execute o `ng serve` para o Dev Server (localhost). Navigate to `http://localhost:4200/`.


## Considerações

* Existe uma API de usuário/JWT para autenticação, porém, é um fake backend.
* Sim, é necessário seguir um fluxo de cadastro de usuário, para só então logar.
* Também foi colocado um AuthGuard, caso não esteja logado/autenticado, o dashboard não será visualizado.
* A API tem um problemas de CORS para consumir no Angular 8, foi necessário colocar uma outra API externa com a finalidade de contornar o problema CORS, porém, funciona e é possível consumir o valor do cashback total em localhost :)
* O Cadastro de compras é o único procedimento que não está no fake backend, ele salva apenas em instância, se der reload na SPA, tem que ser cadastrado tudo novamente.

Qualquer dúvida sobre o que foi feito e o porque fiz como fiz e as decisões que levaram a tal, podem perguntar que estou a inteira disposição para discutir.

Obrigado a todos.
