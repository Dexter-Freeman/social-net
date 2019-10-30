import React from 'react';
import style from './FormControl.module.css';

const Textarea = ({input, meta, ...props}) => {   // Создаем свои инпуты, которые будем передвать в redux-form
    const hasError = meta.touched && meta.error;
    return <div className={`${style.formControl} ${hasError ? style.error : ''}`}>
       <div>
            <textarea {...input} {...props} />
        </div>
        <div>
            {hasError && <span>{meta.error}</span>}
        </div>  
        {/* Логическое И (&&) "спотыкается" на false. Если левая часть истина, а вторая нет, то И вернет вторую часть */}
    </div>
};

const Input = ({input, meta, ...props}) => {   // Создаем свои инпуты, которые будем передвать в redux-form
    const hasError = meta.touched && meta.error;
    return <div className={`${style.formControl} ${hasError ? style.error : ''}`}>
       <div>
            <input {...input} {...props} />
        </div>
        <div>
            {hasError && <span>{meta.error}</span>}
        </div>  
        {/* Логическое И (&&) "спотыкается" на false. Если левая часть истина, а вторая нет, то И вернет вторую часть */}
    </div>
};

const Checkbox = ({input, meta, ...props}) => {   // Создаем свои инпуты, которые будем передвать в redux-form
    const hasError = meta.touched && meta.error;
    return <div className={`${style.formControl} ${hasError ? style.error : ''}`}>
       <div>
            <input {...input} {...props} />
        </div>
        <div>
            {hasError && <span>{meta.error}</span>}
        </div>  
        {/* Логическое И (&&) "спотыкается" на false. Если левая часть истина, а вторая нет, то И вернет вторую часть */}
    </div>
};

export { Textarea, Input, Checkbox };