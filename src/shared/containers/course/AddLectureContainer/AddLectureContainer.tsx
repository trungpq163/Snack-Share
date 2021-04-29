import * as React from 'react';

import { useDispatch } from 'react-redux';
import { toastErrorNotify, toastSuccessNotify } from '../../../utils/toast';
import AddLecture from '../../../components/course/AddLecture/AddLecture';

import { addLecture, getLecturesById } from '../../../store/lectures/effects';

interface Props {
    isAuthor: boolean;
    currentUser: object;
    course: any;
}

const AddLectureContainer = ({ course, currentUser /*isAuthor*/ }: Props) => {
    const dispatch = useDispatch();

    const [values, setValues] = React.useState({
        title: '',
        videoLink: '',
    });

    const [loading, setLoading] = React.useState(false);

    const handleChange = (name: any) => (event: any) => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<any>) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            title: values.title,
            videoLink: values.videoLink,
            course: course._id,
        };

        dispatch(
            addLecture(
                data,
                (err: any) => toastErrorNotify(err),
                (mess: string) => toastSuccessNotify(mess),
                () => {
                    setValues({
                        title: '',
                        videoLink: '',
                    });
                    setLoading(false);
                },
                () => dispatch(getLecturesById(course?._id))
            )
        );
    };

    return (
        <AddLecture
            handleSubmit={handleSubmit}
            values={values}
            handleChange={handleChange}
            course={course}
            currentUser={currentUser}
            loading={loading}
        />
    );
};

export default AddLectureContainer;
