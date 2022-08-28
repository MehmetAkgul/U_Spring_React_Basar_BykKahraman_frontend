import i18next from "i18next";
import {initReactI18next} from "react-i18next";

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translations: {
                'Sign Up': 'Sign Up',
                'Login': 'Login',
                'Password mismatch': 'Password mismatch',
                'User Name': 'User Name',
                'Display Name': 'Display Name',
                'Password': 'Password',
                'Password Repeat': 'Password Repeat',
            }
        },
        tr: {
            translations: {
                'Sign Up': 'Kayıt Ol',
                'Login': 'Giriş Yap',
                'Password mismatch': 'Aynı Şifreyi Giriniz',
                'User Name': 'Kullanıcı Adı',
                'Display Name': 'Tercih Edilen İsim',
                'Password': 'Şifre',
                'Password Repeat': 'Şifre Tekrarı',
            }
        }
    },
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNs: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },
    react: {
        wait: true
    }
});


export default i18next;