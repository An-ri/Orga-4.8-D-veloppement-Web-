# Orga-4.8-D-veloppement-Web-

Pour pouvoir utiliser le code:

1) Ouvrir un terminal dans le dossier dans lequel vous souhaitez travailler
2) Créer un nouveau projet avec "meteor create Orga"
3) Se déplacer dans le projet avec "cd Orga"
4) Supprimer les dossiers Client et Server du nouveau projet puis les remplacer par ceux disponible dans ce repository 

Pour le modifier:

1) Appuyer sur Upload files
2) Aller dans le dossier Orga de votre ordinateur
3) Prendre "client" et "server" à l'aide de ctrl puis les faire glisser au niveau du "Drag files here"
4) Appuyer sur "Commit changes" en bas de la page
	
#Mise en place Github

Obtention du dossier sur votre compte et machine Obtenir une copie du projet sur votre compte github : fork. Pour créer une copie locale du projet git sur votre ordinateur :
$ git clone https://github.com/An-ri/Orga-4.8-D-veloppement-Web-
Dès que vous modifiez un élément de votre dossier git, une working copy est créée. Visualisation du statut du dossier git :
$ git status
Ajout à la pile de commit

$ git add nomDuFichier
Puis commit pour modifier les fichiers locaux :

$ git commit -m 'Message du commit'
La modification n'opère que sur votre copie locale, ni la copie virtuelle GitHub de votre compte ni celle du compte d'où provient le fork a été modifié.

Pour modifier votre copie virtuelle :

$ git push
Pour proposer votre modification au dossier GitHub original, il faut effectuer une pull request, directement sur github via le bouton : New pull request

Maintenant, pour mettre à jour votre copie virtuelle et locale en cas de modification du dossier initial (celui que vous avez fork) il faut utiliser un remote. Le remote est un pointeur vers un le dossier git voulu : Mise en place du remote appelé upstream par convention :
$ git remote add upstream https://github.com/An-ri/Orga-4.8-D-veloppement-Web-
Mise à jour de votre dossier local et virtuel :

$ git fetch upstream
$ git checkout master
$ git merge upstream/master