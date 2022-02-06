# using-kafka

Este é um exemplo básico com o objetivo de desenvolver alguma funcionalidade simples usando o kafka.


# Estrutura
    |-- src 
      |-- producer
          |-- producer.py
      |-- consumer
          |-- consumer.js

# Instalação

## kafka
    docker-compose up
O docker-compose up baixará as imagens do kafka e do zoockeeper buildar e subir os containers descritos no arquivo docker-compose.yml.

## producer
    pip install kafka-python
    python3 src/producer/producer.py
O producer.py fica responsável por gerar números aleatórios entre 1 e 999 e enviando para o kafka
 

## consumer
    npm install
    node src/consumer/consumer.js
O consumer.js é quem irá consumir os dados do kafka e retornar a soma de todos os valores já lidos

# Referências

Para o desenvolvimento foi seguido as instruções do tutorial https://medium.com/trainingcenter/apache-kafka-codifica%C3%A7%C3%A3o-na-pratica-9c6a4142a08f
