import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../../common/FormControls/FormControls';
import { required } from '../../../../utils/validators';
import style from './../../../common/FormControls/FormControl.module.css';

const ProfileDataForm = ({ handleSubmit, error, initialValues }) => {
    return <form onSubmit={handleSubmit} >
        <div>
            <button type="submit" ><b>Save profile</b></button>
        </div>
        {error ?
            <div className={style.formError}>
                <span>{error}</span>
            </div>
            : ''
        }
        <div>
            <span><b>Name:</b> </span>
            <Field
                // placeholder={profile.fullName}
                name='fullName'
                component={Input}
                type='text'
                validate={[required]} />
        </div>
        <div>
            <span><b>About me:</b> </span>
            <Field
                // placeholder={profile.aboutMe}
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
                <Field
                    // placeholder={profile.lookingForAJobDescription}
                    name='lookingForAJobDescription'
                    component={Textarea}
                    type='text' />
            </div>
        </div>
        <div>
            <span>Contacts: </span>{Object.keys(initialValues.contacts).map(key => {
                return <div key={key}>
                    <span><b>{key}: </b></span>
                    <Field
                        // placeholder={key}
                        name={`contacts.${key}`}
                        component={Input}
                        type='text' />
                </div>

            })}
        </div>
    </form>
};

export default reduxForm({ form: 'profileDataForm' })(ProfileDataForm);