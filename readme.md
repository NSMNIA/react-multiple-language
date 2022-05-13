# React Multiple Language
## The goal
The purpose of this proof of conecpt is to show that React/Next.js can be used to create a multi-language website. This is done by creating a single React component that can be used to render the content in multiple languages. This is done by using the `i18` library.

## How it works
When you load the website, the browser will send a request to a `json` file. This file contains the content in multiple languages. The default language is set to `en`.
```js
loadPath: "/react-multiple-language/locales/{{lng}}/translation.json",
```

For this project we will use the following languages: `en` and `es`. The content in the `en` language is the same as the content in the `es` language. Like this:
```json
// English
{
    "welcome_to_react": "Welcome to React",
    "paragraph": "Hello, this is a multiple language test."
}
// Spanish
{
    "welcome_to_react": "Bienvenido a React",
    "paragraph": "Hola, esta es una prueba de varios idiomas."
}
```

When you click the `English` or `Spanish` button, the content will be rendered in the correct language via the `i18` library.
```jsx
<ul>
    {allLanguages?.map(({ code, name, country_code }: ILanguages) => (
        <li key={country_code}>
            <button onClick={() => i18next.changeLanguage(code)}>
                {name}
            </button>
        </li>
    ))}
</ul>
```

## Example
[https://nsmnia.github.io/react-multiple-language/](https://nsmnia.github.io/react-multiple-language/)