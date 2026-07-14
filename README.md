# Manipulation du DOM avec JavaScript

Ce dépôt regroupe des exercices pratiques pour apprendre à manipuler le DOM avec **HTML**, **CSS** et **JavaScript natif**. Les exemples sont organisés par niveau de difficulté et peuvent être ouverts directement dans un navigateur.

## Objectifs

- Sélectionner des éléments HTML avec JavaScript ;
- Modifier du texte, des styles et des images ;
- Réagir aux événements utilisateur ;
- Créer, afficher et supprimer des éléments dynamiquement ;
- Réaliser de petits composants interactifs.

## Structure du projet

```text
.
├── Niveau Débutant/
│   ├── ajouter_le_background_dun_paragraphe_grace_ajs.html
│   ├── chager_un_texte_par_son_id.html
│   ├── changer_contenue_h1_avecjs.html
│   ├── changer_la_couleur_bouton_par_class.html
│   ├── changer_une_image_par_une_autre_grace_a_js.html
│   └── image/
├── Niveau Intermediaire/
│   ├── affiche_mesg.html
│   ├── ajouter_class_active_a_un_button_grace_a_js.html
│   ├── ajouter_dynamiquement_element_dans_une_li.html
│   ├── change_couleur_input_lorsque_on_tape_du_texte.html
│   ├── retirer_hiden_a_un_element_grace_a_js.html
│   └── Supprimezunélémentlorsqu’oncliquedessus.html
└── Niveau avance/
    ├── compteur_js.html
    ├── Formulaires_et_validation.html
    ├── galerie_imagejs.html
    ├── script.js
    └── style.css
```

## Exercices

### Niveau débutant

| Exercice | Notion abordée |
| --- | --- |
| Modifier un texte ou un titre | `getElementById`, `querySelector`, `innerHTML` |
| Modifier la couleur d’un bouton | `getElementsByClassName`, styles CSS en JavaScript |
| Ajouter un arrière-plan à un paragraphe | Propriété `style` |
| Changer une image | Modification de l’attribut `src` |

### Niveau intermédiaire

| Exercice | Notion abordée |
| --- | --- |
| Afficher un message | Événement `click` et `alert` |
| Ajouter une classe à un bouton | `classList.add()` |
| Ajouter un fruit à une liste | `createElement`, `appendChild`, `textContent` |
| Changer la couleur d’un champ | Événement `input` |
| Afficher un élément masqué | Attribut `hidden` |
| Supprimer un élément | `remove()` |

### Niveau avancé

| Exercice | Notion abordée |
| --- | --- |
| Compteur | État avec une variable et événement `click` |
| Validation d’e-mail | Événement `submit`, expression régulière et prévention de l’envoi |
| Galerie d’images | Tableau, index, navigation précédente/suivante, CSS externe |

## Utilisation

Aucune installation ni dépendance n’est nécessaire.

1. Clonez ou téléchargez le dépôt.
2. Ouvrez un fichier `.html` dans votre navigateur, par exemple `Niveau avance/galerie_imagejs.html`.
3. Ouvrez les outils de développement du navigateur (`F12`) pour observer le DOM et la console JavaScript.

Vous pouvez aussi lancer un serveur local depuis la racine du projet :

```bash
python3 -m http.server 8000
```

Puis ouvrez `http://localhost:8000/` dans votre navigateur.

## Technologies

- HTML5
- CSS3
- JavaScript (vanilla JavaScript)

## Auteur

Projet d’apprentissage de la manipulation du DOM.
