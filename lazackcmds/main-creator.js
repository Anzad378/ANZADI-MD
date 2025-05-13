let handler = async (m, { conn }) => {
    let vcard = `
  BEGIN:VCARD
  VERSION:3.0
  N:;ANZADI;;;
  FN:ANZADI 
  ORG:ANZADI
  TITLE:
  TEL;waid=0654003502
  X-ABLabel:ANZADI
  X-WA-BIZ-DESCRIPTION:
  X-WA-BIZ-NAME:ANZADI
  END:VCARD
    `.trim();
  
    await conn.sendMessage(
      m.chat,
      {
        contacts: {
          displayName: "ANZADI-TECH",
          contacts: [{ vcard }],
        },
      },
      { quoted: m }
    );
  };
  
  handler.help = ["owner"];
  handler.tags = ["main"];
  handler.command = ["owner", "0654003502",];
  
  export default handler;
  
