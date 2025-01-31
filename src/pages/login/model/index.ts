import {
  createEvent,
  createEffect,
  createStore,
  sample,
  forward,
} from 'effector-root';
import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';
import { AxiosError } from 'axios';
import * as user from 'shared/user';
import { api } from 'api';
import { Form, Errors } from './types';

export const formSubmitted = createEvent<React.FormEvent>();
formSubmitted.watch((e) => e.preventDefault());

export const signInFx = createEffect<Form, user.types.User, AxiosError>(
  ({ email, password }) =>
    api
      .post('users/login', {
        user: { email, password },
      })
      .then(({ data }) => data.user),
);

export const FormGate = createGate();

export const form = createForm({
  fields: {
    email: {
      init: '' as Form['email'],
    },
    password: {
      init: '' as Form['password'],
    },
  },
});

// submit form
sample({
  source: form.$values,
  clock: formSubmitted,
  target: signInFx,
});

// reset form
forward({
  from: FormGate.close,
  to: form.reset,
});

user.model.$user.on(signInFx.doneData, (_, payload) => payload);

export const $error = createStore<Errors>({
  errors: {},
})
  .on(signInFx.failData, (_, error) => error.response?.data)
  .reset(form.$values, FormGate.close);
