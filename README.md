# Web Project : Bubble Trouble
 
## Intro 
Percez et evitez les bulles pour survivre !!!

## Différents composants & charactéristiques

- Personnage : 
    1. bouge de gauche a droite
    2. tire un harpon vers le haut SEULEMENT
    3. si touché par bulle : DEAD

- Harpon : 
    1. longueur l
    2. vitesse v
    3. dès que contact / fin de l :  reviens dans le gun
    4. contact si bulle touche cable

- Bulle : 
    1. vie
    2. si touchee par harpon : split en deux bulles avec vie = mere.vie -1
    3. rebondit sur tout les cotés
    4. vitesse v constante

- niveau :
    1. nombre de bulles
    2. temps imparti

- joueur :
    1. score ( temps restant a la completion du niveau )
    2. nombre de vies

- Bonus / Malus ?
    1. vitesse harpon
    2. vigne si harpon touche plafond
    3. nombre de harpons par joueur

- Fenetre :
    Taille fixe dans un premier temps, toutes les cooronnees en pourcent ensuite pour gerer le resize

- Mode deux joueurs :
    1. deux joueurs sur le meme ecran ?
    2. ecran scindé ?

## Contrôles
- Joueur 1 : flèche gauche (gauche), flèche droite (droite), numpad + (tirer)
- Joueur 2 : A (gauche), E (droite), espace (tirer)

## Rendu

15/05 
presentation orale
code source
demo

## ToDo :
- [x] Menus
- [x] Mouvement bulle rebondissante
- [ ] Génération de niveaux
- [ ] transition de niveaux
- [x] Chrono/score
- [x] Conditions de fin de niveau (pas de bulles restantes || joueur dead)
- [x] Sauvegarde meilleurs scores
- [ ] jouabilité (vitesse balles, difficulté des niveaux, bonus ?)

- Collisions :
    - [x] bulle/joueur
    - [x] Plafond/bulle
    - [x] harpon bulle
    - [x] Division bulles
    - [x] All / Murs

- Affichage :
    - [x] vie
    - [ ] score : ajouter temps restant au score (implique animation)
    - [ ] afficher si win ou pas a la fin d'un niveau
    - [ ] Design général

- Sons :
    - [ ] balle/harpon
    - [ ] joueur/balle
    - [ ] musique de fond au menu
    - [ ] musique de fond partie
    - [ ] musique fin de level
    - [ ] musique fin de game

- Bugs à corriger :
    - [x] Vitesse X de la balle devient 0 quand elle touche un joueur
    - [ ] Vitesses X des rejetons différentes (un va + vite que l'autre)

