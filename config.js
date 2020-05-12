AOS.init({
  duration: 1200,
})



var floodzoneData = [{"2016":"962397","BLD_CODE":"K014","Country Name":"I.S. 14 - BROOKLYN","Region":"OTHER"},{"2016":"10962068","BLD_CODE":"K014","Country Name":"I.S. 14 - BROOKLYN","Region":"PENET"},{"2016":"225000","BLD_CODE":"K014","Country Name":"K811 SPED - BROOKLYN","Region":"OTHER"},{"2016":"373151","BLD_CODE":"K015","Country Name":"P.S. 15 - BROOKLYN","Region":"OTHER"},{"2016":"9438693","BLD_CODE":"K015","Country Name":"P.S. 15 - BROOKLYN","Region":"ROOF"},{"2016":"50000","BLD_CODE":"K027","Country Name":"P.S. 27 - BROOKLYN","Region":"OTHER"},{"2016":"1022792","BLD_CODE":"K027","Country Name":"RED HOOK NEIGHBORHOOD SCHOOL","Region":"OTHER"},{"2016":"1244587","BLD_CODE":"K027","Country Name":"SUMMIT ACADEMY CHARTER SCHOOL","Region":"OTHER"},{"2016":"422920","BLD_CODE":"K031","Country Name":"P.S. 31 - BROOKLYN","Region":"OTHER"},{"2016":"569024","BLD_CODE":"K043","Country Name":"I.S. 98 - BROOKLYN","Region":"OTHER"},{"2016":"575901","BLD_CODE":"K052","Country Name":"P.S. 52 - BROOKLYN","Region":"OTHER"},{"2016":"1962705","BLD_CODE":"K078","Country Name":"I.S. 78 - BROOKLYN","Region":"OTHER"},{"2016":"416740","BLD_CODE":"K090","Country Name":"P.S. 90 - BROOKLYN","Region":"OTHER"},{"2016":"1793196","BLD_CODE":"K100","Country Name":"P.S. 100 - BROOKLYN","Region":"OTHER"},{"2016":"82430431","BLD_CODE":"K101","Country Name":"P.S. 101 - BROOKLYN","Region":"OTHER"},{"2016":"572008","BLD_CODE":"K194","Country Name":"P.S. 194 - BROOKLYN","Region":"OTHER"},{"2016":"298757","BLD_CODE":"K195","Country Name":"P.S. 195 - BROOKLYN","Region":"OTHER"},{"2016":"1181842","BLD_CODE":"K207","Country Name":"P.S. 207 - BROOKLYN","Region":"OTHER"},{"2016":"362670","BLD_CODE":"K209","Country Name":"P.S. 209 - BROOKLYN","Region":"OTHER"},{"2016":"531687","BLD_CODE":"K211","Country Name":"I.S. 211 - BROOKLYN","Region":"OTHER"},{"2016":"899607","BLD_CODE":"K212","Country Name":"P.S. 212 - BROOKLYN","Region":"OTHER"},{"2016":"14308715","BLD_CODE":"K212","Country Name":"P.S. 212 - BROOKLYN","Region":"ROOF"},{"2016":"1191933","BLD_CODE":"K216","Country Name":"P.S. 216 - BROOKLYN","Region":"OTHER"},{"2016":"150000","BLD_CODE":"K225","Country Name":"K771 SPED - BROOKLYN","Region":"OTHER"},{"2016":"214150","BLD_CODE":"K225","Country Name":"P.S. 225 - BROOKLYN","Region":"OTHER"},{"2016":"18718609","BLD_CODE":"K236","Country Name":"P.S. 236 - BROOKLYN","Region":"FLOOD"},{"2016":"878490","BLD_CODE":"K236","Country Name":"P.S. 236 - BROOKLYN","Region":"OTHER"},{"2016":"606365","BLD_CODE":"K239","Country Name":"I.S. 239 - BROOKLYN","Region":"OTHER"},{"2016":"8170229","BLD_CODE":"K253","Country Name":"P.S. 253 - BROOKLYN","Region":"FLOOD"},{"2016":"340640","BLD_CODE":"K253","Country Name":"P.S. 253 - BROOKLYN","Region":"OTHER"},{"2016":"55190456","BLD_CODE":"K254","Country Name":"P.S. 254 - BROOKLYN","Region":"OTHER"},{"2016":"998565","BLD_CODE":"K260","Country Name":"THE FRESH CREEK SCHOOL - BROOK","Region":"OTHER"},{"2016":"970550","BLD_CODE":"K272","Country Name":"P.S. 272 - BROOKLYN","Region":"OTHER"},{"2016":"976431","BLD_CODE":"K276","Country Name":"P.S. 276 - BROOKLYN","Region":"OTHER"},{"2016":"7089584","BLD_CODE":"K277","Country Name":"P.S. 277 - BROOKLYN","Region":"OTHER"},{"2016":"792237","BLD_CODE":"K278","Country Name":"I.S. 278 - BROOKLYN","Region":"OTHER"},{"2016":"1789657","BLD_CODE":"K279","Country Name":"P.S. 279 - BROOKLYN","Region":"OTHER"},{"2016":"1477342","BLD_CODE":"K281","Country Name":"I.S. 281 - BROOKLYN","Region":"OTHER"},{"2016":"2481249","BLD_CODE":"K286","Country Name":"K811 SPED - BROOKLYN","Region":"OTHER"},{"2016":"29437","BLD_CODE":"K287","Country Name":"P.S. 287 - BROOKLYN","Region":"OTHER"},{"2016":"9261735","BLD_CODE":"K287","Country Name":"P.S. 287 - BROOKLYN","Region":"ROOF"},{"2016":"1429005","BLD_CODE":"K288","Country Name":"P.S. 288 - BROOKLYN","Region":"OTHER"},{"2016":"4085218","BLD_CODE":"K288","Country Name":"P.S. 288 - BROOKLYN","Region":"ROOF"},{"2016":"3568366","BLD_CODE":"K303","Country Name":"I.S. 303 - BROOKLYN","Region":"OTHER"},{"2016":"170337","BLD_CODE":"K303","Country Name":"R. CARSON SCL OF COASTAL ST-K","Region":"OTHER"},{"2016":"11656662","BLD_CODE":"K312","Country Name":"P.S. 312 - BROOKLYN","Region":"OTHER"},{"2016":"1223216","BLD_CODE":"K312","Country Name":"P.S. 312 - BROOKLYN","Region":"PENET"},{"2016":"156367","BLD_CODE":"K318","Country Name":"I.S. 318 - BROOKLYN","Region":"OTHER"},{"2016":"165536","BLD_CODE":"K329","Country Name":"P.S. 329 - BROOKLYN","Region":"OTHER"},{"2016":"275666","BLD_CODE":"K366","Country Name":"SCI AND MEDICINE MIDDLE SCHL","Region":"OTHER"},{"2016":"208842","BLD_CODE":"K366","Country Name":"THE SCIENCE AND MEDICINE MIDDL","Region":"OTHER"},{"2016":"809460","BLD_CODE":"K370","Country Name":"K370 SPED - BROOKLYN","Region":"OTHER"},{"2016":"496365","BLD_CODE":"K380","Country Name":"P.S. 380 - BROOKLYN","Region":"OTHER"},{"2016":"35000","BLD_CODE":"K400","Country Name":"HIGH SCHOOL OF SPORTS MGMT- K","Region":"OTHER"},{"2016":"236100","BLD_CODE":"K400","Country Name":"INTERNATIONAL HIGH SCHOOL - K","Region":"OTHER"},{"2016":"2503012","BLD_CODE":"K400","Country Name":"KINGSBOROUGH EARLY COLLEGE SCH","Region":"OTHER"},{"2016":"8780125","BLD_CODE":"K400","Country Name":"KINGSBOROUGH EARLY COLLEGE SCH","Region":"ROOF"},{"2016":"381110","BLD_CODE":"K400","Country Name":"LEADERS HIGH SCHOOL - K","Region":"OTHER"},{"2016":"700496","BLD_CODE":"K400","Country Name":"LIFE ACADEMY H.S. FILM & MUSIC","Region":"OTHER"},{"2016":"38977","BLD_CODE":"K401","Country Name":"INTERNATIONAL HIGH SCHOOL - K","Region":"OTHER"},{"2016":"858443","BLD_CODE":"K410","Country Name":"ABRAHAM LINCOLN HS - BROOKLYN","Region":"OTHER"},{"2016":"573313","BLD_CODE":"K495","Country Name":"ORIGINS HIGH SCHOOL","Region":"OTHER"},{"2016":"687584","BLD_CODE":"K495","Country Name":"SHEEPSHEAD BAY HS - BROOKLYN","Region":"OTHER"},{"2016":"12643804","BLD_CODE":"K515","Country Name":"BROOKLYN BRIDGE ACADEMY - K","Region":"OTHER"},{"2016":"845202","BLD_CODE":"K515","Country Name":"BROOKLYN GENERATION SCHOOL - K","Region":"OTHER"},{"2016":"2232759","BLD_CODE":"K515","Country Name":"BROOKLYN THEATRE ARTS H.S. - K","Region":"OTHER"},{"2016":"116327","BLD_CODE":"K515","Country Name":"VICTORY COLLEGIATE HS - K","Region":"OTHER"},{"2016":"2261549","BLD_CODE":"K516","Country Name":"BROOKLYN GENERATION SCHOOL - K","Region":"OTHER"},{"2016":"601985","BLD_CODE":"K535","Country Name":"LEON GOLDSTEIN HS - BROOKLYN","Region":"OTHER"},{"2016":"7480842","BLD_CODE":"K540","Country Name":"JOHN DEWEY HS - BROOKLYN","Region":"OTHER"},{"2016":"28968310","BLD_CODE":"K540","Country Name":"JOHN DEWEY HS - BROOKLYN","Region":"ROOF"},{"2016":"33463411","BLD_CODE":"K610","Country Name":"AUTOMOTIVE TRADES VOC HS - K","Region":"FLOOD"},{"2016":"1538554","BLD_CODE":"K610","Country Name":"AUTOMOTIVE TRADES VOC HS - K","Region":"OTHER"},{"2016":"310400","BLD_CODE":"K611","Country Name":"DISTRICT 13 PRE-K CENTER","Region":"OTHER"},{"2016":"35000","BLD_CODE":"K611","Country Name":"THE DOCK STREET SCHOOL FOR STE","Region":"OTHER"},{"2016":"4495286","BLD_CODE":"K620","Country Name":"WILLIAM E. GRADY VOC HS - K","Region":"OTHER"},{"2016":"11596941","BLD_CODE":"K650","Country Name":"WIILIAMSBURG PREP- BROOKLYN","Region":"FLOOD"},{"2016":"316137","BLD_CODE":"K650","Country Name":"WIILIAMSBURG PREP- BROOKLYN","Region":"OTHER"},{"2016":"35000","BLD_CODE":"K650","Country Name":"WILLIAMSBURG HS FOR ARCH & DES","Region":"OTHER"},{"2016":"2812345","BLD_CODE":"K722","Country Name":"K721 SPED - BROOKLYN","Region":"OTHER"},{"2016":"1701985","BLD_CODE":"K728","Country Name":"LIBERATION DIPLOMA PLUS H.S.","Region":"OTHER"},{"2016":"400000","BLD_CODE":"K728","Country Name":"LIBERATION DIPLOMA PLUS H.S. -","Region":"OTHER"},{"2016":"2259","BLD_CODE":"K729","Country Name":"P.S. 207 - BROOKLYN","Region":"OTHER"},{"2016":"184716","BLD_CODE":"K825","Country Name":"SOUTH BROOKLYN COMM. HS - K","Region":"OTHER"},{"2016":"3075601","BLD_CODE":"K934","Country Name":"FORT HAMILTON HS - K","Region":"ROOF"},{"2016":"589830","BLD_CODE":"KBZT","Country Name":"K000 - BROOKLYN","Region":"OTHER"},{"2016":"1232983","BLD_CODE":"M010","Country Name":"FREDERICK DOUGLAS ACADEMY - M","Region":"OTHER"},{"2016":"231830","BLD_CODE":"M013","Country Name":"CENTRAL PARK EAST HS - MANHATT","Region":"OTHER"},{"2016":"79878","BLD_CODE":"M013","Country Name":"EAST HARLEM SCHOLARS ACADEMY C","Region":"OTHER"},{"2016":"94315","BLD_CODE":"M013","Country Name":"I.S. 13 - MANHATTAN","Region":"OTHER"},{"2016":"222176","BLD_CODE":"M013","Country Name":"P.S. 497 - MANHATTAN","Region":"OTHER"},{"2016":"359855","BLD_CODE":"M015","Country Name":"P.S. 15 - MANHATTAN","Region":"OTHER"},{"2016":"469401","BLD_CODE":"M022","Country Name":"NEW EXPLORATIONS - M","Region":"OTHER"},{"2016":"238886","BLD_CODE":"M030","Country Name":"M138 SPED - MANHATTAN","Region":"OTHER"},{"2016":"565937","BLD_CODE":"M030","Country Name":"P.S. 30 - MANHATTAN","Region":"OTHER"},{"2016":"5007064","BLD_CODE":"M030","Country Name":"P.S. 30 - MANHATTAN","Region":"ROOF"},{"2016":"100000","BLD_CODE":"M034","Country Name":"P.S. 34 - MANHATTAN","Region":"OTHER"},{"2016":"101878","BLD_CODE":"M045","Country Name":"COAL. SCHOOL FOR SOCIAL CHANGE","Region":"OTHER"},{"2016":"34483","BLD_CODE":"M045","Country Name":"I.S. 45 - MANHATTAN","Region":"OTHER"},{"2016":"34808","BLD_CODE":"M045","Country Name":"SCHOOL BASED HEALTH CENTER - M","Region":"OTHER"},{"2016":"374650","BLD_CODE":"M046","Country Name":"P.S. 46 - MANHATTAN","Region":"OTHER"},{"2016":"1048262","BLD_CODE":"M050","Country Name":"P.S. 50 - MANHATTAN","Region":"OTHER"},{"2016":"18049678","BLD_CODE":"M050","Country Name":"P.S. 50 - MANHATTAN","Region":"ROOF"},{"2016":"200000","BLD_CODE":"M050","Country Name":"P.S. 964 - MANHATTAN","Region":"OTHER"},{"2016":"434215","BLD_CODE":"M061","Country Name":"P.S. 315 - MANHATTAN","Region":"OTHER"},{"2016":"50000","BLD_CODE":"M061","Country Name":"P.S. 361 - MANHATTAN","Region":"OTHER"},{"2016":"647635","BLD_CODE":"M072","Country Name":"P.S. 72 - MANHATTAN","Region":"OTHER"},{"2016":"250000","BLD_CODE":"M083","Country Name":"P.S. 182 - MANHATTAN","Region":"OTHER"},{"2016":"11662604","BLD_CODE":"M083","Country Name":"P.S. 83 - MANHATTAN","Region":"OTHER"},{"2016":"151479","BLD_CODE":"M089","Country Name":"I.S. 89 - MANHATTAN","Region":"OTHER"},{"2016":"291178","BLD_CODE":"M089","Country Name":"P.S. 89 - MANHATTAN","Region":"OTHER"},{"2016":"458289","BLD_CODE":"M097","Country Name":"BARD COLLEGE HS - MANHATTAN","Region":"OTHER"},{"2016":"12877","BLD_CODE":"M099","Country Name":"I.S. 224 - MANHATTAN","Region":"OTHER"},{"2016":"15175291","BLD_CODE":"M102","Country Name":"P.S. 102 - MANHATTAN","Region":"FLOOD"},{"2016":"60000","BLD_CODE":"M102","Country Name":"P.S. 102 - MANHATTAN","Region":"OTHER"},{"2016":"106851","BLD_CODE":"M102","Country Name":"P.S. 102 - MANHATTAN","Region":"ROOF"},{"2016":"1073372","BLD_CODE":"M104","Country Name":"I.S. 104 - MANHATTAN","Region":"OTHER"},{"2016":"364439","BLD_CODE":"M107","Country Name":"THE HERITAGE SCHOOL - MANHATTA","Region":"OTHER"},{"2016":"10478992","BLD_CODE":"M108","Country Name":"P.S. 108 - MANHATTAN","Region":"OTHER"},{"2016":"184945","BLD_CODE":"M110","Country Name":"P.S. 110 - MANHATTAN","Region":"OTHER"},{"2016":"9648","BLD_CODE":"M112","Country Name":"P.S. 112 - MANHATTAN","Region":"OTHER"},{"2016":"1776455","BLD_CODE":"M117","Country Name":"I.S. 12 - MANHATTAN","Region":"OTHER"},{"2016":"36805","BLD_CODE":"M117","Country Name":"I.S. 372 - MANHATTAN","Region":"OTHER"},{"2016":"34483","BLD_CODE":"M117","Country Name":"J.H.S. 117 - MANHATTAN","Region":"OTHER"},{"2016":"12741148","BLD_CODE":"M121","Country Name":"P.S. 38 - MANHATTAN","Region":"OTHER"},{"2016":"514766","BLD_CODE":"M126","Country Name":"P.S. 126 - MANHATTAN","Region":"OTHER"},{"2016":"30488381","BLD_CODE":"M126","Country Name":"P.S. 126 - MANHATTAN","Region":"ROOF"},{"2016":"53987","BLD_CODE":"M146","Country Name":"P.S. 146 - MANHATTAN","Region":"OTHER"},{"2016":"149249","BLD_CODE":"M155","Country Name":"I.S. 377 - MANHATTAN","Region":"OTHER"},{"2016":"172367","BLD_CODE":"M155","Country Name":"P.S. 155 - MANHATTAN","Region":"OTHER"},{"2016":"608000","BLD_CODE":"M170","Country Name":"AMBER CHARTER SCHOOL - M","Region":"OTHER"},{"2016":"156225","BLD_CODE":"M188","Country Name":"P.S. 188 - MANHATTAN","Region":"OTHER"},{"2016":"330236","BLD_CODE":"M200","Country Name":"P.S. 200 - MANHATTAN","Region":"OTHER"},{"2016":"247666","BLD_CODE":"M206","Country Name":"P.S. 206 - MANHATTAN","Region":"OTHER"},{"2016":"293289","BLD_CODE":"M271","Country Name":"P.S./I.S. 217 - MANHATTAN","Region":"OTHER"},{"2016":"2034189","BLD_CODE":"M271","Country Name":"P.S./I.S. 217 - MANHATTAN","Region":"ROOF"},{"2016":"204549","BLD_CODE":"M276","Country Name":"P.S./I.S. 276 - MANHATTAN","Region":"OTHER"},{"2016":"112000","BLD_CODE":"M343","Country Name":"P.S. 343 - MANHATTAN","Region":"OTHER"},{"2016":"409592","BLD_CODE":"M435","Country Name":"MANHTN CT FOR MATH & SCI. HS","Region":"OTHER"},{"2016":"186000","BLD_CODE":"M435","Country Name":"MANHTN CT FOR MATH & SCI. HS -","Region":"OTHER"},{"2016":"4881293","BLD_CODE":"M477","Country Name":"M226 SPED - MANHATTAN","Region":"OTHER"},{"2016":"912808","BLD_CODE":"M477","Country Name":"STUYVESANT HS - MANHATTAN","Region":"OTHER"},{"2016":"221097","BLD_CODE":"M495","Country Name":"PARK EAST ALT HS","Region":"OTHER"},{"2016":"126507","BLD_CODE":"M495","Country Name":"PARK EAST HS - MANHATTAN","Region":"OTHER"},{"2016":"3920075","BLD_CODE":"M645","Country Name":"LIFE SCIENCE SECONDARY SCHOOL","Region":"OTHER"},{"2016":"95110","BLD_CODE":"M824","Country Name":"MILLENNIUM HS - MANHATTAN","Region":"OTHER"},{"2016":"1200000","BLD_CODE":"M877","Country Name":"NEW YORK HARBOR SCHOOL - M","Region":"OTHER"},{"2016":"250716","BLD_CODE":"M877","Country Name":"NEW YORK HARBOR SCHOOL - MANHA","Region":"OTHER"},{"2016":"224424","BLD_CODE":"M895","Country Name":"YOUNG WOMEN'S LEADERSHIP SCHOO","Region":"OTHER"},{"2016":"122071","BLD_CODE":"MAEG","Country Name":"JOHN V. LINDSAY WILDCAT ACADEM","Region":"OTHER"},{"2016":"437986","BLD_CODE":"Q042","Country Name":"P.S. 42 - QUEENS","Region":"OTHER"},{"2016":"21183887","BLD_CODE":"Q042","Country Name":"P.S. 42 - QUEENS","Region":"SANDY"},{"2016":"3730239","BLD_CODE":"Q043","Country Name":"P.S. 43 - QUEENS","Region":"OTHER"},{"2016":"1862059","BLD_CODE":"Q043","Country Name":"P.S. 43 - QUEENS","Region":"SANDY"},{"2016":"218816","BLD_CODE":"Q047","Country Name":"P.S. 47 - QUEENS","Region":"OTHER"},{"2016":"3773462","BLD_CODE":"Q047","Country Name":"P.S. 47 - QUEENS","Region":"ROOF"},{"2016":"1885003","BLD_CODE":"Q098","Country Name":"P.S. 98 - QUEENS","Region":"OTHER"},{"2016":"328045","BLD_CODE":"Q105","Country Name":"P.S. 105 - QUEENS","Region":"OTHER"},{"2016":"5495074","BLD_CODE":"Q105","Country Name":"P.S. 105 - QUEENS","Region":"SANDY"},{"2016":"134692","BLD_CODE":"Q106","Country Name":"P.S. 106 - QUEENS","Region":"OTHER"},{"2016":"898140","BLD_CODE":"Q111","Country Name":"P.S. 111 - QUEENS","Region":"OTHER"},{"2016":"249865","BLD_CODE":"Q114","Country Name":"P.S. 114 - QUEENS","Region":"OTHER"},{"2016":"23359268","BLD_CODE":"Q114","Country Name":"P.S. 114 - QUEENS","Region":"SANDY"},{"2016":"1744199","BLD_CODE":"Q126","Country Name":"I.S. 126 - QUEENS","Region":"OTHER"},{"2016":"576647","BLD_CODE":"Q126","Country Name":"THE 30TH AVENUE SCHOOL","Region":"OTHER"},{"2016":"1654927","BLD_CODE":"Q146","Country Name":"P.S. 146 - QUEENS","Region":"OTHER"},{"2016":"2053516","BLD_CODE":"Q171","Country Name":"P.S. 171 - QUEENS","Region":"OTHER"},{"2016":"3715746","BLD_CODE":"Q180","Country Name":"THE SCHOLARS ACADEMY - QUEENS","Region":"OTHER"},{"2016":"1937213","BLD_CODE":"Q183","Country Name":"P.S. 183 - QUEENS","Region":"OTHER"},{"2016":"385890","BLD_CODE":"Q195","Country Name":"P.S. 195 - QUEENS","Region":"OTHER"},{"2016":"100000","BLD_CODE":"Q195","Country Name":"P.S. 195 - QUEENS","Region":"SANDY"},{"2016":"342820","BLD_CODE":"Q197","Country Name":"P.S. 197 - QUEENS","Region":"OTHER"},{"2016":"5882572","BLD_CODE":"Q197","Country Name":"P.S. 197 - QUEENS","Region":"ROOF"},{"2016":"49985","BLD_CODE":"Q198","Country Name":"CHALLENGE PREP CHARTER SCHOOL","Region":"OTHER"},{"2016":"5159468","BLD_CODE":"Q198","Country Name":"P.S. 333 - QUEENS","Region":"SANDY"},{"2016":"703743","BLD_CODE":"Q207","Country Name":"P.S. 207 - QUEENS","Region":"OTHER"},{"2016":"109175","BLD_CODE":"Q225","Country Name":"I.S. 318 - QUEENS","Region":"OTHER"},{"2016":"278835","BLD_CODE":"Q225","Country Name":"P.S. 317 - QUEENS","Region":"OTHER"},{"2016":"10262312","BLD_CODE":"Q225","Country Name":"P.S. 317 - QUEENS","Region":"SANDY"},{"2016":"17554660","BLD_CODE":"Q232","Country Name":"P.S. 232 - QUEENS","Region":"OTHER"},{"2016":"1461220","BLD_CODE":"Q242","Country Name":"P.S. 242 - QUEENS","Region":"OTHER"},{"2016":"439727","BLD_CODE":"Q269","Country Name":"ELM TREE ELEMENTARY SCHOOL","Region":"OTHER"},{"2016":"541593","BLD_CODE":"Q269","Country Name":"P.S. 143 - QUEENS","Region":"OTHER"},{"2016":"35000","BLD_CODE":"Q404","Country Name":"ACAD FOR CAREERS IN TV AND FIL","Region":"OTHER"},{"2016":"35000","BLD_CODE":"Q404","Country Name":"HUNTERS POINT COMMUNITY MIDDLE","Region":"OTHER"},{"2016":"258118","BLD_CODE":"Q410","Country Name":"BEACH CHANNEL HS - QUEENS","Region":"OTHER"},{"2016":"1831077","BLD_CODE":"Q410","Country Name":"CHANNEL VIEW SCL FOR RESEARCH","Region":"OTHER"},{"2016":"775837","BLD_CODE":"Q410","Country Name":"ROCKAWAY COLLEGIATE HIGH SCHL","Region":"OTHER"},{"2016":"1647035","BLD_CODE":"Q410","Country Name":"ROCKAWAY COLLEGIATE HIGH SCHOO","Region":"OTHER"},{"2016":"104211","BLD_CODE":"Q410","Country Name":"ROCKAWAY PARK HS FOR ENVIRONME","Region":"OTHER"},{"2016":"23065793","BLD_CODE":"Q452","Country Name":"LONG ISLAND CITY H.S.","Region":"OTHER"},{"2016":"17972542","BLD_CODE":"Q452","Country Name":"LONG ISLAND CITY HS - Q","Region":"FLOOD"},{"2016":"3238432","BLD_CODE":"Q452","Country Name":"LONG ISLAND CITY HS - Q","Region":"OTHER"},{"2016":"50000","BLD_CODE":"Q452","Country Name":"Q993 SPED - QUEENS","Region":"OTHER"},{"2016":"105000","BLD_CODE":"Q465","Country Name":"ACAD. OF MEDICAL TECHNOLOGY -","Region":"OTHER"},{"2016":"269964","BLD_CODE":"Q465","Country Name":"FAR ROCKAWAY HS","Region":"OTHER"},{"2016":"23977124","BLD_CODE":"Q465","Country Name":"FREDERICK DOUGLASS ACAD VI HS","Region":"ROOF"},{"2016":"727182","BLD_CODE":"Q465","Country Name":"FREDERICK DOUGLASS ACADEMY VI","Region":"OTHER"},{"2016":"3731377","BLD_CODE":"Q465","Country Name":"M.S. 282 - QUEENS","Region":"OTHER"},{"2016":"1705685","BLD_CODE":"R002","Country Name":"I.S. 2 - STATEN ISLAND","Region":"OTHER"},{"2016":"762891","BLD_CODE":"R038","Country Name":"P.S. 38 - STATEN ISLAND","Region":"OTHER"},{"2016":"750628","BLD_CODE":"R050","Country Name":"P.S. 50 - STATEN ISLAND","Region":"OTHER"},{"2016":"873793","BLD_CODE":"R052","Country Name":"P.S. 52 - STATEN ISLAND","Region":"OTHER"},{"2016":"774883","BLD_CODE":"X037","Country Name":"P.S. 37 - BRONX","Region":"FLOOD"},{"2016":"90000","BLD_CODE":"X037","Country Name":"P.S. 37 - BRONX","Region":"OTHER"},{"2016":"100000","BLD_CODE":"X174","Country Name":"ARCHIMEDES ACADEMY FOR MATH  -","Region":"OTHER"},{"2016":"8209584","BLD_CODE":"X174","Country Name":"BRONX MATH PREP - BRONX","Region":"FLOOD"},{"2016":"808913","BLD_CODE":"X174","Country Name":"BRONX MATH PREP - BRONX","Region":"OTHER"},{"2016":"153825","BLD_CODE":"X174","Country Name":"WOMEN'S ACADEMY OF EXCELLENCE","Region":"OTHER"},{"2016":"100000","BLD_CODE":"X175","Country Name":"P.S. 175 - BRONX","Region":"OTHER"},{"2016":"8374377","BLD_CODE":"X183","Country Name":"THE URBAN ASSEMBLY BRONX ACAD","Region":"FLOOD"},{"2016":"2861022","BLD_CODE":"X229","Country Name":"I.S. 229 - BRONX","Region":"OTHER"},{"2016":"316856","BLD_CODE":"X368","Country Name":"M.S./H.S. 368 - BRONX","Region":"OTHER"},{"2016":"100000","BLD_CODE":"X405","Country Name":"BRONX RIVER HIGH SCHOOL","Region":"OTHER"},{"2016":"8923165","BLD_CODE":"X405","Country Name":"HERBERT H. LEHMAN HS - X","Region":"OTHER"},{"2016":"28546923","BLD_CODE":"X405","Country Name":"HERBERT H. LEHMAN HS - X","Region":"ROOF"},{"2016":"812303","BLD_CODE":"X405","Country Name":"LEHMAN HS","Region":"OTHER"},{"2016":"175427","BLD_CODE":"X405","Country Name":"PELHAM LAB HIGH SCHOOL","Region":"OTHER"},{"2016":"100000","BLD_CODE":"X405","Country Name":"RENAISSANCE HS FOR MUS THEATRE","Region":"OTHER"},{"2016":"174431","BLD_CODE":"X405","Country Name":"SCHUYLERVILLE PREPARATORY HIGH","Region":"OTHER"},{"2016":"100000","BLD_CODE":"X405","Country Name":"WESTCHESTER SQUARE ACADEMY - B","Region":"OTHER"},{"2016":"100000","BLD_CODE":"X475","Country Name":"BRONX SCHOOL OF LAW & FINANCE","Region":"OTHER"},{"2016":"500","BLD_CODE":"X475","Country Name":"BRONX THEATRE HS - BRONX","Region":"OTHER"},{"2016":"100000","BLD_CODE":"X475","Country Name":"ELLIS PREPARATORY ACADEMY-X","Region":"OTHER"},{"2016":"12148562","BLD_CODE":"X475","Country Name":"JOHN F. KENNEDY HS - BRONX","Region":"FLOOD"},{"2016":"74191","BLD_CODE":"X475","Country Name":"MARBLE HILL INTERNATIONAL HS -","Region":"OTHER"},{"2016":"10772211","BLD_CODE":"X722","Country Name":"X721 SPED - BRONX","Region":"FLOOD"},{"2016":"354570","BLD_CODE":"X722","Country Name":"X721 SPED - BRONX","Region":"OTHER"},{"2016":"10664","BLD_CODE":"X972","Country Name":"BRONX ARENA HIGH SCHOOL - BRON","Region":"OTHER"}];

var graph1Width = 250;
var graph1Height = 250;

var graph2Width = 350;
var graph2Height = 350;

// 차트 함수 (데이터, 가로길이, 세로길이, 그래프 svg 클래스 이름)
function chart(root, width, height, graphClass) {
  const svg = d3.select(graphClass);

  var format = d3.format(",d"),
      color = d3.scaleOrdinal(d3.schemeSet3)
      // floodScale = d3.scaleOrdinal().domain(["FLOOD","NEW SCHOOL","OTHER","PENET","ROOF","SANDY"])
      //               .range(["#111","#222","#333","#444","#555","#666"])
      //               .attr("fill", d => floodScale(d.group));

  var tooltip = d3.select("body").append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("color", "white")
    .style("padding", "8px")
    .style("background-color", "rgba(0, 0, 0, 0.75)")
    .style("border-radius", "6px")
    .style("font", "12px sans-serif")
    .text("tooltip");

  var bubble = d3.pack()
    .size([width, height])
    .padding(1.5);
  bubble(root);

  var node = svg.selectAll(".node")
      .data(root.children)
      .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("circle")
      .attr("r", function(d) { return d.r; })
      .style("fill", function(d) {
          return color(d.data.group);
      })
      // .style("fill", function(d) {
      //     return floodScale(d.data.group);
      // })
      .on("mouseover", function(d) {
          tooltip.text(d.data.name + ": \n" + "$" + format(d.value));
          tooltip.style("visibility", "visible");
          d3.select(this).style("stroke", "black");
      })
      .on("mousemove", function() {
          return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
      })
      .on("mouseout", function() {
        d3.select(this).style("stroke", "none");
        return tooltip.style("visibility", "hidden");
      });

  node.append("text")
      .attr("dy", ".3em")
      .style("text-anchor", "middle")
      .style("font", "10px sans-serif")
      .style("pointer-events", "none")
      //.text(function(d) { return d.data.name.substring(0, d.r / 3); });

}

function transformToGenericObjectList(flatData) {
  var container = {};
  container.children = [];
  var regionToCountry = {};
  flatData.forEach(entry => {
    if (entry["2016"] !== "") {
      container.children.push({group: entry["Region"], value: parseFloat(entry["2016"]), name: entry["Country Name"]});
    }
  });

  return container;
}

setTimeout(() => {

  chart(d3.hierarchy(transformToGenericObjectList(floodzoneData)) // <- floodzone을 다른걸로 바꾸면 됨
        .sum(function(d) { return d.value; })
        .sort(function(a, b) { return b.value - a.value }), graph1Width, graph1Height, ".graph1")

  chart(d3.hierarchy(transformToGenericObjectList(floodzoneData)) // <- floodzone을 다른걸로 바꾸면 됨
              .sum(function(d) { return d.value; })
              .sort(function(a, b) { return b.value - a.value }), graph2Width, graph2Height, ".graph2")

}, 1500);


var config = {
    style: 'mapbox://styles/geunhee-mit/cka35izgd03ag1is6xi3yixxq',
    accessToken: 'pk.eyJ1IjoiZ2V1bmhlZS1taXQiLCJhIjoiY2s4ZjBvc3JkMDF5MDNsc3k4ZXZpc3phdyJ9.ubTF4v5-Sr3trIe0ytzIZQ',
    showMarkers: false,
    alignment: 'left',
    theme: 'black',
    byline: '',
    // footer: 'Source: Story text from Wikipedia, August 2019. Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',
    chapters: [
        {
            id: 'school',
            title: 'School location and students',
            image: 'img/SVG/leg1.svg',
            // image: 'img/NYC_basemap.jpg',
            // description: 'The project seeks to analyze the level of exposure of the school facilities and highlight the current capital investment projects the New York City local government is developing to build new schools and renovate existing schools.',
            location: {
              center: { lon: -74.03449, lat: 40.69642 }, //-74.37829, lat: 40.71238
              zoom: 10.3,
              pitch: 0.00,
              bearing: 0.00
              //https://demos.mapbox.com/location-helper/
            },
            onChapterEnter: [
              // {
              //     layer: 'schools-ratemap-2015-3r2c9x',
              //     opacity: 0
              // },
              {
                  layer: 'nycschools-5-1sd31r',
                  opacity: 0
              },
              {
                  layer: 'schools-2020_heatmap',
                  opacity: 0
              },
              {
                  layer: 'schools-2020-100-2lkivu',
                  opacity: 0
              },
              {
                  layer: 'school-floodplain-a0lqb0',
                  opacity: 0
              },
              {
                  layer: 'sea-level-rise-maps-2020s-100-c29tkm',
                  opacity: 0
              },
              {
                  layer: 'sea-level-rise-maps-2050s-100-99sxch',
                  opacity: 0
              }
            ],
            onChapterExit: [

            ]
        }
        ,
        {

            id: 'risk',
            title: 'Risk exposure to flooding',
            image: 'img/SVG/leg2.svg',
            description: '0.0 % of flood zone areas \n 0.0 schools within the floodplain zones 0.0 % of schools within floodplain zones',
            location: {
              center: { lon: -74.02387, lat: 40.65117 }, //-74.03449, lat: 40.69642
              zoom: 12,
              pitch: 200.00,
              bearing: 10
            },
            onChapterEnter: [
              {
                  layer: 'nycschools-5-1sd31r',
                  opacity: 0.2
              },
              {
                  layer: 'schools-2020_heatmap',
                  opacity: 0
              },
              {
                  layer: 'schools-2020-100-2lkivu',
                  opacity: 0
              },
              {
                  layer: 'school-floodplain-a0lqb0',
                  opacity: 0
              },
              {
                  layer: 'sea-level-rise-maps-2020s-100-c29tkm',
                  opacity: 0.5
              },
              {
                  layer: 'sea-level-rise-maps-2050s-100-99sxch',
                  opacity: 0.9
              }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'budget',
            title: 'Research Question',
            // image: 'img/SVG/leg3.svg',
            description: '1. How the new york city government is allocating public resources to mitigate flooding impacts in school facilities? 2. Are public resources allocated to the schools with the highest risk of flooding?',
            location: {
              center: { lon: -74.15912, lat: 40.70199 },
              zoom: 10.28,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                  layer: 'schools-2020-100-2lkivu',
                  opacity: 1
              },
              {
                  layer: 'nycschools-5-1sd31r',
                  opacity: 0.5
              },
              {
                  layer: 'schools-2020_heatmap',
                  opacity: 1
              },
              // {
              //     layer: 'schools-2020-100-2lkivu',
              //     opacity: 0
              // },
              {
                  layer: 'school-floodplain-a0lqb0',
                  opacity: 0
              },
              {
                  layer: 'sea-level-rise-maps-2020s-100-c29tkm',
                  opacity: 0
              },
              {
                  layer: 'sea-level-rise-maps-2050s-100-99sxch',
                  opacity: 0
              }
            ],
            onChapterExit: [

            ]
        }
        //,
        // {
        //     id: 'result',
        //     title: 'Results',
        //     image: 'img/SVG/leg4.svg',
        //     description: '',
        //     location: {
        //       center: { lon: -74.04696, lat: 40.67412 },
        //       zoom: 11.98,
        //       pitch: 0.00,
        //       bearing: 0.00
        //     },
        //     onChapterEnter: [
        //
        //     ],
        //     onChapterExit: [
        //
        //     ]
        // }

    ]


};
