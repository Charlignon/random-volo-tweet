window.lang = {
    en: {
        line1: ' SHOW ME ',
        line2: ' A RANDOM ',
        line3: ' VOLO ',
        line4: 'FANART',
        button: 'pretty please',
        footer: 'Brought to you by <a href="https://tumblr.com/volostan/">@Volostan</a> with love <3',
        // View
        placeholder: "<p>Loading... please wait a few seconds.</p>\n<p>If nothing is appearing after a few second,<br/> the tweet may have been deleted, or <a\nhref=\"https://downdetector.fr/statut/twitter/\">Twitter is experiencing an outage</a></p>",
        copy: 'Copy link',
        another: 'Get another Volo',
        report: 'Report deleted tweet',
        reportInfo: 'Reports may take a while to be processed.',
    },
    fr: {
        line1: 'VITE, VITE !!',
        line2: ' MONTRE-MOI ',
        line3: 'UN PERCUPIO',
        line4: 'AU HASARD',
        button: 's\'il-te-plaît',
        footer: 'Amené à vos doux yeux par <a href="https://tumblr.com/volostan/">@Volostan</a> <3',
        // View
        placeholder: "<p>Chargement... Veuillez patienter quelques secondes.</p>\n<p>Si rien n'apparaît après quelques secondes,<br/> soit le tweet a été supprimé, soit <a\nhref=\"https://downdetector.fr/statut/twitter/\">Twitter est indisponible pour le moment</a></p>",
        copy: 'Copier le lien',
        another: 'Voir un autre Volo',
        report: 'Signaler un tweet',
        reportInfo: 'Les signalements peuvent prendre du temps à être traités.',
    },
    es: {
        line1: 'MUÉSTRAME',
        line2: 'UN ARTE DE',
        line3: 'VOLUS',
        line4: 'ALEATORIO',
        button: 'por favor',
        footer: 'Traído a ti por <a href="https://tumblr.com/volostan/">@Volostan</a> con amor <3',
        // View
        placeholder: "<p>Cargando... Espere unos segundos.</p>\n" +
            "<p>Si no aparece nada después de unos segundos,<br/> el tweet se ha eliminado o <a\n" +
            "href=\"https://downdetector.fr/statut/twitter/\">Twitter no está disponible actualmente</a></p>",
        copy: 'Copiar enlace',
        another: 'Ver otro Volus',
        report: 'Reportar un tweet',
        reportInfo: 'Los reportandos pueden tardar en procesarse.',
    },
    jp: {
        line1: '早く',
        line2: 'ランダムな',
        line3: 'ウォロさん',
        line4: '見せて',
        button: 'お願い',
        footer: '<a href="https://tumblr.com/volostan/">@Volostan</a> が愛情を込めて贈る <3',
        // View
        placeholder: "<p>読み込んでいます... しばらくお待ちください。</p>\n" +
            "<p>数秒経っても何も表示されない場合は、<br/>ツイートが削除されているか、<a\n" +
            "href=\"https://downdetector.fr/statut/twitter/\">Twitter は現在利用できません</a></p>",
        copy: 'リンクをコピー',
        another: '別のものを見る',
        report: '削除されたツイートを報告',
        reportInfo: 'レポートの処理には時間がかかる場合があります。',
    }
};

const LANGUAGE_KEY = 'lang'
const langs = ['fr', 'jp', 'en', 'es'];

function switchLang(lang) {
    localStorage.setItem(LANGUAGE_KEY, lang);
    location.reload();
}

window.addEventListener('load', function () {
    const lang = localStorage.getItem(LANGUAGE_KEY);
    console.debug("Language: " + lang);
    if (lang) {
        for (let key in window.lang[lang]) {
            const domEl = document.getElementById(key);
            if (domEl) domEl.innerHTML = window.lang[lang][key];
        }
        const flags = document.getElementById("flags");
        langs.forEach(l => {
            if (l !== lang) flags.innerHTML = flags.innerHTML + `<img class="flag" src="assets/${l}.png" alt="${l} flag" onclick="switchLang('${l}')"/>`;
        });
    }
}, false);


