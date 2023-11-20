for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("SiteHost");
  } else if (i % 3 === 0) {
    console.log("Site");
  } else if (i % 5 === 0) {
    console.log("Host");
  } else {
    console.log(i);
  }
}
