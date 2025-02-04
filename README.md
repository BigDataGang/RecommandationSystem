# BigDataFinalProject

dataset link: https://www.kaggle.com/datasets/mkechinov/ecommerce-purchase-history-from-electronics-store

create Kafka: https://docs.aws.amazon.com/msk/latest/developerguide/create-cluster.html

# About Visualization
For this part, using React.js as frontend framework to show various charts, Flask as backend to deal with data.

To run the server, you need have the docker installed.

1. Change to `web` folder
2. Execute the command:
    ```bash
    docker compose up
    ```
3. Open your browser and visit: http://localhost/

Please refer to [readme](web/README.md) in `web` folder for details about web server.

# File description
**Kafka_messages**: This folder stores all the Kafka messages, this is just for your reference, the original copy is on AWS S3.

**result**: This folder stores transformed kafka messages and the prediction result.

**web**: This folder stores web frontend and backend code.

**ML_time_wighted.py**: This is our first version of the Spark ETL code with ML. It does not perform well, but we are providing it here for your reference.

**ml-count.py**: This is our final version of the Spark ETL code with ML. 

**messagePublisher.py**: This code read in csv file and publish messages to kafka topic.


# Kafka info & Commands

MSK VPC: `vpc-0bbc25d4942c9a443`

MSK Security groups associated with VPC: `sg-09734f8fd9d3cfb9f`

MSK Subnets: `subnet-0cad84146e7564e88;subnet-0c18b130d53b4746d;subnet-01b7df6fe673bf7ed`

Topic Name: `myTopic`

create topic:
```bash
/home/ubuntu/kafka_2.13-3.6.0/bin/kafka-topics.sh --create --bootstrap-server boot-kic5gwhr.c2.kafka-serverless.us-east-1.amazonaws.com:9098 --command-config /home/ubuntu/kafka_2.13-3.6.0/bin/client.properties --replication-factor 3 --partitions 1 --topic mytopic
```
send message:
```bash
/home/ubuntu/kafka_2.13-3.6.0/bin/kafka-console-producer.sh --broker-list boot-kic5gwhr.c2.kafka-serverless.us-east-1.amazonaws.com:9098 --producer.config /home/ubuntu/kafka_2.13-3.6.0/bin/client.properties --topic myTopic
```
receive message:
```bash
/home/ubuntu/kafka_2.13-3.6.0/bin/kafka-console-consumer.sh --bootstrap-server boot-kic5gwhr.c2.kafka-serverless.us-east-1.amazonaws.com:9098 --consumer.config /home/ubuntu/kafka_2.13-3.6.0/bin/client.properties --topic mytopic
```
delete topic:
```bash
/home/ubuntu/kafka_2.13-3.6.0/bin/kafka-topics.sh --delete --bootstrap-server boot-kic5gwhr.c2.kafka-serverless.us-east-1.amazonaws.com:9098 --topic mytopic
```

