i18next.use(window.i18nextBrowserLanguageDetector).init({
    // order and from where user language should be detected
    order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

    // keys or params to lookup language from
    lookupQuerystring: 'lang',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupSessionStorage: 'i18nextLng',
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    // cache user language on
    caches: ['localStorage', 'cookie'],
    excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

    // optional expire and domain for set cookie
    cookieMinutes: 10,
    cookieDomain: 'myDomain',

    // optional htmlTag with lang attribute, the default is:
    htmlTag: document.documentElement,

    // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
    cookieOptions: { path: '/', sameSite: 'strict' },
    
    resources: {
        en: {
            translation: {
                'subtitleHome': 'I',
                'scroll': 'Scroll',

                'presentationTitle': 'Introduction of myself',
                'presentationInfoTitle': 'My personal information',
                'presentationInfoNameAge': 'I am Logan Humbert, I am 20 years old',
                'presentationInfoStudent': 'I am a student in I.T',
                'presentationInfoAddress': 'I live in Besançon, France',
                'presentationResumeTitle': 'Who am I?',
                'presentationResumeText': 'I am Logan Humbert, a student in final year of Bachelor\'s degree in Computer Science at the University of Besançon in France.<br>\
                                           I am truly passionate about programming and on top of my school projects, I am also working on my own projects.\
                                           I love trying to code websites, mobile apps to try the new things I learn in the courses and also by myself.\
                                           I am also maintainer for an Android open-source project named <a target="_blank" href="https://evolution-x.org/">Evolution X</a>.\
                                           I ensure everything works properly on my smartphone, and I share my work with the community.<br>\
                                           When I am not coding, I like to watch movies and tv shows, and hanging out with my friends.<br>\
                                           Finally I am driven by the idea of studying, living in the United States. I love the culture and the diversity of the country, and I am passionate about the history of the United States.\
                                           This is why I strongly wish to apply to go in mobility in this country during my first year of Master\'s degree.',
                'presentationCVTitle': 'Do you want to read my CV?',
                'presentationCVBtn': 'Download my CV in PDF',
                'presentationLanguageTitle': 'My languages',
                'presentationLanguageEnglish': 'English',
                'presentationLanguageFrench': 'French',

                'proExpTitle': 'My professional experiences',
                'proExpSkinsoftTitle': 'September 2020-August 2021 - Apprenticeship - SkinSoft, Besançon, France',
                'proExpSkinsoftSubtitle': 'SkinSoft is a french company proposing full web solutions for collection management',
                'proExpSkinsoftLine1': 'Development of a collection management software (add of functionalities, improvement of existing functionalities, bug fixes)',
                'proExpSkinsoftLine2': 'Discovery of the VueJs technology (javascript), and the SpringBoot technology (java)',
                'proExpSkinsoftLine3': 'Discovery of the agile working method (sprint operation, daily meeting about the progress)',
                'proExpSkinsoftLine4': 'Use of a version control tool (git) in a large project',
                'proExpMeta4Title': 'January-February 2016 - Discovery internship - Meta4, Besançon, France',
                'proExpMeta4Subtitle': 'Meta4 is an I.T company offering softwares and services for the payroll management and the human resources management',
                'proExpMeta4Text': 'Observation of the functioning of different services - Quality assurance, technical service and sending service',

                'formationTitle': 'My formation',
                'formationBachelorDegreeTitle': 'September 2021 to today - I.T Bachelor\'s degree',
                'formationBachelorDegreeSubtitle': 'University of Franche-Comté, Besançon, France',
                'formationBachelorDegreeLine1': '<strong>Web development: </strong>Creation of a <span>Twitter</span> style website with HTML, CSS and PHP',
                'formationBachelorDegreeLine2': '<strong>Object oriented programming: </strong>Creation of a graphic application in Java using the AWT and the Swing libraries.',
                'formationBachelorDegreeLine3': '<strong>System: </strong>Creation of a bash script to generate a MakeFile to compile a C program. Creation of a generic server and client in C for playing different games.',
                'formationBachelorDegreeLine4': '<strong>Architecture: </strong>Creation of a simplified virtual processor and execution of assembly code on it.',
                'formationBtechTitle': 'September 2019 to June 2021 - Btech I.T Services to Organisations',
                'formationBtechSubtitle': 'Louis Pergaud High School, Besançon, France',
                'formationBtechLine1': '<strong>IT Development: </strong>algorithmics, programming languages, basic concepts of object-oriented programming',
                'formationBtechLine2': '<strong>Databases: </strong>MERISE design and representation, SQL queries, concepts of views, inheritance and triggers',
                'formationBtechLine3': '<strong>IT Architecture: </strong>operation of computers and their components',
                'formationBtechLine4': '<strong>Network: </strong>basic concepts about networks and subnets',
                'formationBtechLine5': 'Optional advanced mathematics education',
                'formationBtechLine6': 'General education: mathematics, english, general knowledge',
                'formationHighSchoolTitle': 'September 2016 to June 2019 - High School',
                'formationHighSchoolSubtitle': 'Victor Hugo High School, Besançon, France',
                'formationHighschoolText': 'General education, science-oriented education (a lot of mathematics, physics-chemistry, electronics and mechanics)',

                'interestsTitle': 'My interests',
                'interestsTravelling': 'Travelling',
                'interestsProgramming': 'Programming',
                'interestsCinema': 'Watching movies and tv shows'
            }
        },
        fr: {
            translation: {
                'subtitleHome': 'J',
                'scroll': 'Descendre',

                'presentationTitle': 'Introduction de moi-même',
                'presentationInfoTitle': 'Mes informations personnelles',
                'presentationInfoNameAge': 'Je suis Logan Humbert, j\'ai 20 ans',
                'presentationInfoStudent': 'Je suis étudiant en informatique',
                'presentationInfoAddress': 'Je vis à Besançon, France',
                'presentationResumeTitle': 'Qui suis-je?',
                'presentationResumeText': 'Je suis Logan Humbert, étudiant en deuxième année de licence informatique à l\'université de Besançon en France.<br>\
                                           Je suis vraiment passionné par le développement logiciel et en plus de mes projets d\'études, je travaille également sur mes propres projets.\
                                           J\'aime essayer de créer des sites web, des applications mobiles pour mettre en pratique les nouvelles choses que j\'apprends dans ma formation et également par moi-même.\
                                           Je suis également maintainer pour un projet open-source Android nommé <a target="_blank" href="https://evolution-x.org/">Evolution X</a>.\
                                           Je m\'assure que tout fonctionne correctement sur mon smartphone, et je partage mon travail avec la communauté.<br>\
                                           Lorsque je ne suis pas en train de programmer, j\'aime regarder des films et séries TV, et sortir avec mes amis.<br>\
                                           Enfin, je suis motivé par l\'idée d\'étudier, vivre aux États-Unis. J\'aime la culture et la diversité du pays, et je suis passionné par l\'histoire des États-Unis.\
                                           C\'est pourquoi je souhaite vivement postuler pour partir en mobilité dans ce pays lors de ma première année de Master.',
                'presentationCVTitle': 'Voulez-vous lire mon CV?',
                'presentationCVBtn': 'Téléchargez mon CV en PDF',
                'presentationLanguageTitle': 'Mes langues',
                'presentationLanguageEnglish': 'Anglais',
                'presentationLanguageFrench': 'Français',

                'proExpTitle': 'Mes expériences professionnelles',
                'proExpSkinsoftTitle': 'Septembre 2020-Août 2021 - Apprentissage - SkinSoft, Besançon, France',
                'proExpSkinsoftSubtitle': 'SkinSoft est une entreprise française proposant des solutions web complètes pour la gestion de collections',
                'proExpSkinsoftLine1': 'Développement d\'un logiciel de gestion de collections (ajout de fonctionnalités, amélioration des fonctionnalités existantes, correction de bugs)',
                'proExpSkinsoftLine2': 'Découverte de la technologie VueJs (javascript), et de la technologie SpringBoot (java)',
                'proExpSkinsoftLine3': 'Découverte du méthode agile de travail (sprint operation, daily meeting about the progress)',
                'proExpSkinsoftLine4': 'Utilisation d\'un outil de gestion de version (git) dans un grand projet',
                'proExpMeta4Title': 'Janvier-Février 2016 - Stage de découverte - Meta4, Besançon, France',
                'proExpMeta4Subtitle': 'Meta4 est une entreprise informatique proposant des logiciels et services pour la gestion de l\'ensemble des salaires et la gestion des personnes',
                'proExpMeta4Text': 'Observation du fonctionnement de différents services - Assurance qualité, service technique et service d\'envoi',

                'formationTitle': 'Ma formation',
                'formationBachelorDegreeTitle': 'Septembre 2021 à aujourd\'hui - Licence en informatique',
                'formationBachelorDegreeSubtitle': 'Université de Franche-Comté, Besançon, France',
                'formationBachelorDegreeLine1': '<strong>Développement web: </strong>Création d\'un site web de type <span>Twitter</span> avec HTML, CSS et PHP',
                'formationBachelorDegreeLine2': '<strong>Programmation objet: </strong>Création d\'une application graphique en Java avec les bibliothèques AWT et Swing',
                'formationBachelorDegreeLine3': '<strong>Système: </strong>Création d\'un script bash pour générer un MakeFile pour compiler un programme C. Création d\'un serveur et client générique en C pour jouer des jeux différents',
                'formationBachelorDegreeLine4': '<strong>Architecture: </strong>Création d\'un processeur virtuel simplifié et exécution d\'un code assembleur sur celui-ci.',
                'formationBtechTitle': 'Septembre 2019 à juin 2021 - BTS Services Informatiques aux Organisations',
                'formationBtechSubtitle': 'Lycée Louis Pergaud, Besançon, France',
                'formationBtechLine1': '<strong>Développement informatique: </strong>algorithmes, langages de programmation, concepts de programmation orientée objet',
                'formationBtechLine2': '<strong>Bases de données: </strong>Représentation et conception MERISE, requêtes SQL, concepts de vues, héritage et triggers',
                'formationBtechLine3': '<strong>Architecture: </strong>Fonctionnement des ordinateurs et de leurs composants',
                'formationBtechLine4': '<strong>Réseau: </strong>concepts de base sur les réseaux, les sous-réseaux',
                'formationBtechLine5': 'Cours additionnels de mathématiques avancées',
                'formationBtechLine6': '<strong>Général: </strong>mathématiques, anglais, culture générale',
                'formationHighschoolTitle': 'Septembre 2016 à Juin 2019 - Lycée',
                'formationHighschoolSubtitle': 'Lycée Victor Hugo, Besançon, France',
                'formationHighschoolText': 'matières générales, orientées sur les sciences (mathématiques, physique-chimie, électronique, mécanique)',

                'interestsTitle': 'Mes centres d\'intérêt',
                'interestsTravelling': 'Voyager',
                'interestsProgramming': 'Programmer',
                'interestsCinema': 'Regarder des films et séries TV'
            }
        }
    }
});

/*==================================================================
    TOP TOP TOP TOP TOP TOP TOP TOP TOP TOP TOP TOP TOP TOP TOP TOP
==================================================================*/
document.getElementById('sentance').innerHTML = i18next.t('subtitleHome');
document.getElementsByClassName('scroll-button')[0].getElementsByTagName('p')[0].getElementsByTagName('a')[0].innerHTML = '<span></span>' + i18next.t('scroll');

/*==================================================================
    PRESENTATION PRESENTATION PRESENTATION PRESENTATION PRESENTATION
==================================================================*/
document.getElementById('presentation').getElementsByTagName('h2')[0].innerHTML = i18next.t('presentationTitle');
/*//////////////////////////////////////////////////////////////////
[ Personal information ]*/
document.getElementById('presentation-info').getElementsByTagName('h3')[0].innerHTML = i18next.t('presentationInfoTitle');
document.getElementById('presentation-info').getElementsByTagName('ul')[0].getElementsByTagName('li')[0].innerHTML = i18next.t('presentationInfoNameAge');
document.getElementById('presentation-info').getElementsByTagName('ul')[0].getElementsByTagName('li')[1].innerHTML = i18next.t('presentationInfoStudent');
document.getElementById('presentation-info').getElementsByTagName('ul')[0].getElementsByTagName('li')[2].innerHTML = i18next.t('presentationInfoAddress');
/*//////////////////////////////////////////////////////////////////
[ Resume ]*/
document.getElementById('presentation-resume').getElementsByTagName('h3')[0].innerHTML = i18next.t('presentationResumeTitle');
document.getElementById('presentation-resume').getElementsByTagName('p')[0].innerHTML = i18next.t('presentationResumeText');
/*//////////////////////////////////////////////////////////////////
[ CV ]*/
document.getElementById('presentation-cv').getElementsByTagName('h3')[0].innerHTML = i18next.t('presentationCVTitle');
document.getElementById('presentation-cv').getElementsByTagName('a')[0].innerHTML = i18next.t('presentationCVBtn');
/*//////////////////////////////////////////////////////////////////
[ Languages ]*/
document.getElementById('presentation-languages').getElementsByTagName('h3')[0].innerHTML = i18next.t('presentationLanguageTitle');
const languages = document.getElementById('presentation-languages').getElementsByTagName('ul')[0];
languages.getElementsByTagName('li')[0].innerHTML = languages.getElementsByTagName('li')[0].innerHTML + i18next.t('presentationLanguageEnglish');
languages.getElementsByTagName('li')[1].innerHTML = languages.getElementsByTagName('li')[1].innerHTML + i18next.t('presentationLanguageFrench');

/*==================================================================
    PRO-EXP PRO-EXP PRO-EXP PRO-EXP PRO-EXP PRO-EXP PRO-EXP PRO-EXP
==================================================================*/
document.getElementById('professional-experiences').getElementsByTagName('h2')[0].innerHTML = i18next.t('proExpTitle');
/*//////////////////////////////////////////////////////////////////
[ Apprenticeship SkinSoft ]*/
document.getElementById('apprenticeship-skinsoft').getElementsByTagName('h3')[0].innerHTML = i18next.t('proExpSkinsoftTitle');
document.getElementById('apprenticeship-skinsoft').getElementsByTagName('p')[0].innerHTML = i18next.t('proExpSkinsoftSubtitle');
document.getElementById('apprenticeship-skinsoft').getElementsByTagName('ul')[0].getElementsByTagName('li')[0].innerHTML = i18next.t('proExpSkinsoftLine1');
document.getElementById('apprenticeship-skinsoft').getElementsByTagName('ul')[0].getElementsByTagName('li')[1].innerHTML = i18next.t('proExpSkinsoftLine2');
document.getElementById('apprenticeship-skinsoft').getElementsByTagName('ul')[0].getElementsByTagName('li')[2].innerHTML = i18next.t('proExpSkinsoftLine3');
document.getElementById('apprenticeship-skinsoft').getElementsByTagName('ul')[0].getElementsByTagName('li')[3].innerHTML = i18next.t('proExpSkinsoftLine4');
/*//////////////////////////////////////////////////////////////////
[ Internship Meta4 ]*/
document.getElementById('internship-meta4').getElementsByTagName('h3')[0].innerHTML = i18next.t('proExpMeta4Title');
document.getElementById('internship-meta4').getElementsByTagName('p')[0].innerHTML = i18next.t('proExpMeta4Subtitle');
document.getElementById('internship-meta4').getElementsByTagName('p')[1].innerHTML = i18next.t('proExpMeta4Text');

/*==================================================================
    FORMATION FORMATION FORMATION FORMATION FORMATION FORMATION
==================================================================*/
/*//////////////////////////////////////////////////////////////////
[ Bachelor's degree ]*/
document.getElementById('formation').getElementsByTagName('h2')[0].innerHTML = i18next.t('formationTitle');
document.getElementById('bachelor-degree').getElementsByTagName('h3')[0].innerHTML = i18next.t('formationBachelorDegreeTitle');
document.getElementById('bachelor-degree').getElementsByTagName('p')[0].innerHTML = i18next.t('formationBachelorDegreeSubtitle');
document.getElementById('bachelor-degree').getElementsByTagName('ul')[0].getElementsByTagName('li')[0].innerHTML = i18next.t('formationBachelorDegreeLine1');
document.getElementById('bachelor-degree').getElementsByTagName('ul')[0].getElementsByTagName('li')[1].innerHTML = i18next.t('formationBachelorDegreeLine2');
document.getElementById('bachelor-degree').getElementsByTagName('ul')[0].getElementsByTagName('li')[2].innerHTML = i18next.t('formationBachelorDegreeLine3');
document.getElementById('bachelor-degree').getElementsByTagName('ul')[0].getElementsByTagName('li')[3].innerHTML = i18next.t('formationBachelorDegreeLine4');
/*//////////////////////////////////////////////////////////////////
[ Btech ]*/
document.getElementById('btech').getElementsByTagName('h3')[0].innerHTML = i18next.t('formationBtechTitle');
document.getElementById('btech').getElementsByTagName('p')[0].innerHTML = i18next.t('formationBtechSubtitle');
document.getElementById('btech').getElementsByTagName('ul')[0].getElementsByTagName('li')[0].innerHTML = i18next.t('formationBtechLine1');
document.getElementById('btech').getElementsByTagName('ul')[0].getElementsByTagName('li')[1].innerHTML = i18next.t('formationBtechLine2');
document.getElementById('btech').getElementsByTagName('ul')[0].getElementsByTagName('li')[2].innerHTML = i18next.t('formationBtechLine3');
document.getElementById('btech').getElementsByTagName('ul')[0].getElementsByTagName('li')[3].innerHTML = i18next.t('formationBtechLine4');
document.getElementById('btech').getElementsByTagName('ul')[0].getElementsByTagName('li')[4].innerHTML = i18next.t('formationBtechLine5');
document.getElementById('btech').getElementsByTagName('ul')[0].getElementsByTagName('li')[5].innerHTML = i18next.t('formationBtechLine6');
/*//////////////////////////////////////////////////////////////////
[ High school ]*/
document.getElementById('high-school').getElementsByTagName('h3')[0].innerHTML = i18next.t('formationHighschoolTitle');
document.getElementById('high-school').getElementsByTagName('p')[0].innerHTML = i18next.t('formationHighschoolSubtitle');
document.getElementById('high-school').getElementsByTagName('p')[1].innerHTML = i18next.t('formationHighschoolText');

/*==================================================================
    INTERESTS INTERESTS INTERESTS INTERESTS INTERESTS INTERESTS
==================================================================*/
document.getElementById('interests').getElementsByTagName('h2')[0].innerHTML = i18next.t('interestsTitle');
document.getElementById('interests').getElementsByClassName('interests-travel-text')[0].getElementsByTagName('p')[0].getElementsByTagName('span')[0].innerHTML = i18next.t('interestsTravelling');
document.getElementById('interests').getElementsByClassName('interests-programming-text')[0].getElementsByTagName('p')[0].getElementsByTagName('span')[0].innerHTML = i18next.t('interestsProgramming');
document.getElementById('interests').getElementsByClassName('interests-cinema-text')[0].getElementsByTagName('p')[0].getElementsByTagName('span')[0].innerHTML = i18next.t('interestsCinema');