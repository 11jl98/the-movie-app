export interface RegisterViewPropsInterface {
    fetchRegister: () => Promise<void>;
    handleChangeEmail: (value: string) => void;
    handleChangePassword: (value: string) => void;
    handleChangeConfirmedPassword: (value: string) => void;
    email: string;
    password: string;
    confirmedPassword: string;
  }