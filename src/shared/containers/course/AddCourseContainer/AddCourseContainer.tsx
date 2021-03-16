import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import Resizer from 'react-image-file-resizer';

import { useHistory } from 'react-router-dom';
import { toastErrorNotify, toastSuccessNotify, toastEmojiNotify } from '../../../utils/toast';
import { addCourse } from '../../../store/course/effects';

import AddCourse from '../../../components/course/AddCourse/AddCourse';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';

interface Props {
    category?: any[];
    loading?: boolean;
}

const AddCourseContainer = ({ category, loading }: Props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const pathName = location?.pathname || '';
    const pathNameHandle = pathName.split('/addcourse/').join('');

    const [values, setValues] = React.useState({
        courseName: '',
        price: '',
        skillLevel: '',
        language: '',
        courseDescription: '',
        image: '',
        category: '',
    });

    const options = category?.map((x) => ({
        label: x?.categoryName || '',
        value: x?._id || '',
    }));

    // @ts-ignore
    const finaleOptions = options?.unshift({
        label: '* Select category',
        value: '',
    });

    const languageOptions = [
        {
            label: '*Select language',
            value: '',
        },
        {
            label: 'English',
            value: 'english',
        },
        {
            label: 'VietNamese',
            value: 'vietnamese',
        },
    ];

    const skillLevelOptions = [
        {
            label: '*Select skill level',
            value: '',
        },
        {
            label: 'Advanced',
            value: 'advanced',
        },
        {
            label: 'Basic',
            value: 'basic',
        },
        {
            label: 'Newbie',
            value: 'newbie',
        },
    ];

    const handleChange = (name: any) => (event: any) => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    const handleChangeFile = (name: string) => (e: any) => {
        setValues({
            ...values,
            [name]: e.target.files[0],
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (values.category === '') {
            toastEmojiNotify('You not choose category of course', '❗');
        }

        if (values.image === '') {
            toastEmojiNotify('You must upload course image', '❗');
        }

        if (values.language === '') {
            toastEmojiNotify('You not choose language', '❗');
        }

        if (values.skillLevel === '') {
            toastEmojiNotify('You not choose skill level(student) to take this course', '❗');
        }

        if (
            values.image !== '' &&
            values.category !== '' &&
            values.skillLevel !== '' &&
            values.language !== ''
        ) {
            Resizer.imageFileResizer(values.image as any, 720, 720, 'jpeg', 100, 0, (uri) => {
                const courseData = {
                    courseName: values.courseName,
                    price: Number(values.price),
                    skillLevel: values.skillLevel,
                    language: values.language,
                    courseDescription: values.courseDescription,
                    image: uri,
                    instructor: pathNameHandle,
                    category: values.category,
                };

                dispatch(
                    addCourse(
                        courseData,
                        (err: any) => toastErrorNotify(err),
                        (mess: string) => toastSuccessNotify(mess),
                        () =>
                            setValues({
                                courseName: '',
                                price: '',
                                skillLevel: '',
                                language: '',
                                courseDescription: '',
                                image: '',
                                category: '',
                            }),
                        () => history.push('/my-courses')
                    )
                );
            });
        }
    };

    return (
        <>
            {loading ? (
                <CircleLoader />
            ) : (
                <AddCourse
                    handleSubmit={handleSubmit}
                    values={values}
                    handleChange={handleChange}
                    handleChangeFile={handleChangeFile}
                    options={options}
                    skillLevelOptions={skillLevelOptions}
                    languageOptions={languageOptions}
                />
            )}
        </>
    );
};

export default AddCourseContainer;
