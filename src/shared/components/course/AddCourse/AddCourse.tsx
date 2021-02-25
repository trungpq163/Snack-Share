import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import InputField from 'components/common/InputField/InputField';
import TextArea from 'components/common/TextAreaField/TextAreaField';
import InputDropdown from 'components/common/InputDropdown/InputDropdown';

interface Props {
    handleSubmit?: any;
    handleChange?: any;
    values?: any;
    options?: any;
    handleChangeFile?: any;
    skillLevelOptions?: any;
    languageOptions?: any;
}

const AddCourse = ({
    handleChange,
    handleSubmit,
    values,
    options,
    handleChangeFile,
    languageOptions,
    skillLevelOptions,
}: Props) => {
    return (
        <div className="block__header">
            <div className="block-title" style={{ textAlign: 'center' }}>
                <h3>Add Course</h3>
            </div>
            <form onSubmit={handleSubmit} className="wrapper" style={{ width: '70%' }}>
                <InputField
                    name="courseName"
                    placeholder="* Course Name"
                    text="* = required fields"
                    onChange={handleChange('courseName')}
                    value={values?.courseName}
                    required={true}
                />
                <InputField
                    name="price"
                    placeholder="usd"
                    inputNumber="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                    text="* Course Price (USD)"
                    type="number"
                    onChange={handleChange('price')}
                    value={values?.price}
                    required={true}
                />
                <InputDropdown
                    options={languageOptions}
                    onChange={handleChange('language')}
                    value={values?.language}
                    info="*Choose language in your course"
                    name="language"
                    required={true}
                />
                <InputDropdown
                    options={skillLevelOptions}
                    onChange={handleChange('skillLevel')}
                    value={values?.skillLevel}
                    info="*Choose skill level (student) to take this course"
                    name="skillLevel"
                    required={true}
                />
                <InputDropdown
                    options={options}
                    onChange={handleChange('category')}
                    value={values?.category}
                    name="category"
                    info="*Choose Category"
                    required={true}
                />
                <TextArea
                    name="courseDescription"
                    text="Description"
                    placeholder="Course Description"
                    onChange={handleChange('courseDescription')}
                    value={values?.courseDescription}
                    required={true}
                />
                <InputField
                    name="image"
                    text="Upload Image"
                    acceptFile="image/*"
                    type="file"
                    onChange={handleChangeFile('image')}
                    required={true}
                />
                <button type="submit" className="btn btn--gradient">
                    Submit
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddCourse;
