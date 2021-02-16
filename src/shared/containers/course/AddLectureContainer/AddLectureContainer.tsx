import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import AddLecture from 'components/course/AddLecture/AddLecture';

import { addLecture, getLecturesById } from 'store/lectures/effects';

interface Props {
    isAuthor: boolean;
    currentUser: object;
    course: any;
}

const AddLectureContainer = ({ course, currentUser, isAuthor }: Props) => {
    const dispatch = useDispatch();

    const [values, setValues] = React.useState({
        title: '',
        videoLink: '',
    });

    const handleChange = (name: any) => (event: any) => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<any>) => {
        e.preventDefault();

        const data = {
            title: values.title,
            videoLink: values.videoLink,
        };

        dispatch(
            addLecture(
                data,
                (err: any) => toast(err),
                (mess: string) => toast(mess),
                () =>
                    setValues({
                        title: '',
                        videoLink: '',
                    }),
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
        />
    );
};

export default AddLectureContainer;
