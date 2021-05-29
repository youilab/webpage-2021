export const publications = [
  {
    title:
      "Classification of 3D Archaeological Objects Using Multi-View Curvature Structure Signatures",
    type: "academic article",
    authors: [
      "Canul Ku, Mario",
      "Hasimoto Beltrán, Rogelio",
      "Jiménez Badillo, Diego",
      "Ruiz Correa, Salvador",
      "Román Rangel, Edgar",
    ],
    journal: "IEEE Access",
    year: 2019,
    volume: 7,
    pages: "3928-3313",
    abstract:
      "We propose a generalized 3D shape descriptor for the efficient classification of 3D archaeological artifacts. Our descriptor is based on a multi-view approach of curvature features, consisting of the following steps: pose normalization of 3D models, local curvature descriptor calculation, construction of 3D shape descriptor using the multi-view approach and curvature maps, and dimensionality reduction by random projections. We generate two descriptors from two different paradigms: 1) handcrafted, wherein the descriptor is manually designed for object feature extraction, and directly passed on to the classifier and 2) machine learnt, in which the descriptor automatically learns the object features through a pretrained deep neural network model (VGG-16) for transfer learning and passed on to the classifier. These descriptors are applied to two different archaeological datasets: 1) non-public Mexican dataset, represented by a collection of 963 3D archaeological objects from the Templo Mayor Museum in México City that includes anthropomorphic sculptures, figurines, masks, ceramic vessels, and musical instruments; and 2) 3D pottery content-based retrieval benchmark dataset, consisting of 411 objects. Once the multi-view descriptors are obtained, we evaluate their effectiveness by using the following object classification schemes: $K$ -nearest neighbor, support vector machine, and structured support vector machine. Our object descriptors classification results are compared against five popular 3D descriptors in the literature, namely, rotation invariant spherical harmonic, histogram of spherical orientations, signature of histograms of orientations, symmetry descriptor, and reflective symmetry descriptor. Experimentally, we were able to verify that our machine learnt and handcrafted descriptors offer the best classification accuracy (20% better on average than comparative descriptors), independently of the classification methods. Our proposed descriptors are able to capture sufficient information to discern among different classes, concluding that it adequately characterizes the datasets.",
    url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8576529",
    doi: "10.1109/ACCESS.2018.2886791",
  },

  {
    title:
      "Mi Casa es su Casa? Examining Airbnb Hospitality Exchange Practices in a Developing Economy",
    type: "academic article",
    authors: [
      "Ruiz-Correa, Salvador",
      "Ruiz-Correa, Itzia",
      "Olmos Carrillo, Carlo",
      "Rendón Huerta, Fátima Alba",
      "Ramírez Salazar, Beatriz",
      "Nguyen, Laurent Son",
      "Gatica Pérez, Daniel",
    ],
    journal: "ACM Transactions on Social Computing",
    year: 2019,
    volume: 2,
    issue: 1,
    pages: "1-24",
    abstract:
      "We present a study involving twenty in-depth, semi-structured interviews, a street survey, and online data to understand Airbnb hospitality exchange practices in the context of a developing country. As case studies, we investigate Airbnb practices of both hosts and guests in two tourist venues in Mexico -- the eighth most visited country worldwide. The analysis of the data revealed that Airbnb practices in Mexico have some similarities but also important differences with those previously reported in the literature. We found (1) that money is the main motivation for hosts to participate in Airbnb and that the earned money contributes significantly to the overall income of hosts; (2) that traditions that permeate the Mexican culture motivate hosts to engage in more personal hospitality experiences; (3) that Airbnb host practices lead to the creation of informal jobs that support the local community; and (4) that Airbnb local guests suggest that the lack of contextual information (i.e., the characteristics of the neighborhood where the accommodation is located) is a problem when renting in Mexico owing to safety issues.",
    doi: "10.1145/3299817",
  },

  {
    title: "Looking South: Learning Urban Perception in Developing Cities",
    type: "academic article",
    authors: [
      "Santani, Darshan",
      "Ruiz-Correa, Salvador",
      "Gatica Pérez, Daniel",
    ],
    journal: "ACM Transactions on Social Computing",
    year: 2018,
    volume: 1,
    issue: 3,
    pages: "1-23",
    abstract:
      "Mobile and social technologies are providing new opportunities to document, characterize, and gather impressions of urban environments. In this article, we present a study that examines urban perceptions of three cities in central Mexico; the study integrates a mobile crowdsourcing framework to collect geo-localized images of urban environments by a local youth community, an online crowdsourcing platform to gather impressions of urban environments along 12 physical and psychological dimensions, and a deep learning framework to automatically infer human impressions of outdoor urban scenes. Our study resulted in a collection of 7,000 geo-localized images containing outdoor scenes and views of each city’s built environment, including touristic, historical, and residential neighborhoods, and 144,000 individual judgments from Amazon Mechanical Turk. Statistical analyses show that outdoor environments can be assessed in terms of interrater agreement for most of the urban dimensions by the observers of crowdsourced images. Furthermore, we proposed a methodology to automatically infer human perceptions of outdoor scenes using a variety of low-level image features and generic deep learning (CNN) features. We found that CNN features consistently outperformed all the individual low-level image features for all the studied urban dimensions. We obtained a maximum R² of 0.49 using CNN features; for 9 out of 12 labels, the obtained R² values exceeded 0.44.",
    doi: "10.1145/3224182",
  },

  {
    title: "Check Out This Place: Inferring Ambiance From Airbnb Photos",
    type: "academic article",
    authors: [
      "Nguyen, Laurent Son",
      "Ruiz-Correa, Salvador",
      "Schmid Mast, Marianne",
      "Gatica Pérez, Daniel",
    ],
    journal: "IEEE Transactions on Multimedia",
    year: 2018,
    volume: 20,
    issue: 6,
    pages: "1499-1511",
    abstract:
      "Airbnb is changing the landscape of the hospitality industry, and to this day, little is known about the inferences that guests make about Airbnb listings. Our work constitutes a first attempt at understanding how potential Airbnb guests form first impressions from images, one of the main modalities featured on the platform. We contribute to the multimedia community by proposing the novel task of automatically predicting human impressions of ambiance from pictures of listings on Airbnb. We collected Airbnb images, focusing on the countries Switzerland and Mexico as case studies, and used crowdsourcing mechanisms to gather annotations on physical and ambiance attributes, finding that agreement among raters was high for most of the attributes. Our cluster analysis showed that both physical and psychological attributes could be grouped into three clusters. We then extracted state-of-the-art features from the images to automatically infer the annotated variables in a regression task. Results show the feasibility of predicting ambiance impressions of homes on Airbnb, with up to 42% of the variance explained by our model, and best results were obtained using activation layers of deep convolutional neural networks trained on the Places dataset, a collection of scene-centric images.",
    doi: "10.1109/TMM.2017.2769444",
  },

  {
    title:
      "Uso de las TIC's y el crowdsourcing como herramienta para enfrentar distintas problemáticas urbanas en la sociedad",
    type: "book chapter",
    authors: [
      "Ramírez Sánchez, A. Víctor Andrés",
      "Estrada Retes, María del Rosario",
      "Ruiz - Correa, Salvador",
    ],
    book: "La empresa en la era digital: innovación a través de las TIC",
    year: 2018,
    pages: "43-46",
    abstract:
      "En la actualidad, los problemas urbanos han superado las acciones que las instituciones locales en México han estado realizando para subsanarlos. Haciendo referencia específicamente a problemas de pavimentación y drenaje en la ciudad de Torreón Coahuila, México, se desarrolla el ejercicio para documentar y presentar un reporte de los daños encontrados mediante crowdsourcing[1], haciendo uso de dispositivos móviles y la plataformaUrBis[2], en su versión web y Android.",
    city: "Bogotá",
    editor: "",
    publisher: "Universidad Manuela Beltrán",
    url: "https://www.academia.edu/37422819/La_Empresa_en_la_Era_digital_Innovaci%C3%B3n_a_Trav%C3%A9s_de_las_TIC_ISBN_978_958_5467_05_7",
    isbn: "78-958-5467-05-7",
  },

  {
    title:
      "SenseCityVity: Mobile Sensing, Urban Awareness, and Collective Action in Mexico",
    type: "academic article",
    authors: [
      "Ruiz-Correa, Salvador",
      "Santani, Darshan",
      "Salazar, Beatriz",
      "Ruiz-Correa, Itzia",
      "Rendón Huerta, Fátima Alba",
      "Olmos Carrillo, Carlo",
      "Sandoval Mexicano, Brisa",
      "García, Ángel",
      "Hasimoto Beltrán, Rogelio",
      "Gatica Pérez, Daniel",
    ],
    journal: "IEEE Pervasive Computing",
    year: 2017,
    volume: 16,
    issue: 2,
    pages: "44-53",
    abstract:
      "This work describes SenseCityVity, an approach to engage and support youth in a city in Mexico as they investigate, document, and reflect upon urban problems through mobile crowdsourcing. SenseCityVity focused on the development of a mobile crowdsourcing platform; the deployment of the Urban Data Challenge, codesigned by the authors' research team and actors to collect geolocalized images, audio, and video; and the analysis, appropriation, and creative use of the collected data for community reflection and artistic creation. The approach integrates mobile technology and community practices involving a large population of young people for urban engagement. The collective action generated a new multimedia dataset that is rich in terms of content and is enabling a number of studies aimed at better understanding the urban landscape of cities in the Global South. This article is part of a special issue on smart cities.",
    doi: "10.1109/MPRV.2017.32",
  },

  {
    title:
      "UrBis: A Mobile Crowdsourcing Platform for Sustainable Social and Urban Research in México",
    type: "book chapter",
    authors: [
      "Ruiz-Correa, Salvador",
      "Hernández Huérfano, Emilio Ernesto",
      "Álvarez Rivera, Leonardo",
      "Islas López, Víctor E.",
      "Ramírez Sánchez, V.A",
      "González Abundes, Mariana",
      "Hernández Castañeda, Ma. de Lourdes",
      "Carrillo Sánchez, E.",
      "Hasimoto Beltrán, Rogelio",
      "Plata Ortega, Ivonne",
    ],
    book: "Sustainable Development Research and Practice in Mexico and Selected Latin America Countries",
    year: 2017,
    city: "",
    editor: "",
    pages: "19-37",
    abstract:
      "Recently, the United Nations Human Settlements Program (UN-HABITAT) stated that cities in Mexico are steadily expanding, sometimes outstripping the rise in population by two-fold due to urban sprawl, and that 85% of the Mexican population will live in towns and cities by 2050. México also has booming young populations, who are not only the inheritors of significant social and urban problems, but also the most promising source of solutions. UrBis is a technological platform that was developed to help people in México, particularly youth, document, characterize and reflect about the social and urban problems they face. The platform supports an integrative approach that combines mobile crowdsourcing, social technologies and community practices to effectively document, characterize, reflect about socio-urban issues, and to develop possible solutions through the combined effort of citizens. The purpose of this paper is to share our action-research experience with UrBis in engaging youth populations in the field, outlining our findings after analyzing collected data in an effort to determine how our technological-based approach supports the study of urban environments in five cities located across the country.",
    publisher: "Springer, Cham",
    url: "https://link.springer.com/chapter/10.1007/978-3-319-70560-6_2#citeas",
    "print isbn": "978-3-319-70559-0",
    "online isbn": "978-3-319-70560-62",
    doi: "https://doi.org/10.1007/978-3-319-70560-6_2",
  },

  {
    proceedingTitle:
      "Insiders and Outsiders: Comparing Urban Impressions between Population Groups",
    type: "conference proceeding",
    authors: [
      "Ruiz-Correa, Salvador",
      "Santani, Darshan",
      "Gatica Pérez, Daniel",
    ],
    conferenceName: "Proceeding of ICMR '17",
    city: "Bucharest, Romania",
    year: 2017,
    pages: "6 pages",
    abstract:
      "There is a growing interest in social and urban computing to employ crowdsourcing as means to gather impressions of urban perception for indoor and outdoor environments. Previous studies have established that reliable estimates of urban perception can be obtained using online crowdsourcing systems, but implicitly assumed that the judgments provided by the crowd are not dependent on the background knowledge of the observer. In this paper, we investigate how the impressions of outdoor urban spaces judged by online crowd annotators, compare with the impressions elicited by the local inhabitants, along six physical and psychological labels. We focus our study in a developing city where understanding and characterization of these socio - urban perceptions is of societal importance.We found statistically significant differences between the two population groups.Locals perceived places to be more dangerous and dirty, when compared with online crowd workers; while online annotators judged places to be more interesting in comparison to locals.Our results highlight the importance of the degree of familiarity with urban spaces and background knowledge while rating urban perceptions, which is lacking in some of the existing work in urban computing.",
    url: "https://www.idiap.ch/~gatica/publications/SantaniRuizGatica-icmr17.pdf",
    doi: "http://dx.doi.org/10.1145/3078971.3079022",
  },

  {
    title:
      "What TripAdvisor Can't Tell: Crowdsourcing Urban Impressions for Whole Cities",
    type: "book chapter",
    authors: [
      "Gatica Pérez, Daniel",
      "Ruiz Correa, Salvador",
      "Santani, Darshan",
      "Biase, Alessia de",
      "Ottaviano, Nancy",
      "Zaza, Ornella",
    ],
    book: "Digital Polis Symposium",
    year: 2015,
    abstract:
      "In the context of a number of emerging opportunities for citizen participation in Latin America, we present an overview of the SenseCityVity project developed in Mexico. The project goals are the design, implementation, and validation of a mobile crowdsourcing framework involving youth taking photographs with smartphones and providing online impressions about the city as captured in geo-referenced photos. One key aim is to co-design experiences with youth that help make visible the specific urban issues that matter to them, and which are seldom present in other sources of social media data. The project activities include the mapping of issues including accessibility, safety, or trash management; the use of statistical data analysis methods to assess the reliability of the provided impressions and the associated ability of the observers; and a reflection process through which proposals to work on such issues can potentially be generated.",
    city: "París",
    editor: "L'Oeil D'Or",
    url: "http://publications.idiap.ch/downloads/papers/2016/Gatica-Perez_DIGITALPOLIS_2016.pdf",
  },

  {
    proceedingTitle: "Looking at Cities in Mexico with Crowds",
    type: "conference proceeding",
    authors: [
      "Darshan, Santani",
      "Ruiz-Correa, Salvador",
      "Gatica-Perez, Daniel",
    ],
    conferenceName:
      "DEV '15: Proceedings of the 2015 Annual Symposium on Computing for Development",
    year: 2015,
    pages: "127-135",
    abstract:
      "Mobile and social technologies are providing new opportunities to document, characterize, and gather impressions of urban environments.In this paper, we present a study that examines urban perceptions of three cities in central Mexico(Guanajuato, Leon and Silao), which integrates a mobile crowdsourcing framework to collect geo - localized images of urban environments by a local youth community, and an online crowdsourcing platform(Amazon Mechanical Turk) to gather impressions of urban environments along twelve physical and psychological dimensions.Our study resulted in a collection of 7,000 geo - localized images containing outdoor scenes and views of each city 's built environment, including touristic, historical, and residential neighborhoods; and 156,000 individual judgments from MTurk. Statistical analyses show that outdoor environments can be reliably assessed with respect to most urban dimensions by the observers of crowdsourced images. Furthermore, a cross-city statistical analysis shows that outdoor urban places in Guanajuato (a touristic, cultural heritage site) are perceived as more quiet, picturesque and interesting compared to places in Leon and Silao, which are commercial and industrial hubs, respectively. In contrast Silao, is perceived to have lower accessibility than Leon. Finally, we investigate whether the perceptions of urban environments vary across different times of the day and found that places in the evening are perceived as less happy, pleasant and preserved, when compared to the same place in the morning. Through the use of collective action, participatory sensing and mobile crowdsourcing, our study engages citizens to understand socio-urban problems in their communities.",
    city: "London, United Kingdom",
    publisher: "Association for Computing Machinery",
    url: "https://www.idiap.ch/~gatica/publications/SantaniRuizGatica-acmdev15.pdf",
    isbn: "978-1-4503-3490-7",
    doi: "https://doi.org/10.1145/2830629.2830638",
  },

  {
    proceedingTitle:
      "Happy and agreeable?: multi-label classification of impressions in social video",
    type: "conference proceeding",
    authors: [
      "Chávez Martínez, Gilberto",
      "Ruiz-Correa, Salvador",
      "Gatica Pérez, Daniel",
    ],
    conferenceName:
      "MUM '15: Proceedings of the 14th International Conference on Mobile and Ubiquitous Multimedia",
    year: 2015,
    pages: "109-120",
    abstract:
      "The mobile and ubiquitous nature of conversational social video has placed video blogs among the most popular forms of online video. For this reason, there has been an increasing interest in conducting studies of human behavior from video blogs in affective and social computing. In this context, we consider the problem of mood and personality trait impression inference using verbal and nonverbal audio-visual features. Under a multi-label classification framework, we show that for both mood and personality trait binary label sets, not only the simultaneous inference of multiple labels is feasible, but also that classification accuracy increases moderately for several labels, compared to a single-label approach. The multi-label method we consider naturally exploits label correlations, which motivate our approach, and our results are consistent with models proposed in psychology to define human emotional states and personality. Our approach points to the automatic specification of co-occurring emotional states and personality, by inferring several labels at once, compared to single-label approaches. We also propose a new set of facial features, based on emotion valence from facial expressions, and analyze their suitability in the multi-label framework.",
    city: "New York, N.Y.",
    publisher: "Association for Computing Machinery",
    url: "https://repositorio.ipicyt.edu.mx/bitstream/handle/11627/5422/ProcNUM%282015%29.pdf?sequence=1&isAllowed=y",
    doi: "https://doi.org/10.1145/2836041.2836051",
  },

  {
    proceedingTitle:
      "The Young and the City: Crowdsourcing Urban Awareness in a Developing Country",
    type: "conference proceeding",
    authors: [
      "Ruiz-Correa, Salvador",
      "Santani, Darshan",
      "Gatica Pérez, Daniel",
    ],
    conferenceName: "The First International Conference on IoT in Urban Space",
    year: 2014,
    pages: "74-79",
    abstract:
      "We present a crowdsourcing study that investigates impressions of urban spaces by young inhabitants in a city in the developing world. Our goal is to obtain collective perceptions from the actual inhabitants of the city under study, and more specifically youth (16-18 year-old) about issues like danger, accessibility, and dirtiness. We collect over 9000 judgments for 102 photos of outdoor urban spaces in a city in Central Mexico using standard scales in social sciences. We present reliability and response analyses and demonstrate how local youth can provide relevant urban insights in a crowdsourcing setting.",
    city: "Brussels, Belgium",
    publisher:
      "Institute for Computer Sciences, Social Informatics and Telecommunications Engineering",
    url: "https://pdfs.semanticscholar.org/bf09/45148f8194a4fad4eb9dcf9919aa8c24b7c3.pdf?_ga=2.5506099.1487167764.1596645867-436367891.1596513885",
    doi: "10.4108/icst.urb-iot.2014.257453",
  },

  {
    title:
      "SenseCityVity: Mobile Crowdsourcing, Urban Awareness, and Collective Action in Mexico",
    type: "academic article",
    authors: [
      "Ruiz-Correa, Salvador",
      "Darshan, Santani",
      "Ruiz-Correa, Itzia",
      "Ramírez Salazar, Beatriz",
      "Rendón, Fátima Alba",
      "Olmos Carrillo, Carlo",
      "Sandoval Mexicano, Brisa Carmina",
      "Arcos García, Ángel Humberto",
      "Hasimoto Beltrán, Rogelio",
      "Gatica Pérez, Daniel",
    ],
    journal: "IEEE Pervasive Computing",
    year: 2017,
    volume: 16,
    issue: 2,
    pages: "44-53",
    abstract:
      "This work describes SenseCityVity, an approach to engage and support youth in a city in Mexico as they investigate, document, and reflect upon urban problems through mobile crowdsourcing. SenseCityVity focused on the development of a mobile crowdsourcing platform; the deployment of the Urban Data Challenge, codesigned by the authors' research team and actors to collect geolocalized images, audio, and video; and the analysis, appropriation, and creative use of the collected data for community reflection and artistic creation. The approach integrates mobile technology and community practices involving a large population of young people for urban engagement. The collective action generated a new multimedia dataset that is rich in terms of content and is enabling a number of studies aimed at better understanding the urban landscape of cities in the Global South. This article is part of a special issue on smart cities.",
    url: "https://publications.idiap.ch/downloads/papers/2016/Ruiz-Correa_PERVASIVECOMPUT._2016.pdf",
    doi: "10.1109/MPRV.2017.32",
  },
];
