import React from "react";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  placeholder: string;
};

export default function PasswordInput({
  value,
  onChange,
  showPassword,
  setShowPassword,
  placeholder,
}: Props) {
  return (
    <label className="label">
      Password
      <div className="passwordWrap">
        <input
          className="input"
          type={showPassword ? "text" : "password"}
          name="password"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />

        <button
          type="button"
          className="eyeBtn"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      </div>
    </label>
  );
}
