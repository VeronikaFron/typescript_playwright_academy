const cities: string[] = ["Praha", "Brno", "Tábor", "Plzeň", "Louny"];

cities.forEach((city) => {
  console.log(city);

  if (city.toLowerCase() === "tábor") {
    console.log(
      "Tábor byl založen na jaře roku 1420 husity a pojmenován podle hory Thabor u Nazaretu, v dnešním Izraeli.",
    );
  }
});
