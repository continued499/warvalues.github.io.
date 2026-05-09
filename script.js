const questions = [
  {
    war: "Second Boer War",
    year: 1900,
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Boers", scores: { leftRight: 1, imperialism: -2, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Boxer Rebellion",
    year: 1900,
    sides: {
      A: { name: "Eight-Nation Alliance", scores: { leftRight: 1, imperialism: 2, revolutionary: -2, nationalist: 0, interventionist: 2 } },
      B: { name: "Qing China & Boxers", scores: { leftRight: 0, imperialism: -2, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Anglo-Aro War",
    year: 1901,
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Aro Confederacy", scores: { leftRight: 0, imperialism: -2, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "British Expedition to Tibet",
    year: 1903,
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: -1, interventionist: 2 } },
      B: { name: "Tibet", scores: { leftRight: -1, imperialism: -2, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Russo-Japanese War",
    year: 1904,
    sides: {
      A: { name: "Tsarist Russia", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 0, interventionist: 1 } },
      B: { name: "Japan", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 1, interventionist: 1 } }
    }
  },
  {
    war: "Madagascar War",
    year: 1904,
    sides: {
      A: { name: "France", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: -1, interventionist: 2 } },
      B: { name: "Madagascar", scores: { leftRight: -1, imperialism: -2, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Italo-Turkish War",
    year: 1911,
    sides: {
      A: { name: "Italy", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: 1, interventionist: 2 } },
      B: { name: "Ottomans", scores: { leftRight: 0, imperialism: -1, revolutionary: 0, nationalist: 1, interventionist: -2 } }
    }
  },
  {
    war: "First Balkan War",
    year: 1912,
    sides: {
      A: { name: "Balkan League", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 2, interventionist: 1 } },
      B: { name: "Ottomans", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 0, interventionist: -1 } }
    }
  },
  {
    war: "Second Balkan War",
    year: 1913,
    sides: {
      A: { name: "Bulgaria", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 1, interventionist: 1 } },
      B: { name: "Serbia/Greece/Romania", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 1, interventionist: 1 } }
    }
  },
  {
    war: "Serbian Campaign",
    year: 1914,
    sides: {
      A: { name: "Austria-Hungary", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 0, interventionist: 2 } },
      B: { name: "Serbia", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Invasion of Belgium",
    year: 1914,
    sides: {
      A: { name: "Germany", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 1, interventionist: 2 } },
      B: { name: "Belgium", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 1, interventionist: -2 } }
    }
  },
  {
    war: "Western Front",
    year: 1914,
    sides: {
      A: { name: "Germany", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 1, interventionist: 2 } },
      B: { name: "France", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 1, interventionist: -1 } }
    }
  },
  {
    war: "Caucasus Campaign",
    year: 1914,
    sides: {
      A: { name: "Ottomans", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 1, interventionist: 1 } },
      B: { name: "Russia", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 0, interventionist: 1 } }
    }
  },
  {
    war: "Mesopotamia Campaign",
    year: 1914,
    sides: {
      A: { name: "Ottomans", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 1, interventionist: 1 } },
      B: { name: "Britain", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 0, interventionist: 1 } }
    }
  },
  {
    war: "Mexican Revolution",
    year: 1914,
    sides: {
      A: { name: "United States", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: 0, interventionist: 2 } },
      B: { name: "Mexico", scores: { leftRight: -1, imperialism: -1, revolutionary: 2, nationalist: 1, interventionist: -2 } }
    }
  },
  {
    war: "Siege of Tsingtao",
    year: 1914,
    sides: {
      A: { name: "Germany", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 1, interventionist: 2 } },
      B: { name: "Japan", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 1, interventionist: 1 } }
    }
  },
  {
    war: "Arab Revolt",
    year: 1916,
    sides: {
      A: { name: "Ottomans", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: -1, interventionist: -1 } },
      B: { name: "Arabs", scores: { leftRight: 0, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Senussi Campaign",
    year: 1916,
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Senussi", scores: { leftRight: 0, imperialism: -2, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Russian Revolution",
    year: 1917,
    sides: {
      A: { name: "White Russia", scores: { leftRight: 2, imperialism: 0, revolutionary: -2, nationalist: 1, interventionist: -1 } },
      B: { name: "Soviets", scores: { leftRight: -2, imperialism: 0, revolutionary: 2, nationalist: -1, interventionist: 1 } }
    }
  },
  {
    war: "Polish-Soviet War",
    year: 1919,
    sides: {
      A: { name: "Soviet Russia", scores: { leftRight: -2, imperialism: 0, revolutionary: 2, nationalist: -1, interventionist: 2 } },
      B: { name: "Poland", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Greco-Turkish War",
    year: 1919,
    sides: {
      A: { name: "Greece", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 1, interventionist: 2 } },
      B: { name: "Turkey", scores: { leftRight: 0, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Turkish-Armenian War",
    year: 1920,
    sides: {
      A: { name: "Turkey", scores: { leftRight: 1, imperialism: 1, revolutionary: 0, nationalist: 2, interventionist: 1 } },
      B: { name: "Armenia", scores: { leftRight: 0, imperialism: -1, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Franco-Turkish War",
    year: 1919,
    sides: {
      A: { name: "France", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: -1, interventionist: 2 } },
      B: { name: "Turkey", scores: { leftRight: 0, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Irish War of Independence",
    year: 1919,
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Irish Republicans", scores: { leftRight: -1, imperialism: -2, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Chinese Civil War",
    year: 1927,
    sides: {
      A: { name: "Nationalists", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 2, interventionist: 0 } },
      B: { name: "Communists", scores: { leftRight: -2, imperialism: 0, revolutionary: 2, nationalist: 0, interventionist: 0 } }
    }
  },
  {
    war: "Great Syrian Revolt",
    year: 1925,
    sides: {
      A: { name: "France", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Syrian Rebels", scores: { leftRight: -1, imperialism: -2, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Great Arab Revolt in Palestine",
    year: 1936,
    sides: {
      A: { name: "British Mandate", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Arab Rebels", scores: { leftRight: 0, imperialism: -2, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Spanish Civil War",
    year: 1936,
    sides: {
      A: { name: "Republicans", scores: { leftRight: -1, imperialism: 0, revolutionary: 2, nationalist: 0, interventionist: -1 } },
      B: { name: "Nationalists", scores: { leftRight: 2, imperialism: 0, revolutionary: -2, nationalist: 2, interventionist: 1 } }
    }
  },
  {
    war: "Second Sino-Japanese War",
    year: 1931,
    sides: {
      A: { name: "Japan", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: 1, interventionist: 2 } },
      B: { name: "China", scores: { leftRight: 0, imperialism: -2, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Second Italo-Ethiopian War",
    year: 1935,
    sides: {
      A: { name: "Italy", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: 1, interventionist: 2 } },
      B: { name: "Abyssinia", scores: { leftRight: 0, imperialism: -2, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Winter War",
    year: 1939,
    sides: {
      A: { name: "Soviet Union", scores: { leftRight: -2, imperialism: 1, revolutionary: 2, nationalist: -1, interventionist: 2 } },
      B: { name: "Finland", scores: { leftRight: 1, imperialism: -1, revolutionary: -1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Invasion of Poland",
    year: 1939,
    sides: {
      A: { name: "Germany", scores: { leftRight: 2, imperialism: 2, revolutionary: 1, nationalist: 1, interventionist: 2 } },
      B: { name: "Poland", scores: { leftRight: 1, imperialism: -1, revolutionary: -1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Fall of France",
    year: 1939,
    sides: {
      A: { name: "Germany", scores: { leftRight: 2, imperialism: 2, revolutionary: 1, nationalist: 1, interventionist: 2 } },
      B: { name: "France", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 1, interventionist: -1 } }
    }
  },
  {
    war: "Greco-Italian War",
    year: 1940,
    sides: {
      A: { name: "Italy", scores: { leftRight: 2, imperialism: 2, revolutionary: 1, nationalist: 1, interventionist: 2 } },
      B: { name: "Greece", scores: { leftRight: 0, imperialism: -1, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Operation Barbarossa",
    year: 1941,
    sides: {
      A: { name: "Germany", scores: { leftRight: 2, imperialism: 2, revolutionary: 1, nationalist: 1, interventionist: 2 } },
      B: { name: "Soviet Union", scores: { leftRight: -2, imperialism: 0, revolutionary: 2, nationalist: -1, interventionist: 0 } }
    }
  },
  {
    war: "Pacific War",
    year: 1941,
    sides: {
      A: { name: "United States", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 0, interventionist: 2 } },
      B: { name: "Japan", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: 2, interventionist: 2 } }
    }
  },
  {
    war: "Western Allied Campaign",
    year: 1941,
    sides: {
      A: { name: "Allies", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 0, interventionist: 2 } },
      B: { name: "Germany", scores: { leftRight: 2, imperialism: 2, revolutionary: 1, nationalist: 1, interventionist: 2 } }
    }
  },
  {
    war: "Italian Campaign",
    year: 1941,
    sides: {
      A: { name: "Allies", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 0, interventionist: 2 } },
      B: { name: "Italy", scores: { leftRight: 2, imperialism: 2, revolutionary: 1, nationalist: 1, interventionist: 2 } }
    }
  },
  {
    war: "Chinese Civil War",
    year: 1946,
    sides: {
      A: { name: "Nationalists", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 2, interventionist: 0 } },
      B: { name: "Communists", scores: { leftRight: -2, imperialism: 0, revolutionary: 2, nationalist: 0, interventionist: 0 } }
    }
  },
  {
    war: "First Indochina War",
    year: 1946,
    sides: {
      A: { name: "France", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Viet Minh", scores: { leftRight: -2, imperialism: -2, revolutionary: 2, nationalist: 1, interventionist: -2 } }
    }
  },
  {
    war: "Greek Civil War",
    year: 1946,
    sides: {
      A: { name: "Greek Government", scores: { leftRight: 1, imperialism: 0, revolutionary: -2, nationalist: 1, interventionist: 0 } },
      B: { name: "Communists", scores: { leftRight: -2, imperialism: 0, revolutionary: 2, nationalist: 0, interventionist: 1 } }
    }
  },
  {
    war: "Malayan Emergency",
    year: 1948,
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Malayan Communists", scores: { leftRight: -2, imperialism: -2, revolutionary: 2, nationalist: 1, interventionist: -2 } }
    }
  },
  {
    war: "Korean War",
    year: 1950,
    sides: {
      A: { name: "North Korea", scores: { leftRight: -2, imperialism: 0, revolutionary: 2, nationalist: 1, interventionist: 2 } },
      B: { name: "South Korea", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 1, interventionist: -2 } }
    }
  },
  {
    war: "Mau Mau Uprising",
    year: 1952,
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Mau Mau", scores: { leftRight: -1, imperialism: -2, revolutionary: 2, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Algerian War",
    year: 1954,
    sides: {
      A: { name: "France", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "FLN", scores: { leftRight: -1, imperialism: -2, revolutionary: 2, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Vietnam War",
    year: 1955,
    sides: {
      A: { name: "North Vietnam", scores: { leftRight: -2, imperialism: -1, revolutionary: 2, nationalist: 1, interventionist: 1 } },
      B: { name: "South Vietnam", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 1, interventionist: -1 } }
    }
  },
  {
    war: "Hungarian Revolution",
    year: 1956,
    sides: {
      A: { name: "Soviet Union", scores: { leftRight: -2, imperialism: 1, revolutionary: -1, nationalist: -2, interventionist: 2 } },
      B: { name: "Hungarian Revolutionaries", scores: { leftRight: 0, imperialism: -1, revolutionary: 2, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Suez Crisis",
    year: 1956,
    sides: {
      A: { name: "Britain / France / Israel", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: 0, interventionist: 2 } },
      B: { name: "Egypt", scores: { leftRight: 0, imperialism: -2, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Laotian Civil War",
    year: 1959,
    sides: {
      A: { name: "Royal Lao Government", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 1, interventionist: 0 } },
      B: { name: "Pathet Lao", scores: { leftRight: -2, imperialism: 0, revolutionary: 2, nationalist: 0, interventionist: 1 } }
    }
  },
  {
    war: "Congo Crisis",
    year: 1960,
    sides: {
      A: { name: "Congo", scores: { leftRight: 0, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: 0 } },
      B: { name: "Katanga", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 2, interventionist: -1 } }
    }
  },
  {
    war: "Sino-Indian War",
    year: 1962,
    sides: {
      A: { name: "China", scores: { leftRight: -2, imperialism: 1, revolutionary: 1, nationalist: 1, interventionist: 2 } },
      B: { name: "India", scores: { leftRight: 0, imperialism: -1, revolutionary: 0, nationalist: 1, interventionist: -2 } }
    }
  },
  {
    war: "Dominican Civil War",
    year: 1965,
    sides: {
      A: { name: "Dominican Government", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 1, interventionist: 0 } },
      B: { name: "Rebels", scores: { leftRight: -1, imperialism: 0, revolutionary: 2, nationalist: 0, interventionist: 0 } }
    }
  },
  {
    war: "Indo-Pakistani War",
    year: 1965,
    sides: {
      A: { name: "India", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 1, interventionist: 1 } },
      B: { name: "Pakistan", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 1, interventionist: 1 } }
    }
  },
  {
    war: "Six-Day War",
    year: 1967,
    sides: {
      A: { name: "Israel", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 2, interventionist: 2 } },
      B: { name: "Arabs", scores: { leftRight: 0, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: -1 } }
    }
  },
  {
    war: "Nigerian Civil War",
    year: 1967,
    sides: {
      A: { name: "Nigeria", scores: { leftRight: 0, imperialism: 1, revolutionary: -1, nationalist: 1, interventionist: 1 } },
      B: { name: "Biafra", scores: { leftRight: 0, imperialism: -1, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Cambodian Civil War",
    year: 1967,
    sides: {
      A: { name: "Lon Nol Government", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 1, interventionist: 0 } },
      B: { name: "Khmer Rouge", scores: { leftRight: -2, imperialism: -1, revolutionary: 2, nationalist: 1, interventionist: -1 } }
    }
  },
  {
    war: "The Troubles",
    year: 1968,
    sides: {
      A: { name: "British State", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Irish Republican Militants", scores: { leftRight: -1, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Black September",
    year: 1970,
    sides: {
      A: { name: "Jordan", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 1, interventionist: 1 } },
      B: { name: "Palestinian Militants", scores: { leftRight: -1, imperialism: -1, revolutionary: 2, nationalist: 2, interventionist: 0 } }
    }
  },
  {
    war: "Yom Kippur War",
    year: 1973,
    sides: {
      A: { name: "Israel", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 2, interventionist: -1 } },
      B: { name: "Arabs", scores: { leftRight: 0, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: 1 } }
    }
  },
  {
    war: "Ethiopian Civil War",
    year: 1974,
    sides: {
      A: { name: "Monarchy", scores: { leftRight: 2, imperialism: 0, revolutionary: -2, nationalist: 1, interventionist: -1 } },
      B: { name: "Rebels", scores: { leftRight: -1, imperialism: 0, revolutionary: 2, nationalist: 0, interventionist: 0 } }
    }
  },
  {
    war: "Ethiopian Government vs Insurgents",
    year: 1974,
    sides: {
      A: { name: "Ethiopian Government", scores: { leftRight: -1, imperialism: 0, revolutionary: -1, nationalist: 1, interventionist: 0 } },
      B: { name: "Rebels", scores: { leftRight: -1, imperialism: 0, revolutionary: 2, nationalist: 2, interventionist: -1 } }
    }
  },
  {
    war: "Ogaden War",
    year: 1977,
    sides: {
      A: { name: "Somalia", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 2, interventionist: 2 } },
      B: { name: "Ethiopia", scores: { leftRight: -1, imperialism: -1, revolutionary: 0, nationalist: 1, interventionist: -2 } }
    }
  },
  {
    war: "Lebanese Civil War",
    year: 1975,
    sides: {
      A: { name: "Lebanese Factions (Right)", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 2, interventionist: 0 } },
      B: { name: "Lebanese Factions (Left/PLO)", scores: { leftRight: -1, imperialism: -1, revolutionary: 1, nationalist: 1, interventionist: 0 } }
    }
  },
  {
    war: "Cambodian-Vietnamese War",
    year: 1978,
    sides: {
      A: { name: "Cambodia / Khmer Rouge", scores: { leftRight: -1, imperialism: 0, revolutionary: 2, nationalist: 2, interventionist: -1 } },
      B: { name: "Vietnam", scores: { leftRight: -2, imperialism: 1, revolutionary: 1, nationalist: 0, interventionist: 2 } }
    }
  },
  {
    war: "Soviet-Afghan War",
    year: 1979,
    sides: {
      A: { name: "Soviet Union", scores: { leftRight: -2, imperialism: 1, revolutionary: 1, nationalist: -1, interventionist: 2 } },
      B: { name: "Afghan Mujahideen", scores: { leftRight: 1, imperialism: -1, revolutionary: -1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Iran-Iraq War",
    year: 1980,
    sides: {
      A: { name: "Iran", scores: { leftRight: 1, imperialism: -1, revolutionary: 1, nationalist: 1, interventionist: 1 } },
      B: { name: "Iraq", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 1, interventionist: 1 } }
    }
  },
  {
    war: "Salvadoran Civil War",
    year: 1980,
    sides: {
      A: { name: "Salvadoran Government", scores: { leftRight: 1, imperialism: 0, revolutionary: -2, nationalist: 1, interventionist: 0 } },
      B: { name: "FMLN", scores: { leftRight: -2, imperialism: 0, revolutionary: 2, nationalist: 0, interventionist: 0 } }
    }
  },
  {
    war: "Falklands War",
    year: 1982,
    sides: {
      A: { name: "Britain", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 0, interventionist: 2 } },
      B: { name: "Argentina", scores: { leftRight: 1, imperialism: 0, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Lebanese War",
    year: 1982,
    sides: {
      A: { name: "Israel", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 1, interventionist: 2 } },
      B: { name: "Lebanon / PLO", scores: { leftRight: -1, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Tiananmen Repression",
    year: 1989,
    sides: {
      A: { name: "China", scores: { leftRight: -1, imperialism: 0, revolutionary: -2, nationalist: 1, interventionist: 1 } },
      B: { name: "Protesters", scores: { leftRight: 0, imperialism: 0, revolutionary: 2, nationalist: 0, interventionist: -1 } }
    }
  },
  {
    war: "Romanian Revolution",
    year: 1989,
    sides: {
      A: { name: "Romanian Regime", scores: { leftRight: -1, imperialism: 0, revolutionary: -2, nationalist: 1, interventionist: 0 } },
      B: { name: "Revolutionaries", scores: { leftRight: 0, imperialism: 0, revolutionary: 2, nationalist: 0, interventionist: 0 } }
    }
  },
  {
    war: "Gulf War",
    year: 1990,
    sides: {
      A: { name: "Iraq", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: 1, interventionist: 2 } },
      B: { name: "United States / Coalition", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 0, interventionist: 2 } }
    }
  },
  {
    war: "Croatian War of Independence",
    year: 1991,
    sides: {
      A: { name: "Serbia", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 2, interventionist: 2 } },
      B: { name: "Croatia", scores: { leftRight: 0, imperialism: -1, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Bosnian War",
    year: 1991,
    sides: {
      A: { name: "Serbia", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 2, interventionist: 2 } },
      B: { name: "Bosnia", scores: { leftRight: 0, imperialism: -1, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Algerian Civil War",
    year: 1991,
    sides: {
      A: { name: "Algerian Government", scores: { leftRight: 0, imperialism: 0, revolutionary: -1, nationalist: 1, interventionist: 0 } },
      B: { name: "Islamists", scores: { leftRight: 1, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: -1 } }
    }
  },
  {
    war: "Rwandan Civil War",
    year: 1990,
    sides: {
      A: { name: "Rwanda", scores: { leftRight: 0, imperialism: 0, revolutionary: -1, nationalist: 1, interventionist: 0 } },
      B: { name: "RPF", scores: { leftRight: 0, imperialism: 0, revolutionary: 1, nationalist: 2, interventionist: 1 } }
    }
  },
  {
    war: "First Chechen War",
    year: 1994,
    sides: {
      A: { name: "Russia", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 0, interventionist: 2 } },
      B: { name: "Chechnya", scores: { leftRight: 0, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Second Congo War",
    year: 1998,
    sides: {
      A: { name: "Congo", scores: { leftRight: 0, imperialism: -1, revolutionary: 0, nationalist: 1, interventionist: -1 } },
      B: { name: "Rebel Coalitions", scores: { leftRight: 0, imperialism: 0, revolutionary: 1, nationalist: 1, interventionist: 1 } }
    }
  },
  {
    war: "Kosovo War",
    year: 1998,
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
