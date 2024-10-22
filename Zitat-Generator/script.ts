const zitatearray: string[] = [
  'Das Leben ist das, was passiert, während du eifrig dabei bist, andere Pläne zu machen.',
  'Man sieht nur mit dem Herzen gut. Das Wesentliche ist für die Augen unsichtbar.',
  'Wenn du einmal Erfolg hast, schreibe nicht lange darüber, sondern geh weiter zum nächsten.',
  'Das Geheimnis des Erfolges ist, den Standpunkt des anderen zu verstehen.',
  'Ein wahrer Freund ist jemand, der dich kennt, aber dich trotzdem liebt.',
  'Gib jedem Tag die Chance, der schönste deines Lebens zu werden.',
  'Das Geheimnis des Glücks liegt nicht im Besitz, sondern im Geben.',
  'Wir sind das, was wir wiederholt tun. Exzellenz ist also keine Handlung, sondern eine Gewohnheit.',
  'Nichts auf der Welt kann an die Stelle von Beharrlichkeit treten.',
  'Das Leben ist wie Fahrradfahren. Um das Gleichgewicht zu halten, musst du in Bewegung bleiben.',
  'Das Einzige, was man in dieser Welt erreichen kann, ist, besser zu sein als man gestern war.',
  'Der einzige Weg, eine gute Arbeit zu erledigen, ist, sie zu lieben, was du tust.',
  'Erfolg ist die Summe kleiner Anstrengungen, die sich Tag für Tag wiederholen.',
  'Gib niemals auf. Große Dinge brauchen Zeit.',
  'Das Leben ist nicht über das Finden von sich selbst, sondern über das Erschaffen von sich selbst.',
  'Das Geheimnis des Erfolges ist es, die eigene Mission zu finden.',
  'Die beste Vorbereitung für den Erfolg ist die harte Arbeit und die Entschlossenheit, es zu erreichen.',
  'Zukunft gehört denen, die an die Schönheit ihrer Träume glauben.',
  'Nur wer sein Ziel kennt, findet den Weg.',
  'Die größte Ehre im Leben liegt nicht darin, niemals zu fallen, sondern jedes Mal aufzustehen, wenn man fällt.',
];

function generiereZitat(): void {
  let zitatearrayLaenge: number = zitatearray.length - 1;
  let zufallszitatnummer: number = Math.round(
    Math.random() * zitatearrayLaenge
  );
  let zufallszitat: string = zitatearray[zufallszitatnummer];

  let zitatElement = document.getElementById('zitat');
  if (zitatElement) {
    zitatElement.innerHTML = zufallszitat;
  }
}
