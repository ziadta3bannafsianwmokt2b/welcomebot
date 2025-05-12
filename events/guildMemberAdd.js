const { Events, EmbedBuilder } = require('discord.js');

module.exports = {
  name: Events.GuildMemberAdd,
  async execute(member) {
    const { welcomeChannelId } = require ('./config.json')
    const channel = member.guild.channels.cache.get(welcomeChannelId);

    if (!channel) return;

    const welcomeEmbed = new EmbedBuilder()
      .setColor('#FFA500')
      .setTitle('👋 اهلا بيك في سيرفر ويك ستوديو')
      .setDescription(`${member} discord.gg/wicks`)
      .addFields(
        { name: 'عدد الاعضاء', value: `${member.guild.memberCount}`, inline: true },
        { name: 'تاريخ انشاء الحساب', value: `<t:${Math.floor(member.user.createdAt.getTime() / 1000)}:R>`, inline: true },
        { name: 'تاريخ الانضمام', value: `<t:${Math.floor(Date.now() / 1000)}:R>`, inline: true }
      )
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setFooter({ text: 'discord.gg/wicks' })
      .setTimestamp();

    await channel.send({ 
      content: `<@${member.id}>`, 
      embeds: [welcomeEmbed] 
    });
  },
};
