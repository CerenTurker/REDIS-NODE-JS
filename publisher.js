const redis = require("redis");
const client = redis.createClient();

client.on("error", error => {
  console.error(error);
});

client.publish("ceren.dev", "app üzerinden gonderilen", (e, number) => {
  console.log(`Mesaj ${number} kişiye gonderildi`);
});