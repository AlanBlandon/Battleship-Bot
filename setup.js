module.exports = {
    name: 'setup',
    description: "This is a setup command",
    execute(message, args, Discord){
       var blueBox = '🟦';
       var aSquare = String.fromCodePoint("A".codePointAt(0) - 65 + 0x1f1e6);
       var bSquare = String.fromCodePoint("B".codePointAt(0) - 65 + 0x1f1e6);
       var cSquare = String.fromCodePoint("C".codePointAt(0) - 65 + 0x1f1e6);
       var dSquare = String.fromCodePoint("D".codePointAt(0) - 65 + 0x1f1e6);
       var eSquare = String.fromCodePoint("E".codePointAt(0) - 65 + 0x1f1e6);
       var fSquare = String.fromCodePoint("F".codePointAt(0) - 65 + 0x1f1e6);
       var gSquare = String.fromCodePoint("G".codePointAt(0) - 65 + 0x1f1e6);
       var hSquare = String.fromCodePoint("H".codePointAt(0) - 65 + 0x1f1e6);
       var iSquare = String.fromCodePoint("I".codePointAt(0) - 65 + 0x1f1e6);
       var jSquare = String.fromCodePoint("J".codePointAt(0) - 65 + 0x1f1e6);

       function grid(){
       var letters = "";
       var text = "";
       var letterArray = [aSquare, bSquare, cSquare, dSquare, eSquare, fSquare, gSquare, hSquare, iSquare, jSquare];
       var numberArray = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
       for (var i = 0; i < 10; i++){
           letters += "|" + letterArray[i];
           if(i == 9){
               letters += '|🎆';
           }
           for(var j = 0; j < 10; j++){
               text += "|" + blueBox;
               if(j == 9){
                   text += "|" + numberArray[i];
                   text += "\n";
               }
           }
         }
         return [letters, text];
        }
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#000080')
        .setTitle('Battleship Royale!')
        //.setURL('')
        .setDescription('The Classical Naval Combat Game!')
        
        .addFields(
            {name: 'Fire!', value: grid(), inline: true},
            {name: 'Fire!', value: grid(), inline: true},
            {name: 'Nooo!', value: "Tommyhas arrived!"}
        )
        
       //.setImage('http://37.media.tumblr.com/082cc60d92a78a52fc8ad59bbb9e2f12/tumblr_n3qt5aykCo1t0xz7jo3_500.gif')
       //.setThumbnail()
       .setFooter('Imagine playing Destiny 2');
         
         //message.channel.send(letters);
         //message.channel.send(text);
        message.channel.send('Hail Hydra');
        message.channel.send(newEmbed);
    }
}