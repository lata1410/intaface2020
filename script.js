let links = document.getElementsByTagName('a');
for(let x = 0; x < links.length; x++){
  console.log(links[x].target);
  links[x].target = "_blank";
}
