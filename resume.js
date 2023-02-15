let Resume= 

    {
        Name:"Maheswari",
        EmailId: "mahi.nawins@gmail.com",
        Mobile : 9865720201,
        Educationalqualification:{
            Bachelorofscience :"costume design &fashion technology- 79%",
            diploma: "Garment technology- 72%",
            sslc:"69%",
         },
         Techanicalskill:{

            Computerskills :'MS office,coraldraw,photoshop',
         },
          Areaofinterst:{
         
            No1:'Create own design',
            No2:'create unique dress design',              

            },
         Personalskills : {
           
            a :'leadership',
            b :'creativity in unique',
            c :'Flexible Person',
               },
         personalinfo:{
         personaladdress:{
                     street:"NSK nagar 3rd street",
                     doorn:'10/418', 
                     area:'murugan mill bus stop', 
                     city:'Tirupur' , 
                     district:'Tirupur',
                     Pincode :641605,
                    },
                     Dob : "08/03/1990",
                     HusbandsName : 'Mr.S.Shankarsubramanian',
                     Gender : 'Female',
                     Nationality : 'Indian',
                     LanguageKnown:'Tamil  English ',   
                     Hobbies : 'music..& teach students for tusion',

         }

        }
           {

         //  OBJECT to JSON CONVERSION 

         let resumeJSON = JSON.stringify(Resume);
         console.log(resumeJSON);

        //JSON to OBJECT CONVERSION
        
        //let resumeobj  =JSON.parse(Resume);
        //console.log(resumeobj);
        
             
        }; 