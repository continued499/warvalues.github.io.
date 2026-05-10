const questions = [
  {
    war: "Second Boer War",
    year: 1900,
    summary: "The Second Boer War was fought between the British Empire and two independent Boer republics, the South African Republic and the Orange Free State, over British attempts to dominate southern Africa and control its gold and diamond resources. The Boers sought to maintain their independence while Britain aimed to incorporate the republics into its empire. Britain ultimately won, annexing both republics, though the war was marked by guerrilla warfare and British concentration camps that caused widespread Boer civilian deaths.",
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Boers", scores: { leftRight: 1, imperialism: -2, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Boxer Rebellion",
    year: 1900,
    summary: "The Boxer Rebellion was an anti-foreign, anti-colonial uprising in China led by the Boxer movement, who sought to expel foreign influence and Christian missionaries from China. The Eight-Nation Alliance of Western powers and Japan intervened militarily to relieve their besieged legations in Beijing. The alliance defeated the Boxers and the Qing government, imposing the humiliating Boxer Protocol which forced China to pay massive reparations and allow foreign troops on Chinese soil.",
    sides: {
      A: { name: "Eight-Nation Alliance", scores: { leftRight: 1, imperialism: 2, revolutionary: -2, nationalist: 0, interventionist: 2 } },
      B: { name: "Qing China & Boxers", scores: { leftRight: 0, imperialism: -2, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Anglo-Aro War",
    year: 1901,
    summary: "The Anglo-Aro War was fought between the British Empire and the Aro Confederacy, a powerful trading network in present-day southeastern Nigeria. Britain sought to dismantle the Aro long juju oracle system which controlled regional trade and to open the area to British commerce and administration. Britain won decisively, destroying the Aro Confederacy and incorporating the region into the British protectorate of Southern Nigeria.",
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Aro Confederacy", scores: { leftRight: 0, imperialism: -2, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "British Expedition to Tibet",
    year: 1903,
    summary: "The British Expedition to Tibet was a military mission launched by British India under Colonel Francis Younghusband, motivated by British fears of growing Russian influence in Tibet and a desire to establish trade relations. Tibet sought to maintain its traditional isolation and autonomy from foreign powers. The expedition reached Lhasa and forced Tibet to sign the Lhasa Convention, opening trade and establishing British influence in the region.",
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: -1, interventionist: 2 } },
      B: { name: "Tibet", scores: { leftRight: -1, imperialism: -2, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Russo-Japanese War",
    year: 1904,
    summary: "The Russo-Japanese War was fought between the Russian Empire and Japan over competing imperial ambitions in Manchuria and Korea. Russia sought warm-water ports and expansion into East Asia, while Japan sought to establish dominance over Korea and prevent Russian encroachment on its sphere of influence. Japan won a decisive victory, becoming the first Asian power to defeat a major European nation in modern times, and gained control over Korea and parts of Manchuria.",
    sides: {
      A: { name: "Tsarist Russia", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 0, interventionist: 1 } },
      B: { name: "Japan", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 1, interventionist: 1 } }
    }
  },
  {
    war: "Madagascar War",
    year: 1904,
    summary: "The Madagascar War refers to the French suppression of the Menalamba uprising, a resistance movement against French colonial rule established after France annexed Madagascar in 1896. The Malagasy fighters sought to restore the Merina monarchy and expel the French, while France sought to consolidate its colonial administration. France suppressed the rebellion, maintaining its colonial control over the island.",
    sides: {
      A: { name: "France", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: -1, interventionist: 2 } },
      B: { name: "Madagascar", scores: { leftRight: -1, imperialism: -2, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Italo-Turkish War",
    year: 1911,
    summary: "The Italo-Turkish War was fought between Italy and the Ottoman Empire over the territory of Libya, which Italy sought to colonize as part of its imperial ambitions in North Africa. The Ottomans sought to retain their North African territories, while Italy argued the region was strategically vital and economically underdeveloped under Ottoman rule. Italy won the war, gaining Libya and the Dodecanese islands, and the Ottoman Empire's weakness encouraged the Balkan states to launch the First Balkan War shortly after.",
    sides: {
      A: { name: "Italy", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: 1, interventionist: 2 } },
      B: { name: "Ottomans", scores: { leftRight: 0, imperialism: -1, revolutionary: 0, nationalist: 1, interventionist: -2 } }
    }
  },
  {
    war: "First Balkan War",
    year: 1912,
    summary: "The First Balkan War was fought between the Balkan League — Bulgaria, Serbia, Greece, and Montenegro — and the Ottoman Empire over the liberation of Ottoman-held territories in the Balkans. The Balkan states sought to expel the Ottomans from Europe and gain territory, while the Ottomans sought to retain their European possessions. The Balkan League won decisively, with the Ottomans losing almost all of their European territory.",
    sides: {
      A: { name: "Balkan League", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 2, interventionist: 1 } },
      B: { name: "Ottomans", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 0, interventionist: -1 } }
    }
  },
  {
    war: "Second Balkan War",
    year: 1913,
    summary: "The Second Balkan War broke out when Bulgaria, dissatisfied with its share of the territories gained in the First Balkan War, attacked its former allies Serbia and Greece. Romania and the Ottoman Empire joined against Bulgaria, seeking territorial gains of their own. Bulgaria was defeated and forced to cede significant territories to its neighbors under the Treaty of Bucharest.",
    sides: {
      A: { name: "Bulgaria", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 1, interventionist: 1 } },
      B: { name: "Serbia/Greece/Romania", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 1, interventionist: 1 } }
    }
  },
  {
    war: "Serbian Campaign",
    year: 1914,
    summary: "The Serbian Campaign began when Austria-Hungary issued an ultimatum to Serbia following the assassination of Archduke Franz Ferdinand by a Bosnian-Serb nationalist. Austria-Hungary sought to crush Serbian nationalism and assert dominance in the Balkans, while Serbia sought to maintain its sovereignty. Serbia initially repelled the Austro-Hungarian invasion but was eventually overrun in 1915 when Bulgaria joined the Central Powers.",
    sides: {
      A: { name: "Austria-Hungary", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 0, interventionist: 2 } },
      B: { name: "Serbia", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Invasion of Belgium",
    year: 1914,
    summary: "Germany invaded neutral Belgium as part of the Schlieffen Plan, a strategy to quickly defeat France by sweeping through Belgium before turning to face Russia. Belgium sought to defend its guaranteed neutrality and sovereignty, while Germany argued military necessity overrode Belgian neutrality. Belgium's resistance slowed the German advance and Britain used the invasion as justification to enter the war.",
    sides: {
      A: { name: "Germany", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 1, interventionist: 2 } },
      B: { name: "Belgium", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 1, interventionist: -2 } }
    }
  },
  {
    war: "Western Front",
    year: 1914,
    summary: "The Western Front was the primary theatre of World War I, stretching from the English Channel to Switzerland, where Germany fought France and Britain in brutal trench warfare for four years. Germany sought to dominate Western Europe, while France and Britain sought to repel the invasion and restore Belgian sovereignty. The Allied powers ultimately prevailed following the entry of the United States in 1917 and the collapse of German morale in 1918.",
    sides: {
      A: { name: "Germany", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 1, interventionist: 2 } },
      B: { name: "France", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 1, interventionist: -1 } }
    }
  },
  {
    war: "Caucasus Campaign",
    year: 1914,
    summary: "The Caucasus Campaign was fought between the Ottoman Empire and Russia along their shared border in the Caucasus region during World War I. The Ottomans sought to expand into Russian-held Caucasian territories and cut off Russian supply lines, while Russia sought to protect its southern borders and potentially gain Ottoman Armenian territories. Russia largely prevailed on the Caucasian front, though the campaign was marked by the Ottoman genocide of Armenians.",
    sides: {
      A: { name: "Ottomans", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 1, interventionist: 1 } },
      B: { name: "Russia", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 0, interventionist: 1 } }
    }
  },
  {
    war: "Mesopotamia Campaign",
    year: 1914,
    summary: "The Mesopotamia Campaign was fought between Britain and the Ottoman Empire in present-day Iraq, with Britain seeking to protect its oil interests and the route to India while also striking at Ottoman territory. The Ottomans sought to defend their Arab provinces and inflicted a major British defeat at the Siege of Kut in 1916. Britain ultimately prevailed, capturing Baghdad in 1917 and occupying most of Mesopotamia by the end of the war.",
    sides: {
      A: { name: "Ottomans", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 1, interventionist: 1 } },
      B: { name: "Britain", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 0, interventionist: 1 } }
    }
  },
  {
    war: "Mexican Revolution",
    year: 1914,
    summary: "The United States intervened militarily in Mexico during the Mexican Revolution, occupying the port of Veracruz in 1914 and launching the Punitive Expedition against Pancho Villa in 1916. The US sought to protect American interests and influence the outcome of the revolution, while Mexican factions across the political spectrum united in opposition to foreign intervention. The US ultimately withdrew without achieving its objectives, and Mexico established a new constitution in 1917.",
    sides: {
      A: { name: "United States", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: 0, interventionist: 2 } },
      B: { name: "Mexico", scores: { leftRight: -1, imperialism: -1, revolutionary: 2, nationalist: 1, interventionist: -2 } }
    }
  },
  {
    war: "Siege of Tsingtao",
    year: 1914,
    summary: "The Siege of Tsingtao was a military operation in which Japan and Britain attacked the German colonial possession of Tsingtao in China at the outset of World War I. Japan sought to seize German Pacific territories and expand its influence in China, while Germany sought to defend its Far Eastern colonial base. Japan captured Tsingtao after a brief siege, gaining control of German possessions in the Pacific and Shandong peninsula.",
    sides: {
      A: { name: "Germany", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 1, interventionist: 2 } },
      B: { name: "Japan", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 1, interventionist: 1 } }
    }
  },
  {
    war: "Arab Revolt",
    year: 1916,
    summary: "The Arab Revolt was an uprising by Arab nationalist forces under Sharif Hussein of Mecca against Ottoman rule during World War I, supported by Britain with promises of Arab independence. The Arabs sought to establish an independent Arab state across the Middle East, while the Ottomans sought to suppress the revolt and maintain control of their Arab provinces. The revolt succeeded militarily but Arabs were denied independence as Britain and France secretly agreed to divide the region under the Sykes-Picot Agreement.",
    sides: {
      A: { name: "Ottomans", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: -1, interventionist: -1 } },
      B: { name: "Arabs", scores: { leftRight: 0, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Senussi Campaign",
    year: 1916,
    summary: "The Senussi Campaign was fought between Britain and the Senussi Muslim Brotherhood in western Egypt and Libya during World War I, after the Ottomans and Germans encouraged the Senussi to attack British-held Egypt. The Senussi sought to expel British influence from the region and align with the Central Powers, while Britain sought to protect its position in Egypt and the Suez Canal. Britain defeated the Senussi forces and neutralized the threat to Egypt.",
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Senussi", scores: { leftRight: 0, imperialism: -2, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Russian Revolution",
    year: 1917,
    summary: "The Russian Civil War followed the Bolshevik seizure of power in 1917, pitting the Red Army of the Soviet government against the White Army, a loose coalition of monarchists, liberals, and anti-communist forces supported by foreign intervention. The Bolsheviks sought to consolidate their socialist revolution, while the Whites sought to restore order and reverse the revolution. The Bolsheviks won, establishing the Soviet Union and cementing communist rule over Russia.",
    sides: {
      A: { name: "White Russia", scores: { leftRight: 2, imperialism: 0, revolutionary: -2, nationalist: 1, interventionist: -1 } },
      B: { name: "Soviets", scores: { leftRight: -2, imperialism: 0, revolutionary: 2, nationalist: -1, interventionist: 1 } }
    }
  },
  {
    war: "Polish-Soviet War",
    year: 1919,
    summary: "The Polish-Soviet War was fought between newly independent Poland and Soviet Russia, with the Soviets seeking to spread revolution westward into Europe and Poland seeking to establish secure borders and reclaim historical eastern territories. Poland under Józef Piłsudski launched an offensive into Ukraine, but a Soviet counteroffensive nearly reached Warsaw before being repelled in the Battle of Warsaw. Poland won, securing its eastern borders under the Peace of Riga.",
    sides: {
      A: { name: "Soviet Russia", scores: { leftRight: -2, imperialism: 0, revolutionary: 2, nationalist: -1, interventionist: 2 } },
      B: { name: "Poland", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Greco-Turkish War",
    year: 1919,
    summary: "The Greco-Turkish War was fought between Greece and the Turkish nationalist movement following World War I, as Greece sought to incorporate western Anatolia with its large Greek population into a Greater Greece. The Turkish nationalists under Mustafa Kemal sought to establish an independent Turkish state and expel Greek forces from Anatolia. Turkey won decisively, resulting in a massive population exchange that ended the millennia-old Greek presence in Anatolia.",
    sides: {
      A: { name: "Greece", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 1, interventionist: 2 } },
      B: { name: "Turkey", scores: { leftRight: 0, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Turkish-Armenian War",
    year: 1920,
    summary: "The Turkish-Armenian War was fought between the Turkish nationalist forces and the First Republic of Armenia over disputed territories in eastern Anatolia. Turkey sought to eliminate Armenian territorial claims and consolidate control over eastern Anatolia, while Armenia sought to secure its borders and protect Armenian populations. Turkey defeated Armenia, forcing it to cede large territories, and Armenia was subsequently absorbed into the Soviet Union.",
    sides: {
      A: { name: "Turkey", scores: { leftRight: 1, imperialism: 1, revolutionary: 0, nationalist: 2, interventionist: 1 } },
      B: { name: "Armenia", scores: { leftRight: 0, imperialism: -1, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Franco-Turkish War",
    year: 1919,
    summary: "The Franco-Turkish War was fought between France and the Turkish nationalist movement in Cilicia and southern Anatolia, where France had occupied territory following World War I. France sought to maintain its sphere of influence in the region under the Sykes-Picot Agreement, while Turkish nationalists sought to expel all foreign forces from Anatolia. France negotiated a withdrawal, recognizing Turkish sovereignty in the region in exchange for economic concessions.",
    sides: {
      A: { name: "France", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: -1, interventionist: 2 } },
      B: { name: "Turkey", scores: { leftRight: 0, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Irish War of Independence",
    year: 1919,
    summary: "The Irish War of Independence was fought between Irish republican forces of the IRA and the British state, following the 1916 Easter Rising and the 1918 election in which Sinn Féin won a majority of Irish seats and declared independence. Ireland sought full independence from British rule, while Britain sought to maintain its control over Ireland as part of the United Kingdom. The war ended with the Anglo-Irish Treaty of 1921, which established the Irish Free State but partitioned the island.",
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Irish Republicans", scores: { leftRight: -1, imperialism: -2, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Chinese Civil War",
    year: 1927,
    summary: "The first phase of the Chinese Civil War began when Chiang Kai-shek's Nationalist government turned against its Communist allies in the Shanghai Massacre of 1927, launching a campaign to eliminate the Communist Party. The Nationalists sought to unify China under their government and suppress communist revolution, while the Communists sought to establish a socialist state. The Communists survived through guerrilla warfare and the Long March, regrouping for the later conflict.",
    sides: {
      A: { name: "Nationalists", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 2, interventionist: 0 } },
      B: { name: "Communists", scores: { leftRight: -2, imperialism: 0, revolutionary: 2, nationalist: 0, interventionist: 0 } }
    }
  },
  {
    war: "Great Syrian Revolt",
    year: 1925,
    summary: "The Great Syrian Revolt was a widespread uprising against French mandatory rule in Syria, beginning among the Druze population and spreading across much of the country. Syrian rebels sought independence and an end to French colonial administration, while France sought to maintain its League of Nations mandate over Syria. France suppressed the revolt using overwhelming military force including artillery bombardment of Damascus, maintaining control until Syrian independence in 1946.",
    sides: {
      A: { name: "France", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Syrian Rebels", scores: { leftRight: -1, imperialism: -2, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Great Arab Revolt in Palestine",
    year: 1936,
    summary: "The Great Arab Revolt was an uprising by Palestinian Arabs against British mandatory rule and Jewish immigration to Palestine, driven by fears that increasing Jewish immigration would lead to the displacement of the Arab population. Arab rebels sought to end British rule and halt Jewish immigration, while Britain sought to maintain order and balance competing Arab and Jewish demands. Britain suppressed the revolt but the conflict exposed the irreconcilable tensions that would later lead to the 1948 Arab-Israeli War.",
    sides: {
      A: { name: "British Mandate", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Arab Rebels", scores: { leftRight: 0, imperialism: -2, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Spanish Civil War",
    year: 1936,
    summary: "The Spanish Civil War was fought between the elected Republican government of Spain and Nationalist forces led by General Francisco Franco, who launched a military coup against the republic. The Republicans, supported by the Soviet Union and international volunteers, sought to defend the democratic government and social reforms, while the Nationalists, supported by Nazi Germany and Fascist Italy, sought to establish an authoritarian state. Franco's Nationalists won in 1939, establishing a dictatorship that lasted until 1975.",
    sides: {
      A: { name: "Republicans", scores: { leftRight: -1, imperialism: 0, revolutionary: 2, nationalist: 0, interventionist: -1 } },
      B: { name: "Nationalists", scores: { leftRight: 2, imperialism: 0, revolutionary: -2, nationalist: 2, interventionist: 1 } }
    }
  },
  {
    war: "Second Sino-Japanese War",
    year: 1931,
    summary: "The Second Sino-Japanese War began with Japan's invasion of Manchuria in 1931 and escalated into full-scale war in 1937, as Japan sought to establish dominance over China and exploit its resources as part of Japanese imperial expansion. China, divided between Nationalists and Communists who formed a fragile united front, sought to resist the invasion and preserve its sovereignty. Japan occupied large portions of China but was ultimately defeated as part of World War II in 1945.",
    sides: {
      A: { name: "Japan", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: 1, interventionist: 2 } },
      B: { name: "China", scores: { leftRight: 0, imperialism: -2, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Second Italo-Ethiopian War",
    year: 1935,
    summary: "The Second Italo-Ethiopian War was launched by Fascist Italy under Mussolini, who sought to avenge Italy's humiliating defeat at the Battle of Adwa in 1896 and build an Italian empire in East Africa. Ethiopia under Emperor Haile Selassie appealed to the League of Nations and sought to defend its sovereignty, while Italy used modern weapons including chemical warfare against Ethiopian forces. Italy conquered Ethiopia in 1936, though Ethiopian resistance continued until liberation by Allied forces in 1941.",
    sides: {
      A: { name: "Italy", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: 1, interventionist: 2 } },
      B: { name: "Abyssinia", scores: { leftRight: 0, imperialism: -2, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Winter War",
    year: 1939,
    summary: "The Winter War was fought between the Soviet Union and Finland after the USSR demanded territorial concessions from Finland as a buffer for Leningrad, which Finland refused. The Soviets sought to push Finland's border away from Leningrad and potentially install a communist government, while Finland sought to defend its sovereignty and territorial integrity. Finland inflicted massive casualties on the Soviets but was ultimately forced to cede territory in the Moscow Peace Treaty.",
    sides: {
      A: { name: "Soviet Union", scores: { leftRight: -2, imperialism: 1, revolutionary: 2, nationalist: -1, interventionist: 2 } },
      B: { name: "Finland", scores: { leftRight: 1, imperialism: -1, revolutionary: -1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Invasion of Poland",
    year: 1939,
    summary: "Germany invaded Poland on September 1, 1939, using the pretext of protecting ethnic Germans in the Danzig corridor and alleged Polish provocations, triggering World War II. Germany sought to destroy the Polish state, gain Lebensraum in the east, and eliminate perceived threats on its eastern border, while Poland sought to defend its sovereignty with promised Allied support. Poland was rapidly defeated and divided between Germany and the Soviet Union, which invaded from the east on September 17.",
    sides: {
      A: { name: "Germany", scores: { leftRight: 2, imperialism: 2, revolutionary: 1, nationalist: 1, interventionist: 2 } },
      B: { name: "Poland", scores: { leftRight: 1, imperialism: -1, revolutionary: -1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Fall of France",
    year: 1939,
    summary: "Germany's invasion of France and the Low Countries in May 1940 used the innovative Blitzkrieg strategy, bypassing the Maginot Line through the Ardennes forest to encircle Allied forces. Germany sought to defeat France quickly and establish dominance over Western Europe, while France and Britain sought to halt the German advance and defend their nations. France fell within six weeks, leading to the armistice and establishment of the Vichy regime.",
    sides: {
      A: { name: "Germany", scores: { leftRight: 2, imperialism: 2, revolutionary: 1, nationalist: 1, interventionist: 2 } },
      B: { name: "France", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 1, interventionist: -1 } }
    }
  },
  {
    war: "Greco-Italian War",
    year: 1940,
    summary: "Italy invaded Greece in October 1940 after Mussolini, seeking military glory to match Hitler's conquests, issued an ultimatum demanding Greece allow Italian occupation of strategic points. Greece rejected the ultimatum and repelled the Italian invasion, pushing Italian forces back into Albania in one of the first Allied victories of World War II. Germany was forced to intervene in 1941 to rescue Italy, delaying the invasion of the Soviet Union.",
    sides: {
      A: { name: "Italy", scores: { leftRight: 2, imperialism: 2, revolutionary: 1, nationalist: 1, interventionist: 2 } },
      B: { name: "Greece", scores: { leftRight: 0, imperialism: -1, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Operation Barbarossa",
    year: 1941,
    summary: "Operation Barbarossa was Germany's invasion of the Soviet Union in June 1941, the largest military operation in history, driven by Nazi ideology seeking Lebensraum in the east and the destruction of what Hitler called Judeo-Bolshevism. The Soviets, initially devastated by the surprise attack, eventually stabilized their lines and mounted a massive counteroffensive. The failure of Barbarossa to achieve a quick victory proved decisive in Germany's ultimate defeat in World War II.",
    sides: {
      A: { name: "Germany", scores: { leftRight: 2, imperialism: 2, revolutionary: 1, nationalist: 1, interventionist: 2 } },
      B: { name: "Soviet Union", scores: { leftRight: -2, imperialism: 0, revolutionary: 2, nationalist: -1, interventionist: 0 } }
    }
  },
  {
    war: "Pacific War",
    year: 1941,
    summary: "The Pacific War began with Japan's surprise attack on Pearl Harbor in December 1941, following years of tension over Japan's expansion in Asia and US economic sanctions. Japan sought to establish a Greater East Asia Co-Prosperity Sphere and secure resources by neutralizing American naval power, while the US sought to defend its Pacific interests and allies. The US ultimately defeated Japan after a long island-hopping campaign, culminating in atomic bombings of Hiroshima and Nagasaki in 1945.",
    sides: {
      A: { name: "United States", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 0, interventionist: 2 } },
      B: { name: "Japan", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: 2, interventionist: 2 } }
    }
  },
  {
    war: "Western Allied Campaign",
    year: 1941,
    summary: "The Western Allied Campaign encompassed the broader Allied effort against Nazi Germany, from the North African campaign through the Italian campaign to the D-Day landings and liberation of Western Europe. The Allies sought to defeat Nazi Germany and liberate occupied Europe, while Germany sought to maintain its conquests and negotiate a favorable peace. Germany surrendered unconditionally in May 1945 following the fall of Berlin.",
    sides: {
      A: { name: "Allies", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 0, interventionist: 2 } },
      B: { name: "Germany", scores: { leftRight: 2, imperialism: 2, revolutionary: 1, nationalist: 1, interventionist: 2 } }
    }
  },
  {
    war: "Italian Campaign",
    year: 1941,
    summary: "The Italian Campaign was fought between the Allied forces and Fascist Italy during World War II, beginning with the Allied invasion of Sicily in 1943 and continuing up the Italian peninsula. The Allies sought to knock Italy out of the war and open a southern front against Germany, while Italy under Mussolini sought to defend its territory and maintain the Axis alliance. Italy surrendered in September 1943, though Germany continued fighting in Italy until the end of the war.",
    sides: {
      A: { name: "Allies", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 0, interventionist: 2 } },
      B: { name: "Italy", scores: { leftRight: 2, imperialism: 2, revolutionary: 1, nationalist: 1, interventionist: 2 } }
    }
  },
  {
    war: "Chinese Civil War",
    year: 1946,
    summary: "The second phase of the Chinese Civil War resumed after World War II between Chiang Kai-shek's Nationalist government and Mao Zedong's Communist Party, who had fought a fragile truce against Japan. The Nationalists sought to reunify China under their government with US support, while the Communists sought to establish a socialist state with Soviet support. The Communists won in 1949, establishing the People's Republic of China while the Nationalists retreated to Taiwan.",
    sides: {
      A: { name: "Nationalists", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 2, interventionist: 0 } },
      B: { name: "Communists", scores: { leftRight: -2, imperialism: 0, revolutionary: 2, nationalist: 0, interventionist: 0 } }
    }
  },
  {
    war: "First Indochina War",
    year: 1946,
    summary: "The First Indochina War was fought between France seeking to restore its colonial empire in Indochina and the Viet Minh independence movement led by Ho Chi Minh, who had declared Vietnamese independence following Japan's defeat. The Viet Minh sought full independence for Vietnam, while France sought to maintain its colonial presence and influence in Southeast Asia. France was decisively defeated at Dien Bien Phu in 1954, leading to Vietnamese independence and the partition of Vietnam.",
    sides: {
      A: { name: "France", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Viet Minh", scores: { leftRight: -2, imperialism: -2, revolutionary: 2, nationalist: 1, interventionist: -2 } }
    }
  },
  {
    war: "Greek Civil War",
    year: 1946,
    summary: "The Greek Civil War was fought between the Greek government supported by Britain and later the United States, and the Democratic Army of Greece backed by Yugoslavia and other communist states. The communists sought to establish a socialist government, while the government sought to restore the monarchy and maintain the Western political order. The government won in 1949 following Yugoslavia's split with the Soviet Union, which cut off communist supply lines.",
    sides: {
      A: { name: "Greek Government", scores: { leftRight: 1, imperialism: 0, revolutionary: -2, nationalist: 1, interventionist: 0 } },
      B: { name: "Communists", scores: { leftRight: -2, imperialism: 0, revolutionary: 2, nationalist: 0, interventionist: 1 } }
    }
  },
  {
    war: "Malayan Emergency",
    year: 1948,
    summary: "The Malayan Emergency was an insurgency fought between Britain and the Malayan Communist Party, which launched a guerrilla campaign to establish a communist state in British Malaya. Britain sought to maintain its colonial presence and defeat the communist insurgency, while the MCP sought to end colonial rule and establish socialism. Britain defeated the insurgency through a combination of military operations and political reforms leading to Malayan independence in 1957.",
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Malayan Communists", scores: { leftRight: -2, imperialism: -2, revolutionary: 2, nationalist: 1, interventionist: -2 } }
    }
  },
  {
    war: "Korean War",
    year: 1950,
    summary: "The Korean War began when North Korea invaded South Korea in June 1950, seeking to reunify the peninsula under communist rule following the division after World War II. A US-led UN coalition intervened to defend South Korea, while China entered the war when UN forces approached the Chinese border. The war ended in a stalemate in 1953 with an armistice restoring the pre-war division along the 38th parallel.",
    sides: {
      A: { name: "North Korea", scores: { leftRight: -2, imperialism: 0, revolutionary: 2, nationalist: 1, interventionist: 2 } },
      B: { name: "South Korea", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 1, interventionist: -2 } }
    }
  },
  {
    war: "Mau Mau Uprising",
    year: 1952,
    summary: "The Mau Mau Uprising was an armed rebellion in British Kenya led primarily by the Kikuyu people against British colonial rule and the dispossession of African land by white settlers. The Mau Mau sought to end British colonialism and reclaim African land, while Britain declared a state of emergency and conducted a brutal counterinsurgency involving detention camps and widespread torture. Britain suppressed the uprising but the conflict accelerated Kenyan independence in 1963.",
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Mau Mau", scores: { leftRight: -1, imperialism: -2, revolutionary: 2, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Algerian War",
    year: 1954,
    summary: "The Algerian War was fought between France and the National Liberation Front (FLN), which launched an armed insurgency to end French colonial rule over Algeria, where over a million European settlers lived. The FLN sought full independence, while France, which considered Algeria an integral part of France rather than a colony, sought to maintain its control through a brutal counterinsurgency. Algeria gained independence in 1962 following the Evian Accords.",
    sides: {
      A: { name: "France", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "FLN", scores: { leftRight: -1, imperialism: -2, revolutionary: 2, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Vietnam War",
    year: 1955,
    summary: "The Vietnam War was fought between North Vietnam and its communist allies against South Vietnam supported by the United States, following the partition of Vietnam after the French defeat in 1954. North Vietnam sought to reunify the country under communist rule, while the US sought to prevent communist expansion in Southeast Asia through the domino theory. North Vietnam won in 1975 following the US withdrawal, reunifying the country under communist rule.",
    sides: {
      A: { name: "North Vietnam", scores: { leftRight: -2, imperialism: -1, revolutionary: 2, nationalist: 1, interventionist: 1 } },
      B: { name: "South Vietnam", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 1, interventionist: -1 } }
    }
  },
  {
    war: "Hungarian Revolution",
    year: 1956,
    summary: "The Hungarian Revolution was a nationwide revolt against the Soviet-backed Hungarian government in 1956, inspired by de-Stalinization and Polish reforms, which briefly established a multiparty government and declared neutrality. Hungary sought to leave the Warsaw Pact and establish an independent democratic socialist state, while the Soviet Union sought to maintain its sphere of influence in Eastern Europe. The Soviet Union crushed the revolution with military force, killing thousands and causing mass emigration.",
    sides: {
      A: { name: "Soviet Union", scores: { leftRight: -2, imperialism: 1, revolutionary: -1, nationalist: -2, interventionist: 2 } },
      B: { name: "Hungarian Revolutionaries", scores: { leftRight: 0, imperialism: -1, revolutionary: 2, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Suez Crisis",
    year: 1956,
    summary: "The Suez Crisis began when Egypt's President Nasser nationalized the Suez Canal, prompting a secretly coordinated military operation by Britain, France, and Israel. Britain and France sought to regain control of the canal and topple Nasser, while Israel sought to neutralize Egyptian military buildup in Sinai. The operation was forced to halt by US and Soviet pressure, resulting in a major humiliation for Britain and France and marking the end of European imperial power in the Middle East.",
    sides: {
      A: { name: "Britain / France / Israel", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: 0, interventionist: 2 } },
      B: { name: "Egypt", scores: { leftRight: 0, imperialism: -2, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Laotian Civil War",
    year: 1959,
    summary: "The Laotian Civil War was fought between the Royal Lao Government, backed by the United States, and the Pathet Lao communist movement, supported by North Vietnam and the Soviet Union. The Pathet Lao sought to establish a communist state aligned with Vietnam, while the Royal Government sought to maintain a neutralist or pro-Western orientation. The Pathet Lao ultimately won in 1975, establishing the Lao People's Democratic Republic.",
    sides: {
      A: { name: "Royal Lao Government", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 1, interventionist: 0 } },
      B: { name: "Pathet Lao", scores: { leftRight: -2, imperialism: 0, revolutionary: 2, nationalist: 0, interventionist: 1 } }
    }
  },
  {
    war: "Congo Crisis",
    year: 1960,
    summary: "The Congo Crisis erupted immediately after Congolese independence from Belgium in 1960, when the mineral-rich Katanga province declared secession under Moise Tshombe, backed by Belgian mining interests. The Congolese central government sought to maintain national unity, while Katanga sought independence with foreign support. The UN intervened and Katanga's secession was ended in 1963, though the crisis destabilized Congo for decades.",
    sides: {
      A: { name: "Congo", scores: { leftRight: 0, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: 0 } },
      B: { name: "Katanga", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 2, interventionist: -1 } }
    }
  },
  {
    war: "Sino-Indian War",
    year: 1962,
    summary: "The Sino-Indian War was fought over disputed border territories in the Himalayas, arising from conflicting claims over regions like Aksai Chin and Arunachal Pradesh following both nations' independence. China launched a surprise offensive and quickly overwhelmed Indian forces, seeking to assert its border claims and punish India for its forward policy. China won decisively but unilaterally withdrew, retaining Aksai Chin while leaving the broader border dispute unresolved.",
    sides: {
      A: { name: "China", scores: { leftRight: -2, imperialism: 1, revolutionary: 1, nationalist: 1, interventionist: 2 } },
      B: { name: "India", scores: { leftRight: 0, imperialism: -1, revolutionary: 0, nationalist: 1, interventionist: -2 } }
    }
  },
  {
    war: "Dominican Civil War",
    year: 1965,
    summary: "The Dominican Civil War erupted when military factions loyal to the deposed President Juan Bosch attempted to restore constitutional rule against a military junta. The United States intervened militarily, citing the threat of a communist takeover, to stabilize the situation in favor of conservative forces. The intervention ended the civil war and led to elections won by Joaquín Balaguer, a conservative backed by the US.",
    sides: {
      A: { name: "Dominican Government", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 1, interventionist: 0 } },
      B: { name: "Rebels", scores: { leftRight: -1, imperialism: 0, revolutionary: 2, nationalist: 0, interventionist: 0 } }
    }
  },
  {
    war: "Indo-Pakistani War",
    year: 1965,
    summary: "The Indo-Pakistani War of 1965 was fought over the disputed territory of Kashmir, which both India and Pakistan claimed following the partition of British India in 1947. Pakistan launched Operation Gibraltar to infiltrate Kashmir and spark an uprising, while India responded with a full-scale invasion of Pakistani territory. The war ended inconclusively with a UN-brokered ceasefire, with both sides returning to their pre-war positions.",
    sides: {
      A: { name: "India", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 1, interventionist: 1 } },
      B: { name: "Pakistan", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 1, interventionist: 1 } }
    }
  },
  {
    war: "Six-Day War",
    year: 1967,
    summary: "The Six-Day War was fought between Israel and the Arab states of Egypt, Jordan, and Syria, following Egyptian blockades and military buildups that Israel considered acts of war. Israel launched a preemptive strike and rapidly defeated all three Arab armies, while the Arab states sought to reverse Israeli gains from the 1948 war and eliminate the Israeli state. Israel captured the Sinai, Gaza, West Bank, and Golan Heights, dramatically reshaping the Middle East.",
    sides: {
      A: { name: "Israel", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 2, interventionist: 2 } },
      B: { name: "Arabs", scores: { leftRight: 0, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: -1 } }
    }
  },
  {
    war: "Nigerian Civil War",
    year: 1967,
    summary: "The Nigerian Civil War, also known as the Biafran War, was fought between Nigeria and the secessionist Republic of Biafra, which was declared by the predominantly Igbo southeastern region following ethnic massacres and political marginalization. Biafra sought independence and protection for its people, while Nigeria sought to maintain its territorial integrity. Nigeria won in 1970, reintegrating Biafra, though the war caused a humanitarian catastrophe with over a million deaths from famine.",
    sides: {
      A: { name: "Nigeria", scores: { leftRight: 0, imperialism: 1, revolutionary: -1, nationalist: 1, interventionist: 1 } },
      B: { name: "Biafra", scores: { leftRight: 0, imperialism: -1, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Cambodian Civil War",
    year: 1967,
    summary: "The Cambodian Civil War was fought between the US-backed Lon Nol government and the Khmer Rouge communist insurgency, which grew rapidly following the 1970 coup against Prince Sihanouk and the expansion of the Vietnam War into Cambodia. The Lon Nol government sought to maintain a pro-Western state, while the Khmer Rouge sought to establish an agrarian communist utopia. The Khmer Rouge won in 1975 and proceeded to implement a genocidal regime that killed up to two million people.",
    sides: {
      A: { name: "Lon Nol Government", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 1, interventionist: 0 } },
      B: { name: "Khmer Rouge", scores: { leftRight: -2, imperialism: -1, revolutionary: 2, nationalist: 1, interventionist: -1 } }
    }
  },
  {
    war: "The Troubles",
    year: 1968,
    summary: "The Troubles was a ethno-nationalist conflict in Northern Ireland between predominantly Catholic Irish republicans, who sought unification with the Republic of Ireland, and predominantly Protestant unionists, who sought to remain part of the United Kingdom, with the British state caught in the middle. Republican paramilitaries like the IRA carried out bombings and assassinations, while loyalist paramilitaries and British security forces responded with their own violence. The conflict ended with the Good Friday Agreement in 1998, establishing power-sharing arrangements.",
    sides: {
      A: { name: "British State", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Irish Republican Militants", scores: { leftRight: -1, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Black September",
    year: 1970,
    summary: "Black September refers to the conflict between the Jordanian government and Palestinian militant organizations, particularly the PLO, whose armed presence and state-within-a-state had become a direct challenge to Jordanian sovereignty. King Hussein sought to restore Jordanian authority and expel the Palestinian militants, while the PLO sought to maintain its armed presence in Jordan as a base for operations against Israel. Jordan expelled the PLO, which relocated to Lebanon.",
    sides: {
      A: { name: "Jordan", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 1, interventionist: 1 } },
      B: { name: "Palestinian Militants", scores: { leftRight: -1, imperialism: -1, revolutionary: 2, nationalist: 2, interventionist: 0 } }
    }
  },
  {
    war: "Yom Kippur War",
    year: 1973,
    summary: "The Yom Kippur War was launched by Egypt and Syria with a surprise attack on Israel on the Jewish holy day of Yom Kippur, seeking to recapture territories lost in the 1967 Six-Day War. Egypt sought to recover the Sinai Peninsula and Syria sought to recover the Golan Heights, while Israel fought to repel the invasion and maintain its territorial gains. Israel ultimately repelled both attacks but the war demonstrated Arab military capability and led to the 1978 Camp David Accords.",
    sides: {
      A: { name: "Israel", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 2, interventionist: -1 } },
      B: { name: "Arabs", scores: { leftRight: 0, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: 1 } }
    }
  },
  {
    war: "Ethiopian Civil War",
    year: 1974,
    summary: "The 1974 Ethiopian Revolution saw the Derg military committee overthrow Emperor Haile Selassie, ending the ancient Ethiopian monarchy amid famine, economic crisis, and popular unrest. The emperor sought to maintain the imperial system and his personal rule, while the Derg and various leftist factions sought to modernize Ethiopia and address social inequalities. The Derg established a Marxist military dictatorship, executing the emperor and beginning a period known as the Red Terror.",
    sides: {
      A: { name: "Monarchy", scores: { leftRight: 2, imperialism: 0, revolutionary: -2, nationalist: 1, interventionist: -1 } },
      B: { name: "Rebels", scores: { leftRight: -1, imperialism: 0, revolutionary: 2, nationalist: 0, interventionist: 0 } }
    }
  },
  {
    war: "Ethiopian Government vs Insurgents",
    year: 1974,
    summary: "Following the 1974 revolution, the Derg military government faced armed insurgencies from multiple ethnic and political groups, including the Eritrean independence movement, Tigrayan rebels, and Somali-backed forces in the Ogaden. The Derg sought to maintain a unified Ethiopian state under its Marxist rule, while various insurgent groups sought either independence or the overthrow of the Derg. The conflicts continued until the Derg's fall in 1991.",
    sides: {
      A: { name: "Ethiopian Government", scores: { leftRight: -1, imperialism: 0, revolutionary: -1, nationalist: 1, interventionist: 0 } },
      B: { name: "Rebels", scores: { leftRight: -1, imperialism: 0, revolutionary: 2, nationalist: 2, interventionist: -1 } }
    }
  },
  {
    war: "Ogaden War",
    year: 1977,
    summary: "The Ogaden War was fought between Somalia and Ethiopia over the Ogaden region, which Somalia claimed based on its ethnic Somali population. Somalia launched an invasion and initially captured most of the Ogaden, while Ethiopia, backed by Soviet and Cuban support, mounted a massive counteroffensive. Ethiopia recaptured the Ogaden in 1978, and Somalia's defeat contributed to the eventual collapse of the Somali state.",
    sides: {
      A: { name: "Somalia", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 2, interventionist: 2 } },
      B: { name: "Ethiopia", scores: { leftRight: -1, imperialism: -1, revolutionary: 0, nationalist: 1, interventionist: -2 } }
    }
  },
  {
    war: "Lebanese Civil War",
    year: 1975,
    summary: "The Lebanese Civil War was a complex multi-sided conflict involving Lebanese Christian, Sunni, Shia, and Druze factions, the PLO, Syria, Israel, and various foreign powers, triggered by tensions over Palestinian armed presence in Lebanon and sectarian power-sharing arrangements. Different factions sought dominance over Lebanon's political system or to use Lebanon as a base for their own agendas. The war lasted 15 years and ended with the Taif Agreement in 1989.",
    sides: {
      A: { name: "Lebanese Factions (Right)", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 2, interventionist: 0 } },
      B: { name: "Lebanese Factions (Left/PLO)", scores: { leftRight: -1, imperialism: -1, revolutionary: 1, nationalist: 1, interventionist: 0 } }
    }
  },
  {
    war: "Cambodian-Vietnamese War",
    year: 1978,
    summary: "Vietnam invaded Cambodia in 1978 to overthrow the Khmer Rouge regime, which had been conducting cross-border raids and massacring Vietnamese civilians. Vietnam sought to install a friendly government in Cambodia and eliminate a hostile regime on its border, while the Khmer Rouge sought to maintain its radical communist state and resist Vietnamese domination. Vietnam rapidly overthrew the Khmer Rouge, installing a pro-Vietnamese government, though Khmer Rouge resistance continued for years.",
    sides: {
      A: { name: "Cambodia / Khmer Rouge", scores: { leftRight: -1, imperialism: 0, revolutionary: 2, nationalist: 2, interventionist: -1 } },
      B: { name: "Vietnam", scores: { leftRight: -2, imperialism: 1, revolutionary: 1, nationalist: 0, interventionist: 2 } }
    }
  },
  {
    war: "Soviet-Afghan War",
    year: 1979,
    summary: "The Soviet Union invaded Afghanistan in 1979 to support its communist government against the Mujahideen insurgency, which had been destabilizing the country. The Soviets sought to maintain a communist ally on their southern border, while the Mujahideen, backed by the US, Pakistan, Saudi Arabia, and others, sought to expel the Soviets and establish an Islamic government. The Soviets withdrew in 1989 after a decade of costly guerrilla warfare, contributing to the collapse of the Soviet Union.",
    sides: {
      A: { name: "Soviet Union", scores: { leftRight: -2, imperialism: 1, revolutionary: 1, nationalist: -1, interventionist: 2 } },
      B: { name: "Afghan Mujahideen", scores: { leftRight: 1, imperialism: -1, revolutionary: -1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Iran-Iraq War",
    year: 1980,
    summary: "The Iran-Iraq War began when Iraq under Saddam Hussein invaded Iran, seeking to exploit post-revolutionary chaos, gain control of the Shatt al-Arab waterway, and prevent the spread of Iran's Islamic Revolution to Iraq's Shia population. Iran sought to repel the invasion and export its Islamic Revolution, while Iraq sought territorial gains and regional dominance. The war lasted eight years, caused over a million casualties, and ended inconclusively with a return to pre-war borders.",
    sides: {
      A: { name: "Iran", scores: { leftRight: 1, imperialism: -1, revolutionary: 1, nationalist: 1, interventionist: 1 } },
      B: { name: "Iraq", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 1, interventionist: 1 } }
    }
  },
  {
    war: "Salvadoran Civil War",
    year: 1980,
    summary: "The Salvadoran Civil War was fought between the US-backed government of El Salvador and the FMLN, a coalition of left-wing guerrilla groups, amid extreme inequality and political repression. The FMLN sought to establish a socialist government and address poverty and land inequality, while the government sought to maintain the existing social order with US support. The war ended in 1992 with the Chapultepec Peace Accords, incorporating the FMLN into the political process.",
    sides: {
      A: { name: "Salvadoran Government", scores: { leftRight: 1, imperialism: 0, revolutionary: -2, nationalist: 1, interventionist: 0 } },
      B: { name: "FMLN", scores: { leftRight: -2, imperialism: 0, revolutionary: 2, nationalist: 0, interventionist: 0 } }
    }
  },
  {
    war: "Falklands War",
    year: 1982,
    summary: "The Falklands War began when Argentina invaded and occupied the Falkland Islands, a British overseas territory in the South Atlantic, claiming sovereignty over what it called the Malvinas. Argentina sought to assert its territorial claim and the military junta used the invasion to boost domestic support, while Britain under Margaret Thatcher dispatched a naval task force to retake the islands. Britain recaptured the islands after ten weeks of fighting, and the defeat contributed to the collapse of Argentina's military government.",
    sides: {
      A: { name: "Britain", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 0, interventionist: 2 } },
      B: { name: "Argentina", scores: { leftRight: 1, imperialism: 0, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Lebanese War",
    year: 1982,
    summary: "Israel invaded Lebanon in 1982 with the stated aim of destroying PLO infrastructure in southern Lebanon, which had been used to launch attacks on northern Israel. Israel sought to eliminate the PLO as a military force and install a friendly government in Lebanon, while Lebanon and the PLO sought to resist the invasion. Israel reached Beirut and oversaw the Sabra and Shatila massacre, but was drawn into a prolonged occupation of southern Lebanon lasting until 2000.",
    sides: {
      A: { name: "Israel", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 1, interventionist: 2 } },
      B: { name: "Lebanon / PLO", scores: { leftRight: -1, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Tiananmen Repression",
    year: 1989,
    summary: "The Tiananmen Square protests were a pro-democracy movement led by students and workers in Beijing, calling for political reform, freedom of the press, and an end to corruption in the Communist Party. The Chinese government declared martial law and sent in the military to suppress the protests, while demonstrators sought political liberalization and accountability. The government crushed the movement, killing hundreds to thousands of protesters, and maintained Communist Party rule.",
    sides: {
      A: { name: "China", scores: { leftRight: -1, imperialism: 0, revolutionary: -2, nationalist: 1, interventionist: 1 } },
      B: { name: "Protesters", scores: { leftRight: 0, imperialism: 0, revolutionary: 2, nationalist: 0, interventionist: -1 } }
    }
  },
  {
    war: "Romanian Revolution",
    year: 1989,
    summary: "The Romanian Revolution was an uprising against the communist dictatorship of Nicolae Ceaușescu, beginning with protests in Timișoara that spread nationally and led to the regime's collapse within days. Romanians sought to end decades of brutal communist rule and establish democratic governance, while the regime sought to suppress the uprising. Ceaușescu and his wife were captured and executed on Christmas Day 1989, ending communist rule in Romania.",
    sides: {
      A: { name: "Romanian Regime", scores: { leftRight: -1, imperialism: 0, revolutionary: -2, nationalist: 1, interventionist: 0 } },
      B: { name: "Revolutionaries", scores: { leftRight: 0, imperialism: 0, revolutionary: 2, nationalist: 0, interventionist: 0 } }
    }
  },
  {
    war: "Gulf War",
    year: 1990,
    summary: "The Gulf War began when Iraq under Saddam Hussein invaded and annexed Kuwait, citing historical territorial claims and grievances over Kuwaiti oil production exceeding OPEC quotas. A US-led international coalition intervened to liberate Kuwait, with the US also seeking to prevent Iraqi domination of Middle Eastern oil supplies. The coalition rapidly defeated Iraqi forces and liberated Kuwait but stopped short of overthrowing Saddam Hussein.",
    sides: {
      A: { name: "Iraq", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: 1, interventionist: 2 } },
      B: { name: "United States / Coalition", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 0, interventionist: 2 } }
    }
  },
  {
    war: "Croatian War of Independence",
    year: 1991,
    summary: "The Croatian War of Independence was fought as Croatia declared independence from Yugoslavia, triggering conflict with the Yugoslav People's Army and Croatian Serb forces who sought to remain part of a Serb-dominated Yugoslavia. Croatia sought internationally recognized independence, while Serbia and Croatian Serbs sought to carve out a Serbian enclave in Croatian territory. Croatia ultimately prevailed, retaking most occupied territory by 1995 with international recognition.",
    sides: {
      A: { name: "Serbia", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 2, interventionist: 2 } },
      B: { name: "Croatia", scores: { leftRight: 0, imperialism: -1, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Bosnian War",
    year: 1991,
    summary: "The Bosnian War erupted when Bosnia declared independence from Yugoslavia, triggering conflict between Bosnian Serb forces backed by Serbia, Bosnian Croat forces backed by Croatia, and the Bosnian government. Bosnian Serbs sought to create a ethnically pure Serbian state and unite with Serbia, while the Bosnian government sought to maintain a multiethnic state. The war ended with the Dayton Agreement in 1995, dividing Bosnia between two entities and establishing an international protectorate.",
    sides: {
      A: { name: "Serbia", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 2, interventionist: 2 } },
      B: { name: "Bosnia", scores: { leftRight: 0, imperialism: -1, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Algerian Civil War",
    year: 1991,
    summary: "The Algerian Civil War erupted when the military annulled elections that the Islamic Salvation Front was poised to win, triggering an armed insurgency by Islamist groups. The government sought to maintain secular military rule and suppress political Islam, while Islamist groups sought to establish an Islamic state. The government prevailed by the late 1990s, though the conflict caused over 100,000 deaths and left deep scars on Algerian society.",
    sides: {
      A: { name: "Algerian Government", scores: { leftRight: 0, imperialism: 0, revolutionary: -1, nationalist: 1, interventionist: 0 } },
      B: { name: "Islamists", scores: { leftRight: 1, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: -1 } }
    }
  },
  {
    war: "Rwandan Civil War",
    year: 1990,
    summary: "The Rwandan Civil War began when the Rwandan Patriotic Front, composed largely of Tutsi refugees, invaded Rwanda from Uganda to end discrimination against Tutsis and return to their homeland. The Hutu-dominated government sought to maintain its power and resist the RPF, while the RPF sought political inclusion and the right of return. The war culminated in the 1994 genocide in which Hutu extremists massacred approximately 800,000 Tutsis before the RPF won and ended the genocide.",
    sides: {
      A: { name: "Rwanda", scores: { leftRight: 0, imperialism: 0, revolutionary: -1, nationalist: 1, interventionist: 0 } },
      B: { name: "RPF", scores: { leftRight: 0, imperialism: 0, revolutionary: 1, nationalist: 2, interventionist: 1 } }
    }
  },
  {
    war: "First Chechen War",
    year: 1994,
    summary: "The First Chechen War began when Russia invaded the breakaway republic of Chechnya to prevent its secession from the Russian Federation following Chechnya's declaration of independence in 1991. Russia sought to maintain its territorial integrity and prevent other regions from following suit, while Chechnya sought full independence. Russia suffered a humiliating military defeat and withdrew in 1996, granting Chechnya de facto independence until the Second Chechen War.",
    sides: {
      A: { name: "Russia", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 0, interventionist: 2 } },
      B: { name: "Chechnya", scores: { leftRight: 0, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Second Congo War",
    year: 1998,
    summary: "The Second Congo War, sometimes called Africa's World War, involved nine African nations and numerous armed groups fighting in the Democratic Republic of Congo over resources, political power, and ethnic rivalries. The Congolese government sought to maintain sovereignty while various rebel groups and neighboring states pursued their own agendas. The war caused over five million deaths, mostly from disease and starvation, and ended with the Sun City Agreement in 2002 though violence continued.",
    sides: {
      A: { name: "Congo", scores: { leftRight: 0, imperialism: -1, revolutionary: 0, nationalist: 1, interventionist: -1 } },
      B: { name: "Rebel Coalitions", scores: { leftRight: 0, imperialism: 0, revolutionary: 1, nationalist: 1, interventionist: 1 } }
    }
  },
  {
    war: "Kosovo War",
    year: 1998,
    summary: "The Kosovo War was fought between Serbia and the Kosovo Liberation Army, representing the ethnic Albanian majority of Kosovo, who sought independence from Serbia following years of political repression. Serbia sought to maintain Kosovo as part of its territory and suppress the KLA insurgency, while Kosovo Albanians sought self-determination. NATO intervened with airstrikes against Serbia in 1999, forcing Serbian withdrawal and establishing a UN administration over Kosovo.",
    sides: {
      A: { name: "Serbia", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 2, interventionist: 2 } },
      B: { name: "Kosovo Albanians", scores: { leftRight: 0, imperialism: -1, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  }
];

let current = 0;

let scores = {
  leftRight: 0,
  imperialism: 0,
  revolutionary: 0,
  nationalist: 0,
  interventionist: 0
};

const colors = [
  "#1b5e20",
  "#2e7d32",
  "#66bb6a",
  "#9e9e9e",
  "#ef9a9a",
  "#e53935",
  "#b71c1c"
];

function loadQuestion() {
  const q = questions[current];

  document.getElementById("question").innerText =
    `Who do you support in the ${q.war}? (${q.year})`;

  document.getElementById("progress").innerText =
    `Question ${current + 1} of ${questions.length}`;

  const container = document.getElementById("answers");
  container.innerHTML = "";

  const labels = [
    `Strongly support ${q.sides.A.name}`,
    `Somewhat support ${q.sides.A.name}`,
    `Slightly support ${q.sides.A.name}`,
    "Neutral",
    `Slightly support ${q.sides.B.name}`,
    `Somewhat support ${q.sides.B.name}`,
    `Strongly support ${q.sides.B.name}`
  ];

  labels.forEach((text, index) => {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.style.background = colors[index];

    btn.onclick = () => {
      applyScore(q, index);
      current++;

      if (current < questions.length) {
        loadQuestion();
      } else {
        showResults();
      }
    };

    container.appendChild(btn);
  });

  const summaryEl = document.createElement("p");
  summaryEl.innerText = q.summary;
  summaryEl.style.cssText = "margin-top: 20px; font-size: 13px; color: #555; line-height: 1.6; border-top: 1px solid #ddd; padding-top: 12px;";
  container.appendChild(summaryEl);
}

function applyScore(q, index) {
  if (index === 3) return;

  const side = index < 3 ? "A" : "B";
  const data = q.sides[side].scores;

  const multipliers = [1, 0.67, 0.33, 0, 0.33, 0.67, 1];
  const multiplier = multipliers[index];

  for (let key in data) {
    scores[key] += data[key] * multiplier;
  }
}

function toPercent(value, max) {
  let percent = ((value + max) / (2 * max)) * 100;
  return Math.max(0, Math.min(100, percent));
}

function showResults() {
  const max = questions.length * 2;

  const leftRightPct = toPercent(scores.leftRight, max);
  const imperialismPct = toPercent(scores.imperialism, max);
  const revolutionaryPct = toPercent(scores.revolutionary, max);
  const nationalistPct = toPercent(scores.nationalist, max);
  const interventionistPct = toPercent(scores.interventionist, max);

  const ideologies = [
    { name: "Bolshevism",               scores: { leftRight: -2, imperialism: -1, revolutionary: 2,  nationalist: -1, interventionist: 1  }},
    { name: "Trotskyism",               scores: { leftRight: -2, imperialism: -2, revolutionary: 2,  nationalist: -2, interventionist: 2  }},
    { name: "Maoism",                   scores: { leftRight: -2, imperialism: -2, revolutionary: 2,  nationalist: 1,  interventionist: -1 }},
    { name: "Marxism",                  scores: { leftRight: -2, imperialism: -2, revolutionary: 2,  nationalist: -1, interventionist: 0  }},
    { name: "Strasserism",              scores: { leftRight: 0,  imperialism: -1, revolutionary: 2,  nationalist: 2,  interventionist: 1  }},
    { name: "National Bolshevism",      scores: { leftRight: 0,  imperialism: 0,  revolutionary: 1,  nationalist: 2,  interventionist: 1  }},
    { name: "Classical Fascism",        scores: { leftRight: 1,  imperialism: 2,  revolutionary: 2,  nationalist: 2,  interventionist: 2  }},
    { name: "National Socialism",       scores: { leftRight: 1,  imperialism: 1,  revolutionary: 2,  nationalist: 2,  interventionist: 2  }},
    { name: "Falangism",                scores: { leftRight: 1,  imperialism: 0,  revolutionary: -1, nationalist: 2,  interventionist: 1  }},
    { name: "Clerical Fascism",         scores: { leftRight: 1,  imperialism: 0,  revolutionary: -2, nationalist: 2,  interventionist: 0  }},
    { name: "Social Democracy",         scores: { leftRight: -1, imperialism: -1, revolutionary: 0,  nationalist: 0,  interventionist: 0  }},
    { name: "Liberal Internationalism", scores: { leftRight: 0,  imperialism: 0,  revolutionary: 0,  nationalist: -1, interventionist: 2  }},
    { name: "Centrism",                 scores: { leftRight: 0,  imperialism: 0,  revolutionary: 0,  nationalist: 0,  interventionist: 0  }},
    { name: "Liberal Conservatism",     scores: { leftRight: 1,  imperialism: 1,  revolutionary: -1, nationalist: 0,  interventionist: 1  }},
    { name: "Christian Democracy",      scores: { leftRight: 1,  imperialism: -1, revolutionary: -1, nationalist: 1,  interventionist: 0  }},
    { name: "Classical Conservatism",   scores: { leftRight: 1,  imperialism: 0,  revolutionary: -2, nationalist: 1,  interventionist: -1 }},
    { name: "Reactionary",              scores: { leftRight: 2,  imperialism: 0,  revolutionary: -2, nationalist: 1,  interventionist: -1 }},
    { name: "Paleoconservatism",        scores: { leftRight: 1,  imperialism: -2, revolutionary: -1, nationalist: 2,  interventionist: -2 }},
    { name: "Libertarianism",           scores: { leftRight: 1,  imperialism: -2, revolutionary: 0,  nationalist: 0,  interventionist: -2 }},
    { name: "Neoconservatism",          scores: { leftRight: 1,  imperialism: 2,  revolutionary: 0,  nationalist: 0,  interventionist: 2  }},
    { name: "Neoliberalism",            scores: { leftRight: 1,  imperialism: 1,  revolutionary: 0,  nationalist: -1, interventionist: 1  }},
  ];

  const axisKeys = ["leftRight", "imperialism", "revolutionary", "nationalist", "interventionist"];

  const userScoresNorm = {
    leftRight:       (leftRightPct / 50) - 1,
    imperialism:     (imperialismPct / 50) - 1,
    revolutionary:   (revolutionaryPct / 50) - 1,
    nationalist:     (nationalistPct / 50) - 1,
    interventionist: (interventionistPct / 50) - 1
  };

  const ranked = ideologies.map(ideology => {
    const distance = axisKeys.reduce((sum, key) => {
      const ideologyNorm = ideology.scores[key] / 2;
      const diff = userScoresNorm[key] - ideologyNorm;
      return sum + diff * diff;
    }, 0);
    return { name: ideology.name, distance };
  }).sort((a, b) => a.distance - b.distance);

  const top3 = ranked.slice(0, 3);

  function axisLabel(pct, leftLabel, rightLabel) {
    if (pct > 60) return leftLabel;
    if (pct < 40) return rightLabel;
    return "Balanced";
  }

  function makeBar(pct, leftColor, rightColor, leftLabel, rightLabel) {
    const right = (100 - pct).toFixed(1);
    const left = pct.toFixed(1);
    return `
      <div class="wv-axis-title">
        ${leftLabel} Axis: <span>${axisLabel(pct, leftLabel, rightLabel)}</span>
      </div>
      <div class="wv-bar-row">
        <div class="wv-label-left">${leftLabel}</div>
        <div class="wv-bar-wrap">
          <div class="wv-bar-a" style="width:${left}%; background:${leftColor};">${left}%</div>
          <div class="wv-bar-b" style="width:${right}%; background:${rightColor};">${right}%</div>
        </div>
        <div class="wv-label-right">${rightLabel}</div>
      </div>
    `;
  }

  document.getElementById("question").innerText = "Results";
  document.getElementById("progress").innerText = "Finished";

  document.getElementById("answers").innerHTML = `
    <div class="wv-results">
      <div class="wv-axis">${makeBar(leftRightPct, "#c0392b", "#3498db", "Right", "Left")}</div>
      <div class="wv-axis">${makeBar(imperialismPct, "#8e44ad", "#27ae60", "Imperialism", "Anti-Imperialism")}</div>
      <div class="wv-axis">${makeBar(revolutionaryPct, "#e74c3c", "#2c3e50", "Revolutionary", "Counterrevolutionary")}</div>
      <div class="wv-axis">${makeBar(nationalistPct, "#e67e22", "#16a085", "Nationalist", "Internationalist")}</div>
      <div class="wv-axis">${makeBar(interventionistPct, "#c0392b", "#7f8c8d", "Interventionist", "Isolationist")}</div>
      <div style="margin-top:1.5rem; padding:1rem; border:0.5px solid #ccc; border-radius:8px; background:#f9f9f9;">
        <div style="font-size:13px; color:#666; margin-bottom:8px;">Closest Ideological Matches</div>
        <div style="font-size:20px; font-weight:700; color:#111;">🥇 ${top3[0].name}</div>
        <div style="font-size:16px; color:#333; margin-top:6px;">🥈 ${top3[1].name}</div>
        <div style="font-size:14px; color:#555; margin-top:6px;">🥉 ${top3[2].name}</div>
      </div>
    </div>
  `;
}

window.onload = loadQuestion;
