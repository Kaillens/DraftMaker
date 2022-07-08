let List_Draft = {"DraftList" : []}
fetch('./DraftList.json')
  .then(response => response.json())
  .then(data => {
     List_Draft = data;

})
  .catch(error => console.log(error));

const btn = document.getElementById('StartDraft');
btn.addEventListener('click', GetListDraft);

function GetListDraft(){
  console.log(List_Draft)
  
}

function Draft_Rarity(id){
  
  
  
  
}

function Draft_Attribution(array){
  
  
}
