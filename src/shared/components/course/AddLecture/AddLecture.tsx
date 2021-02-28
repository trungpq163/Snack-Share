import * as React from 'react';

import InputField from 'components/common/InputField/InputField';

const AddLecture = ({ handleSubmit, handleChange, values, course, currentUser }: any) => {
    return (
        <div className="block__header">
            <div className="block-title" style={{ textAlign: 'center' }}>
                <h3>{course?.courseName}</h3>
            </div>
            <form onSubmit={handleSubmit} className="wrapper" style={{ width: '70%' }}>
                <InputField
                    name="title"
                    placeholder="*Lesson Title"
                    text="*=required"
                    onChange={handleChange('title')}
                    value={values.title}
                    required
                />
                <InputField
                    name="videoLink"
                    placeholder="*ex: https://www.youtube.com/embed/ahCwqrYpIuM"
                    text="Add Embed Youtube Video URL"
                    onChange={handleChange('videoLink')}
                    value={values.videoLink}
                    required
                />
                <button type="submit" className="btn btn--gradient">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddLecture;
