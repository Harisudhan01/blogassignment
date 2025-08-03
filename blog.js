function search() {
  let input = document.getElementById("search").value.toLowerCase();
  let items = document.querySelectorAll(" .tab");

  items.forEach(item => {
    let text = item.textContent.toLowerCase();
    if (text.includes(input)) {
      item.style.display =""
    } else {
      item.style.display = "none";
    }
  });
}
const btn=document.getElementById("button");
const popup=document.getElementById("popup");
const tab=document.getElementById("tab");
const close1=document.getElementById("closePopup")

btn.addEventListener("click", () => {
    popup.style.display="block";
});
btn.addEventListener("click",() =>{
    tab.style.display="none";
});
close1.addEventListener("click", ()=>{
    popup.style.display="none"
    tab.style.display="block";
})
