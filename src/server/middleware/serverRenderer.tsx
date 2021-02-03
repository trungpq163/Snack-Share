import * as React from 'react';
import * as express from 'express';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { StaticRouter as Router } from 'react-router-dom';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import IntlProvider from '../../shared/i18n/IntlProvider';
import App from '../../shared/App';
import Html from '../components/HTML';

const helmetContext = {};
const routerContext = {};

const serverRenderer: any = () => (
    req: express.Request & { store: Store },
    res: express.Response
) => {
    const sheet = new ServerStyleSheet();
    try {
        const content = renderToString(
            <Provider store={res.locals.store}>
                <Router location={req.url} context={routerContext}>
                    <IntlProvider>
                        <HelmetProvider context={helmetContext}>
                            <StyleSheetManager sheet={sheet.instance}>
                                <App />
                            </StyleSheetManager>
                        </HelmetProvider>
                    </IntlProvider>
                </Router>
            </Provider>
        );

        const state = JSON.stringify(res.locals.store.getState());
        const styleTags = sheet.getStyleTags();

        return res.send(
            '<!doctype html>' +
                renderToString(
                    <Html
                        styledComponents={styleTags}
                        css={[
                            res.locals.assetPath('bundle.css'),
                            res.locals.assetPath('vendor.css'),
                        ]}
                        helmetContext={helmetContext}
                        scripts={[
                            res.locals.assetPath('bundle.js'),
                            res.locals.assetPath('vendor.js'),
                        ]}
                        state={state}
                    >
                        {content}
                    </Html>
                )
        );
    } catch (error) {
        // handle error
        console.error(error);
    } finally {
        sheet.seal();
    }
};

export default serverRenderer;
