let compteur = 0;

function Deplacer() {
  const clavier = document.getElementById('clavier');
  const affichage = document.querySelector('.affichage');

  const nouvelDiv = document.createElement('div');
  nouvelDiv.innerHTML = clavier.value;

  nouvelDiv.classList.add('texte');
  if (compteur % 2 === 0) {
    nouvelDiv.classList.add('gauche');
  } else {
    nouvelDiv.classList.add('droite');
  }
  compteur++;

  affichage.appendChild(nouvelDiv);

  clavier.value = '';
}

function ModifierAspectClavier() {
  const clavier = document.getElementById('clavier');
  clavier.style.resize = 'vertical';
  clavier.style.overflow = 'auto';
  clavier.style.width = '50%';
  clavier.style.minWidth = '400px';
}

window.addEventListener('load', () => {
  ModifierAspectClavier();
  document.getElementById('envoyer').addEventListener('click', Deplacer);
});
