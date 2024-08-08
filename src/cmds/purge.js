const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('purge')
        .setDescription('pratrina surinktas zinutes . zinuciu SENESNIU NEI 2 SAVAITES istrinti NEIMANOMA')
        .addBooleanOption(o =>
            o.setName('non-629fm')
            .setDescription('vengti 629fm zinuciu ?')
            .setRequired(true))
        .addNumberOption(o => 
            o.setName('fetchamount')
            .setDescription('kiek zinuciu SURINKTI ( didz . kiekis 100 )')
            .setRequired(true))
};

/*
 *      this is unused for now
 *      i dunno if ill ever touch this
 *
 *
 */