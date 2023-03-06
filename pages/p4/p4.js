/*export function initP4() {
  const id = 3
  fetch('https://api.punkapi.com/v2/beers/' + id)
    .then(res => {
      if(!res.ok){
      throw new Error("Could not find Beer")
      }
      res.json()
    })
    .then(data => {
      const beer = data[0]
      updateUI(beer)
    })
    .catch(e => alert(e))
}
*/


export function initP4() {
  document.getElementById("btn-get-beer").onclick = getBeerId

}


async function getBeerId(){
  try{
    const id = document.getElementById("beer-id-input").value
    const beer = await getBeer(id)
    updateUI(beer) 
    } catch(err) {
      alert(err)
    }
}

async function getBeer(beerId) {
  const beers = await fetch('https://api.punkapi.com/v2/beers/' + beerId)
  .then(res => {
    if(!res.ok){
    throw new Error("Could not find Beer")
    }
    return res.json()
  })
  return beers[0]
}


function updateUI(beer) {
  document.getElementById("name").innerText = beer?.name
  document.getElementById("tagline").innerText = beer?.tagline
  document.getElementById("beer-img").src = beer?.image_url
}
