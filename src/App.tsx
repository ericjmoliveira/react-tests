import { useState } from 'react';

export default function App() {
  const [languagesList, setLanguagesList] = useState(['HTML', 'CSS', 'JavaScript']);

  return (
    <div>
      <h1>Hello world!</h1>
      <h2>Languages:</h2>
      <ul>
        {languagesList.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
    </div>
  );
}
