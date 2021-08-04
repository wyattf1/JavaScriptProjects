var globalTitle = "Winter Is Coming";

function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}

var winterComing = urlSlug(globalTitle); 
