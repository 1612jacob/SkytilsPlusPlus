register("chat", (message, event) => {
  if (message.includes("$SBECHWP:")) {

    let replacedmessage = message.replace("$SBECHWP", "")
    replacedmessage = replacedmessage.split(":").pop();

    num = replacedmessage.indexOf("@").toFixed(0);
    
    place = replacedmessage.slice(0, num)

  coords = replacedmessage.split("-").pop();
  str = coords;

  coords2 = str.split(',')

  x = coords2[0]
  y = coords2[1]
  z = coords2[2]

  ChatLib.command(`skytilshollowwaypoint set ${place} ${x} ${y} ${z}`, true)
}
}).setCriteria("${message}");


