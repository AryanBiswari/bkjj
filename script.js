// 1. Data Structure for all rounds
const quizData = {
    "Passing Round": [
        { text: "बद्रीनाथ किस नदी के किनारे स्थित है?", answer: "अलकनन्दा", time: 15, type: "text" },
        { text: "कटक किस नदी के किनारे स्थित है?", answer: "महानदी", time: 15, type: "text" },
        { text: "श्रीनगर किस नदी के किनारे स्थित है?", answer: "झेलम", time: 15, type: "text" },
        { text: "डिबरूगढ़ किस नदी के तट पर स्थित है?", answer: "ब्रह्मपुत्र", time: 15, type: "text" },
        { text: "शान्त घाटी (Silent Valley) किस राज्य में स्थित है?", answer: "केरल", time: 15, type: "text" }
    ],
    "Picture Round": [
        { text: "यह चित्र किस प्रसिद्ध भारतीय क्रांतिकारी का है?", answer: "रासबिहारी बोस", time: 15, type: "picture", mediaSrc: "Rash Behari Bose.jpg" },
        { text: "यह चित्र किस प्रसिद्ध भारतीय चित्रकला शैली को दर्शाता है?", answer: "मधुबनी चित्रकला", time: 15, type: "picture", mediaSrc: "madhubani.jpg" },
        { text: "यह चित्र किस प्रसिद्ध भारतीय वैज्ञानिक का है?", answer: "विक्रम साराभाई", time: 15, type: "picture", mediaSrc: "vikramsarabhai.jpg" },
        { text: "यह चित्र किस प्रसिद्ध भारतीय वैज्ञानिक का है?", answer: "होमी जहाँगीर भाभा", time: 15, type: "picture", mediaSrc: "homi.jpg" },
        { text: "यह चित्र किस प्रसिद्ध ऐतिहासिक स्थल का है?", answer: "असीरगढ़ का किला", time: 15, type: "picture", mediaSrc: "fort.jpg" }
        // ... add remaining questions
    ],
    "Video Round": [
        { text: "चंद्रयान-3 चंद्रमा पर कब उतरा?", answer: "23 अगस्त 2023", time: 15, type: "video", mediaSrc: "vid1.mp4" },
        { text: "बहारों फूल बरसाओ’ गाना किस फिल्म का है?", answer: "सूरज (1966)", time: 15, type: "video", mediaSrc: "song.mp4" },
        { text: "भरतनाट्यम किस राज्य का प्रमुख शास्त्रीय नृत्य है?", answer: "तमिलनाडु", time: 15, type: "video", mediaSrc: "dance.mp4" },
        { text: "धुआँधार जलप्रपात किस शहर के पास है?", answer: "जबलपुर", time: 15, type: "video", mediaSrc: "waterfall.mp4" },
        { text: "थेय्यम परंपरा भारत के किस राज्य से जुड़ी है?", answer: "केरल", time: 15, type: "video", mediaSrc: "kaantara.mp4" }
    ],
    "Audio Round": [
        { text: "ऑडियो में किस प्रकार के वाद्य यंत्र (ताल वाद्य/पर्कशन) का प्रयोग किया गया है?", answer: "तबला", time: 15, type: "audio", mediaSrc: "tabla.mp3" },
        { text: "ऑडियो में किस प्रसिद्ध राजनीतिज्ञ की आवाज़ है?", answer: "इंदिरा गांधी", time: 15, type: "audio", mediaSrc: "indra.mp3" },
        { text: "यह गीत किस ऐतिहासिक सेना का आधिकारिक मार्चिंग सॉन्ग (कदम ताल गीत) था?", answer: "आज़ाद हिन्द फ़ौज (INA)", time: 15, type: "audio", mediaSrc: "azad.mp3" },
        { text: "इस ऑडियो क्लिप में शुरुआत में बजने वाला मुख्य तंत्री (स्ट्रिंग्ड) वाद्य यंत्र कौन सा है?", answer: "सितार", time: 15, type: "audio", mediaSrc: "sitar.mp3" },
        { text: "यह गीत मुख्य रूप से किस भाषा में लिखा गया है?", answer: "बंगाली", time: 15, type: "audio", mediaSrc: "ekla.mp3" }
    ],
    
    // Optional Round - Grouped by Topic
    "Optional Round": {
        "Dharam Sanskriti": {
            "Team A": [
                { text: "सीता जी के पालनहार पिता (मिथिला के राजा) कौन थे?", answer: "जनक", time: 15, type: "text" }
            ],
            "Team B": [
                { text: "आर्य समाज की स्थापना किसने की थी?", answer: "दयानन्द", time: 15, type: "text" }
            ],
            "Team C": [
                { text: "भगवत्गीता की प्रसिद्ध टीका 'ज्ञानेश्वरी' किसने लिखी थी?", answer: "ज्ञानेश्वर", time: 15, type: "text" }
            ],
            "Team D": [
                { text: "सन्त तुकाराम किस राज्य के प्रसिद्ध वैष्णव संत थे?", answer: "महाराष्ट्र", time: 15, type: "text" }
            ],
            "Team E": [
                { text: "असम में भागवत धर्म का प्रचार-प्रसार करने वाले प्रसिद्ध संत कौन थे?", answer: "शंकरदेव", time: 15, type: "text" }
            ]
        },
        // आप भविष्य में इसी तरह History, Rajniti आदि के प्रश्न भी हर टीम के लिए बाँट सकते हैं
        "History": {
            "Team A": [
                { text: "चन्द्रगुप्त मौर्य की प्राचीन राजधानी कहाँ थी?", answer: "पाटलीपुत्र", time: 15, type: "text" }
            ],
            "Team B": [
                { text: "चन्द्रगुप्त मौर्य के प्रसिद्ध गुरु (मार्गदर्शक) कौन थे?", answer: "चाणक्य", time: 15, type: "text" }
            ],
            "Team C": [
                { text: "मौर्य वंश का अंतिम सम्राट कौन था?", answer: "बृहद्रथ", time: 15, type: "text" }
            ],
            "Team D": [
                { text: "कुषाण सम्राट कनिष्क की प्राचीन राजधानी कहाँ थी?", answer: "पुरुषपुर", time: 15, type: "text" }
            ],
            "Team E": [
                { text: "बंगाल में 'पालवंश' का संस्थापक कौन था?", answer: "गोपाल", time: 15, type: "text" }
            ]
        },
        "Rajniti and Sanvidhaan": {
            "Team A": [
                { text: "संविधान में गणराज्य की अवधारणा किस देश के संविधान से प्रेरित है?", answer: "फ्रांस", time: 15, type: "text" }
            ],
            "Team B": [
                { text: "केन्द्र व राज्यों के मध्य शक्तियों का विभाजन किस देश के संविधान से प्रेरित है?", answer: "कनाडा", time: 15, type: "text" }
            ],
            "Team C": [
                { text: "भारत में राज्यपाल बनने के लिए न्यूनतम आयु (वर्षों में) कितनी है?", answer: "35", time: 15, type: "text" }
            ],
            "Team D": [
                { text: "राज्य सभा की सदस्यता हेतु न्यूनतम आयु (वर्षों में) कितनी है?", answer: "30", time: 15, type: "text" }
            ],
            "Team E": [
                { text: "उच्चतम न्यायालय के न्यायाधीशों की अधिकतम संख्या कितनी हो सकती है?", answer: "34", time: 15, type: "text" }
            ]
        },
        "Khel": {
            "Team A": [
                { text: "पद्मश्री से सम्मानित प्रथम भारतीय धावक कौन थे?", answer: "मिल्खा", time: 15, type: "text" }
            ],
            "Team B": [
                { text: "इंग्लिश चैनल तैरकर पार करने वाले प्रथम भारतीय (पुरुष) कौन थे?", answer: "मिहिर", time: 15, type: "text" }
            ],
            "Team C": [
                { text: "इंग्लिश चैनल तैरकर पार करने वाली प्रथम भारतीय महिला कौन थीं?", answer: "आरती", time: 15, type: "text" }
            ],
            "Team D": [
                { text: "प्रथम भारतीय एशियाई स्नूकर चैम्पियन कौन थे?", answer: "यासीन", time: 15, type: "text" }
            ],
            "Team E": [
                { text: "एवरेस्ट पर चढ़ने वाली प्रथम भारतीय महिला कौन थीं?", answer: "बछेन्द्री", time: 15, type: "text" }
            ]
        },
        "Bharat Vikas Parishad": {
            "Team A": [
                { text: "भारत विकास परिषद् की स्थापना किस वर्ष हुई थी?", answer: "1963", time: 15, type: "text" }
            ],
            "Team B": [
                { text: "भारत विकास परिषद् का केन्द्रीय कार्यालय किस नगर में स्थित है?", answer: "दिल्ली", time: 15, type: "text" }
            ],
            "Team C": [
                { text: "परिषद् द्वारा 'भारत को जानो' प्रतियोगिता किस वर्ष प्रारंभ की गई थी?", answer: "2001", time: 15, type: "text" }
            ],
            "Team D": [
                { text: "'भारत को जानो' प्रतियोगिता कुल कितने स्तरों पर आयोजित होती है?", answer: "चार", time: 15, type: "text" }
            ],
            "Team E": [
                { text: "पुस्तक की प्रस्तावना के अनुसार परिषद् के राष्ट्रीय महामंत्री कौन हैं?", answer: "सुनील (खेड़ा)", time: 15, type: "text" }
            ]
        }
    },

    // Rapid Fire Round - Grouped by Team (Team A to E)
    "Rapid Fire": {
        "Team A": [
            // सरल स्तर (Easy)
            { text: "भारत का राष्ट्रीय पक्षी क्या है?", answer: "मोर", time: 60, type: "text" },
            { text: "भारत का राष्ट्रीय पुष्प क्या है?", answer: "कमल", time: 60, type: "text" },
            { text: "भारत का राष्ट्रीय वृक्ष क्या है?", answer: "बरगद", time: 60, type: "text" },
            
            // मध्यम स्तर (Medium)
            { text: "भारत की राष्ट्रीय नदी कौन-सी है?", answer: "गंगा", time: 60, type: "text" },
            { text: "भारत का सर्वाधिक साक्षरता वाला राज्य कौन-सा है?", answer: "केरल", time: 60, type: "text" },
            { text: "क्षेत्रफल की दृष्टि से भारत का सबसे छोटा राज्य कौन-सा है?", answer: "गोवा", time: 60, type: "text" },
            { text: "'बिहार का शोक' किस नदी को कहते हैं?", answer: "कोसी", time: 60, type: "text" },
            { text: "'बंगाल का शोक' किस नदी को कहते हैं?", answer: "दामोदर", time: 60, type: "text" },
            { text: "अजमेर किस नदी के किनारे स्थित है?", answer: "लूनी", time: 60, type: "text" },
            { text: "लखनऊ किस नदी के किनारे स्थित है?", answer: "गोमती", time: 60, type: "text" },
            { text: "जबलपुर किस नदी के किनारे स्थित है?", answer: "नर्मदा", time: 60, type: "text" },
            { text: "सूरत किस नदी के किनारे स्थित है?", answer: "ताप्ती", time: 60, type: "text" },
            
            // कठिन स्तर (Hard)
            { text: "भारत का सबसे ऊँचा जल प्रपात (कुंचिकल) किस राज्य में स्थित है?", answer: "कर्नाटक", time: 60, type: "text" },
            { text: "भारत की सबसे बड़ी गुफा (क्रेम लियात प्राह) किस राज्य में स्थित है?", answer: "मेघालय", time: 60, type: "text" },
            { text: "मकराना नगर किस वस्तु (खनिज) के लिए प्रसिद्ध है?", answer: "संगमरमर", time: 60, type: "text" }
        ],
        "Team B": [
           { text: "भारत का राष्ट्रीय जलीय जीव कौन-सा है?", answer: "डॉल्फिन", time: 60, type: "text" },
            { text: "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य कौन-सा है?", answer: "राजस्थान", time: 60, type: "text" },
            { text: "जनसंख्या की दृष्टि से भारत का सबसे छोटा राज्य कौन-सा है?", answer: "सिक्किम", time: 60, type: "text" },
            
            // मध्यम स्तर (Medium)
            { text: "'भारत का नेपोलियन' किस प्राचीन सम्राट को कहा जाता है?", answer: "समुद्रगुप्त", time: 60, type: "text" },
            { text: "स्वतंत्र भारत में प्रथम आम चुनाव किस वर्ष हुआ था?", answer: "1952", time: 60, type: "text" },
            { text: "जलियाँवाला बाग हत्याकांड किस वर्ष हुआ था?", answer: "1919", time: 60, type: "text" },
            { text: "महात्मा बुद्ध को ज्ञान किस वृक्ष के नीचे प्राप्त हुआ था?", answer: "पीपल", time: 60, type: "text" },
            { text: "भारत का सबसे बड़ा डेल्टा कौन-सा है?", answer: "सुन्दरवन", time: 60, type: "text" },
            { text: "भारत में स्थापित प्रथम रेलवे टर्मिनस (बोरी बन्दर) कहाँ बनाई गई थी?", answer: "मुम्बई", time: 60, type: "text" },
            { text: "भारत में प्रथम 10 वर्षीय जनगणना का आरंभ किस वर्ष हुआ?", answer: "1881", time: 60, type: "text" },
            { text: "हल्दीघाटी किस राज्य में स्थित है?", answer: "राजस्थान", time: 60, type: "text" },
            { text: "चोल राजवंश की सर्वप्रथम राजधानी कौन-सी थी?", answer: "उरैयूर", time: 60, type: "text" },
            
            // कठिन स्तर (Hard)
            { text: "भारत में सबसे पहले नगरपालिका किस नगर में बनी?", answer: "मद्रास", time: 60, type: "text" },
            { text: "भारत की सबसे बड़ी फलों की मण्डी (आजादपुर) कहाँ स्थित है?", answer: "दिल्ली", time: 60, type: "text" },
            { text: "पल्लव वंश का अन्त किस चोल शासक ने किया था?", answer: "अपराजित", time: 60, type: "text" }
        ],
        "Team C": [
            // सरल स्तर (Easy)
            { text: "भारत का सर्वोच्च शौर्य सम्मान कौन-सा है?", answer: "परमवीर", time: 60, type: "text" },
            { text: "भारत का राष्ट्रीय कैलेण्डर कौन-सा संवत् है?", answer: "शक", time: 60, type: "text" },
            { text: "भारत की सबसे लम्बी सड़क सुरंग का नाम क्या है?", answer: "अटल", time: 60, type: "text" },
            
            // मध्यम स्तर (Medium)
            { text: "स्वतंत्र भारत के प्रथम विधि (कानून) मंत्री कौन थे?", answer: "अम्बेडकर", time: 60, type: "text" },
            { text: "लिच्छवी गणतन्त्र की प्राचीन राजधानी कहाँ थी?", answer: "वैशाली", time: 60, type: "text" },
            { text: "बौद्ध धर्म के प्रचार के लिए अशोक ने अपने किस पुत्र को विदेश भेजा था?", answer: "महेन्द्र", time: 60, type: "text" },
            { text: "शुंग वंश की नींव (स्थापना) किसने रखी थी?", answer: "पुष्यमित्र", time: 60, type: "text" },
            { text: "तराइन का दूसरा युद्ध (1192 ई.) किसने जीता था?", answer: "गोरी", time: 60, type: "text" },
            { text: "'नील दर्पण' नाटक किस किसान विद्रोह से संबंधित है?", answer: "नील", time: 60, type: "text" },
            { text: "'वन्देमातरम्' नामक क्रान्तिकारी अखबार का प्रकाशन किसने किया था?", answer: "अरविन्द", time: 60, type: "text" },
            { text: "भारत में सबसे बड़ा गुम्बद (गोल गुम्बद) कहाँ स्थित है?", answer: "बीजापुर", time: 60, type: "text" },
            { text: "भारत में स्थापित प्रथम टायर कम्पनी कौन-सी थी?", answer: "डनलप", time: 60, type: "text" },
            
            // कठिन स्तर (Hard)
            { text: "भारत में सबसे कम उम्र (64 वर्ष) में बनने वाली राष्ट्रपति कौन हैं?", answer: "मुर्मू", time: 60, type: "text" },
            { text: "दक्षिण ध्रुव पर जाने वाले प्रथम भारतीय वैज्ञानिक दल के नेता कौन थे?", answer: "कासिम", time: 60, type: "text" },
            { text: "भारत में सबसे अधिक दूरी तय करने वाली एक्सप्रेस रेलगाड़ी का नाम क्या है?", answer: "विवेक", time: 60, type: "text" }
        ],
        "Team D": [
            // सरल स्तर (Easy)
            { text: "सर्वाधिक समुद्र तट सीमा वाला भारतीय राज्य कौन-सा है?", answer: "गुजरात", time: 60, type: "text" },
            { text: "भारत का शासन प्रमुख कौन होता है?", answer: "प्रधानमंत्री", time: 60, type: "text" },
            { text: "भारत में मुग़ल साम्राज्य की स्थापना किसने की थी?", answer: "बाबर", time: 60, type: "text" },
            
            // मध्यम स्तर (Medium)
            { text: "1857 का प्रथम स्वतंत्रता संग्राम कहाँ से प्रारंभ हुआ था?", answer: "मेरठ", time: 60, type: "text" },
            { text: "सिख धर्म के संस्थापक कौन थे?", answer: "नानक", time: 60, type: "text" },
            { text: "काजीरंगा राष्ट्रीय उद्यान किस राज्य में स्थित है?", answer: "असम", time: 60, type: "text" },
            { text: "सबसे लम्बा हीराकुण्ड बाँध किस नदी पर बना है?", answer: "महानदी", time: 60, type: "text" },
            { text: "भारत का प्रथम न्यूक्लियर रिएक्टर (अप्सरा) कहाँ स्थापित हुआ था?", answer: "ट्राम्बे", time: 60, type: "text" },
            { text: "भारत में चन्दन बहुतायत से किस राज्य में पाया जाता है?", answer: "कर्नाटक", time: 60, type: "text" },
            { text: "पश्चिमी खासी पहाड़ियों का प्रवेश द्वार किसे कहा जाता है?", answer: "मोइरंग", time: 60, type: "text" },
            { text: "दक्षिण भारत की सबसे ऊँची चोटी (अनाईमुडी) किस राज्य में है?", answer: "केरल", time: 60, type: "text" },
            { text: "खजुराहो के विश्व धरोहर स्मारक किस राज्य में स्थित हैं?", answer: "मध्यप्रदेश", time: 60, type: "text" },
            
            // कठिन स्तर (Hard)
            { text: "मेवाड़ के प्रसिद्ध शासक बप्पा रावल का वास्तविक नाम क्या था?", answer: "कालभोज", time: 60, type: "text" },
            { text: "कौन-सी नदी अरावली पर्वत श्रृंखला को मध्य से दो भागों में विभाजित करती है?", answer: "बनास", time: 60, type: "text" },
            { text: "असम का सबसे प्राचीन नाम क्या था?", answer: "प्रागज्योतिषपुर", time: 60, type: "text" }
        ],
        "Team E": [
            // सरल स्तर (Easy)
            { text: "क्षेत्रफल के आधार पर भारत का सबसे बड़ा जिला कौन-सा है?", answer: "कच्छ", time: 60, type: "text" },
            { text: "भारत का दक्षिणतम बिन्दु कौन-सा 'पॉइण्ट' है?", answer: "इन्दिरा", time: 60, type: "text" },
            { text: "स्वतंत्र भारत के प्रथम उप-प्रधानमंत्री (उपनाम) कौन थे?", answer: "पटेल", time: 60, type: "text" },
            
            // मध्यम स्तर (Medium)
            { text: "भारत की प्रथम कथा फिल्म 'राजा हरिश्चन्द्र' के निर्माता (उपनाम) कौन थे?", answer: "फाल्के", time: 60, type: "text" },
            { text: "ऋग्वेद की ऋचाओं की रचना किस नदी के किनारे हुई थी?", answer: "सरस्वती", time: 60, type: "text" },
            { text: "शाक्य गणतंत्र किस प्राचीन राज्य में विकसित हुआ था?", answer: "कपिलवस्तु", time: 60, type: "text" },
            { text: "किस भारतीय राजा ने सर्वप्रथम सिकन्दर की अधीनता स्वीकार कर ली थी?", answer: "आम्भीक", time: 60, type: "text" },
            { text: "चित्तौड़ की रानी पद्मिनी के पति कौन थे?", answer: "रत्नसिंह", time: 60, type: "text" },
            { text: "भारत के शीत मरुस्थल (Cold Desert) का नाम क्या है?", answer: "लद्दाख", time: 60, type: "text" },
            { text: "भारत का सबसे बड़ा नमक उत्पादक राज्य कौन-सा है?", answer: "गुजरात", time: 60, type: "text" },
            { text: "भारत में अद्वैतवाद के प्रवर्तक कौन थे?", answer: "शंकराचार्य", time: 60, type: "text" },
            { text: "सुप्रसिद्ध महाकाव्य 'रामचरित मानस' के रचयिता कौन हैं?", answer: "तुलसीदास", time: 60, type: "text" },
            
            // कठिन स्तर (Hard)
            { text: "विष्णु भक्त ध्रुव की विमाता (सौतेली माँ) का क्या नाम था?", answer: "सुरुचि", time: 60, type: "text" },
            { text: "विश्व का एकमात्र तैरने वाला राष्ट्रीय उद्यान (केयबुल लामजाओ) किस राज्य में स्थित है?", answer: "मणिपुर", time: 60, type: "text" },
            { text: "प्रसिद्ध बौद्ध 'ताबाओ मठ' भारत के किस राज्य में स्थित है?", answer: "हिमाचल", time: 60, type: "text" }
        ]
    }
};

// 2. Global Variables
let playingTeam = "";
let currentQuestions = [];
let currentIndex = 0;
let timer;
let timeLeft = 0;

// Updated Scores Object for 5 Teams (A, B, C, D, E)
let scoresData = { 'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0 };

// 3. DOM Elements
const roundSelect = document.getElementById('round-selector');
const teamSelect = document.getElementById('team-selector');
const subRoundSelect = document.getElementById('sub-round-selector');
const qTracker = document.getElementById('question-tracker');
const qText = document.getElementById('question-text');
const aText = document.getElementById('answer-text');
const timeDisplay = document.getElementById('time-left');

const mediaElements = {
    picture: document.getElementById('picture-media'),
    video: document.getElementById('video-media'),
    audio: document.getElementById('audio-media')
};

// 4. Dropdown Handlers
function handleRoundChange() {
    const selectedRound = roundSelect.value;
    
    // Both Optional Round and Rapid Fire require a Team to be selected first
    if (selectedRound === "Optional Round" || selectedRound === "Rapid Fire") {
        teamSelect.classList.remove('hidden');
        subRoundSelect.classList.add('hidden'); // Keep topic hidden for now
        
        // Reset selections
        teamSelect.value = "";
        subRoundSelect.value = "";
        currentQuestions = []; 
        
        qText.textContent = `Please select a Team for ${selectedRound}.`;
        qTracker.textContent = selectedRound;
    } else if (selectedRound !== "") {
        // Standard rounds: hide extra dropdowns
        teamSelect.classList.add('hidden');
        subRoundSelect.classList.add('hidden');
        
        teamSelect.value = "";
        subRoundSelect.value = "";
        
        currentQuestions = quizData[selectedRound];
        currentIndex = 0;
        playingTeam = "";
        loadQuestion();
    }
}

function handleTeamChange() {
    playingTeam = teamSelect.value;
    const selectedRound = roundSelect.value;
    
    if (playingTeam !== "") {
        if (selectedRound === "Optional Round") {
            // Optional Round: Show Topics dropdown after team is selected
            subRoundSelect.classList.remove('hidden');
            subRoundSelect.value = ""; 
            currentQuestions = [];
            
            qText.textContent = `Please select a topic for ${playingTeam}.`;
            qTracker.textContent = `Optional Round - ${playingTeam}`;
        } else if (selectedRound === "Rapid Fire") {
            // Rapid Fire: Load team questions immediately (No topics needed)
            subRoundSelect.classList.add('hidden');
            currentQuestions = quizData["Rapid Fire"][playingTeam];
            currentIndex = 0;
            
            qTracker.textContent = `Rapid Fire - ${playingTeam}`;
            loadQuestion();
        }
    } else {
        // If team is deselected
        subRoundSelect.classList.add('hidden');
        qText.textContent = `Please select a Team for ${selectedRound}.`;
    }
}

function handleSubRoundChange() {
    const selectedSubRound = subRoundSelect.value;
    if (selectedSubRound !== "" && playingTeam !== "") {
        // अब यह कोड Topic (जैसे Dharam Sanskriti) और Team (जैसे Team A) दोनों के आधार पर प्रश्न उठाएगा
        currentQuestions = quizData["Optional Round"][selectedSubRound][playingTeam];
        
        // अगर किसी टीम के लिए प्रश्न नहीं डाले गए हैं, तो खाली Array सेट करें ताकि Error ना आए
        if (!currentQuestions) currentQuestions = [];
        
        currentIndex = 0;
        
        qTracker.textContent = `Optional Round - ${playingTeam} (${selectedSubRound})`;
        loadQuestion();
    }
}

function loadQuestion() {
    if (!currentQuestions || currentQuestions.length === 0) return;
    
    const q = currentQuestions[currentIndex];
    const selectedRound = roundSelect.value;
    
    // --- Timer Setup ---
    if (selectedRound !== "Rapid Fire") {
        clearInterval(timer);
        timeLeft = q.time;
        timeDisplay.textContent = timeLeft;
    } else {
        if (currentIndex === 0) {
            clearInterval(timer);
            timeLeft = 60; // रैपिड फायर के लिए 60 सेकंड
            timeDisplay.textContent = timeLeft;
        }
    }

    qTracker.textContent = `Question ${currentIndex + 1} of ${currentQuestions.length}`;
    qText.textContent = q.text;
    aText.textContent = q.answer;
    aText.classList.add('hidden');
    
    // Reset media
    Object.values(mediaElements).forEach(el => el.style.display = "none");

    let isVideoOrAudio = false;

    // Handle media rendering
    if (q.type && mediaElements[q.type]) {
        const mediaEl = mediaElements[q.type];
        mediaEl.src = q.mediaSrc;
        mediaEl.style.display = "block";
        
        // अगर वीडियो या ऑडियो है, तो खत्म होने पर टाइमर चलाएं
        if (q.type === "video" || q.type === "audio") {
            isVideoOrAudio = true;
            mediaEl.load(); 
            mediaEl.onended = () => startTimer();
        }
    }

    // --- AUTO START TIMER LOGIC ---
    // अगर प्रश्न टेक्स्ट या पिक्चर है, तो तुरंत टाइमर शुरू कर दें
    if (!isVideoOrAudio) {
        if (selectedRound === "Rapid Fire") {
            // रैपिड फायर में सिर्फ पहले प्रश्न पर टाइमर स्टार्ट करें, बाकी में बैकग्राउंड में चलता रहेगा
            if (currentIndex === 0) {
                startTimer();
            }
        } else {
            // Passing, Optional और Picture राउंड में तुरंत स्टार्ट करें
            startTimer();
        }
    }
}

function showAnswer() {
    if (currentQuestions.length > 0) {
        // Toggle Logic: अगर उत्तर छुपा है, तो दिखाओ, वरना छुपा दो
        if (aText.classList.contains('hidden')) {
            aText.classList.remove('hidden');
            
            // रैपिड फायर में 'Show Answer' करने पर टाइमर नहीं रुकना चाहिए
            if (roundSelect.value !== "Rapid Fire") {
                clearInterval(timer); 
            }
        } else {
            aText.classList.add('hidden'); // दोबारा दबाने पर उत्तर छुप जाएगा
        }
    }
}

function nextQuestion() {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
}

function startTimer() {
    clearInterval(timer); 
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timeDisplay.textContent = timeLeft;
        } else {
            clearInterval(timer);
            timeDisplay.textContent = "0 (Time's Up!)";
        }
    }, 1000);
}

// 6. Scoring Logic
// Function to handle UI button clicks (+10 or -5)
function updateScore(teamLetter, points) {
    scoresData[teamLetter] += points;
    document.getElementById(`score-${teamLetter}`).textContent = scoresData[teamLetter];
}



// Keyboard Scoring and Controls
document.addEventListener('keydown', (event) => {
    // अगर होस्ट किसी Dropdown (Select) में कुछ चुन रहा है, तो शॉर्टकट ट्रिगर ना हों
    if (event.target.tagName === 'SELECT' || event.target.tagName === 'INPUT') {
        return;
    }

    // --- 1. Scoring Logic (Keys 1-5 for Teams A-E) ---
    const keyMap = { 
        'Digit1': 'A', 'Numpad1': 'A',
        'Digit2': 'B', 'Numpad2': 'B',
        'Digit3': 'C', 'Numpad3': 'C',
        'Digit4': 'D', 'Numpad4': 'D',
        'Digit5': 'E', 'Numpad5': 'E'
    };
    
    if (keyMap[event.code]) {
        let teamLetter = keyMap[event.code];
        if (event.shiftKey) {
            updateScore(teamLetter, -5);
        } else {
            updateScore(teamLetter, 10);
        }
    }

    // --- 2. Quiz Controls Shortcuts ---
    if (event.code === 'ArrowRight') {
        // Right Arrow (➡) -> Next Question
        nextQuestion();
    } 
    else if (event.code === 'ArrowLeft') {
        // Left Arrow (⬅) -> Previous Question
        prevQuestion();
    } 
    else if (event.code === 'Space' || event.code === 'Enter') {
        // Spacebar या Enter -> Show/Hide Answer (Toggle)
        event.preventDefault(); // Space दबाने पर स्क्रीन नीचे स्क्रॉल होने से रोकेगा
        showAnswer();
    } 
    else if (event.code === 'KeyT') {
        // 'T' बटन -> Start Timer
        startTimer();
    }
});