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
    2. vigne si harpon touche plafon

- Fenetre :
    Taille fixe dans un premier temps, toutes les cooronnees en pourcent ensuite pour gerer le resize

- Mode deux joueurs :
    1. deux joueurs sur le meme ecran ?
    2. ecran scindé ?

## Contrôles
- Joueur 1 : flèche gauche (gauche), flèche droite (droite), numpad + (tirer)
- Joueur 2 : A (gauche), E (droite), espace (tirer)

## Rendu

première semaine de mai
presentation orale

## ToDo :
- Chronomètre 
- Score
- Menus
- Mouvement bulle rebondissante
- Collisions :
    - bulle/joueur
    - Harpon/bulle
    - Plafond/bulle (?)
    - Bulle/élément décor
- Division bulles
- Affichage vie/score...
- Génération de niveaux
- Design général