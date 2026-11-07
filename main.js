const rawNickname = "hdxbdcjd"; 
let cleanNickname = rawNickname.replace("#", "").replaceAll("_", "-"); 
let gameId = cleanNickname.padEnd(20, 'X'); 

console.log(`Официальный ник: ${rawNickname}`); 
console.log(`Игровой ID: ${gameId}`);
