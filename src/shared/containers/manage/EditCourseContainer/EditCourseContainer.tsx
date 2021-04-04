import * as React from 'react';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import Resizer from 'react-image-file-resizer';
import { useHistory } from 'react-router-dom';
import { toastErrorNotify, toastSuccessNotify, toastEmojiNotify } from '../../../utils/toast';
import { updateCourseById } from '../../../store/course/effects';

import isEmpty from '../../../validation/isEmpty';
import setData from '../../../utils/setData';

import EditCourse from '../../../components/manage/EditCourse/EditCourse';

interface Props {
    pathname?: string;
    course: any;
    category: any;
}

const EditCourseContainer = ({ course, pathname, category }: Props) => {
    const dispatch = useDispatch();
    const [decoded, setDecoded] = React.useState(undefined);
    const history = useHistory();

    const [values, setValues] = React.useState({
        courseName: '',
        price: '',
        skillLevel: '',
        language: '',
        courseDescription: '',
        image: '',
        category: '',
    });

    React.useEffect(() => {
        if (localStorage.jwtToken) {
            setDecoded(jwtDecode(localStorage.getItem('jwtToken') as string));
        }
    }, []);

    React.useEffect(() => {
        const courseName = !isEmpty(course?.courseName) ? course?.courseName : '';
        const price = !isEmpty(course?.price) ? course?.price : '';
        const skillLevel = !isEmpty(course?.skillLevel) ? course?.skillLevel : '';
        const language = !isEmpty(course?.language) ? course?.language : '';
        const courseDescription = !isEmpty(course?.courseDescription)
            ? course?.courseDescription
            : '';
        const image = !isEmpty(course?.image) ? course?.image : '';
        const category = !isEmpty(course?.category) ? course?.category : '';

        setValues({
            ...values,
            courseName,
            price,
            skillLevel,
            language,
            courseDescription,
            image,
            category,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [course]);

    const options = category?.map((x: any) => ({
        label: x?.categoryName || '',
        value: x?._id || '',
    }));

    if (values.category === '') {
        // eslint-disable-next-line prefer-const
        options.unshift({
            label: '* Select category',
            value: '',
        });
    }

    // @ts-ignore
    if (values.category.categoryName !== '') {
        options
            .filter(
                // @ts-ignore
                (option: any, _index: number) => option.value !== values.category._id
            )
            .unshift({
                // @ts-ignore
                label: values?.category?.categoryName,
                // @ts-ignore
                value: values?.category?._id,
            });
    }

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
                    instructor: course.instructor._id,
                    category: values.category,
                };

                dispatch(
                    updateCourseById(
                        pathname as string,
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
                        () => history.push('/my-courses'),
                        () => setData(dispatch, decoded)
                    )
                );
            });
        }
    };

    return (
        <EditCourse
            values={values}
            handleChange={handleChange}
            handleChangeFile={handleChangeFile}
            options={options}
            skillLevelOptions={skillLevelOptions}
            languageOptions={languageOptions}
            handleSubmit={handleSubmit}
        />
    );
};

export default EditCourseContainer;
