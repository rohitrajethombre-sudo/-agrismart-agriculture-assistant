const translations = {
  en: {
    tagline:"Practical tools for better farming", eyebrow:"OPEN AGRICULTURE TOOLKIT",
    heroTitle:"Make farm calculations simpler.", heroText:"Straightforward calculators and practical learning resources for farmers, students and agriculture educators.", beta:"Early version · Feedback welcome",
    fertTitle:"Fertilizer quantity calculator", fertHelp:"Enter the rate recommended by your soil test, agronomist or product guidance.", rateLabel:"Recommended rate (kg per acre)", areaLabel:"Farm area (acres)", calculate:"Calculate",
    sprayTitle:"Spray dilution calculator", sprayHelp:"Use only the dose stated on the registered product label or by a qualified adviser.", doseLabel:"Label dose (ml per litre)", waterLabel:"Water volume (litres)",
    convertTitle:"Land area converter", convertHelp:"Convert common land-area units.", valueLabel:"Value", unitLabel:"Unit", convert:"Convert",
    guideTitle:"Nutrient learning guide", guideText:"Learn the general roles of essential plant nutrients. Symptoms can overlap and are not a reliable diagnosis on their own.",
    nitrogen:"supports leafy growth and chlorophyll formation.", phosphorus:"supports energy transfer, roots and early development.", potassium:"supports water regulation, enzyme activity and crop quality.", sulphur:"supports protein formation and several plant processes.",
    guideCaution:"Confirm suspected deficiencies with field assessment and, where possible, soil or plant analysis.", aboutTitle:"About this project", aboutText:"AgriSmart is a community-built, open-source learning project. Its goal is to make basic farm calculations and agriculture education easier to access.",
    disclaimer:"Important: AgriSmart does not prescribe fertilizer or pesticide doses. Always follow local regulations, product labels, soil-test recommendations and qualified agricultural advice. Check units and calculations before acting.",
    enterValid:"Enter valid numbers greater than zero.", totalFertilizer:"Total quantity required:", totalProduct:"Total product required:", areaIn:"Equivalent area:", acre:"acres", hectare:"hectares", guntha:"gunthas"
  },
  mr: {
    tagline:"अधिक चांगल्या शेतीसाठी उपयुक्त साधने", eyebrow:"मुक्त कृषी साधनसंच",
    heroTitle:"शेतीतील गणिते सोपी करा.", heroText:"शेतकरी, विद्यार्थी आणि कृषी मार्गदर्शकांसाठी सोपी गणकयंत्रे व उपयुक्त माहिती.", beta:"प्रारंभिक आवृत्ती · अभिप्राय स्वागतार्ह",
    fertTitle:"खताचे प्रमाण मोजा", fertHelp:"माती परीक्षण, कृषी तज्ज्ञ किंवा उत्पादनाच्या मार्गदर्शनानुसार शिफारस केलेले प्रमाण भरा.", rateLabel:"शिफारस केलेले प्रमाण (किलो प्रति एकर)", areaLabel:"क्षेत्र (एकर)", calculate:"गणना करा",
    sprayTitle:"फवारणी मिश्रण गणक", sprayHelp:"नोंदणीकृत उत्पादनाच्या लेबलवरील किंवा पात्र तज्ज्ञांनी सांगितलेले प्रमाणच वापरा.", doseLabel:"लेबलवरील मात्रा (मिली प्रति लिटर)", waterLabel:"पाण्याचे प्रमाण (लिटर)",
    convertTitle:"क्षेत्रफळ रूपांतरक", convertHelp:"सामान्य क्षेत्रफळ मापनांचे रूपांतर करा.", valueLabel:"संख्या", unitLabel:"एकक", convert:"रूपांतर करा",
    guideTitle:"अन्नद्रव्यांची माहिती", guideText:"वनस्पतींसाठी आवश्यक अन्नद्रव्यांची सामान्य कार्ये जाणून घ्या. लक्षणे एकमेकांसारखी असू शकतात; केवळ लक्षणांवरून निदान करू नका.",
    nitrogen:"पानांची वाढ आणि हरितद्रव्य निर्मितीस मदत करते.", phosphorus:"ऊर्जा हस्तांतरण, मुळे आणि सुरुवातीच्या वाढीस मदत करते.", potassium:"पाण्याचे नियमन, विकरांची क्रिया आणि उत्पादनाच्या गुणवत्तेस मदत करते.", sulphur:"प्रथिने निर्मिती आणि वनस्पतीतील अनेक प्रक्रियांना मदत करते.",
    guideCaution:"कमतरतेची खात्री करण्यासाठी शेतातील निरीक्षण आणि शक्य असल्यास माती किंवा पानांचे परीक्षण करा.", aboutTitle:"प्रकल्पाविषयी", aboutText:"AgriSmart हा समुदायाच्या सहभागातून विकसित होणारा मुक्त-स्रोत शैक्षणिक प्रकल्प आहे. शेतीतील मूलभूत गणिते आणि कृषी माहिती सर्वांना सहज उपलब्ध करणे हा उद्देश आहे.",
    disclaimer:"महत्त्वाचे: AgriSmart खत किंवा कीटकनाशकांची मात्रा स्वतःहून सुचवत नाही. स्थानिक नियम, उत्पादनाचे लेबल, माती परीक्षण आणि पात्र कृषी तज्ज्ञांचा सल्ला पाळा. वापरण्यापूर्वी एकके व गणना तपासा.",
    enterValid:"शून्यापेक्षा मोठ्या योग्य संख्या भरा.", totalFertilizer:"एकूण आवश्यक खत:", totalProduct:"एकूण आवश्यक उत्पादन:", areaIn:"समतुल्य क्षेत्र:", acre:"एकर", hectare:"हेक्टर", guntha:"गुंठे"
  }
};
let language = "en";
const $ = id => document.getElementById(id);
function say(key){ return translations[language][key] || key; }
function validPositive(...values){ return values.every(v => Number.isFinite(v) && v > 0); }
function format(n){ return new Intl.NumberFormat(language === "mr" ? "mr-IN" : "en-IN",{maximumFractionDigits:3}).format(n); }
function show(id, text){ $(id).textContent = text; }

$("fertCalc").addEventListener("click", () => {
  const rate = Number($("fertRate").value), area = Number($("fertArea").value);
  show("fertResult", validPositive(rate,area) ? `${say("totalFertilizer")} ${format(rate*area)} kg` : say("enterValid"));
});
$("sprayCalc").addEventListener("click", () => {
  const dose = Number($("sprayDose").value), water = Number($("sprayWater").value);
  show("sprayResult", validPositive(dose,water) ? `${say("totalProduct")} ${format(dose*water)} ml` : say("enterValid"));
});
$("areaCalc").addEventListener("click", () => {
  const value = Number($("areaValue").value), unit = $("areaUnit").value;
  if (!validPositive(value)) { show("areaResult",say("enterValid")); return; }
  const acres = unit === "acre" ? value : unit === "hectare" ? value*2.47105 : value/40;
  show("areaResult",`${say("areaIn")} ${format(acres)} ${say("acre")} · ${format(acres/2.47105)} ${say("hectare")} · ${format(acres*40)} ${say("guntha")}`);
});
$("languageToggle").addEventListener("click", () => {
  language = language === "en" ? "mr" : "en";
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = say(el.dataset.i18n); });
  $("languageToggle").textContent = language === "en" ? "मराठी" : "English";
});
