const questions = [
  {
    war: "Second Boer War",
    year: 1900,
    importance: 3,
    summary: "The Second Boer War was fought between the British Empire and two independent Boer republics, the South African Republic and the Orange Free State, over British attempts to dominate southern Africa and control its gold and diamond resources. The Boers sought to maintain their independence while Britain aimed to incorporate the republics into its empire. Britain ultimately won, annexing both republics, though the war was marked by guerrilla warfare and British concentration camps that caused widespread Boer civilian deaths.",
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 3, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Boers", scores: { leftRight: 2, imperialism: -3, revolutionary: 0, nationalist: 3, interventionist: -2 } }
    }
  },
  {
    war: "Boxer Rebellion",
    year: 1900,
    importance: 2.5,
    summary: "The Boxer Rebellion was an anti-foreign, anti-colonial uprising in China led by the Boxer movement, who sought to expel foreign influence and Christian missionaries from China. The Eight-Nation Alliance of Western powers and Japan intervened militarily to relieve their besieged legations in Beijing. The alliance defeated the Boxers and the Qing government, imposing the humiliating Boxer Protocol which forced China to pay massive reparations and allow foreign troops on Chinese soil.",
    sides: {
      A: { name: "Eight-Nation Alliance", scores: { leftRight: 2, imperialism: 3, revolutionary: -2, nationalist: 0, interventionist: 3 } },
      B: { name: "Qing China & Boxers", scores: { leftRight: 0, imperialism: -3, revolutionary: 1, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Anglo-Aro War",
    year: 1901,
    importance: 1.5,
    summary: "The Anglo-Aro War was fought between the British Empire and the Aro Confederacy, a powerful trading network in present-day southeastern Nigeria. Britain sought to dismantle the Aro long juju oracle system which controlled regional trade and to open the area to British commerce and administration. Britain won decisively, destroying the Aro Confederacy and incorporating the region into the British protectorate of Southern Nigeria.",
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 3, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Aro Confederacy", scores: { leftRight: 0, imperialism: -3, revolutionary: 0, nationalist: 3, interventionist: -2 } }
    }
  },
  {
    war: "British Expedition to Tibet",
    year: 1903,
    importance: 1.5,
    summary: "The British Expedition to Tibet was a military mission launched by British India under Colonel Francis Younghusband, motivated by British fears of growing Russian influence in Tibet and a desire to establish trade relations. Tibet sought to maintain its traditional isolation and autonomy from foreign powers. The expedition reached Lhasa and forced Tibet to sign the Lhasa Convention, opening trade and establishing British influence in the region.",
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 3, revolutionary: 0, nationalist: -1, interventionist: 3 } },
      B: { name: "Tibet", scores: { leftRight: 0, imperialism: -3, revolutionary: 0, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Russo-Japanese War",
    year: 1904,
    importance: 2.5,
    summary: "The Russo-Japanese War was fought between the Russian Empire and Japan over competing imperial ambitions in Manchuria and Korea. Russia sought warm-water ports and expansion into East Asia, while Japan sought to establish dominance over Korea and prevent Russian encroachment on its sphere of influence. Japan won a decisive victory, becoming the first Asian power to defeat a major European nation in modern times, and gained control over Korea and parts of Manchuria.",
    sides: {
      A: { name: "Tsarist Russia", scores: { leftRight: 3, imperialism: 2, revolutionary: -2, nationalist: 1, interventionist: 2 } },
      B: { name: "Japan", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: 2, interventionist: 2 } }
    }
  },
  {
    war: "Madagascar War",
    year: 1904,
    importance: 1.5,
    summary: "The Madagascar War refers to the French suppression of the Menalamba uprising, a resistance movement against French colonial rule established after France annexed Madagascar in 1896. The Malagasy fighters sought to restore the Merina monarchy and expel the French, while France sought to consolidate its colonial administration. France suppressed the rebellion, maintaining its colonial control over the island.",
    sides: {
      A: { name: "France", scores: { leftRight: 1, imperialism: 3, revolutionary: 0, nationalist: -1, interventionist: 2 } },
      B: { name: "Madagascar", scores: { leftRight: 0, imperialism: -3, revolutionary: 1, nationalist: 3, interventionist: -2 } }
    }
  },
  {
    war: "Italo-Turkish War",
    year: 1911,
    importance: 1.5,
    summary: "The Italo-Turkish War was fought between Italy and the Ottoman Empire over the territory of Libya, which Italy sought to colonize as part of its imperial ambitions in North Africa. The Ottomans sought to retain their North African territories, while Italy argued the region was strategically vital and economically underdeveloped under Ottoman rule. Italy won the war, gaining Libya and the Dodecanese islands, and the Ottoman Empire's weakness encouraged the Balkan states to launch the First Balkan War shortly after.",
    sides: {
      A: { name: "Italy", scores: { leftRight: 1, imperialism: 3, revolutionary: 0, nationalist: 2, interventionist: 3 } },
      B: { name: "Ottomans", scores: { leftRight: 1, imperialism: -1, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "First Balkan War",
    year: 1912,
    importance: 2,
    summary: "The First Balkan War was fought between the Balkan League — Bulgaria, Serbia, Greece, and Montenegro — and the Ottoman Empire over the liberation of Ottoman-held territories in the Balkans. The Balkan states sought to expel the Ottomans from Europe and gain territory, while the Ottomans sought to retain their European possessions. The Balkan League won decisively, with the Ottomans losing almost all of their European territory.",
    sides: {
      A: { name: "Balkan League", scores: { leftRight: 0, imperialism: 0, revolutionary: 1, nationalist: 3, interventionist: 1 } },
      B: { name: "Ottomans", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 1, interventionist: -1 } }
    }
  },
  {
    war: "Second Balkan War",
    year: 1913,
    importance: 1.5,
    summary: "The Second Balkan War broke out when Bulgaria, dissatisfied with its share of the territories gained in the First Balkan War, attacked its former allies Serbia and Greece. Romania and the Ottoman Empire joined against Bulgaria, seeking territorial gains of their own. Bulgaria was defeated and forced to cede significant territories to its neighbors under the Treaty of Bucharest.",
    sides: {
      A: { name: "Bulgaria", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 3, interventionist: 1 } },
      B: { name: "Serbia/Greece/Romania", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 3, interventionist: 1 } }
    }
  },
  {
    war: "Serbian Campaign",
    year: 1914,
    importance: 2,
    summary: "The Serbian Campaign began when Austria-Hungary issued an ultimatum to Serbia following the assassination of Archduke Franz Ferdinand by a Bosnian-Serb nationalist. Austria-Hungary sought to crush Serbian nationalism and assert dominance in the Balkans, while Serbia sought to maintain its sovereignty. Serbia initially repelled the Austro-Hungarian invasion but was eventually overrun in 1915 when Bulgaria joined the Central Powers.",
    sides: {
      A: { name: "Austria-Hungary", scores: { leftRight: 2, imperialism: 2, revolutionary: -2, nationalist: 1, interventionist: 3 } },
      B: { name: "Serbia", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Invasion of Belgium",
    year: 1914,
    importance: 2.5,
    summary: "Germany invaded neutral Belgium as part of the Schlieffen Plan, a strategy to quickly defeat France by sweeping through Belgium before turning to face Russia. Belgium sought to defend its guaranteed neutrality and sovereignty, while Germany argued military necessity overrode Belgian neutrality. Belgium's resistance slowed the German advance and Britain used the invasion as justification to enter the war.",
    sides: {
      A: { name: "Germany", scores: { leftRight: 2, imperialism: 2, revolutionary: -2, nationalist: 2, interventionist: 3 } },
      B: { name: "Belgium", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Western Front",
    year: 1914,
    importance: 4,
    summary: "The Western Front was the primary theatre of World War I, stretching from the English Channel to Switzerland, where Germany fought France and Britain in brutal trench warfare for four years. Germany sought to dominate Western Europe, while France and Britain sought to repel the invasion and restore Belgian sovereignty. The Allied powers ultimately prevailed following the entry of the United States in 1917 and the collapse of German morale in 1918.",
    sides: {
      A: { name: "Germany", scores: { leftRight: 2, imperialism: 2, revolutionary: -2, nationalist: 2, interventionist: 3 } },
      B: { name: "France", scores: { leftRight: 1, imperialism: 1, revolutionary: 0, nationalist: 2, interventionist: 2 } }
    }
  },
  {
    war: "Caucasus Campaign",
    year: 1914,
    importance: 2,
    summary: "The Caucasus Campaign was fought between the Ottoman Empire and Russia along their shared border in the Caucasus region during World War I. The Ottomans sought to expand into Russian-held Caucasian territories and cut off Russian supply lines, while Russia sought to protect its southern borders and potentially gain Ottoman Armenian territories. Russia largely prevailed on the Caucasian front, though the campaign was marked by the Ottoman genocide of Armenians.",
    sides: {
      A: { name: "Ottomans", scores: { leftRight: 2, imperialism: 2, revolutionary: -2, nationalist: 2, interventionist: 2 } },
      B: { name: "Russia", scores: { leftRight: 2, imperialism: 2, revolutionary: -2, nationalist: 1, interventionist: 2 } }
    }
  },
  {
    war: "Mesopotamia Campaign",
    year: 1914,
    importance: 2,
    summary: "The Mesopotamia Campaign was fought between Britain and the Ottoman Empire in present-day Iraq, with Britain seeking to protect its oil interests and the route to India while also striking at Ottoman territory. The Ottomans sought to defend their Arab provinces and inflicted a major British defeat at the Siege of Kut in 1916. Britain ultimately prevailed, capturing Baghdad in 1917 and occupying most of Mesopotamia by the end of the war.",
    sides: {
      A: { name: "Ottomans", scores: { leftRight: 2, imperialism: 2, revolutionary: -2, nationalist: 2, interventionist: 2 } },
      B: { name: "Britain", scores: { leftRight: 2, imperialism: 2, revolutionary: -2, nationalist: 1, interventionist: 2 } }
    }
  },
  {
    war: "Mexican Revolution",
    year: 1914,
    importance: 3,
    summary: "The United States intervened militarily in Mexico during the Mexican Revolution, occupying the port of Veracruz in 1914 and launching the Punitive Expedition against Pancho Villa in 1916. The US sought to protect American interests and influence the outcome of the revolution, while Mexican factions across the political spectrum united in opposition to foreign intervention. The US ultimately withdrew without achieving its objectives, and Mexico established a new constitution in 1917.",
    sides: {
      A: { name: "United States", scores: { leftRight: 1, imperialism: 3, revolutionary: -2, nationalist: 0, interventionist: 3 } },
      B: { name: "Mexico", scores: { leftRight: -2, imperialism: -2, revolutionary: 3, nationalist: 2, interventionist: -3 } }
    }
  },
  {
    war: "Siege of Tsingtao",
    year: 1914,
    importance: 1.5,
    summary: "The Siege of Tsingtao was a military operation in which Japan and Britain attacked the German colonial possession of Tsingtao in China at the outset of World War I. Japan sought to seize German Pacific territories and expand its influence in China, while Germany sought to defend its Far Eastern colonial base. Japan captured Tsingtao after a brief siege, gaining control of German possessions in the Pacific and Shandong peninsula.",
    sides: {
      A: { name: "Germany", scores: { leftRight: 2, imperialism: 2, revolutionary: -2, nationalist: 2, interventionist: 3 } },
      B: { name: "Japan", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: 2, interventionist: 2 } }
    }
  },
  {
    war: "Arab Revolt",
    year: 1916,
    importance: 3,
    summary: "The Arab Revolt was an uprising by Arab nationalist forces under Sharif Hussein of Mecca against Ottoman rule during World War I, supported by Britain with promises of Arab independence. The Arabs sought to establish an independent Arab state across the Middle East, while the Ottomans sought to suppress the revolt and maintain control of their Arab provinces. The revolt succeeded militarily but Arabs were denied independence as Britain and France secretly agreed to divide the region under the Sykes-Picot Agreement.",
    sides: {
      A: { name: "Ottomans", scores: { leftRight: 2, imperialism: 2, revolutionary: -2, nationalist: -2, interventionist: -2 } },
      B: { name: "Arabs", scores: { leftRight: 0, imperialism: -3, revolutionary: 2, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Senussi Campaign",
    year: 1916,
    importance: 1.5,
    summary: "The Senussi Campaign was fought between Britain and the Senussi Muslim Brotherhood in western Egypt and Libya during World War I, after the Ottomans and Germans encouraged the Senussi to attack British-held Egypt. The Senussi sought to expel British influence from the region and align with the Central Powers, while Britain sought to protect its position in Egypt and the Suez Canal. Britain defeated the Senussi forces and neutralized the threat to Egypt.",
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 3, revolutionary: -1, nationalist: -1, interventionist: 3 } },
      B: { name: "Senussi", scores: { leftRight: 1, imperialism: -3, revolutionary: 1, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Russian Revolution",
    year: 1917,
    importance: 5,
    summary: "The Russian Civil War followed the Bolshevik seizure of power in 1917, pitting the Red Army of the Soviet government against the White Army, a loose coalition of monarchists, liberals, and anti-communist forces supported by foreign intervention. The Bolsheviks sought to consolidate their socialist revolution, while the Whites sought to restore order and reverse the revolution. The Bolsheviks won, establishing the Soviet Union and cementing communist rule over Russia.",
    sides: {
      A: { name: "White Russia", scores: { leftRight: 3, imperialism: 0, revolutionary: -3, nationalist: 2, interventionist: -2 } },
      B: { name: "Soviets", scores: { leftRight: -3, imperialism: 0, revolutionary: 3, nationalist: -2, interventionist: 2 } }
    }
  },
  {
    war: "Polish-Soviet War",
    year: 1919,
    importance: 5,
    summary: "The Polish-Soviet War was fought between newly independent Poland and Soviet Russia, with the Soviets seeking to spread revolution westward into Europe and Poland seeking to establish secure borders and reclaim historical eastern territories. Poland under Józef Piłsudski launched an offensive into Ukraine, but a Soviet counteroffensive nearly reached Warsaw before being repelled in the Battle of Warsaw. Poland won, securing its eastern borders under the Peace of Riga.",
    sides: {
      A: { name: "Soviet Russia", scores: { leftRight: -3, imperialism: 2, revolutionary: 3, nationalist: -2, interventionist: 3 } },
      B: { name: "Poland", scores: { leftRight: 3, imperialism: -2, revolutionary: -2, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Greco-Turkish War",
    year: 1919,
    importance: 2,
    summary: "The Greco-Turkish War was fought between Greece and the Turkish nationalist movement following World War I, as Greece sought to incorporate western Anatolia with its large Greek population into a Greater Greece. The Turkish nationalists under Mustafa Kemal sought to establish an independent Turkish state and expel Greek forces from Anatolia. Turkey won decisively, resulting in a massive population exchange that ended the millennia-old Greek presence in Anatolia.",
    sides: {
      A: { name: "Greece", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: 3, interventionist: 3 } },
      B: { name: "Turkey", scores: { leftRight: 0, imperialism: -2, revolutionary: 2, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Turkish-Armenian War",
    year: 1920,
    importance: 2,
    summary: "The Turkish-Armenian War was fought between the Turkish nationalist forces and the First Republic of Armenia over disputed territories in eastern Anatolia. Turkey sought to eliminate Armenian territorial claims and consolidate control over eastern Anatolia, while Armenia sought to secure its borders and protect Armenian populations. Turkey defeated Armenia, forcing it to cede large territories, and Armenia was subsequently absorbed into the Soviet Union.",
    sides: {
      A: { name: "Turkey", scores: { leftRight: 1, imperialism: 2, revolutionary: 1, nationalist: 3, interventionist: 2 } },
      B: { name: "Armenia", scores: { leftRight: 0, imperialism: -2, revolutionary: 0, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Franco-Turkish War",
    year: 1920,
    importance: 2,
    summary: "The Franco-Turkish War was fought between France and the Turkish nationalist movement over the control of Cilicia in southern Anatolia following World War I. France sought to establish a mandate over the region and protect Armenian refugees, while Turkish nationalists sought to expel foreign forces and incorporate Cilicia into the new Turkish state. France ultimately withdrew from Cilicia, recognizing Turkish sovereignty over the region in the Treaty of Ankara.",
    sides: {
      A: { name: "France", scores: { leftRight: 1, imperialism: 3, revolutionary: -1, nationalist: -1, interventionist: 3 } },
      B: { name: "Turkey", scores: { leftRight: 0, imperialism: -2, revolutionary: 2, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Irish War of Independence",
    year: 1919,
    importance: 3,
    summary: "The Irish War of Independence was a guerrilla conflict fought between the Irish Republican Army (IRA) and British security forces in Ireland. The IRA sought to establish an independent Irish Republic, while Britain sought to maintain its rule over Ireland. The war ended with the Anglo-Irish Treaty, which established the Irish Free State as a self-governing dominion within the British Empire, while Northern Ireland remained part of the United Kingdom.",
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 3, revolutionary: -2, nationalist: -2, interventionist: 3 } },
      B: { name: "Irish Republicans", scores: { leftRight: 0, imperialism: -3, revolutionary: 2, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Chinese Civil War",
    year: 1927,
    importance: 5,
    summary: "The Chinese Civil War was fought between the Kuomintang-led government of the Republic of China and the Chinese Communist Party for control over China. The KMT sought to unify China under a nationalist government, while the CCP sought to establish a communist state through rural revolution. The conflict was interrupted by the Second Sino-Japanese War but resumed after Japan's defeat, ultimately resulting in a CCP victory and the establishment of the People's Republic of China.",
    sides: {
      A: { name: "Nationalists", scores: { leftRight: 3, imperialism: 0, revolutionary: -2, nationalist: 3, interventionist: 0 } },
      B: { name: "Communists", scores: { leftRight: -3, imperialism: 0, revolutionary: 3, nationalist: 2, interventionist: 0 } }
    }
  },
  {
    war: "Great Syrian Revolt",
    year: 1925,
    importance: 2.5,
    summary: "The Great Syrian Revolt was a major uprising against the French Mandate for Syria and the Lebanon, led by Druze and nationalist leaders. The rebels sought to end French colonial rule and establish an independent, unified Syrian state, while France sought to maintain its mandate and suppress the insurgency. France ultimately suppressed the revolt through heavy military force, though it led to some political concessions and the eventual path toward Syrian independence.",
    sides: {
      A: { name: "France", scores: { leftRight: 1, imperialism: 3, revolutionary: -1, nationalist: -1, interventionist: 3 } },
      B: { name: "Syrian Rebels", scores: { leftRight: 0, imperialism: -3, revolutionary: 2, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Great Arab Revolt in Palestine",
    year: 1936,
    importance: 2.5,
    summary: "The 1936–1939 Arab revolt in Palestine was a nationalist uprising by Palestinian Arabs against the British Mandate administration, demanding Arab independence and an end to Jewish immigration. The rebels sought to end British rule and prevent the establishment of a Jewish national home, while Britain sought to maintain order and its mandate obligations. Britain suppressed the revolt with significant force, but it led to the 1939 White Paper which restricted Jewish immigration.",
    sides: {
      A: { name: "British Mandate", scores: { leftRight: 1, imperialism: 3, revolutionary: -1, nationalist: -1, interventionist: 3 } },
      B: { name: "Arab Rebels", scores: { leftRight: 0, imperialism: -3, revolutionary: 2, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Spanish Civil War",
    year: 1936,
    importance: 5,
    summary: "The Spanish Civil War was fought between the Republican government, a coalition of left-wing and liberal parties, and the Nationalists, a right-wing rebel group led by General Francisco Franco. The Republicans sought to defend the democratic Second Spanish Republic and its social reforms, while the Nationalists sought to overthrow the government and establish a traditionalist, authoritarian state. The Nationalists won with support from Nazi Germany and Fascist Italy, leading to Franco's long dictatorship.",
    sides: {
      A: { name: "Republicans", scores: { leftRight: -3, imperialism: 0, revolutionary: 3, nationalist: -2, interventionist: 2 } },
      B: { name: "Nationalists", scores: { leftRight: 3, imperialism: 0, revolutionary: -3, nationalist: 3, interventionist: -2 } }
    }
  },
  {
    war: "Second Sino-Japanese War",
    year: 1937,
    importance: 4,
    summary: "The Second Sino-Japanese War began with a full-scale Japanese invasion of China, seeking to expand its empire and secure resources. China, led by the Kuomintang and supported by the Communists in a United Front, sought to defend its sovereignty and repel the invaders. The war became part of World War II, and Japan was ultimately defeated following the intervention of the United States and the Soviet Union in 1945.",
    sides: {
      A: { name: "Japan", scores: { leftRight: 2, imperialism: 3, revolutionary: -1, nationalist: 3, interventionist: 3 } },
      B: { name: "China", scores: { leftRight: 2, imperialism: -3, revolutionary: 1, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Second Italo-Ethiopian War",
    year: 1935,
    importance: 2.5,
    summary: "The Second Italo-Ethiopian War was an unprovoked invasion of Ethiopia by Fascist Italy, seeking to expand its colonial empire and avenge a previous defeat. Ethiopia sought to maintain its independence as one of the few uncolonized African nations, while Italy used modern weaponry and chemical agents to achieve a rapid victory. Italy annexed Ethiopia, though the occupation was never fully consolidated and ended during World War II.",
    sides: {
      A: { name: "Italy", scores: { leftRight: 2, imperialism: 3, revolutionary: -1, nationalist: 3, interventionist: 3 } },
      B: { name: "Abyssinia", scores: { leftRight: 0, imperialism: -3, revolutionary: 0, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Winter War",
    year: 1939,
    importance: 5,
    summary: "The Winter War began when the Soviet Union invaded Finland, seeking to gain Finnish territory and establish a buffer zone around Leningrad. Finland sought to defend its sovereignty and neutrality against the much larger Soviet forces. Despite significant territorial losses, Finland maintained its independence and inflicted heavy casualties on the Red Army, while the Soviet Union was expelled from the League of Nations for the invasion.",
    sides: {
      A: { name: "Soviet Union", scores: { leftRight: -3, imperialism: 3, revolutionary: 2, nationalist: -2, interventionist: 3 } },
      B: { name: "Finland", scores: { leftRight: 3, imperialism: -2, revolutionary: -2, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Invasion of Poland",
    year: 1939,
    importance: 5,
    summary: "Germany and the Soviet Union invaded Poland in 1939, marking the beginning of World War II, following the secret Molotov-Ribbentrop Pact to divide Eastern Europe. Poland sought to defend its independence and territorial integrity against the dual invasion. Germany and the Soviet Union rapidly overran Poland, partitioning the country and beginning a brutal occupation that lasted until the end of the war.",
    sides: {
      A: { name: "Germany / USSR", scores: { leftRight: 0, imperialism: 3, revolutionary: 0, nationalist: 2, interventionist: 3 } },
      B: { name: "Poland", scores: { leftRight: 3, imperialism: -2, revolutionary: -2, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Fall of France",
    year: 1940,
    importance: 4,
    summary: "Germany invaded France and the Low Countries in 1940, using Blitzkrieg tactics to rapidly bypass the Maginot Line and defeat the French army. France sought to defend its territory and the democratic order in Europe, while Germany sought to dominate the continent and avenge its defeat in World War I. France surrendered within six weeks, leading to the establishment of the Vichy regime and the German occupation of northern France.",
    sides: {
      A: { name: "Germany", scores: { leftRight: 2, imperialism: 3, revolutionary: 2, nationalist: 3, interventionist: 3 } },
      B: { name: "France", scores: { leftRight: 2, imperialism: 1, revolutionary: -1, nationalist: 2, interventionist: 2 } }
    }
  },
  {
    war: "Greco-Italian War",
    year: 1940,
    importance: 2.5,
    summary: "Italy invaded Greece from occupied Albania, seeking a quick victory to demonstrate its military prowess to its ally Germany. Greece, under the authoritarian but anti-fascist government of Ioannis Metaxas, sought to defend its sovereignty and successfully repelled the Italian invasion, pushing Italian forces back into Albania. The Greek victory was the first Allied land success of the war, though Germany subsequently intervened to defeat Greece in 1941.",
    sides: {
      A: { name: "Italy", scores: { leftRight: 2, imperialism: 3, revolutionary: -1, nationalist: 3, interventionist: 3 } },
      B: { name: "Greece", scores: { leftRight: 3, imperialism: -2, revolutionary: -2, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Operation Barbarossa",
    year: 1941,
    importance: 5,
    summary: "Operation Barbarossa was the massive German invasion of the Soviet Union, seeking to destroy the Soviet state, seize its resources, and eliminate the threat of 'Judeo-Bolshevism'. The Soviet Union sought to defend its territory and the communist system against the Nazi onslaught. The invasion opened the Eastern Front, the largest and most brutal theatre of World War II, which ultimately led to the destruction of the Third Reich.",
    sides: {
      A: { name: "Germany", scores: { leftRight: 2, imperialism: 3, revolutionary: 2, nationalist: 3, interventionist: 3 } },
      B: { name: "Soviet Union", scores: { leftRight: -3, imperialism: 1, revolutionary: 2, nationalist: 2, interventionist: 2 } }
    }
  },
  {
    war: "Pacific War",
    year: 1941,
    importance: 4,
    summary: "The Pacific War began with the Japanese attack on Pearl Harbor, as Japan sought to eliminate the US Pacific Fleet and secure a vast empire in East Asia and the Pacific. The United States and its allies sought to repel Japanese aggression and restore the pre-war colonial and international order. The war ended with the atomic bombings of Hiroshima and Nagasaki and Japan's unconditional surrender in 1945.",
    sides: {
      A: { name: "United States", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: 1, interventionist: 3 } },
      B: { name: "Japan", scores: { leftRight: 2, imperialism: 3, revolutionary: 0, nationalist: 3, interventionist: 3 } }
    }
  },
  {
    war: "Western Allied Campaign",
    year: 1944,
    importance: 4,
    summary: "The Western Allied Campaign began with the D-Day landings in Normandy, as the US, Britain, and their allies sought to liberate Western Europe from Nazi occupation. Germany sought to defend its 'Fortress Europe' and maintain its continental empire. The Allied advance led to the liberation of France and the eventual invasion of Germany, culminating in the end of the war in Europe in May 1945.",
    sides: {
      A: { name: "Germany", scores: { leftRight: 2, imperialism: 2, revolutionary: 2, nationalist: 3, interventionist: 3 } },
      B: { name: "Allies", scores: { leftRight: 1, imperialism: 1, revolutionary: 0, nationalist: 1, interventionist: 3 } }
    }
  },
  {
    war: "Italian Campaign",
    year: 1943,
    importance: 3,
    summary: "The Italian Campaign began with the Allied invasion of Sicily and then the Italian mainland, seeking to knock Italy out of the war and open a second front in Europe. The Italian government surrendered and joined the Allies, while Germany occupied northern Italy and established a puppet fascist state. The campaign was a slow and brutal struggle through mountainous terrain that lasted until the end of the war.",
    sides: {
      A: { name: "Germany / RSI", scores: { leftRight: 2, imperialism: 2, revolutionary: 2, nationalist: 3, interventionist: 3 } },
      B: { name: "Allies", scores: { leftRight: 1, imperialism: 1, revolutionary: 0, nationalist: 1, interventionist: 3 } }
    }
  },
  {
    war: "Chinese Civil War",
    year: 1946,
    importance: 5,
    summary: "Following Japan's defeat, the Chinese Civil War resumed between the Nationalists and the Communists for control of China. The Nationalists sought to maintain their government and unify the country under a republican system, while the Communists sought to establish a socialist state through land reform and military victory. The Communists ultimately won, forcing the Nationalists to retreat to Taiwan and establishing the People's Republic of China in 1949.",
    sides: {
      A: { name: "Nationalists", scores: { leftRight: 3, imperialism: 0, revolutionary: -2, nationalist: 3, interventionist: 0 } },
      B: { name: "Communists", scores: { leftRight: -3, imperialism: 0, revolutionary: 3, nationalist: 2, interventionist: 0 } }
    }
  },
  {
    war: "First Indochina War",
    year: 1946,
    importance: 4,
    summary: "The First Indochina War was fought between France and the Viet Minh, a communist-led nationalist movement seeking independence for Vietnam. France sought to restore its colonial rule in Indochina following World War II, while the Viet Minh sought to establish an independent socialist state. The war ended with a decisive Viet Minh victory at Dien Bien Phu, leading to the Geneva Accords which partitioned Vietnam and ended French rule in Indochina.",
    sides: {
      A: { name: "France", scores: { leftRight: 1, imperialism: 3, revolutionary: -2, nationalist: -2, interventionist: 3 } },
      B: { name: "Viet Minh", scores: { leftRight: -3, imperialism: -3, revolutionary: 3, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Greek Civil War",
    year: 1946,
    importance: 4,
    summary: "The Greek Civil War was fought between the US-backed Greek government and the communist-led Democratic Army of Greece. The government sought to maintain the existing social order and prevent a communist takeover, while the communists sought to establish a socialist state following their role in the resistance against Nazi occupation. The government won with significant US military aid under the Truman Doctrine, cementing Greece's place in the Western bloc.",
    sides: {
      A: { name: "Greek Government", scores: { leftRight: 3, imperialism: 0, revolutionary: -2, nationalist: 2, interventionist: 2 } },
      B: { name: "Communists", scores: { leftRight: -3, imperialism: 0, revolutionary: 3, nationalist: 1, interventionist: 1 } }
    }
  },
  {
    war: "Malayan Emergency",
    year: 1948,
    importance: 3,
    summary: "The Malayan Emergency was a guerrilla war fought between British Commonwealth forces and the Malayan National Liberation Army, the armed wing of the Malayan Communist Party. The communists sought to end British colonial rule and establish a socialist state, while Britain sought to protect its economic interests and oversee a gradual transition to a pro-Western independent Malaya. Britain ultimately defeated the insurgency through a combination of military force and political reforms.",
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 3, revolutionary: -2, nationalist: -2, interventionist: 3 } },
      B: { name: "Malayan Communists", scores: { leftRight: -3, imperialism: -3, revolutionary: 3, nationalist: 2, interventionist: -3 } }
    }
  },
  {
    war: "Korean War",
    year: 1950,
    importance: 5,
    summary: "The Korean War began when North Korea invaded South Korea, seeking to unify the peninsula under communist rule. A US-led UN coalition intervened to defend South Korea, while China intervened to support the North. The war was a major conflict of the Cold War, resulting in millions of casualties and ending in an armistice that maintained the division of Korea at the 38th parallel.",
    sides: {
      A: { name: "North Korea", scores: { leftRight: -3, imperialism: 1, revolutionary: 3, nationalist: 2, interventionist: 2 } },
      B: { name: "South Korea", scores: { leftRight: 3, imperialism: 1, revolutionary: -2, nationalist: 2, interventionist: 2 } }
    }
  },
  {
    war: "Mau Mau Uprising",
    year: 1952,
    importance: 2.5,
    summary: "The Mau Mau Uprising was a militant nationalist movement in Kenya against British colonial rule and the displacement of Kikuyu people from their land. The Mau Mau sought to expel white settlers and achieve independence, while Britain sought to maintain its colonial administration and protect the interests of the settler community. Britain suppressed the uprising through a brutal counter-insurgency campaign, though it accelerated the path to Kenyan independence in 1963.",
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 3, revolutionary: -1, nationalist: -1, interventionist: 3 } },
      B: { name: "Mau Mau", scores: { leftRight: 0, imperialism: -3, revolutionary: 2, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Algerian War",
    year: 1954,
    importance: 4,
    summary: "The Algerian War was a major conflict for independence fought between France and the National Liberation Front (FLN). The FLN sought to end 132 years of French colonial rule and establish an independent Algerian state, while France sought to maintain Algeria as an integral part of the French Republic. The war was marked by guerrilla warfare and widespread use of torture, ultimately leading to Algerian independence in 1962 and the collapse of the French Fourth Republic.",
    sides: {
      A: { name: "France", scores: { leftRight: 1, imperialism: 3, revolutionary: -2, nationalist: -2, interventionist: 3 } },
      B: { name: "FLN", scores: { leftRight: -2, imperialism: -3, revolutionary: 3, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Vietnam War",
    year: 1955,
    importance: 5,
    summary: "The Vietnam War was a Cold War-era conflict between North Vietnam, supported by its communist allies, and South Vietnam, supported by the United States and other anti-communist nations. North Vietnam sought to unify the country under communist rule, while the US sought to prevent the spread of communism in Southeast Asia. The war ended with the withdrawal of US forces and the fall of Saigon to the North Vietnamese in 1975.",
    sides: {
      A: { name: "North Vietnam", scores: { leftRight: -3, imperialism: 1, revolutionary: 3, nationalist: 3, interventionist: 2 } },
      B: { name: "South Vietnam", scores: { leftRight: 3, imperialism: 1, revolutionary: -2, nationalist: 2, interventionist: 2 } }
    }
  },
  {
    war: "Hungarian Revolution",
    year: 1956,
    importance: 5,
    summary: "The Hungarian Revolution was a spontaneous nationwide uprising against the Soviet-imposed communist government of Hungary. The revolutionaries sought political reforms, neutrality, and the withdrawal of Soviet troops, while the Soviet Union sought to maintain its control over the Eastern Bloc. The Soviet military intervened and crushed the revolution, executing its leaders and restoring a pro-Soviet government.",
    sides: {
      A: { name: "Soviet Union", scores: { leftRight: -3, imperialism: 3, revolutionary: -2, nationalist: -2, interventionist: 3 } },
      B: { name: "Hungarian Revolutionaries", scores: { leftRight: 3, imperialism: -3, revolutionary: 2, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Suez Crisis",
    year: 1956,
    importance: 3,
    summary: "The Suez Crisis began when Egypt nationalized the Suez Canal, prompting a secret agreement between Britain, France, and Israel to invade Egypt and regain control of the canal. The invaders sought to protect their strategic and economic interests, while Egypt sought to assert its sovereignty and end foreign influence. The crisis ended after the US and Soviet Union pressured the invaders to withdraw, marking the decline of British and French global power.",
    sides: {
      A: { name: "Britain / France / Israel", scores: { leftRight: 1, imperialism: 3, revolutionary: -1, nationalist: 1, interventionist: 3 } },
      B: { name: "Egypt", scores: { leftRight: -2, imperialism: -3, revolutionary: 2, nationalist: 3, interventionist: -2 } }
    }
  },
  {
    war: "Laotian Civil War",
    year: 1959,
    importance: 3,
    summary: "The Laotian Civil War was a conflict between the Royal Lao Government, supported by the US, and the communist Pathet Lao, supported by North Vietnam and the Soviet Union. The Pathet Lao sought to establish a communist state in Laos, while the Royal government sought to maintain its authority and prevent communist expansion. The war was closely linked to the Vietnam War and ended with a communist victory in 1975.",
    sides: {
      A: { name: "Royal Lao Government", scores: { leftRight: 3, imperialism: 1, revolutionary: -2, nationalist: 2, interventionist: 2 } },
      B: { name: "Pathet Lao", scores: { leftRight: -3, imperialism: 1, revolutionary: 3, nationalist: 2, interventionist: 2 } }
    }
  },
  {
    war: "Congo Crisis",
    year: 1960,
    importance: 3,
    summary: "The Congo Crisis was a period of political upheaval and conflict following the independence of the Republic of the Congo from Belgium. The crisis involved a power struggle between the central government, secessionist movements in Katanga and South Kasai, and foreign intervention by Belgium and the UN. The crisis ended with the rise of Joseph-Désiré Mobutu, who established a long-running pro-Western dictatorship.",
    sides: {
      A: { name: "Congo", scores: { leftRight: -1, imperialism: -2, revolutionary: 1, nationalist: 2, interventionist: -1 } },
      B: { name: "Katanga", scores: { leftRight: 2, imperialism: 2, revolutionary: -1, nationalist: 2, interventionist: 2 } }
    }
  },
  {
    war: "Sino-Indian War",
    year: 1962,
    importance: 2,
    summary: "The Sino-Indian War was a brief border conflict between China and India over disputed territories in the Himalayas. China sought to secure its border and assert its territorial claims, while India sought to defend its borders and maintain its regional influence. China won a decisive military victory, occupying the disputed regions before declaring a unilateral ceasefire and withdrawing to its previous positions.",
    sides: {
      A: { name: "China", scores: { leftRight: -2, imperialism: 2, revolutionary: 0, nationalist: 2, interventionist: 2 } },
      B: { name: "India", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Dominican Civil War",
    year: 1965,
    importance: 3,
    summary: "The Dominican Civil War began when supporters of the deposed president Juan Bosch sought to restore him to power, leading to a conflict with the military. The US intervened with a massive military force, seeking to prevent the establishment of a 'second Cuba' in the Caribbean. The intervention led to a ceasefire and the establishment of a provisional government, followed by elections that brought a pro-US candidate to power.",
    sides: {
      A: { name: "Constitutionalists", scores: { leftRight: -2, imperialism: -1, revolutionary: 2, nationalist: 2, interventionist: -2 } },
      B: { name: "Loyalists / US", scores: { leftRight: 3, imperialism: 2, revolutionary: -2, nationalist: 1, interventionist: 3 } }
    }
  },
  {
    war: "Indo-Pakistani War",
    year: 1965,
    importance: 2,
    summary: "The Indo-Pakistani War of 1965 was a culmination of skirmishes that took place between April 1965 and September 1965 between Pakistan and India. The conflict began following Pakistan's Operation Gibraltar, which was designed to precipitate an insurgency against Indian rule in Jammu and Kashmir. India retaliated by launching a full-scale military attack on West Pakistan. The seventeen-day war caused thousands of casualties on both sides and witnessed the largest engagement of armored vehicles in warfare since World War II.",
    sides: {
      A: { name: "India", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 2, interventionist: 2 } },
      B: { name: "Pakistan", scores: { leftRight: 1, imperialism: 0, revolutionary: 0, nationalist: 2, interventionist: 2 } }
    }
  },
  {
    war: "Six-Day War",
    year: 1967,
    importance: 4,
    summary: "The Six-Day War was fought between Israel and a coalition of Arab states, primarily Egypt, Syria, and Jordan. Israel launched a preemptive strike following a period of high tension and Arab military mobilization, seeking to eliminate the threat to its existence. Israel won a decisive victory, capturing the West Bank, Gaza Strip, Sinai Peninsula, and Golan Heights, fundamentally altering the map of the Middle East.",
    sides: {
      A: { name: "Israel", scores: { leftRight: 2, imperialism: 2, revolutionary: 0, nationalist: 3, interventionist: 2 } },
      B: { name: "Arabs", scores: { leftRight: -1, imperialism: -2, revolutionary: 2, nationalist: 3, interventionist: 2 } }
    }
  },
  {
    war: "Nigerian Civil War",
    year: 1967,
    importance: 3,
    summary: "The Nigerian Civil War, also known as the Biafran War, was fought between the Nigerian government and the secessionist state of Biafra, which sought independence for the Igbo people. The government sought to maintain a unified Nigerian state, while Biafra sought self-determination and protection from ethnic violence. The war ended with a government victory and the reintegration of Biafra, though it caused a massive humanitarian crisis and over a million deaths.",
    sides: {
      A: { name: "Nigeria", scores: { leftRight: 0, imperialism: 0, revolutionary: -1, nationalist: 3, interventionist: 0 } },
      B: { name: "Biafra", scores: { leftRight: 0, imperialism: 0, revolutionary: 2, nationalist: 3, interventionist: -2 } }
    }
  },
  {
    war: "Cambodian Civil War",
    year: 1967,
    importance: 4,
    summary: "The Cambodian Civil War was fought between the US-backed government of the Khmer Republic and the communist Khmer Rouge. The government sought to maintain its authority and prevent a communist takeover, while the Khmer Rouge sought to establish a radical agrarian socialist state. The war was exacerbated by the spillover of the Vietnam War and ended with a Khmer Rouge victory in 1975, leading to the Cambodian genocide.",
    sides: {
      A: { name: "Lon Nol Government", scores: { leftRight: 3, imperialism: 1, revolutionary: -2, nationalist: 2, interventionist: 2 } },
      B: { name: "Khmer Rouge", scores: { leftRight: -3, imperialism: -1, revolutionary: 3, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "The Troubles",
    year: 1968,
    importance: 4,
    summary: "The Troubles was an ethno-nationalist conflict in Northern Ireland between predominantly Catholic Irish republicans seeking unification with Ireland, and predominantly Protestant unionists seeking to remain part of the United Kingdom. Republican paramilitaries like the IRA carried out bombings and assassinations, while loyalist paramilitaries and British security forces responded with their own violence. The conflict ended with the Good Friday Agreement in 1998.",
    sides: {
      A: { name: "British State", scores: { leftRight: 1, imperialism: 2, revolutionary: -2, nationalist: -2, interventionist: 3 } },
      B: { name: "Irish Republican Militants", scores: { leftRight: 0, imperialism: -3, revolutionary: 2, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Black September",
    year: 1970,
    importance: 3,
    summary: "Black September refers to the conflict between the Jordanian government and Palestinian militant organizations, whose armed presence had become a direct challenge to Jordanian sovereignty. King Hussein sought to restore Jordanian authority and expel the Palestinian militants, while the PLO sought to maintain its armed presence in Jordan as a base for operations against Israel. Jordan expelled the PLO, which relocated to Lebanon.",
    sides: {
      A: { name: "Jordan", scores: { leftRight: 3, imperialism: 0, revolutionary: -2, nationalist: 2, interventionist: 2 } },
      B: { name: "Palestinian Militants", scores: { leftRight: -2, imperialism: -2, revolutionary: 3, nationalist: 3, interventionist: 0 } }
    }
  },
  {
    war: "Yom Kippur War",
    year: 1973,
    importance: 4,
    summary: "The Yom Kippur War was launched by Egypt and Syria with a surprise attack on Israel on the Jewish holy day of Yom Kippur, seeking to recapture territories lost in the 1967 Six-Day War. Israel fought to repel the invasion while Egypt sought to recover the Sinai and Syria sought to recover the Golan Heights. Israel ultimately repelled both attacks, and the war led to the 1978 Camp David Accords between Egypt and Israel.",
    sides: {
      A: { name: "Israel", scores: { leftRight: 2, imperialism: 2, revolutionary: 0, nationalist: 3, interventionist: 2 } },
      B: { name: "Arabs", scores: { leftRight: -1, imperialism: -2, revolutionary: 2, nationalist: 3, interventionist: 2 } }
    }
  },
  {
    war: "Ethiopian Civil War",
    year: 1974,
    importance: 5,
    summary: "The 1974 Ethiopian Revolution saw the Derg military committee overthrow Emperor Haile Selassie, ending the ancient Ethiopian monarchy amid famine, economic crisis, and popular unrest. The emperor sought to maintain the imperial system, while the Derg and various leftist factions sought to modernize Ethiopia and address social inequalities. The Derg established a Marxist military dictatorship, executing the emperor and beginning a period known as the Red Terror.",
    sides: {
      A: { name: "Monarchy", scores: { leftRight: 3, imperialism: 0, revolutionary: -3, nationalist: 2, interventionist: -2 } },
      B: { name: "Rebels", scores: { leftRight: -3, imperialism: 0, revolutionary: 3, nationalist: 0, interventionist: 0 } }
    }
  },
  {
    war: "Ethiopian Government vs Insurgents",
    year: 1974,
    importance: 3,
    summary: "Following the 1974 revolution, the Derg military government faced armed insurgencies from multiple ethnic and political groups, including the Eritrean independence movement, Tigrayan rebels, and Somali-backed forces in the Ogaden. The Derg sought to maintain a unified Ethiopian state under its Marxist rule, while various insurgent groups sought either independence or the overthrow of the Derg. The conflicts continued until the Derg's fall in 1991.",
    sides: {
      A: { name: "Ethiopian Government", scores: { leftRight: -3, imperialism: 0, revolutionary: -2, nationalist: 2, interventionist: 0 } },
      B: { name: "Rebels", scores: { leftRight: -1, imperialism: 0, revolutionary: 3, nationalist: 3, interventionist: -2 } }
    }
  },
  {
    war: "Ogaden War",
    year: 1977,
    importance: 3,
    summary: "The Ogaden War was fought between Somalia and Ethiopia over the Ogaden region, which Somalia claimed based on its ethnic Somali population. Somalia launched an invasion and initially captured most of the Ogaden, while Ethiopia, backed by Soviet and Cuban support, mounted a massive counteroffensive. Ethiopia recaptured the Ogaden in 1978, and Somalia's defeat contributed to the eventual collapse of the Somali state.",
    sides: {
      A: { name: "Somalia", scores: { leftRight: 0, imperialism: 2, revolutionary: 0, nationalist: 3, interventionist: 3 } },
      B: { name: "Ethiopia", scores: { leftRight: 0, imperialism: -2, revolutionary: 0, nationalist: 2, interventionist: -3 } }
    }
  },
  {
    war: "Lebanese Civil War",
    year: 1975,
    importance: 5,
    summary: "The Lebanese Civil War was a complex multi-sided conflict involving Lebanese Christian, Sunni, Shia, and Druze factions, the PLO, Syria, Israel, and various foreign powers. Different factions sought dominance over Lebanon's political system or to use Lebanon as a base for their own agendas. The war lasted 15 years and ended with the Taif Agreement in 1989.",
    sides: {
      A: { name: "Lebanese Factions (Right)", scores: { leftRight: 3, imperialism: 0, revolutionary: -2, nationalist: 3, interventionist: 0 } },
      B: { name: "Lebanese Factions (Left/PLO)", scores: { leftRight: -3, imperialism: 0, revolutionary: 3, nationalist: 1, interventionist: 0 } }
    }
  },
  {
    war: "Cambodian-Vietnamese War",
    year: 1978,
    importance: 3,
    summary: "Vietnam invaded Cambodia in 1978 to overthrow the Khmer Rouge regime, which had been conducting cross-border raids and massacring Vietnamese civilians. Vietnam sought to install a friendly government in Cambodia and eliminate a hostile regime on its border, while the Khmer Rouge sought to maintain its radical communist state. Vietnam rapidly overthrew the Khmer Rouge, installing a pro-Vietnamese government, though Khmer Rouge resistance continued for years.",
    sides: {
      A: { name: "Cambodia / Khmer Rouge", scores: { leftRight: -3, imperialism: 0, revolutionary: 3, nationalist: 3, interventionist: -2 } },
      B: { name: "Vietnam", scores: { leftRight: -3, imperialism: 2, revolutionary: 2, nationalist: 1, interventionist: 3 } }
    }
  },
  {
    war: "Soviet-Afghan War",
    year: 1979,
    importance: 5,
    summary: "The Soviet Union invaded Afghanistan in 1979 to support its communist government against the Mujahideen insurgency. The Soviets sought to maintain a communist ally on their southern border, while the Mujahideen, backed by the US, Pakistan, and Saudi Arabia, sought to expel the Soviets and establish an Islamic government. The Soviets withdrew in 1989 after a decade of costly guerrilla warfare, contributing to the collapse of the Soviet Union.",
    sides: {
      A: { name: "Soviet Union", scores: { leftRight: -3, imperialism: 3, revolutionary: 2, nationalist: -2, interventionist: 3 } },
      B: { name: "Afghan Mujahideen", scores: { leftRight: 3, imperialism: -2, revolutionary: -2, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Iran-Iraq War",
    year: 1980,
    importance: 3,
    summary: "The Iran-Iraq War began when Iraq under Saddam Hussein invaded Iran, seeking to exploit post-revolutionary chaos and gain control of the Shatt al-Arab waterway. Iran sought to repel the invasion and export its Islamic Revolution, while Iraq sought territorial gains and regional dominance. The war lasted eight years, caused over a million casualties, and ended inconclusively with a return to pre-war borders.",
    sides: {
      A: { name: "Iran", scores: { leftRight: 2, imperialism: -2, revolutionary: 2, nationalist: 3, interventionist: 2 } },
      B: { name: "Iraq", scores: { leftRight: 2, imperialism: 2, revolutionary: -2, nationalist: 3, interventionist: 2 } }
    }
  },
  {
    war: "Salvadoran Civil War",
    year: 1980,
    importance: 4,
    summary: "The Salvadoran Civil War was fought between the US-backed government of El Salvador and the FMLN, a coalition of left-wing guerrilla groups, amid extreme inequality and political repression. The FMLN sought to establish a socialist government and address poverty and land inequality, while the government sought to maintain the existing social order. The war ended in 1992 with the Chapultepec Peace Accords, incorporating the FMLN into the political process.",
    sides: {
      A: { name: "Salvadoran Government", scores: { leftRight: 3, imperialism: 1, revolutionary: -3, nationalist: 2, interventionist: 1 } },
      B: { name: "FMLN", scores: { leftRight: -3, imperialism: 0, revolutionary: 3, nationalist: 1, interventionist: 0 } }
    }
  },
  {
    war: "Falklands War",
    year: 1982,
    importance: 3,
    summary: "The Falklands War began when Argentina invaded and occupied the Falkland Islands, a British overseas territory in the South Atlantic, claiming sovereignty over what it called the Malvinas. Britain dispatched a naval task force to retake the islands, while Argentina's military junta used the invasion to boost domestic support. Britain recaptured the islands after ten weeks of fighting, and the defeat contributed to the collapse of Argentina's military government.",
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: 1, interventionist: 3 } },
      B: { name: "Argentina", scores: { leftRight: 2, imperialism: -1, revolutionary: 0, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Lebanese War",
    year: 1982,
    importance: 4,
    summary: "Israel invaded Lebanon in 1982 with the stated aim of destroying PLO infrastructure in southern Lebanon, which had been used to launch attacks on northern Israel. Israel sought to eliminate the PLO as a military force and install a friendly government in Lebanon, while Lebanon and the PLO sought to resist the invasion. Israel reached Beirut and oversaw the Sabra and Shatila massacre, but was drawn into a prolonged occupation of southern Lebanon lasting until 2000.",
    sides: {
      A: { name: "Israel", scores: { leftRight: 2, imperialism: 2, revolutionary: 0, nationalist: 2, interventionist: 3 } },
      B: { name: "Lebanon / PLO", scores: { leftRight: -2, imperialism: -2, revolutionary: 2, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Tiananmen Repression",
    year: 1989,
    importance: 4,
    summary: "The Tiananmen Square protests were a pro-democracy movement led by students and workers in Beijing, calling for political reform, freedom of the press, and an end to corruption in the Communist Party. The Chinese government declared martial law and sent in the military to suppress the protests, killing hundreds to thousands of demonstrators. The government maintained Communist Party rule and the event remains heavily censored in China.",
    sides: {
      A: { name: "China", scores: { leftRight: -3, imperialism: 0, revolutionary: -3, nationalist: 2, interventionist: 2 } },
      B: { name: "Protesters", scores: { leftRight: 3, imperialism: 0, revolutionary: 2, nationalist: 2, interventionist: 0} }
     }
  },
  {
    war: "Romanian Revolution",
    year: 1989,
    importance: 4,
    summary: "The Romanian Revolution was an uprising against the communist dictatorship of Nicolae Ceaușescu, beginning with protests in Timișoara that spread nationally and led to the regime's collapse within days. Romanians sought to end decades of brutal communist rule and establish democratic governance, while the regime sought to suppress the uprising. Ceaușescu and his wife were captured and executed on Christmas Day 1989, ending communist rule in Romania.",
    sides: {
      A: { name: "Romanian Regime", scores: { leftRight: -3, imperialism: 0, revolutionary: -3, nationalist: 2, interventionist: 0 } },
      B: { name: "Revolutionaries", scores: { leftRight: 3, imperialism: 0, revolutionary: 3, nationalist: 1, interventionist: 0 } }
    }
  },
  {
    war: "Gulf War",
    year: 1990,
    importance: 3,
    summary: "The Gulf War began when Iraq under Saddam Hussein invaded and annexed Kuwait, citing historical territorial claims and grievances over Kuwaiti oil production. A US-led international coalition intervened to liberate Kuwait, also seeking to prevent Iraqi domination of Middle Eastern oil supplies. The coalition rapidly defeated Iraqi forces and liberated Kuwait but stopped short of overthrowing Saddam Hussein.",
    sides: {
      A: { name: "Iraq", scores: { leftRight: 2, imperialism: 3, revolutionary: 0, nationalist: 2, interventionist: 3 } },
      B: { name: "United States / Coalition", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: 1, interventionist: 3 } }
    }
  },
  {
    war: "Croatian War of Independence",
    year: 1991,
    importance: 4,
    summary: "The Croatian War of Independence was fought as Croatia declared independence from Yugoslavia, triggering conflict with the Yugoslav People's Army and Croatian Serb forces who sought to remain part of a Serb-dominated Yugoslavia. Croatia sought internationally recognized independence, while Serbia and Croatian Serbs sought to carve out a Serbian enclave in Croatian territory. Croatia ultimately prevailed, retaking most occupied territory by 1995.",
    sides: {
      A: { name: "Serbia", scores: { leftRight: 2, imperialism: 2, revolutionary: -2, nationalist: 3, interventionist: 3 } },
      B: { name: "Croatia", scores: { leftRight: 2, imperialism: -2, revolutionary: 1, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Bosnian War",
    year: 1991,
    importance: 4,
    summary: "The Bosnian War erupted when Bosnia declared independence from Yugoslavia, triggering conflict between Bosnian Serb forces backed by Serbia, Bosnian Croat forces backed by Croatia, and the Bosnian government. Bosnian Serbs sought to create an ethnically pure Serbian state and unite with Serbia, while the Bosnian government sought to maintain a multiethnic state. The war ended with the Dayton Agreement in 1995, dividing Bosnia between two entities.",
    sides: {
      A: { name: "Serbia", scores: { leftRight: 2, imperialism: 2, revolutionary: -2, nationalist: 3, interventionist: 3 } },
      B: { name: "Bosnia", scores: { leftRight: 2, imperialism: -2, revolutionary: 1, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Algerian Civil War",
    year: 1991,
    importance: 3,
    summary: "The Algerian Civil War erupted when the military annulled elections that the Islamic Salvation Front was poised to win, triggering an armed insurgency by Islamist groups. The government sought to maintain secular military rule and suppress political Islam, while Islamist groups sought to establish an Islamic state. The government prevailed by the late 1990s, though the conflict caused over 100,000 deaths.",
    sides: {
      A: { name: "Algerian Government", scores: { leftRight: 2, imperialism: 0, revolutionary: -2, nationalist: 2, interventionist: 1 } },
      B: { name: "Islamists", scores: { leftRight: 3, imperialism: -1, revolutionary: 2, nationalist: 3, interventionist: -2 } }
    }
  },
  {
    war: "Rwandan Civil War",
    year: 1990,
    importance: 3,
    summary: "The Rwandan Civil War began when the Rwandan Patriotic Front, composed largely of Tutsi refugees, invaded Rwanda from Uganda to end discrimination against Tutsis and return to their homeland. The Hutu-dominated government sought to maintain its power and resist the RPF, while the RPF sought political inclusion and the right of return. The war culminated in the 1994 genocide in which Hutu extremists massacred approximately 800,000 Tutsis before the RPF won and ended the genocide.",
    sides: {
      A: { name: "Rwanda", scores: { leftRight: 0, imperialism: 0, revolutionary: -2, nationalist: 3, interventionist: 0 } },
      B: { name: "RPF", scores: { leftRight: 0, imperialism: 0, revolutionary: 2, nationalist: 3, interventionist: 2 } }
    }
  },
  {
    war: "First Chechen War",
    year: 1994,
    importance: 3,
    summary: "The First Chechen War began when Russia invaded the breakaway republic of Chechnya to prevent its secession from the Russian Federation following Chechnya's declaration of independence in 1991. Russia sought to maintain its territorial integrity, while Chechnya sought full independence. Russia suffered a humiliating military defeat and withdrew in 1996, granting Chechnya de facto independence until the Second Chechen War.",
    sides: {
      A: { name: "Russia", scores: { leftRight: 2, imperialism: 2, revolutionary: -2, nationalist: 2, interventionist: 3 } },
      B: { name: "Chechnya", scores: { leftRight: 0, imperialism: -2, revolutionary: 2, nationalist: 3, interventionist: -3 } }
    }
  },
  {
    war: "Second Congo War",
    year: 1998,
    importance: 2,
    summary: "The Second Congo War, sometimes called Africa's World War, involved nine African nations and numerous armed groups fighting in the Democratic Republic of Congo over resources, political power, and ethnic rivalries. The Congolese government sought to maintain sovereignty while various rebel groups and neighboring states pursued their own agendas. The war caused over five million deaths and ended with the Sun City Agreement in 2002 though violence continued.",
    sides: {
      A: { name: "Congo", scores: { leftRight: 0, imperialism: -2, revolutionary: 0, nationalist: 2, interventionist: -2 } },
      B: { name: "Rebel Coalitions", scores: { leftRight: 0, imperialism: 1, revolutionary: 2, nationalist: 2, interventionist: 2 } }
    }
  },
  {
    war: "Kosovo War",
    year: 1998,
    importance: 4,
    summary: "The Kosovo War was fought between Serbia and the Kosovo Liberation Army representing the ethnic Albanian majority of Kosovo, who sought independence following years of political repression. Serbia sought to maintain Kosovo as part of its territory and suppress the KLA insurgency, while Kosovo Albanians sought self-determination. NATO intervened with airstrikes against Serbia in 1999, forcing Serbian withdrawal and establishing a UN administration over Kosovo.",
    sides: {
      A: { name: "Serbia", scores: { leftRight: 2, imperialism: 2, revolutionary: -2, nationalist: 3, interventionist: 3 } },
      B: { name: "Kosovo Albanians", scores: { leftRight: 2, imperialism: -2, revolutionary: 1, nationalist: 3, interventionist: -3 } }
    }
  }
];

let current = 0;
let history = [];

let scores = {
  leftRight: 0,
  imperialism: 0,
  revolutionary: 0,
  nationalist: 0,
  interventionist: 0
};

// Track max possible scores dynamically based on questions answered
let maxPossible = {
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
    "Neutral / Neither",
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
      history.push({ q, index });
      current++;

      if (current < questions.length) {
        loadQuestion();
      } else {
        showResults();
      }
    };

    container.appendChild(btn);
  });

  if (current > 0) {
    const backBtn = document.createElement("button");
    backBtn.innerText = "← Back";
    backBtn.style.cssText = "background:#9e9e9e; margin-top:10px; width:100%;";
    backBtn.onclick = () => {
      const last = history.pop();
      undoScore(last.q, last.index);
      current--;
      loadQuestion();
    };
    container.appendChild(backBtn);
  }

  const summaryEl = document.createElement("p");
  summaryEl.innerText = q.summary;
  summaryEl.style.cssText = "margin-top: 20px; font-size: 13px; color: #555; line-height: 1.6; border-top: 1px solid #ddd; padding-top: 12px;";
  container.appendChild(summaryEl);
}

function applyScore(q, index) {
  const importance = q.importance || 1;
  
  // If answer is NOT neutral, increase maxPossible
  if (index !== 3) {
    for (let key in maxPossible) {
      const maxVal = Math.max(Math.abs(q.sides.A.scores[key] || 0), Math.abs(q.sides.B.scores[key] || 0));
      maxPossible[key] += maxVal * importance;
    }

    const side = index < 3 ? "A" : "B";
    const data = q.sides[side].scores;
    const multipliers = [1, 0.67, 0.33, 0, 0.33, 0.67, 1];
    const multiplier = multipliers[index];

    for (let key in data) {
      scores[key] += (data[key] || 0) * multiplier * importance;
    }
  }
}

function undoScore(q, index) {
  const importance = q.importance || 1;
  if (index !== 3) {
    for (let key in maxPossible) {
      const maxVal = Math.max(Math.abs(q.sides.A.scores[key] || 0), Math.abs(q.sides.B.scores[key] || 0));
      maxPossible[key] -= maxVal * importance;
    }

    const side = index < 3 ? "A" : "B";
    const data = q.sides[side].scores;
    const multipliers = [1, 0.67, 0.33, 0, 0.33, 0.67, 1];
    const multiplier = multipliers[index];

    for (let key in data) {
      scores[key] -= (data[key] || 0) * multiplier * importance;
    }
  }
}

function toPercent(value, max) {
  if (max === 0) return 50;
  let percent = ((value + max) / (2 * max)) * 100;
  return Math.max(0, Math.min(100, percent));
}

function showResults() {
  const leftRightPct = toPercent(scores.leftRight, maxPossible.leftRight);
  const imperialismPct = toPercent(scores.imperialism, maxPossible.imperialism);
  const revolutionaryPct = toPercent(scores.revolutionary, maxPossible.revolutionary);
  const nationalistPct = toPercent(scores.nationalist, maxPossible.nationalist);
  const interventionistPct = toPercent(scores.interventionist, maxPossible.interventionist);

  const ideologies = [
    { name: "Bolshevism",               scores: { leftRight: -3, imperialism: 1,  revolutionary: 3,  nationalist: -1, interventionist: 1  }},
    { name: "Trotskyism",               scores: { leftRight: -3, imperialism: 1,  revolutionary: 2,  nationalist: -2, interventionist: 2  }},
    { name: "Maoism",                   scores: { leftRight: -3, imperialism: 1,  revolutionary: 3,  nationalist: 1,  interventionist: -1 }},
    { name: "Marxism",                  scores: { leftRight: -3, imperialism: 1,  revolutionary: 3,  nationalist: -1, interventionist: 0  }},
    { name: "Strasserism",              scores: { leftRight: 0,  imperialism: -1, revolutionary: 2,  nationalist: 2,  interventionist: 1  }},
    { name: "National Bolshevism",      scores: { leftRight: 0,  imperialism: 0,  revolutionary: 1,  nationalist: 2,  interventionist: 1  }},
    { name: "Classical Fascism",        scores: { leftRight: 1,  imperialism: 2,  revolutionary: 2,  nationalist: 2,  interventionist: 2  }},
    { name: "National Socialism",       scores: { leftRight: 1,  imperialism: 1,  revolutionary: 2,  nationalist: 2,  interventionist: 2  }},
    { name: "Falangism",                scores: { leftRight: 1,  imperialism: 0,  revolutionary: -1, nationalist: 2,  interventionist: 1  }},
    { name: "Clerical Fascism",         scores: { leftRight: 1,  imperialism: 0,  revolutionary: -2, nationalist: 2,  interventionist: 1  }},
    { name: "Social Democracy",         scores: { leftRight: -1, imperialism: -1, revolutionary: 0,  nationalist: 0,  interventionist: -1 }},
    { name: "Liberal Internationalism", scores: { leftRight: 0,  imperialism: 0,  revolutionary: 0,  nationalist: -1, interventionist: 2  }},
    { name: "Centrism",                 scores: { leftRight: 0,  imperialism: 0,  revolutionary: 0,  nationalist: 0,  interventionist: 0  }},
    { name: "Liberal Conservatism",     scores: { leftRight: 1,  imperialism: 1,  revolutionary: -1, nationalist: 0,  interventionist: 1  }},
    { name: "Christian Democracy",      scores: { leftRight: 1,  imperialism: -1, revolutionary: -1, nationalist: 1,  interventionist: 0  }},
    { name: "Classical Conservatism",   scores: { leftRight: 2,  imperialism: 0,  revolutionary: -2, nationalist: 1,  interventionist: -1 }},
    { name: "Reactionary",              scores: { leftRight: 3,  imperialism: 0,  revolutionary: -3, nationalist: 2,  interventionist: -1 }},
    { name: "Paleoconservatism",        scores: { leftRight: 2,  imperialism: -2, revolutionary: -1, nationalist: 2,  interventionist: -2 }},
    { name: "Libertarianism",           scores: { leftRight: 1,  imperialism: -2, revolutionary: 0,  nationalist: 0,  interventionist: -2 }},
    { name: "Neoconservatism",          scores: { leftRight: 3,  imperialism: 3,  revolutionary: 0,  nationalist: 0,  interventionist: 3  }},
    { name: "Neoliberalism",            scores: { leftRight: 3,  imperialism: 2,  revolutionary: 0,  nationalist: 1,  interventionist: 1  }},
  ];

  const axisKeys = ["leftRight", "imperialism", "revolutionary", "nationalist", "interventionist"];

  // Weights — leftRight and revolutionary are most ideologically defining
  const weights = {
    leftRight: 2.5,
    imperialism: 1,
    revolutionary: 2.5,
    nationalist: 1,
    interventionist: 1
  };

  const userScoresNorm = {
    leftRight:       (leftRightPct / 50) - 1,
    imperialism:     (imperialismPct / 50) - 1,
    revolutionary:   (revolutionaryPct / 50) - 1,
    nationalist:     (nationalistPct / 50) - 1,
    interventionist: (interventionistPct / 50) - 1
  };

  const ranked = ideologies.map(ideology => {
    const distance = axisKeys.reduce((sum, key) => {
      const ideologyNorm = ideology.scores[key] / 3;
      const diff = userScoresNorm[key] - ideologyNorm;
      return sum + weights[key] * diff * diff;
    }, 0);
    return { name: ideology.name, distance };
  }).sort((a, b) => a.distance - b.distance);

  // Convert distances to match percentages — closest = 100%
  const maxDist = ranked[ranked.length - 1].distance;
  const minDist = ranked[0].distance;
  const top3 = ranked.slice(0, 3).map(r => ({
    name: r.name,
    pct: Math.round(100 - ((r.distance - minDist) / (maxDist - minDist)) * 100)
  }));

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

  function makeIdeologyBar(name, pct, rank) {
    const colors = ["#c0392b", "#e67e22", "#95a5a6"];
    const sizes = ["18px", "15px", "13px"];
    return `
      <div style="margin-bottom: 12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
          <span style="font-weight:700; font-size:${sizes[rank]}; color:#111;">${name}</span>
          <span style="font-weight:700; font-size:${sizes[rank]}; color:${colors[rank]};">${pct}%</span>
        </div>
        <div style="background:#ddd; height:10px; border-radius:6px; overflow:hidden;">
          <div style="width:${pct}%; height:100%; background:${colors[rank]}; border-radius:6px;"></div>
        </div>
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
        <div style="font-size:13px; color:#666; margin-bottom:12px; font-weight:600;">Closest Ideological Matches</div>
        ${makeIdeologyBar(top3[0].name, top3[0].pct, 0)}
        ${makeIdeologyBar(top3[1].name, top3[1].pct, 1)}
        ${makeIdeologyBar(top3[2].name, top3[2].pct, 2)}
      </div>
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
