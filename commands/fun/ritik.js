module.exports = {
    name: "ritik",
    description: "mera khud ka command",
    category: "fun",
    async execute(m, sock) {
        await sock.sendMessage(m.key.remoteJid, { text: "Haan bhai bol Ritik! 🔥" }, { quoted: m });
    }
};
