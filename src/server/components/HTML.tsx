import * as React from 'react';

type Props = {
    children: any;
    css: string[];
    helmetContext: any;
    scripts: string[];
    state: string;
    styledComponents?: any;
};

const HTML = ({
    children,
    css = [],
    scripts = [],
    state = '{}',
    helmetContext: { helmet },
    styledComponents,
}: Props) => (
    <html lang="">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {helmet.base.toComponent()}
            {helmet.title.toComponent()}
            {helmet.meta.toComponent()}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            />
            {helmet.link.toComponent()}
            {helmet.script.toComponent()}
            {css.filter(Boolean).map((href) => (
                <link key={href} rel="stylesheet" href={href} />
            ))}
            <style>{styledComponents}</style>
            <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    // TODO: Add jsesc/stringify here
                    // see: https://twitter.com/HenrikJoreteg/status/1143953338284703744
                    __html: `window.__PRELOADED_STATE__ = ${state}`,
                }}
            />
        </head>
        <body>
            {/* eslint-disable-next-line react/no-danger */}
            <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" />
            {scripts.filter(Boolean).map((src) => (
                <script key={src} src={src} />
            ))}
        </body>
    </html>
);

export default HTML;
