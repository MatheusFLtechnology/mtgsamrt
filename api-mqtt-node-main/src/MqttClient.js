import * as mqtt from "mqtt";

class MqttClient {

  constructor() {
    //mqtt://test.mosquitto.org
    this.client = mqtt.connect('mqtt://10.44.1.35');
    //this.client = mqtt.connect('mqtt://test.mosquitto.org');
    this.sensor1 = 0;
    this.sensor2 = 0;
    this.sensor3 = 0;

    // adicione seus tópicos aqui
    this.subscribeTopics = [
      'MTG/pH',
      'MTG/Tupidez',
      'MTG/temp'

    ]
  }

  initialize() {
    this.connect();
    this.configureMqttLoop();
  }

  connect() {
    this.client.on('connect', () => {
      console.log("Conectado com sucesso ao broker");
    });
  }

  subscribe() {
    for (const topic of this.subscribeTopics) {
      this.client.subscribe(topic, () => {
        console.log(`Inscrito no tópico: ${topic}`)
      });
    }
  }

  configureMqttLoop() {
    this.client.on('message', (topic, payload) => {
      const message = payload.toString();
      // descomente se quiser ver todas as mensagens
      //console.log(`Chegou mensagem ${message} no tópico ${topic}`);

      // crie um caso para entrada de dados em cada tópico
      switch (topic) {
        case 'MTG/pH': {
          this.sensor1 = Number(message);
          console.log(`pH: ${this.sensor1}`);
          break;
        }
        case 'MTG/Tupidez': {
          this.sensor2 = Number(message);
          console.log(`TUPIDEZ = ${this.sensor2}`);
          break;
        }
        case 'MTG/temp': {
          this.sensor3 = Number(message);
          console.log(`temperatura = ${this.sensor2}`);
          break;
        }
      }
    });
  }

  publish(topic, value){
    this.client.publish(topic, value)
  }
}

export default MqttClient;





