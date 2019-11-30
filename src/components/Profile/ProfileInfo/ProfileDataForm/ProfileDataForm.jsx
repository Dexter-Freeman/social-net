import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../../common/FormControls/FormControls';
import { required } from '../../../../utils/validators';
import style from './../../../common/FormControls/FormControl.module.css';

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
    return <form onSubmit={handleSubmit} >
        <div>
            <button type="submit" ><b>Save profile</b></button>
        </div>
        <div>
            <span><b>Name:</b> </span>
            <Field
                placeholder={profile.fullName}
                name='fullName'
                component={Input}
                type='text'
                validate={[required]} />
        </div>
        <div>
            <span><b>About me:</b> </span><span>{profile.aboutMe}</span>
            <Field
                placeholder={profile.aboutMe}
                name='aboutMe'
                component={Textarea}
                type='text' />
        </div>
        <div>
            <div>
                <span><b>Looking for a job:</b> </span>
                <Field
                    name='lookingForAJob'
                    component={Input}
                    type='checkbox' />
            </div>
            <div>
                <span><b>Looking for a job description:</b> </span>
                <span>{profile.lookingForAJobDescription}</span>
                <Field
                    placeholder={profile.lookingForAJobDescription}
                    name='lookingForAJobDescription'
                    component={Textarea}
                    type='text' />
            </div>
        </div>
        {error ?
            <div className={style.formError}>
                <span>{error}</span>
            </div>
            : ''
        }
    </form>
};

export default reduxForm({ form: 'profileDataForm' })(ProfileDataForm);