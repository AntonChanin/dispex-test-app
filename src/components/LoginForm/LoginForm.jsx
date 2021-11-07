import React from 'react';
import { useDispatch } from 'react-redux';
import { profileActions } from '../../store/profile';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const profile = {
      name: form.firstname.value,
      lastname: form.lastname.value
    };
    dispatch(profileActions.setProfile(profile));
  }
  return (
    <form className="form form-login" onSubmit={handleSubmit}>
      <div className="field">
        <input type="text" name="firstname" autoComplete="off" />
      </div>
      <div className="field">
        <input type="text" name="lastname" autoComplete="off" />
      </div>
      <div>
        <button type="submit">OK</button>
      </div>
    </form>
  )
}