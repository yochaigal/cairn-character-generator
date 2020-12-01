roll = (d) => {
  return Math.ceil(Math.random() * d);
};
const armor = generate_text("armor");
const helmet = generate_text("helmet");
const tool = generate_text("tool");
const gear = generate_text("gear");
const trinket = generate_text("trinket");
const weapons = generate_text("weapons");
const bonus = generate_text("bonus");
let allItems = [];
allItems.push(armor, helmet, weapons, tool, gear, trinket, bonus);
let total = 1;
for (let i = 0; i < allItems.length; i++) {
  let item = allItems[i];
  if (item.includes("bulky")) {
    total += 2;
  } else if (!item.includes("No body armor")) {
    total++;
}
}
console.log(total);
$("#character").html(generate_text("character"));
$("#age").html(roll(20) + roll(20) + 10);
$("#hp").html(roll(6));
["str", "dex", "wil"].forEach((item, i) => {
  $("#" + item).html(roll(6) + roll(6) + roll(6));
});
$("#armor").html(armor);
$("#helmet").html(helmet);
$("#weapons").html(weapons);
$("#tool").html(tool);
$("#gear").html(gear);
$("#trinket").html(trinket);
$("#bonus").html(bonus);
$("#total").html(total);
$("#gold").html(roll(6) + roll(6) + roll(6));
