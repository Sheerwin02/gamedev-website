export const validateForm = (name: string, phoneNumber: string, email: string, password: string, confirmPassword: string) => {
    const errors: { [key: string]: string } = {};
  
    if (!name.trim()) {
      errors.name = "Name is required";
    }
  
    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(phoneNumber)) {
      errors.phoneNumber = "Invalid phone number format. Please enter a valid 10-digit number";
    }
  
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email format";
    }
  
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)) {
      errors.password = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    }
  
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
  
    return errors;
  };
  
  export const calculatePasswordStrength = (password: string) => {
    const lengthRegex = /^.{8,}$/;
    const capitalRegex = /[A-Z]/;
    const digitRegex = /\d/;
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
  
    let strength = 0;
  
    if (lengthRegex.test(password)) {
      strength += 0.25;
    }
  
    if (capitalRegex.test(password)) {
      strength += 0.25;
    }
  
    if (digitRegex.test(password)) {
      strength += 0.25;
    }
  
    if (symbolRegex.test(password)) {
      strength += 0.25;
    }
  
    if (
      lengthRegex.test(password) &&
      capitalRegex.test(password) &&
      digitRegex.test(password) &&
      symbolRegex.test(password)
    ) {
      strength += 0.25;
    }
  
    // Ensure strength is capped at 1
    strength = Math.min(strength, 1);
  
    return strength;
  };
  