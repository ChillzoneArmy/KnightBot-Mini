module.exports = {
    name: 'ritik',
    aliases: ['ritikbhai'],
    category: 'fun',
    desc: 'Ritik ka khud ka command',
    usage: 'ritik',
    execute: async (sock, msg, args, extra) => {
        try {
            await extra.reply('Haan bhai bol Ritik! 🔥');
        } catch (error) {
            console.error('Ritik Error:', error);
            await extra.reply(`❌ Error: ${error.message}`);
        }
    }
};
