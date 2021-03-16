// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import LanguageButton from './LanguageButton';
configure({ adapter: new Adapter() });
describe('LanguageButton', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<LanguageButton {...defaultProps} />);
    });
});
