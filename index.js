const telegraf = require("telegraf");

let bot = new telegraf("5323073540:AAFIWPTJY5fax0cUoH5h1VKDdtPpVKPyt4g");
bot.help((e) => {
  const data = e;
  e.reply(`salom dunyo`);
});
bot.start((e) => {
  const data = e;
  e.reply(`Welcome to my bot @texnalogikyangiliklar" Our channel`);
  console.log(e.updateSubTypes);
});
bot.settings((e) => {
  const data = e;
  e.reply(`Settings to `);
});
bot.hears("salom", (e) => {
  e.reply("Salom qalaysiz bizning Kanalga azo bo'ling @texnalogikyangiliklar");
});
bot.hears("Salom", (e) => {
  for (let i = 0; i < 5; i++) {
    e.reply(
      "Salom qalaysiz bizning Kanalga azo bo'ling @texnalogikyangiliklar "
    );
  }
});
bot.on("message", (e) => {
  console.log(e);
  for (let i = 0; i < 5; i++) {
    e.reply("Tohirov Nima gap endi");    
  }

});
bot.launch();
