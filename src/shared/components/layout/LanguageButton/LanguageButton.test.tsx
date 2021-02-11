import * as React from 'react';
import { shallow } from 'enzyme';

import LanguageButton from './LanguageButton';

describe('LanguageButton', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<LanguageButton {...defaultProps} />);
    });
});
