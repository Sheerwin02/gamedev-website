# Hana Studio Website

## Table of Contents

- [Getting Started](#getting-started)
  - [File Upload Component](#file-upload-component)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Hana Studio Website

Welcome to the Hana Studio website! This is a website of a long-term project - Project Hana by Gan Sheer Win, Ng Zhi Yao, Lee Khoon Fang, Goh Song Jing, Bryan Yeoh and Tan Yong Sheng.

#### File Upload Component

The file upload component is used for uploading resumes in the recruitment section. By default, the upload functionality is temporarily disabled, and a message is displayed indicating that the feature is currently unavailable.

##### How to Enable Upload Functionality

1. Open the `FileUploadComponent.tsx` file located in the `src/components/file` directory.

2. Locate the `isDisabled` state variable at the beginning of the component:

   ```tsx
   const [isDisabled, setIsDisabled] = useState(true);
