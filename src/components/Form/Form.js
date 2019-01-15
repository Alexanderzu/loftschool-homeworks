import React, {Component} from 'react';
import img from './assets/bond_approve.jpg';
import style from './Form.css';

const data = {
    firstName: {
      value:'james',
      error: 'Имя указано не верно',
      errorEmpty: 'Нужно указать имя'
    }, 
    lastName: {
      value:'bond',
      error: 'Фамилия указана не верно',
      errorEmpty: 'Нужно указать фамилию'
    }, 
    password: {
      value:'007',
      error: 'Пароль указан не верно',
      errorEmpty: 'Нужно указать пароль'
    }, 
};

export default class Form extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            password: "",
        };
    }

    onHandleClick = () => {

    }

    onInput = (e) => {
        this.setState({
            firstname: e.target.firstname,
            lastname: e.target.lastname,
            password: e.target.password,
        })
    }

    render() {
        return (
            <div className="app-container">
                <form className="form"><h1>Введите свои данные, агент</h1>
                    <p className="field">
                        <label className="field__label" for="firstname">
                        <span className="field-label">Имя</span>
                        </label>
                        <input className="field__input field-input t-input-firstname" type="text" name="firstname" 
                        value={this.firstname}
                        onChange={this.onInput}
                        />
                        <span className="field__error field-error t-error-firstname"></span>
                    </p>
                    <p className="field">
                        <label className="field__label" for="lastname">
                        <span className="field-label">Фамилия</span>
                        </label>
                        <input className="field__input field-input t-input-lastname" type="text" name="lastname" 
                        value={this.lastname}
                        onChange={this.onInput}
                        />
                        <span className="field__error field-error t-error-lastname"></span>
                    </p>
                    <p className="field">
                        <label className="field__label" for="password">
                        <span className="field-label">Пароль</span>
                        </label>
                        <input class="field__input field-input t-input-password" type="password" name="password" 
                        value={this.password}
                        onChange={this.onInput}
                        />
                        <span class="field__error field-error t-error-password"></span>
                    </p>
                    <div class="form__buttons">
                        <input type="submit" class="button t-submit" value="Проверить" 
                            onClick={this.onHandleClick}
                        />
                    </div>
                </form>
            </div>
        )
    }

}