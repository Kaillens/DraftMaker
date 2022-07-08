let List_Draft = {"DraftList" : []}
fetch('./DraftList.json')
  .then(response => response.json())
  .then(data => {
     List_Draft = data;

})
  .catch(error => console.log(error));

document.addEventListener("DOMContentLoaded", function(){
const btn = document.getElementById('StartDraft');
btn.addEventListener('click', GetListDraft);
});


function GetListDraft(){
 let Draft_ID = document.getElementById('DraftSelect').value;
 
  // Look for Draft
 let Draft_Find = List_Draft.find(el =>{
 if(el.DRAFT_INFO.DRAFT_ID == Draft_ID){
 return true;
 }
 
 if(Draft_Find != null){
 
 Draft_Rarity(Draft_Find.DRAFT_INFO)
 }
   
 })
  
  
  
}

function Draft_Rarity(DRAFT_INFO){
 
  let ResultArray = []
    // IN PACK LIST
  DRAFT_INFO.PACK_LIST.map(el =>{
    // LOOK FOR PACK
  let PACK = DRAFT_INFO.PACK_LIST_INFO.find(el2 =>{
  
    if(el2.PACK_ID == el){
     return true;
    }
  })
  
  if(PACK === null){
  return;
  }
    
    
   let ArrayRarity = []
 for (let i = 0; i < PACK.PACK_QTY; i++) {
 
  
  
   PACK.PACK_DISTRIBUTION.map(el =>{
   ArrayRarity.push(FIND_RARITY(PACK, el))
   })
   }
      ArrayRarity.map(el => {                           
    ResultArray.push(FindCard_For_Rarity(PACK, el))})
 

                              
 
 
 })
  
  
  
}

function FIND_RARITY(PackInfo, Rarity){
  let totalValue =  [];
  if(Rarity === "C+"){
    
  for (let i = 0; i < PackInfo.C_VALUE; i++) {
      totalValue.push("C");
   }
  for (let i = 0; i < PackInfo.SP_VALUE; i++) {
      totalValue.push("SP");
   }
    
   for (let i = 0; i < PackInfo.SSP_VALUE; i++) {
      totalValue.push("SPP");
   }
    
     for (let i = 0; i < PackInfo.R_VALUE; i++) {
      totalValue.push("R");
   }
    
     for (let i = 0; i < PackInfo.SR_VALUE; i++) {
      totalValue.push("SR");
   }
    
     for (let i = 0; i < PackInfo.UR_VALUE; i++) {
      totalValue.push("UR");
   }
    
     for (let i = 0; i < PackInfo.SC_VALUE; i++) {
      totalValue.push("SC");
   }  
    
  }else if(Rarity === "SP+"){
    
  for (let i = 0; i < PackInfo.SP_VALUE; i++) {
      totalValue.push("SP");
   }
    
   for (let i = 0; i < PackInfo.SSP_VALUE; i++) {
      totalValue.push("SPP");
   }
    
     for (let i = 0; i < PackInfo.R_VALUE; i++) {
      totalValue.push("R");
   }
    
     for (let i = 0; i < PackInfo.SR_VALUE; i++) {
      totalValue.push("SR");
   }
    
     for (let i = 0; i < PackInfo.UR_VALUE; i++) {
      totalValue.push("UR");
   }
    
     for (let i = 0; i < PackInfo.SC_VALUE; i++) {
      totalValue.push("SC");
   }
  
  } else if(Rarity === "SP-"){
    
   for (let i = 0; i < PackInfo.C_VALUE; i++) {
      totalValue.push("C");
   }
  for (let i = 0; i < PackInfo.SP_VALUE; i++) {
      totalValue.push("SP");
   }

            
  }else if(Rarity === "SSP+"){
    
    
   for (let i = 0; i < PackInfo.SSP_VALUE; i++) {
      totalValue.push("SPP");
   }
    
     for (let i = 0; i < PackInfo.R_VALUE; i++) {
      totalValue.push("R");
   }
    
     for (let i = 0; i < PackInfo.SR_VALUE; i++) {
      totalValue.push("SR");
   }
    
     for (let i = 0; i < PackInfo.UR_VALUE; i++) {
      totalValue.push("UR");
   }
    
     for (let i = 0; i < PackInfo.SC_VALUE; i++) {
      totalValue.push("SC");
   }
          
  }else if(Rarity === "SSP-"){
    
  for (let i = 0; i < PackInfo.C_VALUE; i++) {
      totalValue.push("C");
   }
  for (let i = 0; i < PackInfo.SP_VALUE; i++) {
      totalValue.push("SP");
   }
    
   for (let i = 0; i < PackInfo.SSP_VALUE; i++) {
      totalValue.push("SPP");
   }
    
  
  }else if(Rarity === "R+"){
    
     for (let i = 0; i < PackInfo.R_VALUE; i++) {
      totalValue.push("R");
   }
    
     for (let i = 0; i < PackInfo.SR_VALUE; i++) {
      totalValue.push("SR");
   }
    
     for (let i = 0; i < PackInfo.UR_VALUE; i++) {
      totalValue.push("UR");
   }
    
     for (let i = 0; i < PackInfo.SC_VALUE; i++) {
      totalValue.push("SC");
   }
    
  }else if(Rarity === "R-"){
    
 for (let i = 0; i < PackInfo.C_VALUE; i++) {
      totalValue.push("C");
   }
  for (let i = 0; i < PackInfo.SP_VALUE; i++) {
      totalValue.push("SP");
   }
    
   for (let i = 0; i < PackInfo.SSP_VALUE; i++) {
      totalValue.push("SPP");
   }
    
     for (let i = 0; i < PackInfo.R_VALUE; i++) {
      totalValue.push("R");
   }
    
    
  }else if(Rarity === "SR+"){
    
     for (let i = 0; i < PackInfo.SR_VALUE; i++) {
      totalValue.push("SR");
   }
    
     for (let i = 0; i < PackInfo.UR_VALUE; i++) {
      totalValue.push("UR");
   }
    
     for (let i = 0; i < PackInfo.SC_VALUE; i++) {
      totalValue.push("SC");
   }
  
  }else if(Rarity === "SR-"){
    
 for (let i = 0; i < PackInfo.C_VALUE; i++) {
      totalValue.push("C");
   }
  for (let i = 0; i < PackInfo.SP_VALUE; i++) {
      totalValue.push("SP");
   }
    
   for (let i = 0; i < PackInfo.SSP_VALUE; i++) {
      totalValue.push("SPP");
   }
    
     for (let i = 0; i < PackInfo.R_VALUE; i++) {
      totalValue.push("R");
   }
    
     for (let i = 0; i < PackInfo.SR_VALUE; i++) {
      totalValue.push("SR");
   }
    
  
  }else if(Rarity === "UR+"){
    
     for (let i = 0; i < PackInfo.UR_VALUE; i++) {
      totalValue.push("UR");
   }
    
     for (let i = 0; i < PackInfo.SC_VALUE; i++) {
      totalValue.push("SC");
   }
    
  }else if(Rarity === "UR-"){
    
 for (let i = 0; i < PackInfo.C_VALUE; i++) {
      totalValue.push("C");
   }
  for (let i = 0; i < PackInfo.SP_VALUE; i++) {
      totalValue.push("SP");
   }
    
   for (let i = 0; i < PackInfo.SSP_VALUE; i++) {
      totalValue.push("SPP");
   }
    
     for (let i = 0; i < PackInfo.R_VALUE; i++) {
      totalValue.push("R");
   }
    
     for (let i = 0; i < PackInfo.SR_VALUE; i++) {
      totalValue.push("SR");
   }
    
     for (let i = 0; i < PackInfo.UR_VALUE; i++) {
      totalValue.push("UR");
   }
    
    
  }else if(Rarity === "SC-"){
    
 for (let i = 0; i < PackInfo.C_VALUE; i++) {
      totalValue.push("C");
   }
  for (let i = 0; i < PackInfo.SP_VALUE; i++) {
      totalValue.push("SP");
   }
    
   for (let i = 0; i < PackInfo.SSP_VALUE; i++) {
      totalValue.push("SPP");
   }
    
     for (let i = 0; i < PackInfo.R_VALUE; i++) {
      totalValue.push("R");
   }
    
     for (let i = 0; i < PackInfo.SR_VALUE; i++) {
      totalValue.push("SR");
   }
    
     for (let i = 0; i < PackInfo.UR_VALUE; i++) {
      totalValue.push("UR");
   }
    
     for (let i = 0; i < PackInfo.SC_VALUE; i++) {
      totalValue.push("SC");
   }
    
  }else{
   return Rarity;
  }
  
  return totalValue[Math.floor(Math.random() * (totalValue.length - 0))] ;
}
  
  function FindCard_For_Rarity(PACKINFO, rarity){
    
    if(rarity == "C"){
        return PACKINFO.C_CARDS[Math.floor(Math.random() * (PACKINFO.C_CARDS.length - 0))];
    } else if(rarity == "SP){
           return PACKINFO.SP_CARDS[Math.floor(Math.random() * (PACKINFO.SP_CARDS.length - 0))];
    }else if(rarity == "SSP"){
             return PACKINFO.SSP_CARDS[Math.floor(Math.random() * (PACKINFO.SSP_CARDS.length - 0))]; 
    }else if(rarity == "R"){
              return PACKINFO.R_CARDS[Math.floor(Math.random() * (PACKINFO.R_CARDS.length - 0))];
    }else if(rarity == "SR"){
              return PACKINFO.SR_CARDS[Math.floor(Math.random() * (PACKINFO.SR_CARDS.length - 0))];
    }else if(rarity == "UR"){
              return PACKINFO.UR_CARDS[Math.floor(Math.random() * (PACKINFO.UR_CARDS.length - 0))];
    }else if(rarity == "SC"){
              return PACKINFO.SC_CARDS[Math.floor(Math.random() * (PACKINFO.SC_CARDS.length - 0))];
    }else if(rarity == "K"){
              return PACKINFO.K_CARDS[Math.floor(Math.random() * (PACKINFO.K_CARDS.length - 0))];
    }
    return ""
  }
