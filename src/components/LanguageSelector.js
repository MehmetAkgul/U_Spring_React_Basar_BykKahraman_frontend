import React, {Component} from 'react';
import {changeLanguage} from "../api/apiCals";
import {withTranslation} from "react-i18next";


class LanguageSelector extends Component {
    onChangeLanguage = language => {
        const {i18n} = this.props;
        i18n.changeLanguage(language) // ui üzerinden dil ayarı yapar
        changeLanguage(language) // axios üzerinden backende giden sorguda header'a seçilen dili ekler.
    }

    render() {
        return (
            <div className={'container'}>
                <img src="https://flagcdn.com/32x24/tr.png" alt="Turkish Flag"
                     onClick={() => this.onChangeLanguage('tr')}
                     style={{cursor: 'pointer'}}/>
                <img src="https://flagcdn.com/32x24/us.png" alt="USA Flag"
                     onClick={() => this.onChangeLanguage('en')}
                     style={{cursor: 'pointer'}}/>
            </div>
        );
    }
}

export default withTranslation()(LanguageSelector);