const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const likes = document.querySelector('.likes')

const counter = document.getElementById('counter')

let paused = false

window.setInterval(function () {
  if (!paused) {
    const count = parseInt(counter.textContent)
    counter.textContent = count + 1
  }
}, 1000)

minus.addEventListener('click', function (event) {
  const count = parseInt(counter.textContent)
  counter.textContent = count - 1
});

plus.addEventListener('click', function (event) {
  const count = parseInt(counter.textContent)
  counter.textContent = count + 1
});

heart.addEventListener('click', function (event) {
  const count = parseInt(counter.textContent)

  // Make up an id.
  const id = `likes-for-${count}`

  // Try to find an existing element with that id.
  let li = document.getElementById(id)

  // Create and initialise such an element if we didn't find it.
  if (!li) {
    li = document.createElement('li')
    li.id = `likes-for-${count}`
    li.setAttribute('like-count', 0)
    likes.appendChild(li)
  }

  // Now we have the li element, whether new or existing.
  const likesSoFar = parseInt(li.getAttribute('like-count'))
  const totalLikesNow = likesSoFar + 1
  li.setAttribute('like-count', totalLikesNow)
  li.innerText = `${count} has been liked ${totalLikesNow} time`
});

const pauseButtonSwaps = {
  "pause": "resume",
  "resume": "pause"
}

pause.addEventListener('click', function (event) {
  // Toggle the paused state.
  paused = !paused
  pause.textContent = pauseButtonSwaps[pause.textContent.trim()]
});
