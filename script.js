

let userInput = document.querySelector('.input');
let display= document.querySelector('.show');

let dico = function(){

fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput.value}`)
        .then(data=>{
            return data.json()

        }).then(myData => {
            let word = document.querySelector('.word');
            let phonetic = document.querySelector('.phonetic');
            let meanings = document.querySelector('.meanings');
            let antonyms = document.querySelector('.antonyms');
            let antonyms1 = document.querySelector('.antonyms1');
            let definitions = document.querySelector('.definitions');
            let definition1 = document.querySelector('.definition1');
            let  POS = document.querySelector('.partOfSpeech');
            //let  POS1 = document.querySelector('.partOfSpeech1')
            let synoms = document.querySelector('.synonyms')
            let synoms1 = document.querySelector('.synonyms1');
            console.log(myData);
            
                word.innerHTML= 'Word:' +" "+ myData[0]['word'];
                phonetic.innerHTML= 'phonetic:' +" "+ myData[0]['phonetic'];
                antonyms.innerHTML = 'antonyms:' +" "+ myData[0]['meanings'][0]['antonyms'];
                // antonyms1.innerHTML = myData[0]['meanings'][1]['antonyms'][1];

                definitions.innerHTML = 'definition:' +" "+ myData[0]['meanings'][0]['definitions'][0]['definition'];
                definition1.innerHTML = 'definition:' +" "+ myData[0]['meanings'][0]['definitions'][1]['definition'];
                meanings.innerHTML = 'partOfSpeech:' +" "+ myData[0]['meanings'][0]['partOfSpeech'];
                POS.innerHTML = 'partOfSpeech:' +" "+ myData[0]['meanings'][1]['partOfSpeech']
                
                synoms.innerHTML = 'synoms:' +" "+ myData[0]['meanings'][0]['synonyms'];
                synoms1.innerHTML = myData[0]['meanings'][0]['synonyms'][1]['synonym']
               
             if(myData[0] == null){
               let word = "Definition not found"
               word.innerHTML= "//" + word;
             }
             if( phonetic == undefined){
                    let phonetic = "phonetic: Not found!"
                    phonetic.innerHTML= phonetic
             }else { phonetic.innerHTML= myData[0]['phonetic']

             }
            // console.log(definition1.innerHTML)
    
        }).catch(err => {
            console.log(err)
        })
}
