import React from 'react';
import LanguageButton from 'components/layout/LanguageButton/LanguageButton';
import Introduction from '../../../components/layout/Introduction/Introduction';
import Partners from '../../../components/layout/Partners/Partners';
import CourseOne from '../../../components/common/CourseOne/CourseOne';

const App: React.FC<any> = () => {
    return (
        <React.Fragment>
            <Introduction />
            <CourseOne />
            <Partners />
            <LanguageButton />
        </React.Fragment>
    );
};

export default App;
