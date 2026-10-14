// Grammar reference for the 20 A1 topics. English explanations, German examples.
window.TOPICS = [
{
  id:"01", title:"sein and haben", tag:"ich bin, du bist … / ich habe, du hast",
  intuition:"sein (to be) and haben (to have) are the two verbs you will use in almost every sentence: to say who you are, where you are from, how you feel and what you own. Both are irregular, so do not look for a pattern – learn the six forms of each like a short song. Note that German often says ‘I have …’ where English says ‘I am …’: Ich habe Hunger (I am hungry), Ich habe Durst (I am thirsty).",
  rule:[
    "sein: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind – Ich bin müde. Wir sind aus Syrien.",
    "haben: ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben – Ich habe eine Schwester. Er hat ein Auto.",
    "Subject pronouns: ich (I), du (you – one friend), er/sie/es (he/she/it), wir (we), ihr (you – several friends), sie (they), Sie (you – polite, always with a capital S).",
    "Feelings with haben + noun: Hunger, Durst, Zeit, Angst – Ich habe Hunger. Hast du Zeit? Feelings with sein + adjective: Ich bin müde. Sie ist krank.",
    "Greeting: Wie geht’s? / Wie geht es dir? / Wie geht es Ihnen? – Danke, gut. Und dir?"
  ],
  examples:[
    {de:"Ich bin Lehrerin und wohne in Hamburg.", en:"I am a teacher and live in Hamburg."},
    {de:"Hast du Geschwister? – Ja, ich habe einen Bruder.", en:"Do you have siblings? – Yes, I have a brother."},
    {de:"Er ist 30 Jahre alt und hat zwei Kinder.", en:"He is 30 years old and has two children."},
    {de:"Haben Sie heute Zeit? – Nein, ich habe einen Termin.", en:"Do you have time today? – No, I have an appointment."}
  ],
  trap:"English ‘I am hungry / thirsty’ uses haben in German, but ‘I am 30 years old’ uses sein: ‘Ich bin Hunger’ ✗ → ‘Ich habe Hunger’ ✓; ‘Ich habe 30 Jahre’ ✗ → ‘Ich bin 30 Jahre alt’ ✓.",
  table:{head:["","sein (to be)","haben (to have)"],rows:[
    ["ich","bin","habe"],
    ["du","bist","hast"],
    ["er / sie / es","ist","hat"],
    ["wir","sind","haben"],
    ["ihr","seid","habt"],
    ["sie / Sie","sind","haben"]]}
},
{
  id:"02", title:"Regular verbs in the present", tag:"wohnen → wohne, wohnst, wohnt",
  intuition:"A German verb in the dictionary ends in -en (wohnen, kommen, lernen). Cut off the -en and you have the stem (wohn-); then add the ending that matches the person. The endings are the same for every regular verb, so once you know one verb you know thousands. The only small adjustments are for stems that would be hard to pronounce with -st or -t.",
  rule:[
    "Endings: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en: ich wohne, du wohnst, er wohnt, wir wohnen, ihr wohnt, sie wohnen.",
    "wir and sie/Sie always look like the infinitive: wir kommen, Sie lernen, sie spielen.",
    "Stem ends in -t or -d: put an e before -st and -t: du arbeitest, er arbeitet, ihr findet, es regnet.",
    "Stem ends in -s, -ß or -z: the du-form only adds -t, so it looks like the er-form: du heißt / er heißt, du tanzt / er tanzt, du reist.",
    "German has only one present tense: Ich lerne = I learn / I am learning / I do learn."
  ],
  examples:[
    {de:"Ich wohne in Berlin und arbeite in einem Büro.", en:"I live in Berlin and work in an office."},
    {de:"Wie heißt du? – Ich heiße Maria.", en:"What is your name? – My name is Maria."},
    {de:"Lernt ihr Deutsch? – Ja, wir lernen jeden Tag.", en:"Are you learning German? – Yes, we learn every day."},
    {de:"Peter arbeitet am Samstag, aber Anna spielt Tennis.", en:"Peter works on Saturday, but Anna plays tennis."}
  ],
  trap:"Do not forget the extra e after a -t/-d stem: ‘du arbeitst’ ✗ → ‘du arbeitest’ ✓; ‘er findt’ ✗ → ‘er findet’ ✓. And no double s after -ß/-z: ‘du heißst’ ✗ → ‘du heißt’ ✓.",
  table:{head:["","wohnen","arbeiten (-t stem)","heißen (-ß stem)"],rows:[
    ["ich","wohne","arbeite","heiße"],
    ["du","wohnst","arbeitest","heißt"],
    ["er / sie / es","wohnt","arbeitet","heißt"],
    ["wir","wohnen","arbeiten","heißen"],
    ["ihr","wohnt","arbeitet","heißt"],
    ["sie / Sie","wohnen","arbeiten","heißen"]]}
},
{
  id:"03", title:"Irregular verbs in the present", tag:"fahren → fährst, essen → isst, lesen → liest",
  intuition:"A small group of very common verbs changes its vowel – but only in the du and er/sie/es forms. Everything else (ich, wir, ihr, sie/Sie) stays regular. There are two patterns: a → ä (fahren → du fährst) and e → i / ie (essen → du isst, lesen → du liest). Because these verbs are so frequent (eat, sleep, drive, read, speak), the change sounds completely normal to a native speaker, and a missing change sounds foreign.",
  rule:[
    "a → ä: fahren (du fährst, er fährt), schlafen (du schläfst, sie schläft).",
    "e → i: essen (du isst, er isst), nehmen (du nimmst, er nimmt), sprechen (du sprichst, sie spricht), geben (du gibst, es gibt), helfen (du hilfst, er hilft), treffen (du triffst, er trifft).",
    "e → ie: lesen (du liest, er liest), sehen (du siehst, sie sieht).",
    "ich, wir, ihr and sie/Sie are regular: ich fahre, wir essen, ihr lest, sie sprechen.",
    "Because the stem ends in -s, the du-form of essen and lesen looks like the er-form: du isst / er isst, du liest / er liest."
  ],
  examples:[
    {de:"Mein Bruder schläft am Sonntag bis elf Uhr.", en:"My brother sleeps until eleven o’clock on Sunday."},
    {de:"Isst du gern Fisch? – Nein, ich esse lieber Pizza.", en:"Do you like eating fish? – No, I prefer eating pizza."},
    {de:"Sie fährt jeden Tag mit dem Bus zur Arbeit.", en:"She goes to work by bus every day."},
    {de:"Sprichst du Englisch? – Ja, und ich lese auch viel.", en:"Do you speak English? – Yes, and I also read a lot."}
  ],
  trap:"The change happens only in du and er/sie/es: ‘ich fähre’ ✗ → ‘ich fahre’ ✓; ‘ihr fährt’ ✗ → ‘ihr fahrt’ ✓. But the er-form must change: ‘er fahrt’ ✗ → ‘er fährt’ ✓; ‘sie sprecht’ ✗ → ‘sie spricht’ ✓.",
  table:{head:["Infinitive","du","er / sie / es","Meaning"],rows:[
    ["fahren","fährst","fährt","to drive / go"],
    ["schlafen","schläfst","schläft","to sleep"],
    ["essen","isst","isst","to eat"],
    ["lesen","liest","liest","to read"],
    ["sehen","siehst","sieht","to see"],
    ["nehmen","nimmst","nimmt","to take"],
    ["sprechen","sprichst","spricht","to speak"],
    ["geben","gibst","gibt","to give"],
    ["helfen","hilfst","hilft","to help"],
    ["treffen","triffst","trifft","to meet"]]}
},
{
  id:"04", title:"Nouns, gender and plural", tag:"der/die/das, ein/eine, Plural -e/-en/-er/-s",
  intuition:"Every German noun has a gender – masculine (der), feminine (die) or neuter (das) – and the gender belongs to the word, not to the thing: der Tisch, die Lampe, das Bett. Always learn a noun as one package: article + noun + plural (der Apfel, die Äpfel). In the plural the article is always die, whatever the gender. Nouns are always written with a capital letter.",
  rule:[
    "Definite article: der (m), die (f), das (n). Indefinite: ein (m), eine (f), ein (n): der Tisch – ein Tisch, die Lampe – eine Lampe, das Bett – ein Bett.",
    "Plural article is always die: der Mann → die Männer, die Frau → die Frauen, das Kind → die Kinder. ein has no plural – just the noun: Ich habe Kinder.",
    "Common plural endings: -e (die Tische), -(e)n (die Frauen, die Lampen), -er (die Kinder), -s (die Autos, die Handys) or no ending (die Fenster).",
    "Many plurals add an umlaut: der Apfel → die Äpfel, der Stuhl → die Stühle, das Buch → die Bücher, die Mutter → die Mütter.",
    "Hints: nouns in -e are mostly feminine and take -n (die Küche → die Küchen); nouns in -chen are neuter and do not change (das Mädchen → die Mädchen)."
  ],
  examples:[
    {de:"Der Tisch ist neu, aber die Stühle sind alt.", en:"The table is new, but the chairs are old."},
    {de:"Ich kaufe zwei Äpfel und eine Banane.", en:"I am buying two apples and a banana."},
    {de:"Das Kind spielt. Die Kinder spielen.", en:"The child plays. The children play."},
    {de:"Haben Sie ein Zimmer frei? – Ja, wir haben zwei Zimmer.", en:"Do you have a room free? – Yes, we have two rooms."}
  ],
  trap:"There is no automatic -s plural and no plural of ein: ‘zwei Kinds’ ✗ → ‘zwei Kinder’ ✓; ‘die Apfels’ ✗ → ‘die Äpfel’ ✓; ‘eine Kinder’ ✗ → ‘Kinder’ ✓. Learn the plural together with the noun.",
  table:{head:["Plural ending","Example","Note"],rows:[
    ["-e","der Tisch → die Tische; der Stuhl → die Stühle","often with umlaut"],
    ["-(e)n","die Frau → die Frauen; die Lampe → die Lampen","most feminine nouns"],
    ["-er","das Kind → die Kinder; das Buch → die Bücher","umlaut when possible"],
    ["-s","das Auto → die Autos; das Handy → die Handys","foreign and short words"],
    ["no ending","das Fenster → die Fenster; der Apfel → die Äpfel","nouns in -er / -el / -en, sometimes umlaut"]]}
},
{
  id:"05", title:"Nominative and accusative", tag:"der → den, ein → einen, kein → keinen",
  intuition:"The nominative is the ‘doer’ of the sentence (the subject); the accusative is the thing the action lands on (the direct object): Der Mann kauft den Apfel. German marks this with the article, but only the masculine one changes: der → den, ein → einen, kein → keinen. Feminine, neuter and plural look exactly the same in both cases, so the only thing to watch is the -en on masculine words.",
  rule:[
    "Subject = nominative (wer?): Der Hund schläft. Direct object = accusative (wen? was?): Ich sehe den Hund.",
    "Masculine changes: der → den, ein → einen, kein → keinen: Ich habe einen Bruder. Ich habe keinen Hunger. Ich nehme den Bus.",
    "Feminine, neuter and plural stay the same: Ich kaufe die Lampe, das Brot, die Äpfel. Ich habe eine Schwester, ein Auto, keine Kinder.",
    "Typical accusative verbs: haben, kaufen, suchen, essen, trinken, brauchen, möchten, sehen, nehmen: Ich möchte einen Kaffee. Wir brauchen einen Tisch.",
    "Question words: wer? (who – nominative) and wen? (whom – accusative): Wer kommt? Wen siehst du?"
  ],
  examples:[
    {de:"Ich suche einen Supermarkt.", en:"I am looking for a supermarket."},
    {de:"Der Lehrer hat einen Sohn und eine Tochter.", en:"The teacher has a son and a daughter."},
    {de:"Möchtest du einen Tee oder ein Wasser?", en:"Would you like a tea or a water?"},
    {de:"Wir brauchen keinen Zucker, aber wir brauchen Milch.", en:"We do not need any sugar, but we need milk."}
  ],
  trap:"A masculine object needs -en: ‘Ich habe ein Bruder’ ✗ → ‘Ich habe einen Bruder’ ✓; ‘Ich trinke der Kaffee’ ✗ → ‘Ich trinke den Kaffee’ ✓. But the subject stays der: ‘Den Kaffee ist heiß’ ✗ → ‘Der Kaffee ist heiß’ ✓.",
  table:{head:["","masculine","feminine","neuter","plural"],rows:[
    ["Nominativ (wer?)","der / ein / kein Mann","die / eine / keine Frau","das / ein / kein Kind","die / – / keine Kinder"],
    ["Akkusativ (wen? was?)","den / einen / keinen Mann","die / eine / keine Frau","das / ein / kein Kind","die / – / keine Kinder"]]}
},
{
  id:"06", title:"Negation: nicht and kein", tag:"kein before nouns, nicht for the rest",
  intuition:"German has two ‘no’ words and the choice is simple: kein negates a noun that would have ein or no article at all (no car, no time, no children); nicht negates everything else – verbs, adjectives, places, names and nouns with der/die/das or mein/dein. So first ask: am I saying ‘not a / no …’ about a noun? Then it is kein. Otherwise it is nicht.",
  rule:[
    "kein replaces ein and takes the same endings: ein Auto → kein Auto, eine Zeit → keine Zeit, einen Bruder → keinen Bruder.",
    "kein also before nouns without any article: Ich habe Kinder → Ich habe keine Kinder. Ich trinke Kaffee → Ich trinke keinen Kaffee.",
    "nicht negates the verb and goes to the end of a simple sentence: Ich arbeite heute nicht. Er kommt nicht.",
    "nicht stands directly before an adjective, a place or a specific noun (der/die/das, mein): Das ist nicht teuer. Ich wohne nicht in Berlin. Das ist nicht mein Auto.",
    "With a second verb part (infinitive, participle, prefix) nicht goes before that part: Ich kann heute nicht kommen. Ich habe das nicht gekauft. Er steht nicht auf."
  ],
  examples:[
    {de:"Ich habe keine Zeit und kein Geld.", en:"I have no time and no money."},
    {de:"Das Hotel ist nicht teuer.", en:"The hotel is not expensive."},
    {de:"Er isst kein Fleisch und er trinkt keinen Alkohol.", en:"He does not eat meat and he does not drink alcohol."},
    {de:"Warum kommst du nicht? – Ich kann heute nicht.", en:"Why are you not coming? – I cannot today."}
  ],
  trap:"A noun with ein (or no article) takes kein, not nicht: ‘Ich habe nicht ein Auto’ ✗ → ‘Ich habe kein Auto’ ✓; ‘Ich habe nicht Hunger’ ✗ → ‘Ich habe keinen Hunger’ ✓.",
  table:{head:["You negate …","Use","Example"],rows:[
    ["a noun with ein / no article","kein, keine, keinen","Ich habe keinen Hund. Wir haben keine Kinder."],
    ["the verb / whole sentence","nicht at the end","Ich verstehe das nicht."],
    ["an adjective","nicht before it","Der Film ist nicht gut."],
    ["a place or direction","nicht before it","Sie wohnt nicht in Köln."],
    ["a noun with der/die/das or mein","nicht before it","Das ist nicht mein Schlüssel."],
    ["a second verb part","nicht before it","Ich möchte nicht fernsehen."]]}
},
{
  id:"07", title:"Word order: statements and questions", tag:"verb in position 2; yes/no questions verb first",
  intuition:"German sentences are built around one fixed point: in a statement the conjugated verb is always the second element. The first element can be the subject, but also a time or a place – then the subject moves behind the verb. Questions change only the start: a yes/no question puts the verb first, a W-question puts the question word first and the verb second. So count: verb in position 2 (statement, W-question) or position 1 (yes/no question).",
  rule:[
    "Statement: subject + verb + rest: Ich gehe heute ins Kino.",
    "Something else first → the verb stays in position 2 and the subject follows the verb: Heute gehe ich ins Kino. Am Montag arbeitet er nicht.",
    "Yes/no question: verb first, then subject: Gehst du heute ins Kino? Hat sie Kinder?",
    "W-question: W-word + verb + subject: Wann gehst du ins Kino? Wo wohnt er?",
    "Second verb parts (infinitive, participle, separable prefix) go to the very end: Ich möchte heute ins Kino gehen. Ich bin gestern ins Kino gegangen."
  ],
  examples:[
    {de:"Ich fahre am Samstag nach München.", en:"I am going to Munich on Saturday."},
    {de:"Am Samstag fahre ich nach München.", en:"On Saturday I am going to Munich."},
    {de:"Arbeitet Ihr Mann auch im Krankenhaus?", en:"Does your husband also work at the hospital?"},
    {de:"Wo ist hier eine Apotheke?", en:"Where is a pharmacy around here?"}
  ],
  trap:"After a fronted time or place the subject must move behind the verb: ‘Heute ich arbeite nicht’ ✗ → ‘Heute arbeite ich nicht’ ✓. A yes/no question starts with the verb: ‘Du kommst morgen?’ ✗ → ‘Kommst du morgen?’ ✓.",
  table:{head:["Sentence type","Position 1","Verb","Rest"],rows:[
    ["statement","Ich","gehe","heute ins Kino."],
    ["statement, time first","Heute","gehe","ich ins Kino."],
    ["yes/no question","–","Gehst","du heute ins Kino?"],
    ["W-question","Wann","gehst","du ins Kino?"],
    ["with a modal","Ich","möchte","heute ins Kino gehen."]]}
},
{
  id:"08", title:"Question words", tag:"wer, was, wo, woher, wohin, wann, wie, wie viel, welche",
  intuition:"A W-question asks for one piece of information, and the W-word tells the listener which piece: a person (wer), a thing (was), a place (wo), a time (wann), a manner (wie), an amount (wie viel). German is more precise than English about places: wo is where you are, wohin is where you are going to, woher is where you come from. The W-word takes position 1 and the verb follows in position 2.",
  rule:[
    "wer? = who (person), was? = what (thing): Wer ist das? Was machst du?",
    "wo? = where (location), wohin? = where to (direction), woher? = where from (origin): Wo wohnst du? Wohin fährst du? Woher kommst du?",
    "wann? = when, wie? = how, warum? = why, wie lange? = how long: Wann beginnt der Kurs? Wie geht’s? Wie lange bleibst du?",
    "wie viel? + singular (money, time, uncountable things): Wie viel kostet das? – wie viele? + plural: Wie viele Kinder hast du?",
    "welcher / welche / welches = which, with the article ending (der/die/das): Welcher Bus fährt zum Bahnhof? Welche Farbe magst du? Welches Zimmer ist frei?"
  ],
  examples:[
    {de:"Woher kommen Sie? – Aus Italien. Und wo wohnen Sie jetzt?", en:"Where do you come from? – From Italy. And where do you live now?"},
    {de:"Wohin fährst du im Urlaub? – Nach Spanien.", en:"Where are you going on holiday? – To Spain."},
    {de:"Wie viel kostet ein Kilo Tomaten?", en:"How much does a kilo of tomatoes cost?"},
    {de:"Welche Straßenbahn fährt zum Krankenhaus?", en:"Which tram goes to the hospital?"}
  ],
  trap:"wo asks only where something is, not where it goes: ‘Wo gehst du?’ ✗ → ‘Wohin gehst du?’ ✓. With a plural noun use wie viele: ‘Wie viel Geschwister hast du?’ ✗ → ‘Wie viele Geschwister hast du?’ ✓.",
  table:{head:["W-word","Meaning","Example"],rows:[
    ["wer?","who","Wer ist das? – Das ist mein Chef."],
    ["was?","what","Was möchten Sie? – Einen Kaffee."],
    ["wo?","where (location)","Wo bist du? – Im Büro."],
    ["wohin?","where to","Wohin gehst du? – Zum Arzt."],
    ["woher?","where from","Woher kommst du? – Aus Polen."],
    ["wann?","when","Wann kommst du? – Um acht."],
    ["wie?","how","Wie geht’s? – Gut, danke."],
    ["wie lange?","how long","Wie lange dauert der Kurs? – Zwei Stunden."],
    ["wie viel? / wie viele?","how much / how many","Wie viel kostet das? / Wie viele Kinder hast du?"],
    ["warum?","why","Warum lernst du Deutsch?"],
    ["welcher / welche / welches?","which","Welcher Bus? Welche Straße? Welches Haus?"]]}
},
{
  id:"09", title:"Possessive articles", tag:"mein, dein, sein, ihr, unser, euer, Ihr",
  intuition:"A possessive article answers ‘whose?’ and works exactly like ein/kein: it stands before the noun and takes the same endings. Two things must match: first the owner (mein for ich, sein for er, ihr for sie …), then the gender and case of the noun that follows (mein Bruder, meine Schwester, meinen Bruder). The owner chooses the word, the noun chooses the ending. Watch especially sein (his/its) and ihr (her/their).",
  rule:[
    "Owner → possessive: ich → mein, du → dein, er/es → sein, sie (she) → ihr, wir → unser, ihr (you pl.) → euer, sie (they) → ihr, Sie → Ihr (capital I).",
    "Endings like ein/kein: masculine and neuter no ending (mein Bruder, mein Kind), feminine and plural -e (meine Schwester, meine Eltern).",
    "Masculine accusative -en: Ich besuche meinen Bruder. Kennst du seinen Vater?",
    "euer loses its second e when it takes an ending: euer Haus, but eure Wohnung, euren Garten.",
    "sein = his / its (owner is er/es), ihr = her or their (owner is sie): Peter und sein Auto. Anna und ihr Auto. Die Kinder und ihre Mutter."
  ],
  examples:[
    {de:"Das ist meine Frau und das sind unsere Kinder.", en:"This is my wife and these are our children."},
    {de:"Ist das dein Schlüssel? – Nein, mein Schlüssel ist hier.", en:"Is that your key? – No, my key is here."},
    {de:"Anna besucht ihren Bruder und Tim besucht seine Schwester.", en:"Anna visits her brother and Tim visits his sister."},
    {de:"Wie ist Ihre Telefonnummer, Frau Müller?", en:"What is your phone number, Mrs Müller?"}
  ],
  trap:"The ending follows the noun, not the owner: ‘Das ist mein Mutter’ ✗ → ‘Das ist meine Mutter’ ✓. And sein is only for a male owner: ‘Maria und sein Mann’ ✗ → ‘Maria und ihr Mann’ ✓.",
  table:{head:["Owner","der Bruder (Nom.)","den Bruder (Akk.)","die Schwester","das Kind","die Eltern (Pl.)"],rows:[
    ["ich","mein","meinen","meine","mein","meine"],
    ["du","dein","deinen","deine","dein","deine"],
    ["er / es","sein","seinen","seine","sein","seine"],
    ["sie (she)","ihr","ihren","ihre","ihr","ihre"],
    ["wir","unser","unseren","unsere","unser","unsere"],
    ["ihr (you pl.)","euer","euren","eure","euer","eure"],
    ["sie (they) / Sie","ihr / Ihr","ihren / Ihren","ihre / Ihre","ihr / Ihr","ihre / Ihre"]]}
},
{
  id:"10", title:"Modal verbs and möchte", tag:"können, müssen, wollen, dürfen, möchte",
  intuition:"Modal verbs add an attitude to an action: can (ability or possibility), must (necessity), want (wish), may (permission), would like (polite wish). They build a frame: the modal is conjugated in position 2, the main verb waits at the end as an infinitive. Modals are irregular in the singular (ich kann, du kannst, er kann – no umlaut, and ich/er have no ending) but regular in the plural.",
  rule:[
    "Frame: modal (position 2) + … + infinitive at the end: Ich muss heute lange arbeiten. Kannst du mir helfen?",
    "Singular forms change the vowel and ich / er have no ending: ich kann, du kannst, er kann · ich muss, du musst, er muss · ich will, du willst, er will · ich darf, du darfst, er darf.",
    "möchte is already polite: ich möchte, du möchtest, er möchte, wir möchten – Ich möchte einen Kaffee. Wir möchten zahlen, bitte.",
    "Meanings: können = can / know how to, müssen = must / have to, wollen = want to (strong wish), dürfen = may / be allowed to, möchte = would like.",
    "The infinitive can be dropped when it is obvious: Ich kann Deutsch. Ich möchte ein Bier. Er muss nach Hause."
  ],
  examples:[
    {de:"Ich kann heute nicht kommen, ich muss arbeiten.", en:"I cannot come today, I have to work."},
    {de:"Darf ich hier rauchen? – Nein, hier dürfen Sie nicht rauchen.", en:"May I smoke here? – No, you may not smoke here."},
    {de:"Was möchtest du trinken? – Ich möchte ein Wasser.", en:"What would you like to drink? – I would like a water."},
    {de:"Die Kinder wollen am Samstag ins Schwimmbad gehen.", en:"The children want to go to the swimming pool on Saturday."}
  ],
  trap:"ich and er/sie/es take no ending with a modal, and the second verb is an infinitive at the end: ‘Er kannt kommen’ ✗ → ‘Er kann kommen’ ✓; ‘Ich muss gehe jetzt’ ✗ → ‘Ich muss jetzt gehen’ ✓.",
  table:{head:["","können","müssen","wollen","dürfen","möchte"],rows:[
    ["ich","kann","muss","will","darf","möchte"],
    ["du","kannst","musst","willst","darfst","möchtest"],
    ["er / sie / es","kann","muss","will","darf","möchte"],
    ["wir","können","müssen","wollen","dürfen","möchten"],
    ["ihr","könnt","müsst","wollt","dürft","möchtet"],
    ["sie / Sie","können","müssen","wollen","dürfen","möchten"]]}
},
{
  id:"11", title:"Separable verbs", tag:"aufstehen → ich stehe … auf, einkaufen, anrufen, fernsehen",
  intuition:"Many German verbs are built from a prefix and a base: auf + stehen = aufstehen (get up), ein + kaufen = einkaufen (go shopping). In the dictionary they are one word, but in a normal sentence they split: the base is conjugated in position 2 and the prefix jumps to the very end. Think of the prefix as the closing bracket of the sentence. Only when the verb stays in the infinitive (after a modal) does it stay in one piece.",
  rule:[
    "Main clause: conjugated base in position 2, prefix at the end: Ich stehe um sieben Uhr auf. Wir kaufen am Samstag ein.",
    "Same in questions: Stehst du früh auf? Wann rufst du mich an?",
    "With a modal the infinitive stays together at the end: Ich muss um sechs aufstehen. Kannst du mich morgen anrufen?",
    "Common separable verbs: aufstehen, einkaufen, anrufen, fernsehen, anfangen, aufhören, mitkommen, abholen, aufmachen, zumachen, ankommen, einladen.",
    "The stress is on the prefix: AUFstehen, EINkaufen. The prefixes be-, ver-, er- are never separable: ich besuche, ich verstehe."
  ],
  examples:[
    {de:"Ich stehe jeden Tag um halb sieben auf.", en:"I get up every day at half past six."},
    {de:"Am Abend sehen wir fern.", en:"In the evening we watch TV."},
    {de:"Rufst du deine Mutter an? – Ja, ich rufe sie heute an.", en:"Are you calling your mother? – Yes, I am calling her today."},
    {de:"Ich muss noch einkaufen – kommst du mit?", en:"I still have to go shopping – are you coming along?"}
  ],
  trap:"Do not keep the prefix on the verb in a main clause: ‘Ich aufstehe um sieben’ ✗ → ‘Ich stehe um sieben auf’ ✓. But after a modal keep it in one piece: ‘Ich muss um sieben stehen auf’ ✗ → ‘Ich muss um sieben aufstehen’ ✓.",
  table:{head:["Verb","Meaning","Example (prefix at the end)"],rows:[
    ["aufstehen","to get up","Er steht um acht Uhr auf."],
    ["einkaufen","to go shopping","Wir kaufen im Supermarkt ein."],
    ["anrufen","to call (phone)","Ich rufe dich morgen an."],
    ["fernsehen","to watch TV","Die Kinder sehen abends fern."],
    ["anfangen","to start","Der Kurs fängt um neun Uhr an."],
    ["mitkommen","to come along","Kommst du mit?"],
    ["abholen","to pick up","Ich hole dich vom Bahnhof ab."],
    ["aufmachen / zumachen","to open / to close","Mach bitte das Fenster zu!"]]}
},
{
  id:"12", title:"Imperative", tag:"Komm! Kommt! Kommen Sie!",
  intuition:"The imperative is for telling someone what to do: an instruction, a request or advice. German has three forms because German has three words for ‘you’: du (one friend), ihr (several friends) and Sie (polite). The du-form is the shortest: the verb without its ending and without du. The Sie-form is the easiest: it looks like a question with the verb first (Kommen Sie!). Add bitte to make any of them polite.",
  rule:[
    "du: the du-form without -st and without the pronoun: du kommst → Komm! du machst → Mach! du wartest → Warte!",
    "Vowel-changing verbs keep e → i / ie but lose the umlaut: du nimmst → Nimm! du liest → Lies! du sprichst → Sprich! but du fährst → Fahr! du schläfst → Schlaf!",
    "ihr: the normal ihr-form without the pronoun: Kommt! Macht! Nehmt! Wartet! – Sie: infinitive + Sie: Kommen Sie! Nehmen Sie Platz! Warten Sie bitte!",
    "Separable verbs: prefix at the end: Mach das Fenster zu! Steht auf! Rufen Sie mich an!",
    "Irregular: sein → Sei ruhig! Seid leise! Seien Sie bitte pünktlich! – haben → Hab keine Angst! Habt Geduld! Haben Sie Geduld!"
  ],
  examples:[
    {de:"Komm bitte schnell, das Essen ist fertig!", en:"Come quickly please, the food is ready!"},
    {de:"Nehmen Sie bitte zwei Tabletten am Tag.", en:"Please take two tablets a day."},
    {de:"Kinder, macht die Bücher auf und lest den Text!", en:"Children, open your books and read the text!"},
    {de:"Fahr nicht so schnell und sei vorsichtig!", en:"Do not drive so fast and be careful!"}
  ],
  trap:"The du-imperative has no -st and no du: ‘Kommst!’ ✗ / ‘Du komm!’ ✗ → ‘Komm!’ ✓. The e → i change stays, the umlaut goes: ‘Nehm!’ ✗ → ‘Nimm!’ ✓; ‘Schläf!’ ✗ → ‘Schlaf!’ ✓.",
  table:{head:["Verb","du","ihr","Sie"],rows:[
    ["kommen","Komm!","Kommt!","Kommen Sie!"],
    ["warten","Warte!","Wartet!","Warten Sie!"],
    ["nehmen","Nimm!","Nehmt!","Nehmen Sie!"],
    ["lesen","Lies!","Lest!","Lesen Sie!"],
    ["sprechen","Sprich!","Sprecht!","Sprechen Sie!"],
    ["fahren","Fahr!","Fahrt!","Fahren Sie!"],
    ["sein","Sei!","Seid!","Seien Sie!"],
    ["haben","Hab!","Habt!","Haben Sie!"],
    ["aufmachen","Mach … auf!","Macht … auf!","Machen Sie … auf!"]]}
},
{
  id:"13", title:"Perfekt with haben", tag:"habe gemacht, gekauft, gegessen, getrunken, gelernt",
  intuition:"When you talk about yesterday, last week or your holiday, you use the Perfekt – the spoken past tense in German. It has two parts: haben in position 2 (conjugated as usual) and the participle (Partizip II) parked at the end of the sentence. Most verbs use haben. The participle is the only new form you need: regular verbs get ge-…-t, irregular verbs get ge-…-en, often with a changed vowel.",
  rule:[
    "Frame: haben (position 2) + … + Partizip II at the end: Ich habe gestern Pizza gegessen. Was hast du am Wochenende gemacht?",
    "Regular: ge- + stem + -t: machen → gemacht, kaufen → gekauft, lernen → gelernt; stems in -t/-d take -et: arbeiten → gearbeitet.",
    "Irregular: ge- + (changed) stem + -en: essen → gegessen, trinken → getrunken, sehen → gesehen, schreiben → geschrieben, lesen → gelesen, nehmen → genommen.",
    "No ge- for verbs in -ieren and for the inseparable prefixes be-, ver-, er-: studieren → studiert, telefonieren → telefoniert, besuchen → besucht, verstehen → verstanden.",
    "Separable verbs put ge in the middle: einkaufen → eingekauft, anrufen → angerufen, fernsehen → ferngesehen."
  ],
  examples:[
    {de:"Ich habe gestern Deutsch gelernt.", en:"I learned German yesterday."},
    {de:"Was habt ihr am Sonntag gemacht? – Wir haben Freunde besucht.", en:"What did you do on Sunday? – We visited friends."},
    {de:"Er hat im Supermarkt Brot und Käse gekauft.", en:"He bought bread and cheese at the supermarket."},
    {de:"Hast du schon gegessen? – Ja, und ich habe einen Kaffee getrunken.", en:"Have you eaten already? – Yes, and I drank a coffee."}
  ],
  trap:"The participle goes to the end and is not the infinitive: ‘Ich habe gekauft ein Brot’ ✗ → ‘Ich habe ein Brot gekauft’ ✓; ‘Ich habe gestern essen’ ✗ → ‘Ich habe gestern gegessen’ ✓. No ge- with -ieren: ‘gestudiert’ ✗ → ‘studiert’ ✓.",
  table:{head:["Infinitive","Partizip II","Pattern"],rows:[
    ["machen","gemacht","ge-…-t (regular)"],
    ["kaufen","gekauft","ge-…-t (regular)"],
    ["arbeiten","gearbeitet","ge-…-et (stem in -t)"],
    ["essen","gegessen","ge-…-en (irregular)"],
    ["trinken","getrunken","ge-…-en, vowel change"],
    ["sehen","gesehen","ge-…-en (irregular)"],
    ["schreiben","geschrieben","ge-…-en, vowel change"],
    ["studieren","studiert","no ge- (-ieren)"],
    ["besuchen","besucht","no ge- (be-)"],
    ["einkaufen","eingekauft","separable: ge in the middle"],
    ["anrufen","angerufen","separable: ge in the middle"]]}
},
{
  id:"14", title:"Perfekt with sein; war and hatte", tag:"bin gefahren, gegangen, geblieben; ich war, ich hatte",
  intuition:"A few verbs build their Perfekt with sein instead of haben: verbs where somebody moves from one place to another (gehen, fahren, kommen, fliegen) or changes state (aufstehen, einschlafen), plus bleiben and sein themselves. The frame is the same: sein in position 2, participle at the end. For ‘was’ and ‘had’, Germans do not use the Perfekt at all – they use the short simple past war and hatte, even in speech.",
  rule:[
    "sein + Partizip II for movement from A to B: gehen → ist gegangen, fahren → ist gefahren, kommen → ist gekommen, fliegen → ist geflogen, laufen → ist gelaufen.",
    "sein also for a change of state and for bleiben / sein: aufstehen → ist aufgestanden, einschlafen → ist eingeschlafen, bleiben → ist geblieben, sein → ist gewesen (usually replaced by war).",
    "All other verbs take haben: Ich habe gearbeitet, gegessen, geschlafen (sleeping is not movement!).",
    "war (was / were): ich war, du warst, er war, wir waren, ihr wart, sie waren – Ich war gestern im Kino. Wo warst du?",
    "hatte (had): ich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten – Ich hatte keine Zeit. Wir hatten viel Spaß."
  ],
  examples:[
    {de:"Ich bin am Wochenende nach Hamburg gefahren.", en:"I went to Hamburg at the weekend."},
    {de:"Wann bist du heute aufgestanden? – Um sechs, und dann bin ich zur Arbeit gegangen.", en:"When did you get up today? – At six, and then I went to work."},
    {de:"Wir sind drei Tage in Wien geblieben.", en:"We stayed in Vienna for three days."},
    {de:"Gestern war ich krank und hatte Fieber.", en:"Yesterday I was ill and had a fever."}
  ],
  trap:"Movement verbs take sein, not haben: ‘Ich habe nach Berlin gefahren’ ✗ → ‘Ich bin nach Berlin gefahren’ ✓. For ‘was / had’ use the short forms: ‘Ich habe gestern keine Zeit gehabt’ ✗ (clumsy) → ‘Ich hatte gestern keine Zeit’ ✓.",
  table:{head:["","sein → war","haben → hatte","Perfekt with sein"],rows:[
    ["ich","war","hatte","bin gegangen"],
    ["du","warst","hattest","bist gefahren"],
    ["er / sie / es","war","hatte","ist gekommen"],
    ["wir","waren","hatten","sind geblieben"],
    ["ihr","wart","hattet","seid aufgestanden"],
    ["sie / Sie","waren","hatten","sind geflogen"]]}
},
{
  id:"15", title:"Dative: pronouns and articles", tag:"mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen; dem/der/den",
  intuition:"The dative is the case of the receiver: the person something is given to, happens to, belongs to or is pleasant for. English often says ‘to me / for me’; German puts it into the pronoun (mir, dir, ihm, ihr …) or the article (dem, der, den). At A1 you meet the dative mainly after a handful of verbs (gefallen, helfen, schmecken, gehören, danken, gratulieren) and in Wie geht es dir?. Learn these verbs as ‘dative verbs’ and the forms will follow.",
  rule:[
    "Dative pronouns: mir, dir, ihm (er), ihr (sie), ihm (es), uns, euch, ihnen (they), Ihnen (polite you): Wie geht es Ihnen? Das gefällt mir.",
    "Dative verbs: gefallen (to please), helfen, schmecken (to taste good), gehören (to belong to), danken, gratulieren, passen (to fit): Die Suppe schmeckt mir. Ich helfe dir. Das Auto gehört ihm.",
    "Dative articles: dem (m), der (f), dem (n), den + -n (plural): Ich helfe dem Mann, der Frau, dem Kind, den Kindern. ein → einem / einer / einem; mein → meinem / meiner / meinem / meinen.",
    "With gefallen and schmecken the thing is the subject and the person is in the dative: Der Film gefällt mir (literally ‘the film pleases me’). Die Pizza schmeckt den Kindern.",
    "Wie geht es dir / Ihnen? – Mir geht es gut, danke. Und dir?"
  ],
  examples:[
    {de:"Wie geht es dir? – Danke, mir geht es gut.", en:"How are you? – Thanks, I am fine."},
    {de:"Die Wohnung gefällt uns sehr.", en:"We like the flat a lot."},
    {de:"Kannst du mir bitte helfen? – Ja, ich helfe dir gern.", en:"Can you help me, please? – Yes, I will gladly help you."},
    {de:"Das Fahrrad gehört meinem Bruder.", en:"The bicycle belongs to my brother."}
  ],
  trap:"Dative verbs do not take the accusative: ‘Ich helfe dich’ ✗ → ‘Ich helfe dir’ ✓; ‘Das gefällt mich’ ✗ → ‘Das gefällt mir’ ✓; ‘Wie geht es du?’ ✗ → ‘Wie geht es dir?’ ✓.",
  table:{head:["","Nominativ","Akkusativ","Dativ"],rows:[
    ["I","ich","mich","mir"],
    ["you (one friend)","du","dich","dir"],
    ["he","er","ihn","ihm"],
    ["she","sie","sie","ihr"],
    ["it","es","es","ihm"],
    ["we","wir","uns","uns"],
    ["you (several friends)","ihr","euch","euch"],
    ["they","sie","sie","ihnen"],
    ["you (polite)","Sie","Sie","Ihnen"],
    ["the man (m)","der Mann","den Mann","dem Mann"],
    ["the woman (f)","die Frau","die Frau","der Frau"],
    ["the child (n)","das Kind","das Kind","dem Kind"],
    ["the children (Pl.)","die Kinder","die Kinder","den Kindern"]]}
},
{
  id:"16", title:"Prepositions of time", tag:"am Montag, um 8 Uhr, im Mai, von … bis, nach, vor, seit",
  intuition:"To say when something happens, German chooses the preposition by the kind of time unit: am for days and parts of the day (am Montag, am Morgen), um for clock times (um 8 Uhr), im for months and seasons (im Mai, im Sommer). von … bis marks a stretch, vor and nach say before and after, and seit says since when something has been going on – with the present tense. All of them except um take the dative.",
  rule:[
    "am + day / part of the day / date: am Montag, am Wochenende, am Morgen, am Abend, am 3. Mai. (Exception: in der Nacht.)",
    "um + clock time: um 8 Uhr, um halb neun. Approximately: gegen 8 Uhr.",
    "im + month / season: im Januar, im Sommer. Years stand alone, without preposition: Ich bin 1995 geboren.",
    "von … bis (from … to): von Montag bis Freitag, von 9 bis 17 Uhr. vor / nach + Dativ: vor dem Essen, nach der Arbeit, nach dem Kurs.",
    "seit + Dativ + present tense for something that started in the past and is still true: Ich wohne seit einem Jahr in Berlin. Ich lerne seit drei Monaten Deutsch."
  ],
  examples:[
    {de:"Der Deutschkurs ist am Dienstag und am Donnerstag um 18 Uhr.", en:"The German course is on Tuesday and Thursday at 6 pm."},
    {de:"Im Sommer fahren wir ans Meer.", en:"In summer we go to the seaside."},
    {de:"Ich arbeite von Montag bis Freitag. Nach der Arbeit gehe ich ins Fitnessstudio.", en:"I work from Monday to Friday. After work I go to the gym."},
    {de:"Seit zwei Jahren wohne ich in Deutschland.", en:"I have been living in Germany for two years."}
  ],
  trap:"Do not translate ‘on Monday / at 8’ word for word: ‘in Montag’ ✗ → ‘am Montag’ ✓; ‘am 8 Uhr’ ✗ → ‘um 8 Uhr’ ✓. seit goes with the present tense: ‘Ich habe seit 2020 hier gewohnt’ ✗ → ‘Ich wohne seit 2020 hier’ ✓.",
  table:{head:["Preposition","Used for","Example"],rows:[
    ["am","days, parts of the day, dates","am Freitag, am Nachmittag, am 1. Mai"],
    ["um","clock times","um 7 Uhr, um Viertel vor acht"],
    ["im","months, seasons","im Dezember, im Winter"],
    ["von … bis","a stretch of time","von 8 bis 12 Uhr, von Mai bis Juli"],
    ["vor + Dativ","before / … ago","vor dem Frühstück, vor einer Woche"],
    ["nach + Dativ","after","nach dem Unterricht, nach zwei Stunden"],
    ["seit + Dativ","since / for (still going on)","seit einem Monat, seit 2019"],
    ["in + Dativ","in … (from now)","in zehn Minuten, in einer Woche"],
    ["– (no preposition)","years","Ich bin 2001 geboren."]]}
},
{
  id:"17", title:"Prepositions of place", tag:"in, an, auf (wo?), nach/zu (wohin?), aus/von (woher?)",
  intuition:"German asks three different questions about place, and each has its own prepositions: wo? (where – location), wohin? (where to – direction), woher? (where from – origin). For location you mostly use in, an and auf with the dative (im Büro, am Bahnhof, auf dem Markt). For direction the choice depends on the goal: nach for cities and countries, zu for people, shops and institutions, in for going inside a building. For origin: aus (from a country, city or building) and von (from a person, a place or an activity).",
  rule:[
    "wo? + Dativ: in + dem = im (im Büro, im Supermarkt), an + dem = am (am Bahnhof, am Fenster), auf dem Markt, in der Schule, in der Stadt.",
    "wohin? nach + city / country without article and nach Hause: nach Berlin, nach Italien. zu + person / shop / institution: zum Arzt (zu dem), zur Schule (zu der), zu Maria. in + Akkusativ for going inside: ins Kino, in die Stadt, in den Supermarkt.",
    "woher? aus + country / city / building: aus der Türkei, aus Berlin, aus dem Haus. von + person / place / activity: von der Arbeit, vom Arzt, von Lisa.",
    "bei + Dativ = at someone’s place or at a company: bei Anna, bei meinen Eltern, bei Siemens. mit + Dativ for transport: mit dem Bus, mit dem Auto, mit der U-Bahn. zu Fuß = on foot.",
    "Short forms: in dem = im, an dem = am, zu dem = zum, zu der = zur, in das = ins, bei dem = beim, von dem = vom."
  ],
  examples:[
    {de:"Ich arbeite im Krankenhaus, mein Mann arbeitet bei der Post.", en:"I work at the hospital, my husband works at the post office."},
    {de:"Morgen fahre ich mit dem Zug nach Köln.", en:"Tomorrow I am going to Cologne by train."},
    {de:"Ich muss heute zum Arzt und dann zur Apotheke.", en:"I have to go to the doctor today and then to the pharmacy."},
    {de:"Woher kommst du? – Aus Polen. Aber jetzt komme ich gerade von der Arbeit.", en:"Where are you from? – From Poland. But right now I am coming from work."}
  ],
  trap:"nach is only for cities, countries and nach Hause; for people and places use zu: ‘Ich gehe nach Arzt’ ✗ → ‘Ich gehe zum Arzt’ ✓. Location inside a building needs im / am: ‘Ich bin in Büro’ ✗ → ‘Ich bin im Büro’ ✓.",
  table:{head:["Question","Preposition","Example"],rows:[
    ["wo? (where)","in + Dativ (im, in der)","Ich bin im Büro. Sie ist in der Küche."],
    ["wo?","an + Dativ (am, an der)","Wir warten am Bahnhof."],
    ["wo?","auf + Dativ","Das Buch liegt auf dem Tisch."],
    ["wo?","bei + Dativ (people, companies)","Ich bin bei meinen Eltern. Er arbeitet bei BMW."],
    ["wohin? (where to)","nach (cities, countries, Hause)","Wir fliegen nach Spanien. Ich gehe nach Hause."],
    ["wohin?","zu + Dativ (zum, zur: people, places)","Ich gehe zum Arzt, zur Bank, zu Lisa."],
    ["wohin?","in + Akkusativ (ins, in die, in den)","Gehen wir ins Kino? Ich gehe in die Stadt."],
    ["woher? (where from)","aus + Dativ","Ich komme aus Syrien, aus dem Supermarkt."],
    ["woher?","von + Dativ (vom)","Ich komme von der Arbeit, vom Arzt."],
    ["wie? (how)","mit + Dativ (transport)","Ich fahre mit dem Bus, mit der Bahn."]]}
},
{
  id:"18", title:"Numbers, time and dates", tag:"halb drei, Viertel nach, am 3. Mai, der erste",
  intuition:"Clock times come in two styles: the formal one you hear at the station and on the radio (acht Uhr fünfzehn, 24-hour clock) and the informal one used in conversation (Viertel nach acht, 12-hour clock). The one real surprise is halb: halb neun means half an hour on the way to nine, i.e. 8.30 – not 9.30. Dates use ordinal numbers (erste, zweite, dritte …) with the article: der dritte Mai, am dritten Mai. Prices are said with Euro in the middle: 3,50 € = drei Euro fünfzig.",
  rule:[
    "Asking the time: Wie spät ist es? / Wie viel Uhr ist es? – Es ist acht Uhr. Asking about an event: Wann? / Um wie viel Uhr? – Um acht.",
    "Formal: hour + Uhr + minutes, 24-hour clock: 8.15 = acht Uhr fünfzehn, 20.45 = zwanzig Uhr fünfundvierzig.",
    "Informal: Viertel nach acht (8.15), halb neun (8.30 – halfway to nine!), Viertel vor neun (8.45), fünf nach acht (8.05), zehn vor neun (8.50).",
    "Ordinal numbers: 1.–19. add -te (erste, zweite, dritte, vierte, siebte, zehnte, neunzehnte), from 20. add -ste (zwanzigste, einunddreißigste). Dates: Heute ist der 3. Mai (der dritte Mai). Am 3. Mai (am dritten Mai). Wann hast du Geburtstag? – Am zwölften Juni.",
    "Years have no preposition: 1999 = neunzehnhundertneunundneunzig, 2024 = zweitausendvierundzwanzig. Prices: 2,99 € = zwei Euro neunundneunzig, 0,50 € = fünfzig Cent."
  ],
  examples:[
    {de:"Wie spät ist es? – Es ist Viertel vor zehn.", en:"What time is it? – It is a quarter to ten."},
    {de:"Der Zug fährt um 14.30 Uhr (vierzehn Uhr dreißig) ab.", en:"The train leaves at 14:30."},
    {de:"Mein Geburtstag ist am 21. März (am einundzwanzigsten März).", en:"My birthday is on 21 March."},
    {de:"Was kostet das Brot? – 2,80 € (zwei Euro achtzig).", en:"How much is the bread? – 2.80 euros."}
  ],
  trap:"halb points to the coming hour: ‘halb drei’ = 2.30, not 3.30 ✗. Dates need the ordinal ending: ‘am drei Mai’ ✗ → ‘am dritten Mai’ ✓; ‘der eins Januar’ ✗ → ‘der erste Januar’ ✓.",
  table:{head:["Clock","Formal (Es ist …)","Informal (Es ist …)"],rows:[
    ["8.00","acht Uhr","acht"],
    ["8.05","acht Uhr fünf","fünf nach acht"],
    ["8.15","acht Uhr fünfzehn","Viertel nach acht"],
    ["8.30","acht Uhr dreißig","halb neun"],
    ["8.45","acht Uhr fünfundvierzig","Viertel vor neun"],
    ["8.50","acht Uhr fünfzig","zehn vor neun"],
    ["12.00","zwölf Uhr","zwölf (Mittag)"],
    ["20.00","zwanzig Uhr","acht (abends)"]]}
},
{
  id:"19", title:"Connectors and doch", tag:"und, oder, aber, denn; ja / nein / doch",
  intuition:"und, oder, aber and denn join two complete sentences without changing anything: both halves keep their normal order with the verb in position 2. Think of them as sitting in ‘position 0’, outside the sentence. denn gives a reason (because), aber a contrast (but). doch has a special job as an answer: when someone asks a negative question (Hast du keine Zeit?), ja would be confusing, so German answers doch to say ‘yes, I do’.",
  rule:[
    "und (and), oder (or), aber (but), denn (because) stand in position 0; the word order after them is normal: Ich bleibe zu Hause, denn ich bin krank.",
    "There is a comma before aber and denn: Das Hotel ist schön, aber teuer. Ich lerne Deutsch, denn ich wohne in Berlin.",
    "If the subject is the same, you can leave it out after und / oder: Ich koche und esse. Gehst du oder bleibst du?",
    "Answers: Kommst du? – Ja. / Nein. Negative question: Kommst du nicht? – Doch! (yes, I am coming) / Nein. (no, I am not).",
    "auch (also) and nicht (not) stand after the verb: Ich komme auch. Ich komme nicht. Ich komme auch nicht."
  ],
  examples:[
    {de:"Ich trinke Kaffee, aber mein Mann trinkt lieber Tee.", en:"I drink coffee, but my husband prefers tea."},
    {de:"Wir gehen heute nicht spazieren, denn es regnet.", en:"We are not going for a walk today, because it is raining."},
    {de:"Möchtest du Wasser oder Saft? – Wasser, bitte.", en:"Would you like water or juice? – Water, please."},
    {de:"Hast du keinen Hunger? – Doch, ich habe großen Hunger!", en:"Are you not hungry? – Yes, I am very hungry!"}
  ],
  trap:"After denn the verb stays in position 2 – do not push it to the end: ‘…, denn ich krank bin’ ✗ → ‘…, denn ich bin krank’ ✓. Answer a negative question with doch, not ja: ‘Kommst du nicht? – Ja!’ ✗ (unclear) → ‘Doch!’ ✓.",
  table:{head:["Word","Meaning","Example"],rows:[
    ["und","and","Ich arbeite und er kocht."],
    ["oder","or","Kommst du heute oder morgen?"],
    ["aber","but","Das Hotel ist schön, aber teuer."],
    ["denn","because (gives a reason)","Ich lerne Deutsch, denn ich wohne in Berlin."],
    ["ja","yes (to a positive question)","Hast du Zeit? – Ja."],
    ["nein","no","Hast du Zeit? – Nein."],
    ["doch","yes! (to a negative question)","Hast du keine Zeit? – Doch!"],
    ["auch","also, too","Ich komme auch."]]}
},
{
  id:"20", title:"gern, lieber, sehr, viel and es gibt", tag:"Ich trinke gern Tee. Es gibt einen Park.",
  intuition:"To say what you like doing, German does not need a verb ‘to like’: it simply adds gern after the verb – Ich trinke gern Tee (I like drinking tea). To compare, gern becomes lieber (preferably) and am liebsten (most of all). sehr strengthens adjectives and verbs (sehr gut, Ich mag das sehr), viel means ‘a lot’ and viele ‘many’. And ‘there is / there are’ is always es gibt, in the singular, with the accusative.",
  rule:[
    "gern (like to) after the verb; nicht gern = do not like to: Ich koche gern. Er fährt nicht gern Auto.",
    "lieber (prefer to), am liebsten (like best of all): Ich trinke lieber Kaffee. Am liebsten esse ich Pizza.",
    "sehr (very / very much) before adjectives and with verbs; adjectives after sein / finden have no ending: Das Essen ist sehr gut. Die Wohnung ist klein. Ich mag meine Arbeit sehr.",
    "viel (much, a lot) with uncountable things and verbs, viele (many) with plural nouns: Ich habe viel Arbeit. Ich arbeite viel. Ich habe viele Freunde.",
    "es gibt + Akkusativ (there is / there are, always es gibt): Es gibt einen Park. Es gibt keinen Bus. Gibt es hier ein Café?"
  ],
  examples:[
    {de:"Ich spiele gern Fußball, aber ich schwimme lieber.", en:"I like playing football, but I prefer swimming."},
    {de:"Am liebsten esse ich Schokolade.", en:"I like eating chocolate best of all."},
    {de:"Die Wohnung ist sehr schön und hat viele Zimmer.", en:"The flat is very nice and has many rooms."},
    {de:"Gibt es hier einen Supermarkt? – Ja, es gibt einen am Bahnhof.", en:"Is there a supermarket here? – Yes, there is one at the station."}
  ],
  trap:"gern is not a verb: ‘Ich gern Tee’ ✗ → ‘Ich trinke gern Tee’ ✓. es gibt takes the accusative and stays singular: ‘Es gibt ein Park’ ✗ → ‘Es gibt einen Park’ ✓; ‘Es geben viele Cafés’ ✗ → ‘Es gibt viele Cafés’ ✓.",
  table:{head:["Word","Meaning","Example"],rows:[
    ["gern","like to (after the verb)","Ich lese gern."],
    ["nicht gern","do not like to","Ich stehe nicht gern früh auf."],
    ["lieber","prefer to","Ich fahre lieber mit dem Rad."],
    ["am liebsten","like best of all","Am liebsten schlafe ich lange."],
    ["sehr","very, very much","Der Kaffee ist sehr heiß. Ich mag dich sehr."],
    ["viel","much, a lot","Er arbeitet viel. Ich habe viel Zeit."],
    ["viele","many (+ plural noun)","Wir haben viele Bücher."],
    ["es gibt + Akk.","there is / there are","Es gibt hier keinen Bahnhof."]]}
}
];
