import { languages } from './../languages.js';

export default function Languages() {
    return (
        <section className="languages">
            {languages.map(lang =>
                <div
                    key={lang.name}
                    style={{
                        backgroundColor: lang.backgroundColor,
                        color: lang.color,
                    }}>{lang.name}
                </div>)}
        </section>
    );

}