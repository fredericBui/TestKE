class Support {
  WhoAteTheLastCookie(e) {
    var guilty;
    switch (typeof e) {
      case "string":
        guilty = "Zach";
        break;
      case "number":
        guilty = "Monica";
        break;
      default:
        guilty = "the dog";
        break;
    }
    console.log(`Who ate the last cookie? It was ${guilty}!`);
  }
}

Support = new Support();

Support.WhoAteTheLastCookie("hi");
Support.WhoAteTheLastCookie(42);
Support.WhoAteTheLastCookie([1, 42]);
