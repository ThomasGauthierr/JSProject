# Web Project : Bubble Trouble
Réalisé par Alexandre GREAU et Thomas GAUTHIER

## Intro 
Percez et évitez les bulles dans le temps imparti pour gagner !
Pour cela, déplacez votre personage de gauche à droite et tirer des harpons pour percer les bulles ! 

6 niveaux sont disponibles :
- Niveau 1 : 2 bulles, 1 harpon par joueur
- Niveau 2 : 1 bulle pour 1 joueur, 2 si 2 joueurs. Les bulles ont 2 vies, les joueurs 2 harpons
- Niveau 3 : 2 bulles à 2 vies, 2 à 1 vie. 2 harpons par joueur, moins de temps en mode 2 joueurs
- Niveau 4 : 1 grosse bulle à 4 vies au centre du canvas. 2 harpons par joueur. Moins de temps si 2 joueurs
 - Niveau 5 : 6 bulles à 1 vie, 3 vont dans un sens, 3 dans l'autre. 1 harpon par joueur, moins de temps si 2 joueurs
 - Niveau 6 : 4 bulles et pas de harpon. 2 murs qui restreignent l'espace et un plafond qui descend. Le but est de survivre jusqu'à ce que le plafond touche les bulles. Bonne chance pour ce dernier niveau !

## Contrôles
- Joueur 1 : Q (gauche, A en QWERTY), D (droite), espace (tirer)
- Joueur 2 : flèche gauche (gauche), flèche droite (droite), shift droit (tirer)

 ## Interfaces ##
 ### Menu principal ###
 4 boutons :
 - 2 pour les modes 1 et 2 joueurs
 - Un pour afficher les contrôles
 - Un pour mute/demute la musique

 ### En jeu ###
 Pour chaque personage, on affiche son score avec du texte, et avec des icônes le nombre de vies et de harpons disponibles.
 Le meilleur score est affiché au centre.
 Les personnages sont dessinés avec des sprites.

### Transitions ###
A chaque fin de niveau, on affiche un message différent en fonction de la situation (échec du niveau, niveau réussi, victoire ou défaite). On affiche aussi si le highscore a été établi.

### Ecran des contrôles ###
Il s'agit simplement d'une image au fond transparent qui décrit les touches.

## Sons utilisés ##
Il y a 2 musiques de fond qui tournent en boucle.<br/>
Nous avons aussi mis en place plusieurs sound effects : 
- Lorsqu'on jette un harpon
- Quand une bulle eclate
- Quand une bulle touche un joueur
- Une musique de fin de jeu si le joueur a perdu
- Une musique de fin de jeu si le joueur a fini le dernier niveau<br/>
Il y a aussi possibilité de mute uniquement les musiques de fond avec le bouton du menu principal.

## Fonctionnalités diverses ##
- Les highscores sont différents entre le mode 1 et 2 joueurs. Ils sont sauvegardés dans des cookies.
- Il est possible (comme montré dans le niveau 6) de rajouter des murs et de faire descendre le plafond.
- Un timer est dessiné quand une partie est en cours. Il se trouve dans un canvas différent du canvas de jeu. La partie se termine quand le timer arrive à 0. Si le joueur éclate toutes les bulles avant la fin du chrono et qu'il est toujours vivant, on lui augmente son score en fonction du temps restant.

## Différents composants & caractéristiques ##

- Personnage : 
    1. Bouge de gauche à droite
    2. Tire un harpon vers le haut
    3. Meurt si touché par une bulle 
    4. Nombre de harpons limité

- Harpon : 
    1. Longueur l
    2. Vitesse v
    3. Dès que contact (plafond ou bulle), il est supprimé et redisponible pour le joueur
    4. Contact si une bulle touche un harpon

- Bulle : 
    1. Vie
    2. Si touché par harpon : split en deux bulles avec vie = mere.vie -1
    3. Rebondit contre le sol, les limites du canvas et les murs
    4. Vitesse v constante

- Niveau :
    1. Nombre de bulles
    2. Temps imparti
    3. Position des joueurs
    4. Spécifications des éléments du décor (murs, plafond se déplaçant...)
    
## Améliorations envisageables ##
- Les événements clavier rapides sont mal gérés, le personnage s'arrête si on alterne rapidement les mouvements gauche droite : réfléchir à une solution
- Améliorer l'architecture en réorganisant le code, par exemple en découpant mieux les fichiers, en créant plus de classes, ou en simplifiant le fil d'exécution
- Ajout d'un bouton pause 
- Ajout de bonus et de power-ups
- Ajout d'un asset loader

## Points positifs ##
- Il est facile d'ajouter et de modifier les niveaux
- Présence d'un mode 2 joueurs
- Design original et gameplay amusant
- Propose un vrai défi au joueur au fil des niveaux, sans pour autant être impossible

## Done ##
- [x] Menus
- [x] Mouvement bulle rebondissante
- [x] transition de niveaux
- [x] Chrono/score
- [x] Conditions de fin de niveau (pas de bulles restantes || joueur dead)
- [x] Sauvegarde meilleurs scores
- [x] Génération de niveaux 
- [x] jouabilité (vitesse balles, difficulté des niveaux)

- Collisions :
    - [x] bulle/joueur
    - [x] Plafond/bulle
    - [x] harpon bulle
    - [x] Division bulles
    - [x] All / Murs

- Sons :
    - [x] balle/harpon
    - [x] joueur/balle
    - [x] musique de fond au menu
    - [x] musique de fond partie
    - [x] musique fin de level
    - [x] musique fin de game

- Affichage :
    - [x] vie
    - [x] afficher si win ou pas a la fin d'un niveau
    - [x] Design général
    - [x] score : ajouter temps restant au score (implique animation)
    - [x] afficher temps restant
    - [x] afficher commandes (nouvel ecran ou a cote du canvas ?)
    - [x] bouton mute