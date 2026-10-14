// telc Deutsch A1 (Start Deutsch 1) style mock "Sprachbausteine".
// Teil 1: a short personal letter/e-mail with 10 gaps, three options each (a/b/c). 1.5 points per gap.
// Teil 2: a short dialogue, notice or e-mail with 10 gaps filled from a bank of 15 words (each used at most once). 1.5 points per gap.
// Gaps are written as [1] … [10] inside the text. `topic` links each gap to a grammar topic in data/topics.js.
window.EXAMS = {
  teil1: [
    {
      title: "Einladung zum Geburtstag",
      text: "Liebe Aylin,\n\nam Samstag [1] ich Geburtstag! Ich werde 30 Jahre alt und [2] eine kleine Party machen. Die Party beginnt um [3] acht bei mir zu Hause. Kommst du? Ich habe auch [4] Kollegen und zwei Freundinnen aus dem Deutschkurs eingeladen. Zuerst essen wir zusammen, [5] hören wir Musik und tanzen. Du musst nichts mitbringen. Aber du [6] gern Kuchen, oder? Dann bring bitte einen mit! Meine Wohnung ist [7] der Gartenstraße 12, im dritten Stock. Du kannst mit dem Bus Nummer 5 fahren, die Haltestelle ist direkt vor [8] Haus. Bitte [9] mir bis Donnerstag eine Nachricht. Ich freue mich [10] auf dich!\n\nLiebe Grüße\nLena",
      gaps: [
        { options: ["bin", "habe", "hat"], answer: 1, topic: "01", explain: "Geburtstag haben = to have a birthday; ich → habe." },
        { options: ["möchte", "möchtest", "möchten"], answer: 0, topic: "10", explain: "ich möchte … machen – the modal goes in position 2 and the infinitive (machen) at the end." },
        { options: ["halbe", "halb", "halben"], answer: 1, topic: "18", explain: "um halb acht = at 7:30 (half an hour before eight); halb takes no ending in clock times." },
        { options: ["ein", "eine", "einen"], answer: 2, topic: "05", explain: "der Kollege is masculine and the direct object of einladen → Akkusativ einen Kollegen." },
        { options: ["und", "danach", "aber"], answer: 1, topic: "07", explain: "The verb follows the gap directly (… hören wir), so the gap is a fronted adverb: Danach hören wir … After und/aber the subject would come first (und wir hören)." },
        { options: ["isst", "esse", "esst"], answer: 0, topic: "03", explain: "essen has a vowel change in the du/er forms: du isst." },
        { options: ["in", "an", "auf"], answer: 0, topic: "17", explain: "Wo? → in der Gartenstraße (in + Dativ for a street address)." },
        { options: ["das", "den", "dem"], answer: 2, topic: "15", explain: "vor + Dativ for a location (wo?): das Haus → vor dem Haus." },
        { options: ["schreib", "schreibst", "schreiben"], answer: 0, topic: "12", explain: "Request to a friend → du-imperative: Schreib mir … (no -st, no pronoun)." },
        { options: ["viel", "gern", "sehr"], answer: 2, topic: "20", explain: "sehr intensifies a verb: Ich freue mich sehr. viel would mean 'a lot (of things)' and gern is 'like to'." }
      ]
    },
    {
      title: "Nachricht an die neue Nachbarin",
      text: "Liebe Frau Petrova,\n\nherzlich willkommen im Haus! Ich heiße Omar Haddad und [1] im zweiten Stock, direkt über Ihnen. Ich bin schon [2] fünf Jahren hier. Haben Sie Fragen? Dann [3] Sie mich einfach. Meine Nummer ist 0176 234 55 81. [4] Mülltonnen stehen im Hof hinter dem Haus; die Müllabfuhr kommt am Dienstag. Der Hausmeister heißt Herr Kraus. Er ist jeden Montag von 9 bis 12 Uhr da und [5] gern. Leider gibt es [6] Keller für Fahrräder, aber Sie können Ihr Fahrrad im Hof abstellen. Am Samstag [7] wir ein kleines Fest im Garten machen. Alle Nachbarn kommen. Haben Sie Zeit? Dann bringen Sie bitte [8] Kinder mit. Wir fangen um drei Uhr [9]. Es [10] Spiele, Kaffee und Kuchen.\n\nViele Grüße\nOmar Haddad",
      gaps: [
        { options: ["wohnt", "wohne", "wohnst"], answer: 1, topic: "02", explain: "Subject ich (Ich heiße … und wohne) → ending -e." },
        { options: ["vor", "seit", "nach"], answer: 1, topic: "16", explain: "seit + Dativ for something that started in the past and is still true: seit fünf Jahren." },
        { options: ["fragen", "fragt", "frag"], answer: 0, topic: "12", explain: "Polite imperative with Sie keeps the pronoun: Fragen Sie mich." },
        { options: ["Der", "Die", "Das"], answer: 1, topic: "04", explain: "die Mülltonnen is plural (die Mülltonne, -n); the plural article is always die." },
        { options: ["hilft", "helft", "helfe"], answer: 0, topic: "03", explain: "helfen changes e → i in the er form: er hilft." },
        { options: ["kein", "keinen", "nicht"], answer: 1, topic: "06", explain: "A noun is negated with kein; after es gibt the noun is Akkusativ: der Keller → keinen Keller." },
        { options: ["wollen", "will", "wollt"], answer: 0, topic: "10", explain: "Subject wir → wollen; the infinitive machen stands at the end." },
        { options: ["Ihr", "Ihren", "Ihre"], answer: 2, topic: "09", explain: "Formal possessive Ihr with a plural noun (die Kinder) → Ihre Kinder." },
        { options: ["auf", "ab", "an"], answer: 2, topic: "11", explain: "anfangen is separable: Wir fangen um drei Uhr an – the prefix goes to the end." },
        { options: ["gibt", "geben", "gibst"], answer: 0, topic: "20", explain: "Fixed phrase es gibt + Akkusativ, always 3rd person singular." }
      ]
    },
    {
      title: "Zurück aus Hamburg",
      text: "Hallo Pavel,\n\nich bin wieder zu Hause! Am Freitag [1] ich mit dem Zug nach Hamburg gefahren. Die Fahrt [2] drei Stunden gedauert. Meine Schwester Hana hat mich am Bahnhof abgeholt, und wir sind zusammen [3] ihr nach Hause gefahren. Am Samstag haben wir den Hafen [4] und ein großes Schiff gesehen. Das Wetter war leider [5] gut, es hat viel geregnet. Am Abend haben wir in [6] Restaurant am Hafen Fisch gegessen. Sehr lecker! Am Sonntag [7] ich keine Zeit für ein Museum, [8] mein Zug ist schon um zehn Uhr gefahren. Ich habe viele Fotos gemacht. [9] du sie sehen? Dann komm am Mittwoch zu mir. Und bring deine Freundin mit! [10] heißt sie eigentlich?\n\nBis bald\nJonas",
      gaps: [
        { options: ["bin", "habe", "ist"], answer: 0, topic: "14", explain: "fahren describes movement, so the Perfekt uses sein: ich bin … gefahren." },
        { options: ["ist", "hat", "haben"], answer: 1, topic: "13", explain: "dauern takes haben; the subject die Fahrt is singular → hat gedauert." },
        { options: ["nach", "bei", "zu"], answer: 2, topic: "17", explain: "Wohin? to a person → zu + Dativ: zu ihr. nach is for cities/countries, bei answers wo?." },
        { options: ["besucht", "gebesucht", "besuchen"], answer: 0, topic: "13", explain: "besuchen has the inseparable prefix be-, so the participle takes no ge-: haben … besucht." },
        { options: ["kein", "nicht", "keine"], answer: 1, topic: "06", explain: "An adjective (gut) is negated with nicht; kein is only for nouns." },
        { options: ["einen", "einem", "ein"], answer: 1, topic: "15", explain: "Wo? → in + Dativ; das Restaurant → in einem Restaurant." },
        { options: ["habe", "war", "hatte"], answer: 2, topic: "14", explain: "Past of haben: ich hatte keine Zeit (Präteritum hatte, not Perfekt)." },
        { options: ["denn", "weil", "aber"], answer: 0, topic: "19", explain: "denn gives a reason and keeps normal word order (mein Zug ist … gefahren); weil would send the verb to the end." },
        { options: ["Willst", "Will", "Wollt"], answer: 0, topic: "10", explain: "Yes/no question with du: Willst du … sehen? (modal first, infinitive at the end)." },
        { options: ["Wer", "Was", "Wie"], answer: 2, topic: "08", explain: "Asking for a name: Wie heißt sie? (wie + heißen)." }
      ]
    }
  ],
  teil2: [
    {
      title: "An der Rezeption beim Arzt",
      text: "Frau Weber: Guten Tag, ich habe heute [1] Termin bei Dr. Lang.\nRezeption: Guten Tag. Wie [2] Sie?\nFrau Weber: Sofia Weber.\nRezeption: Danke. Haben Sie [3] Versichertenkarte dabei?\nFrau Weber: Ja, hier bitte.\nRezeption: Sind Sie zum ersten Mal hier?\nFrau Weber: Nein, ich [4] schon im Januar hier.\nRezeption: Gut. [5] Sie bitte im Wartezimmer Platz. Der Arzt kommt gleich.\nFrau Weber: Ich muss um 11 Uhr wieder im Büro sein. Dauert es lange?\nRezeption: Nein, Sie [6] nicht lange warten. Was haben Sie denn?\nFrau Weber: Ich habe seit drei Tagen Halsschmerzen, und der Kopf tut [7] auch weh.\nRezeption: Dann bekommen Sie sicher ein Rezept. Die Apotheke ist gleich [8] Bahnhof.\nFrau Weber: Danke. Kann ich den nächsten Termin schon [9]?\nRezeption: Ja, gern. Nächste Woche am Mittwoch, [10] 14 Uhr?\nFrau Weber: Das passt. Vielen Dank!",
      bank: ["einen", "heißen", "Ihre", "war", "Nehmen", "müssen", "mir", "am", "machen", "um", "heißt", "Ihren", "bin", "Nimm", "mich"],
      answers: ["einen", "heißen", "Ihre", "war", "Nehmen", "müssen", "mir", "am", "machen", "um"],
      topics: ["05", "02", "09", "14", "12", "10", "15", "17", "10", "16"],
      explain: [
        "der Termin is masculine and the object of haben → Akkusativ einen Termin.",
        "Sie-form of heißen ends in -en: Wie heißen Sie?",
        "Formal possessive + feminine noun (die Versichertenkarte) → Ihre.",
        "Past of sein: ich war (im Januar).",
        "Sie-imperative: Nehmen Sie … Platz (Platz nehmen = to take a seat).",
        "Sie → müssen; the infinitive warten stands at the end.",
        "weh tun takes the dative: Der Kopf tut mir weh.",
        "Wo? → an + Dativ: am Bahnhof (an dem).",
        "After the modal kann the infinitive goes to the end: Kann ich … machen?",
        "Clock times take um: um 14 Uhr."
      ]
    },
    {
      title: "Aushang vom Hausmeister",
      text: "Liebe Mieterinnen und Mieter,\n\nam Montag, dem 20. Oktober, [1] der Aufzug nicht. Eine Firma repariert [2] von 8 bis 16 Uhr. Bitte benutzen Sie am Montag [3] Treppe. Der Keller ist [4] Dienstag wieder offen. Bitte stellen Sie [5] Fahrräder in den Fahrradraum und nicht in den Flur. Im Flur [6] man keine Fahrräder abstellen. Haben Sie Fragen? Dann [7] Sie mich bitte an: 0171 55 44 33 2. Ich bin jeden Tag von 8 bis 12 Uhr in [8] Büro im Erdgeschoss. Am Freitag [9] ich nicht da, [10] ich habe Urlaub.\n\nVielen Dank\nIhr Hausmeister\nK. Brandt",
      bank: ["fährt", "ihn", "die", "am", "Ihre", "darf", "rufen", "meinem", "bin", "denn", "fahren", "ihm", "der", "weil", "meinen"],
      answers: ["fährt", "ihn", "die", "am", "Ihre", "darf", "rufen", "meinem", "bin", "denn"],
      topics: ["03", "05", "04", "16", "09", "10", "11", "15", "01", "19"],
      explain: [
        "fahren changes a → ä in the er form: der Aufzug fährt nicht.",
        "der Aufzug is the object of reparieren → Akkusativ pronoun ihn.",
        "die Treppe is feminine; as the object it stays die.",
        "Days of the week take am: am Dienstag.",
        "Formal possessive + plural noun (die Fahrräder) → Ihre.",
        "dürfen = to be allowed to; man → darf (like er).",
        "anrufen is separable: Rufen Sie mich … an.",
        "Wo? → in + Dativ; das Büro → in meinem Büro.",
        "Subject ich → bin (Am Freitag bin ich nicht da).",
        "denn gives a reason and keeps normal word order (ich habe Urlaub); weil would move the verb to the end."
      ]
    },
    {
      title: "Antwort: Kino am Samstag",
      text: "Hallo Murat,\n\ndanke für deine E-Mail! Ja, ich [1] am Samstag Zeit. Wir können gern zusammen [2] Kino gehen. Der Film beginnt um halb neun. Ich hole dich um acht Uhr [3], dann fahren wir mit dem Bus. Vorher möchte ich noch etwas essen. Was [4] du gern? Es gibt [5] neues Café neben dem Kino, da kann man gut [6]. Meine Freundin Hana kommt auch mit. Du kennst [7] noch nicht, aber sie ist sehr nett. Sie kommt aus Prag und [8] seit einem Jahr Deutsch. Nach [9] Film gehen wir vielleicht noch in eine Bar. Bring bitte [10] Jacke mit, am Abend ist es kalt.\n\nBis Samstag!\nTom",
      bank: ["habe", "ins", "ab", "isst", "ein", "essen", "sie", "lernt", "dem", "deine", "hast", "im", "esst", "ihr", "den"],
      answers: ["habe", "ins", "ab", "isst", "ein", "essen", "sie", "lernt", "dem", "deine"],
      topics: ["01", "17", "11", "03", "20", "10", "05", "02", "16", "09"],
      explain: [
        "Zeit haben = to have time; ich → habe.",
        "Wohin? → ins Kino (in das); im answers wo?.",
        "abholen is separable: Ich hole dich … ab.",
        "essen changes e → i in the du form: Was isst du gern?",
        "es gibt + Akkusativ; das Café is neuter → ein neues Café.",
        "After the modal kann the infinitive goes to the end: da kann man gut essen.",
        "Hana is the object of kennen → Akkusativ pronoun sie.",
        "Subject sie (singular, = Hana) → lernt.",
        "nach + Dativ: der Film → nach dem Film.",
        "Possessive for du + feminine noun (die Jacke) → deine Jacke."
      ]
    }
  ]
};
