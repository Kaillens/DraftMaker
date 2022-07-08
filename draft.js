fetch('./DraftList.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

const btn = document.getElementById('StartDraft');
btn.addEventListener('click', GetListDraft);

function GetListDraft(){

  
}

function Draft_Rarity(id){
  
  
  
  
}

function Draft_Attribution(array){
  
  
}
