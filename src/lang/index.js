import { addLocaleData } from 'react-intl';
import enLang from './entries/en-US';
import esLang from './entries/es-ES';
import enRtlLang from './entries/en-US-rtl';
import idLang from './entries/id-ID';

const AppLocale = {
    en: enLang,
    es: esLang,
    id: idLang,
    enrtl:enRtlLang
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.es.data);
addLocaleData(AppLocale.id.data);
addLocaleData(AppLocale.enrtl.data);

export default AppLocale;
