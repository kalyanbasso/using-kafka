from kafka import KafkaProducer
import json
import random

producer = KafkaProducer(bootstrap_servers="localhost:9092",
                         value_serializer=lambda v: json.dumps(v, default=str).encode('utf-8'))

while True:
    producer.send('kafka-python-topic', random.randint(1, 999))