import React, {useState, ChangeEvent, FormEvent} from "react";
import styles from "./SignUpPopup.module.css";

interface SignUpProps {
    handleSignUp: (formData: any) => void;
    onClose: () => void;
}

const SignUpPopup: React.FC<SignUpProps> = ({handleSignUp, onClose}) => {
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        referralCode: "",
        agreeToTOS: false,
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const target = e.target as HTMLInputElement;
        const {name, value, type, checked} = target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSignUp(formData);
    };

    return (
        <div className={styles.modal}>
            <div className={styles["modal-content"]}>
                <button className={styles["close-button"]} onClick={onClose}>
                    Close
                </button>
                <form
                    onSubmit={handleSubmit}
                    className={styles["signUpForm"]}
                >
                    <h2 className="text-white font-semibold text-24px">Sign Up</h2>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        className="input-field"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="input-field"
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="input-field"
                    />
                    <input
                        type="text"
                        name="referralCode"
                        placeholder="Referral Code (optional)"
                        value={formData.referralCode}
                        onChange={handleChange}
                        className="input-field"
                    />
                    <label className="flex items-center text-white">
                        <input
                            type="checkbox"
                            name="agreeToTOS"
                            checked={formData.agreeToTOS}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        I agree to the Terms of Service
                    </label>
                    <button
                        type="submit"
                        className="flex justify-center items-center p-10px 18px flex-shrink-0 bg-primary-400 rounded-lg"
                    >
                        Sign Up
                    </button>
                    <p className="text-white">
                        Already have an account?{" "}
                        <button
                            onClick={onClose}
                            className="border rounded-lg border-primary-400 bg-primary-400"
                        >
                            X
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUpPopup;
