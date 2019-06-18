# Açougue Muffato

## Preparando ambiente

1. Instalar o [choco](https://chocolatey.org/install)
2. Preparar o restante do ambiente seguindo o  [tutorial do React-Native](https://facebook.github.io/react-native/docs/getting-started) na aba **React Native CLI Quickstart**

## Iniciar projeto

* Comando para criar o projeto React-Native ```react-native init <nome_do_projeto>```

## Configuração do Proxy

### Git

#### Add

* git config --global http.proxy http://<username>:<password>@proxy.muffato.com.br:3128
* git config --global https.proxy http://<username>:<password>@proxy.muffato.com.br:3128

#### Remove

* git config --global --unset http.proxy
* git config --global --unset https.proxy

### NPM

#### Add

* git config set proxy "http://<username>:<password>@proxy.muffato.com.br:3128"
* git config set https-proxy "http://<username>:<password>@proxy.muffato.com.br:3128"

#### Remove

npm config rm proxy
npm config rm https-proxy

### Yarn

#### Add

* yarn config set proxy http://<username>:<password>@proxy.muffato.com.br:3128
* yarn config set https-proxy http://<username>:<password>@proxy.muffato.com.br:3128

#### Remove

* yarn config delete proxy
* yarn config delete https-proxy

## Aulas

### Segunda (17/06)

* Clonando projeto
* Preparando Live Reload
* Criando a tela Login
* Estilizando os components com StyleSheet
* Trabalhando com rotas utilizando react-navigation
* Criando a tela Home
* Trabalhando com transição entre telas
* Modificando a NavigationBar
* Entendo e trabalhando o state do React
* Criando uma listagem de produtos com Flatlist