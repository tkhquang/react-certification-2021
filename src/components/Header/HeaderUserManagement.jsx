import React, { useCallback, useRef, useContext } from 'react';

import { useMenuState, useDialogState } from '../../hooks';
import { auth } from '../../api';
import { UserContext } from '../../contexts';
import { USER } from '../../types';
import { Menu, Modal, ModalTitle, ModalContent, ModalFooter } from '../UI';
import UserAvatar from '../UserAvatar';
import { StyledUsernameInput, StyledPasswordInput } from './HeaderUserManagement.styled';

const Login = ({ closeMenu }) => {
  const { user, dispatch } = useContext(UserContext);
  const dialog = useDialogState();
  const { show, hide } = dialog;
  const formRef = useRef(null);
  const submitButtonRef = useRef(null);

  const onMenuLogin = useCallback(() => {
    show();
    closeMenu();
  }, [show, closeMenu]);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const values = [...formRef.current].reduce((acc, { name, value }) => {
        return {
          ...acc,
          [name]: value,
        };
      }, {});
      try {
        const currentUser = await auth.login({
          username: values.username,
          password: values.password,
        });

        if (currentUser) {
          dispatch({
            type: USER.SET,
            payload: {
              user: currentUser,
            },
          });
        }
        hide();
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch, hide]
  );

  const onLogin = useCallback(() => {
    if (submitButtonRef.current) {
      submitButtonRef.current.click();
    }
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={onMenuLogin}
        style={{
          display: user ? 'none' : 'block',
        }}
      >
        Login
      </button>
      <Modal {...dialog}>
        <ModalTitle {...dialog}>Login</ModalTitle>
        <ModalContent {...dialog}>
          <form noValidate onSubmit={onSubmit} ref={formRef}>
            <StyledUsernameInput
              id="login-username"
              name="username"
              aria-label="Username"
              placeholder="Username"
              required
            />
            <StyledPasswordInput
              id="login-password"
              name="password"
              aria-label="Password"
              placeholder="Password"
              type="password"
              required
            />
            <button
              type="submit"
              style={{
                display: 'none',
              }}
              ref={submitButtonRef}
            >
              Submit
            </button>
          </form>
        </ModalContent>
        <ModalFooter {...dialog}>
          <button type="button" onClick={hide}>
            Cancel
          </button>
          <button type="button" onClick={onLogin}>
            Login
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

const Logout = ({ closeMenu }) => {
  const { user, dispatch } = useContext(UserContext);

  const onLogout = useCallback(() => {
    dispatch({
      type: USER.SET,
      payload: {
        user: null,
      },
    });
    closeMenu();
  }, [closeMenu, dispatch]);

  return (
    <button
      type="button"
      onClick={onLogout}
      style={{
        display: user ? 'block' : 'none',
      }}
    >
      Logout
    </button>
  );
};

export default function HeaderUserManagement() {
  const { user } = useContext(UserContext);
  const referenceElementRef = useRef(null);
  const menu = useMenuState({ referenceElementRef });
  const { show, hide } = menu;

  return (
    <>
      <UserAvatar
        src={user?.avatarUrl}
        name={user?.name}
        onClick={show}
        ref={referenceElementRef}
      />
      <Menu {...menu}>
        <Logout closeMenu={hide} />
        <Login closeMenu={hide} />
      </Menu>
    </>
  );
}
