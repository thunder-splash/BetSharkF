import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./signuppopup.module.css";
import Image from "next/image";

interface SignUpProps {
  handleSignUp: (formData: any) => void;
  onClose: () => void;
  showLogin?: boolean;
}

const SignUpPopup: React.FC<SignUpProps> = ({
  handleSignUp,
  onClose,
  showLogin,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    referralCode: "",
    agreeToTOS: false,
  });

  const [isLogin, setIsLogin] = useState(showLogin);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSignUp(formData);
  };

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleSignUpClick = () => {
    setIsLogin(false);
  };

  return (
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        {isLogin ? (
          <form onSubmit={handleSubmit} className={styles["signUpForm"]}>
            <div className={styles.headerContainer}>
              <h1 className={styles.header}>Log in</h1>
              <button className={styles["close-button"]} onClick={onClose}>
                <Image src="/x.svg" alt="Close" width={24} height={24} />
              </button>
            </div>
            <div className={styles.inputLabel}>Email</div>
            <div className={styles.inputField}>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
              />
            </div>
            <div className={styles.inputLabel}>Password</div>
            <div className={`${styles.inputField} ${styles.iconRight}`}>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
              />
              <Image
                width={20}
                height={20}
                src="/eye.svg"
                alt="eye-icon"
                className={`${styles.inputEye}`}
              />
            </div>
            <button type="submit" className={styles.signUpButton}>
              Sign Up
            </button>
            <div className={styles.question_content}>
              <p>
                You don`t have an account?{" "}
                <span
                  onClick={handleSignUpClick}
                  style={{ cursor: "pointer", color: "#5271FF" }}
                >
                  Sign up
                </span>
              </p>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className={styles["signUpForm"]}>
            <div className={styles.headerContainer}>
              <h1 className={styles.header}>Sign Up</h1>
              <button className={styles["close-button"]} onClick={onClose}>
                <Image src="/x.svg" alt="Close" width={24} height={24} />
              </button>
            </div>
            <div className={styles.inputLabel}>Email</div>
            <div className={styles.inputField}>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
              />
            </div>
            <div className={styles.inputLabel}>Username</div>
            <div className={styles.inputField}>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter a username"
              />
            </div>
            <div className={styles.inputLabel}>Password</div>
            <div className={`${styles.inputField} ${styles.iconRight}`}>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
              />
              <Image
                width={20}
                height={20}
                src="/eye.svg"
                alt="eye-icon"
                className={`${styles.inputEye}`}
              />
            </div>
            <div className={styles.inputLabel}>Confirm Password</div>
            <div className={`${styles.inputField} ${styles.iconRight}`}>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
              />
              <Image
                width={20}
                height={20}
                src="/eye.svg"
                alt="eye-icon"
                className={`${styles.inputEye}`}
              />
            </div>
            <div className={styles.inputLabel}>Referral Code (optional)</div>
            <div className={styles.inputField}>
              <input
                type="text"
                name="referralCode"
                value={formData.referralCode}
                onChange={handleChange}
              />
            </div>
            <div className={styles.checkboxField}>
              <input
                type="checkbox"
                id="agreeToTOS"
                name="agreeToTOS"
                checked={formData.agreeToTOS}
                onChange={handleChange}
              />
              <label htmlFor="agreeToTOS">
                By registering, I accept the terms of use and undertake to
                comply with them.
              </label>
            </div>

            <button type="submit" className={styles.signUpButton}>
              Sign Up
            </button>
            <div className={styles.question_content}>
              <p>
                Already have an account?{" "}
                <span
                  onClick={handleLoginClick}
                  style={{ cursor: "pointer", color: "#5271FF" }}
                >
                  Log in
                </span>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUpPopup;
