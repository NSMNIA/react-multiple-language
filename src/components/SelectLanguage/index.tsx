import i18next from 'i18next';
import ILanguages from '../../interfaces/ILanguages';

type Props = {}

export const allLanguages: ILanguages[] = [{
    code: 'en',
    name: 'English',
    country_code: 'gb'
}, {
    code: 'es',
    name: 'Español',
    country_code: 'es'
}];

const SelectLanguage = (props: Props) => {
    return (
        <>
            <ul>
                {allLanguages.map(({ code, name, country_code }: ILanguages) => (
                    <li key={country_code}>
                        <button onClick={() => i18next.changeLanguage(code)}>
                            {name}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default SelectLanguage