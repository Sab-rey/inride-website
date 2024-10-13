const { Translate } = require('@google-cloud/translate').v2;

const translate = new Translate({
    key: 'AIzaSyCRNt0fiXEFf41bNbB5MNgJzgigZUt-dnQ', // Ta clé API Google ici
});

const translateText = async (text, targetLanguage) => {
    try {
        let [translations] = await translate.translate(text, targetLanguage);
        return translations;
    } catch (error) {
        console.error('Erreur de traduction:', error);
    }
};

module.exports = translateText;
