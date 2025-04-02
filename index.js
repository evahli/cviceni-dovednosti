console.log('funguju!');
/*Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele aby vyjářil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0–100. Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků na uživatelem zadaná čísla.
Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: textový řetězec představující id elementu a číslo mezi 0–100. Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. Použijte tuto funkci ve vašem kódu, abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.*/


const updateSkill = (skillID, value) => {
  const progressBar = document.querySelector(`${skillID} .skill__progress`);
  const progressValue = document.querySelector(`${skillID} .skill__value`);
  progressBar.style.width = `${value}%`;
  progressValue.textContent = `${value}/100`;
}


const htmlProgress = Number(prompt('jaka je vase uroven HTML?'))
const cssProgress = Number(prompt('jaka je vase uroven CSS?'))
const jsProgress = Number(prompt('jaka je vase uroven JavaScriptu?'))

updateSkill('#skill1', htmlProgress);
updateSkill('#skill2', cssProgress);
updateSkill('#skill3', jsProgress);
