const Kafka = require("no-kafka");

var valueSum = 0;

const consumer = new Kafka.SimpleConsumer({connectionString: "localhost:9092"});
var data = function (messageSet) {
    messageSet.forEach(m => {
        var value = parseInt(m.message.value.toString("utf-8"));
        valueSum += value;
        console.log(valueSum);
    });
}

return consumer.init().then(function () {
    return consumer.subscribe('kafka-python-topic', data);
})