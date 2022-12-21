class Support {
  RemoveSpace(string) {
    var stringSplitJoin = string.split(/\s+/).join("");
    return stringSplitJoin;
  }
}

Support = new Support();

console.log(Support.RemoveSpace("    	"));
console.log(Support.RemoveSpace("alpha tango charlie"));
console.log(Support.RemoveSpace("  set  	  ready?     go!   "));
